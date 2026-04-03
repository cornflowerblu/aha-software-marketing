import Link from "next/link";
import SectionHeader from "../components/SectionHeader";

const tags = [
	"Plus Jakarta Sans",
	"Material Design Tokens",
	"Tonal Layering",
	"No-Line Rule",
	"Glassmorphism",
];

const principles = [
	{
		icon: "↗",
		title: "Intentional Asymmetry",
		body: "Layouts favor 7/5 and 8/4 column splits over symmetric 6/6 grids, creating visual tension and editorial sophistication.",
	},
	{
		icon: "◈",
		title: "Tonal Depth",
		body: "Five surface tiers stack to create hierarchy without borders. Background shifts alone define containment and grouping.",
	},
	{
		icon: "⊘",
		title: "The No-Line Rule",
		body: "Borders are prohibited for sectioning or containment. Boundaries emerge from tonal layering, shadow, and spacing.",
	},
	{
		icon: "⌀",
		title: "Airy Spacing",
		body: "Generous whitespace between elements gives components room to breathe. Density is never the goal — clarity is.",
	},
	{
		icon: "⬡",
		title: "Round Eight",
		body: "The base radius of 8px carries through the system. Larger containers use 16px and 24px multiples for consistency.",
	},
	{
		icon: "◐",
		title: "Gradient Soul",
		body: "The primary-to-dim gradient at 135° is the system's signature. It anchors CTAs, hero moments, and branded surfaces.",
	},
];

export default function OverviewSection() {
	return (
		<section id='overview' className='space-y-16'>
			{/* Hero Banner */}
			<div className='relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-primary-dim to-secondary p-14'>
				{/* Decorative blur orbs */}
				<div className='absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary-container/20 blur-[50px]' />
				<div className='absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-tertiary/25 blur-[50px]' />

				<div className='relative z-10 max-w-2xl'>
					<p className='mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-primary-container'>
						01 — Design System
					</p>
					<h1 className='mb-5 text-[3.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-white'>
						The Ethereal Atrium
					</h1>
					<p className='mb-8 text-base leading-relaxed text-white/75'>
						A cool-toned, teal-primary design system built on tonal layering,
						glassmorphism, and editorial precision. Every surface, shadow, and
						spacing decision follows the Digital Conservatory philosophy — where
						light, depth, and restraint create sophisticated interfaces.
					</p>

					{/* Tags */}
					<div className='flex flex-wrap gap-2'>
						{tags.map((tag) => (
							<span
								key={tag}
								className='rounded-full border border-primary-container/20 bg-primary-container/12 px-3 py-1 text-[0.6875rem] font-semibold text-primary-container'
							>
								{tag}
							</span>
						))}
					</div>

					<div className='mt-10 rounded-2xl border border-primary-container/25 bg-primary-container/10 p-6'>
						<p className='text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-primary/90'>
							Figma layouts
						</p>
						<p className='mt-2 text-sm leading-relaxed text-on-primary'>
							Four Boreal frames from the AHA Design System (gallery, parallax,
							and showcases) live as reference pages under{" "}
							<Link
								href='/styleguide/boreal'
								className='font-semibold underline underline-offset-2 hover:text-on-primary/90'
							>
								/styleguide/boreal
							</Link>
							.
						</p>
					</div>
				</div>
			</div>

			{/* Core Principles */}
			<div>
				<SectionHeader
					label='Principles'
					title='Core Design Principles'
					description='Six foundational rules that govern every decision in the Ethereal Atrium system.'
				/>

				<div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4'>
					{principles.map((p) => (
						<div
							key={p.title}
							className='rounded-xl bg-surface-lowest p-6 shadow-ambient'
						>
							<div className='mb-3 text-2xl text-primary'>{p.icon}</div>
							<h3 className='mb-2 text-sm font-bold text-on-surface'>
								{p.title}
							</h3>
							<p className='text-[0.8125rem] leading-relaxed text-on-surface-variant'>
								{p.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
