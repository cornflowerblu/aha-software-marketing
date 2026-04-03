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
	const observerRef = useRef<IntersectionObserver | null>(null);

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
		<>
			<TopBar />
			<div className='max-w-[1280px] mx-auto pt-[88px] flex gap-8 px-8'>
				<Sidebar active={activeSection} onNav={scrollToSection} />
				<main className='flex flex-1 min-w-0 flex-col gap-16 pb-24'>
					{children}
				</main>
			</div>
		</>
	);
}
