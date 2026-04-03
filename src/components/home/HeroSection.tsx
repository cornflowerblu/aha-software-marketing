import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { HomepageHero } from "@/payload-types";

const defaults = {
	badgeLabel: "Engineering Enablement",
	headline: "Engineering Enablement for the Age of AI.",
	subheadline:
		"AHA Software is a consulting firm that builds products. Our SpecKit platform turns requirements into executable specifications — helping enterprise engineering teams eliminate rework and ship with confidence. Built enablement programs for AWS consulting partners at scale.",
	primaryCta: { text: "Explore Our Services", link: "/services" },
	secondaryCta: { text: "Schedule a Consultation", link: "/contact" },
};

export default function HeroSection({ hero }: { hero?: HomepageHero }) {
	const badgeLabel = hero?.badgeLabel || defaults.badgeLabel;
	const headline = hero?.headline || defaults.headline;
	const subheadline = hero?.subheadline || defaults.subheadline;
	const primaryCta = {
		text: hero?.primaryCta?.text || defaults.primaryCta.text,
		link: hero?.primaryCta?.link || defaults.primaryCta.link,
	};
	const secondaryCta = {
		text: hero?.secondaryCta?.text || defaults.secondaryCta.text,
		link: hero?.secondaryCta?.link || defaults.secondaryCta.link,
	};

	return (
		<header className='relative pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 overflow-hidden'>
			{/* Hero background image */}
			<Image
				src='/assets/lightbulb.jpeg'
				alt=''
				fill
				className='object-cover object-center'
				priority
			/>
			{/* Dark overlay for text readability */}
			<div className='absolute inset-0 bg-gradient-to-r from-[#0a1a1b]/90 via-[#0a1a1b]/70 to-transparent' />
			<div className='relative max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center'>
				<AnimateOnScroll className='md:col-span-7' animation='fade-up'>
					<p className='ea-label mb-4 text-primary-container'>{badgeLabel}</p>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] text-white mb-6'>
						{(() => {
							const idx = headline.indexOf("Age of AI");
							if (idx === -1) return headline;
							const before = headline.slice(0, idx);
							const after = headline.slice(idx + "Age of AI".length);
							return (
								<>
									{before}
									<span className='text-primary-container'>Age of AI</span>
									{after}
								</>
							);
						})()}
					</h1>
					<p className='text-lg text-white/70 max-w-xl leading-relaxed mb-10'>
						{subheadline}
					</p>
					<div className='flex flex-col sm:flex-row gap-4'>
						<Button variant='primary' size='md' href={primaryCta.link}>
							{primaryCta.text}
						</Button>
						<Button variant='outline' size='md' href={secondaryCta.link}>
							{secondaryCta.text}
						</Button>
					</div>
				</AnimateOnScroll>

				{hero?.quote?.text && (
					<AnimateOnScroll
						className='md:col-span-5'
						animation='fade-up'
						delay={200}
					>
						<div className='rounded-2xl bg-surface-lowest/10 backdrop-blur-md p-8 shadow-ambient'>
							<p className='text-lg leading-relaxed text-white/80'>
								&ldquo;{hero.quote.text}&rdquo;
							</p>
							{hero.quote.attribution && (
								<footer className='mt-4 ea-label text-primary-container'>
									{hero.quote.attribution}
								</footer>
							)}
						</div>
					</AnimateOnScroll>
				)}
			</div>
		</header>
	);
}
