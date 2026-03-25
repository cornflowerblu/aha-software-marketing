"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLogger } from "next-axiom";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
	return (
		<Suspense>
			<RegisterForm />
		</Suspense>
	);
}

function RegisterForm() {
	const log = useLogger();
	const searchParams = useSearchParams();
	const plan = searchParams.get("plan");
	const [error, setError] = useState("");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError("");
		const form = new FormData(e.currentTarget);
		const name = form.get("name") as string;
		const email = form.get("email") as string;
		const password = form.get("password") as string;

		log.info("registration_attempt", {
			plan: plan === "full-access" ? "full-access" : "default",
		});

		try {
			const res = await fetch("/api/users", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password }),
			});

			if (res.ok) {
				// Auto-login
				const loginRes = await fetch("/api/users/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				});
				if (loginRes.ok) {
					const redirectTo = plan ? "/premium#pricing" : "/premium";
					log.info("registration_success", {
						plan: plan === "full-access" ? "full-access" : "default",
						redirectTo,
					});
					window.location.href = redirectTo;
				} else {
					log.warn("registration_login_after_signup_failed", {
						status: loginRes.status,
					});
					setError("Account created but sign-in failed. Try logging in.");
				}
			} else {
				const data = await res.json();
				log.warn("registration_api_error", { status: res.status });
				setError(
					data?.errors?.[0]?.message || "Registration failed. Try again.",
				);
			}
		} catch {
			log.error("registration_network_error", {});
			setError("Something went wrong. Please try again.");
		}
	}

	return (
		<div className='min-h-[70vh] flex items-center justify-center px-6 py-20'>
			<div className='w-full max-w-md'>
				<div className='text-center mb-12'>
					<h1 className='font-headline text-5xl font-bold tracking-tighter text-on-surface mb-4'>
						{plan === "full-access"
							? "Start Full Access"
							: "Join the Community"}
					</h1>
					<p className='font-body text-on-surface-variant'>
						{plan === "full-access"
							? "Create your account and unlock the entire knowledge base."
							: "Create an account to access community content and events."}
					</p>
				</div>

				<div className='bg-surface-container-lowest p-10 shadow-ambient ghost-border'>
					<form onSubmit={handleSubmit} className='space-y-8'>
						<Input
							label='Full Name'
							name='name'
							type='text'
							placeholder='Julianne Smith'
							required
						/>
						<Input
							label='Email'
							name='email'
							type='email'
							placeholder='you@company.com'
							required
						/>
						<Input
							label='Password'
							name='password'
							type='password'
							placeholder='Create a password'
							required
						/>

						{error && <p className='text-error text-sm font-body'>{error}</p>}

						<Button type='submit' variant='primary' className='w-full py-4'>
							Create Account
						</Button>
					</form>

					<p className='mt-8 text-center text-sm text-on-surface-variant font-body'>
						Already have an account?{" "}
						<Link
							href='/login'
							className='text-primary font-bold hover:underline'
						>
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
