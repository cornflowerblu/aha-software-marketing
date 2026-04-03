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
				<div className='text-center mb-10'>
					<h1 className='text-3xl font-bold tracking-[-0.02em] text-on-surface mb-3'>
						Welcome Back
					</h1>
					<p className='text-on-surface-variant'>
						Sign in to access your premium content.
					</p>
				</div>

				<div className='rounded-2xl bg-surface-lowest p-8 shadow-ambient-lg'>
					<form onSubmit={handleSubmit} className='space-y-6'>
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

						{error && <p className='text-error text-sm'>{error}</p>}

						<Button type='submit' variant='primary' className='w-full' size='lg'>
							Sign In
						</Button>
					</form>

					<p className='mt-6 text-center text-sm text-on-surface-variant'>
						Don&apos;t have an account?{" "}
						<Link
							href='/register'
							className='text-primary font-semibold hover:underline'
						>
							Create one
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
