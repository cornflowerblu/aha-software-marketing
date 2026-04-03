import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Boreal — Figma layouts | Styleguide",
	description:
		"Four Figma frames from the AHA Design System, implemented with Ethereal Atrium tokens.",
};

const demos = [
	{
		href: "/styleguide/boreal/gallery",
		title: "Component Gallery",
		body: "Doc shell: sidebar, sticky search bar, hero banner, actions, inputs, cards, inline CTA, and FAB.",
		tag: "33:3",
	},
	{
		href: "/styleguide/boreal/parallax",
		title: "Parallax landing",
		body: "Marketing page: forest hero, philosophy split, curated bento, teal CTA, minimal footer.",
		tag: "33:238",
	},
	{
		href: "/styleguide/boreal/feature-showcase",
		title: "Feature showcase",
		body: "Asymmetric hero with glass quote card, fluidity bento, toolkit grid, split footer.",
		tag: "33:364",
	},
	{
		href: "/styleguide/boreal/animated-showcase",
		title: "Animated showcase",
		body: "Same structure as the feature showcase with ethereal blob motion in the background.",
		tag: "33:563",
	},
] as const;

export default function BorealHubPage() {
	return (
		<div className='mx-auto max-w-[960px] px-8 py-16'>
			<p className='ea-label mb-3 text-primary'>Figma — AHA Design System</p>
			<h1 className='text-3xl font-bold tracking-[-0.02em] text-on-surface md:text-4xl'>
				Boreal demos
			</h1>
			<p className='mt-4 max-w-2xl text-on-surface-variant'>
				Reference implementations of four frames, using shared components in{" "}
				<code className='rounded bg-surface-high px-1.5 py-0.5 text-[0.8125rem] text-primary'>
					styleguide/components/boreal
				</code>
				. Images live under{" "}
				<code className='rounded bg-surface-high px-1.5 py-0.5 text-[0.8125rem]'>
					public/styleguide/boreal
				</code>{" "}
				and are referenced from{" "}
				<code className='rounded bg-surface-high px-1.5 py-0.5 text-[0.8125rem] text-primary'>
					figmaAssets.ts
				</code>
				.
			</p>
			<Link
				href='/styleguide'
				className='mt-8 inline-block text-sm font-semibold text-primary hover:underline'
			>
				← Back to styleguide
			</Link>

			<ul className='mt-12 grid gap-6 sm:grid-cols-2'>
				{demos.map((d) => (
					<li key={d.href}>
						<Link
							href={d.href}
							className='block h-full rounded-2xl border border-outline-variant/60 bg-surface-lowest p-6 shadow-ambient transition-shadow hover:shadow-ambient-lg'
						>
							<span className='text-[0.625rem] font-bold uppercase tracking-[0.12em] text-tertiary'>
								Node {d.tag}
							</span>
							<h2 className='mt-2 text-lg font-bold text-on-surface'>
								{d.title}
							</h2>
							<p className='mt-2 text-sm leading-relaxed text-on-surface-variant'>
								{d.body}
							</p>
							<span className='mt-4 inline-block text-sm font-semibold text-primary'>
								Open →
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
