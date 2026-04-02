import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const defaults = {
	badgeLabel: 'Engineering Enablement',
	headline: 'Engineering Enablement for the Age of AI.',
	subheadline:
		'AHA Software is a consulting firm that builds products. Our SpecKit platform turns requirements into executable specifications — helping enterprise engineering teams eliminate rework and ship with confidence. Built enablement programs for AWS consulting partners at scale.',
	primaryCta: { text: 'Explore Our Services', link: '/services' },
	secondaryCta: { text: 'Schedule a Consultation', link: '/contact' },
}

export default function HeroSection({ hero }: { hero?: any }) {
	const badgeLabel = hero?.badgeLabel || defaults.badgeLabel
	const headline = hero?.headline || defaults.headline
	const subheadline = hero?.subheadline || defaults.subheadline
	const primaryCta = {
		text: hero?.primaryCta?.text || defaults.primaryCta.text,
		link: hero?.primaryCta?.link || defaults.primaryCta.link,
	}
	const secondaryCta = {
		text: hero?.secondaryCta?.text || defaults.secondaryCta.text,
		link: hero?.secondaryCta?.link || defaults.secondaryCta.link,
	}

	return (
		<header className='relative pt-16 pb-24 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden'>
			<div className='absolute inset-0 editorial-grid opacity-20 pointer-events-none' />

			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
				<AnimateOnScroll className='lg:col-span-12' animation='fade-up'>
					<span className='inline-block px-4 py-1.5 bg-surface-container-high text-primary text-[11px] uppercase tracking-[0.25em] font-extrabold mb-6 rounded-full'>
						{badgeLabel}
					</span>
					<h1 className='font-headline text-5xl md:text-7xl lg:text-8xl font-medium text-on-background leading-[0.95] tracking-tighter mb-8'>
						{headline.includes('Age of AI') ? (
							<>
								{headline.split('Age of AI')[0]}
								<span className='italic font-light text-primary'>Age of AI.</span>
							</>
						) : (
							headline
						)}
					</h1>
					<p className='font-body text-lg md:text-xl text-on-background/70 max-w-2xl leading-relaxed mb-10'>
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
					<AnimateOnScroll className='lg:col-span-12' animation='fade-up'>
						<blockquote className='border-l-2 border-primary pl-6 max-w-2xl'>
							<p className='font-headline italic text-lg text-on-background/80 leading-relaxed'>
								&ldquo;{hero.quote.text}&rdquo;
							</p>
							{hero.quote.attribution && (
								<footer className='mt-3 font-label text-xs uppercase tracking-[0.2em] text-outline'>
									{hero.quote.attribution}
								</footer>
							)}
						</blockquote>
					</AnimateOnScroll>
				)}
			</div>
		</header>
	);
}
