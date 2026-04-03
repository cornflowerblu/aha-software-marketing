"use client";

import {
	useEffect,
	useRef,
	useState,
	useCallback,
	type ReactNode,
} from "react";
import { navSections } from "../tokens";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

interface StyleguideShellProps {
	children: ReactNode;
}

export default function StyleguideShell({ children }: StyleguideShellProps) {
	const [activeSection, setActiveSection] = useState<string>(navSections[0].id);
	const [isDark, setIsDark] = useState(false);
	const observerRef = useRef<IntersectionObserver | null>(null);

	// Read theme preference from localStorage on mount
	useEffect(() => {
		const stored = localStorage.getItem("ea-theme");
		if (stored === "dark") setIsDark(true);
	}, []);

	const toggleTheme = useCallback(() => {
		setIsDark((prev) => {
			const next = !prev;
			localStorage.setItem("ea-theme", next ? "dark" : "light");
			return next;
		});
	}, []);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				}
			},
			{ rootMargin: "-20% 0px -70% 0px" },
		);

		const observer = observerRef.current;

		for (const section of navSections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, []);

	const scrollToSection = useCallback((id: string) => {
		const el = document.getElementById(id);
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - 80;
			window.scrollTo({ top, behavior: "smooth" });
		}
	}, []);

	return (
		<div className={isDark ? "dark" : ""}>
			<div className="bg-background text-on-surface min-h-screen transition-colors duration-300">
				<TopBar isDark={isDark} onToggleTheme={toggleTheme} />
				<div className="max-w-[1280px] mx-auto pt-[88px] flex gap-8 px-8">
					<Sidebar active={activeSection} onNav={scrollToSection} />
					<main className="flex flex-1 min-w-0 flex-col gap-16 pb-24">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
}
