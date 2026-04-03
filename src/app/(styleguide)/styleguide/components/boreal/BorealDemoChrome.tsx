"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import ThemeToggleIcon from "../ThemeToggleIcon";
import { useEtherealTheme } from "../useEtherealTheme";

export default function BorealDemoChrome({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle?: string;
	children: ReactNode;
}) {
	const { isDark, toggleTheme } = useEtherealTheme();

	return (
		<div className={isDark ? "dark" : ""}>
			<div className='bg-background text-on-surface min-h-screen transition-colors duration-300'>
				<header className='fixed left-0 right-0 top-0 z-[200] border-b border-outline-variant/40 bg-surface-lowest/90 backdrop-blur-md'>
					<div className='mx-auto flex h-12 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8'>
						<div className='flex min-w-0 items-center gap-3'>
							<Link
								href='/styleguide'
								className='shrink-0 text-[0.8125rem] font-medium text-primary hover:underline'
							>
								← Styleguide
							</Link>
							<span className='hidden h-4 w-px bg-outline-variant sm:block' />
							<div className='min-w-0'>
								<p className='truncate text-[0.8125rem] font-semibold text-on-surface'>
									{title}
								</p>
								{subtitle ? (
									<p className='truncate text-[0.6875rem] text-on-surface-variant'>
										{subtitle}
									</p>
								) : null}
							</div>
						</div>
						<button
							type='button'
							onClick={toggleTheme}
							className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-high'
							aria-label={isDark ? "Light mode" : "Dark mode"}
						>
							<ThemeToggleIcon isDark={isDark} />
						</button>
					</div>
				</header>
				{children}
			</div>
		</div>
	);
}
