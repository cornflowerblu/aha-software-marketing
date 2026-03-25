"use client";

import { useState } from "react";
import Link from "next/link";
import { useLogger } from "next-axiom";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
	const log = useLogger();
	const [error, setError] = useState("");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError("");
		const form = new FormData(e.currentTarget);
		const email = form.get("email") as string;
		const password = form.get("password") as string;

		log.info("login_attempt", {});

		try {
			const res = await fetch("/api/users/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			if (res.ok) {
				log.info("login_success", { redirectTo: "/premium" });
				window.location.href = "/premium";
			} else {
				log.warn("login_failed", { status: res.status });
				setError("Invalid email or password.");
			}
		} catch (err) {
			const errorObj = err instanceof Error ? err : new Error(String(err));
			log.error("login_network_error", {
				errorMessage: errorObj.message,
				errorStack: errorObj.stack,
			});
			setError("Something went wrong. Please try again.");
		}
	}

	return (
		<div className='min-h-[70vh] flex items-center justify-center px-6 py-20'>
			<div className='w-full max-w-md'>
				<div className='text-center mb-12'>
					<h1 className='font-headline text-5xl font-bold tracking-tighter text-on-surface mb-4'>
						Welcome Back
					</h1>
					<p className='font-body text-on-surface-variant'>
						Sign in to access your premium content.
					</p>
				</div>

				<div className='bg-surface-container-lowest p-10 shadow-ambient ghost-border'>
					<form onSubmit={handleSubmit} className='space-y-8'>
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
							placeholder='Enter your password'
							required
						/>

						{error && <p className='text-error text-sm font-body'>{error}</p>}

						<Button type='submit' variant='primary' className='w-full py-4'>
							Sign In
						</Button>
					</form>

					<p className='mt-8 text-center text-sm text-on-surface-variant font-body'>
						Don&apos;t have an account?{" "}
						<Link
							href='/register'
							className='text-primary font-bold hover:underline'
						>
							Create one
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
