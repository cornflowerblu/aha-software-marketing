"use client";

import { navSections } from "../tokens";

interface SidebarProps {
	active: string;
	onNav: (id: string) => void;
}

export default function Sidebar({ active, onNav }: SidebarProps) {
	return (
		<aside className="w-[220px] flex-shrink-0 sticky top-[80px] self-start">
			<nav className="bg-surface-low/70 backdrop-blur-[16px] rounded-[1.25rem] p-[1.25rem_0.875rem] shadow-ambient">
				<p className="text-[0.5625rem] font-bold tracking-[0.12em] uppercase text-tertiary px-3 mb-2.5">
					Sections
				</p>
				<ul className="flex flex-col gap-0.5">
					{navSections.map((section) => {
						const isActive = active === section.id;
						return (
							<li key={section.id}>
								<button
									type="button"
									onClick={() => onNav(section.id)}
									className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-[0.625rem] text-[0.8125rem] transition-colors text-left ${
										isActive
											? "font-bold text-primary bg-primary/[0.09]"
											: "font-normal text-on-surface-variant hover:bg-surface-high/50"
									}`}
								>
									<span
										className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
											isActive ? "bg-primary" : "bg-surface-highest"
										}`}
									/>
									{section.label}
								</button>
							</li>
						);
					})}
				</ul>
			</nav>

			{/* Version badge */}
			<div className="mt-4 bg-primary/[0.06] rounded-xl p-[0.875rem_0.75rem]">
				<p className="text-[0.75rem] font-semibold text-on-surface">
					Ethereal Atrium v1.0
				</p>
				<p className="text-[0.625rem] text-on-surface-variant mt-0.5">
					Plus Jakarta Sans · Material Tokens · Tailwind v4
				</p>
			</div>
		</aside>
	);
}
