"use client";

import { useEffect, useState } from "react";
import { scrollToElementById } from "./scrollToElementById";
import ThemeToggleIcon from "./ThemeToggleIcon";

const quickLinks = [
	{ label: "Colors", id: "colors" },
	{ label: "Typography", id: "typography" },
	{ label: "Buttons", id: "buttons" },
] as const;

interface TopBarProps {
	isDark: boolean;
	onToggleTheme: () => void;
}

export default function TopBar({ isDark, onToggleTheme }: TopBarProps) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
				scrolled
					? "bg-background/82 backdrop-blur-[16px] shadow-ambient"
					: "bg-background/60 backdrop-blur-[16px]"
			}`}
		>
			<div className='max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between'>
				{/* Logo block */}
				<div className='flex items-center gap-3'>
					<div className='w-8 h-8 rounded-[9px] ea-gradient' />
					<div className='flex flex-col'>
						<span className='text-sm font-bold tracking-[-0.01em] text-on-surface leading-tight'>
							Ethereal Atrium
						</span>
						<span className='text-[0.6875rem] font-medium text-on-surface-variant leading-tight'>
							Design System
						</span>
					</div>
				</div>

				{/* Right side: quick nav + export button */}
				<div className='flex items-center gap-2'>
					{quickLinks.map((link) => (
						<button
							key={link.id}
							type='button'
							onClick={() => scrollToElementById(link.id)}
							className='px-3 py-1.5 text-[0.8125rem] font-medium text-on-surface-variant rounded-full hover:bg-surface-high transition-colors'
						>
							{link.label}
						</button>
					))}
					<button
						type='button'
						onClick={onToggleTheme}
						className='ml-1 w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-high transition-colors'
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
					>
						<ThemeToggleIcon isDark={isDark} />
					</button>
				</div>
			</div>
		</header>
	);
}
