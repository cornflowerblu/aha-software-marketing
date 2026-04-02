import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HeroSection() {
	return (
		<header className='relative pt-16 pb-24 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden'>
			<div className='absolute inset-0 editorial-grid opacity-20 pointer-events-none' />

			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
				<AnimateOnScroll className='lg:col-span-12' animation='fade-up'>
					<span className='inline-block px-4 py-1.5 bg-surface-container-high text-primary text-[11px] uppercase tracking-[0.25em] font-extrabold mb-6 rounded-full'>
						Engineering Enablement
					</span>
					<h1 className='font-headline text-5xl md:text-7xl lg:text-8xl font-medium text-on-background leading-[0.95] tracking-tighter mb-8'>
						Engineering Enablement for the{" "}
						<span className='italic font-light text-primary'>Age of AI.</span>
					</h1>
					<p className='font-body text-lg md:text-xl text-on-background/70 max-w-2xl leading-relaxed mb-10'>
						AHA Software is a consulting firm that builds products. Our
						SpecKit platform turns requirements into executable
						specifications&mdash;helping enterprise engineering teams
						eliminate rework and ship with confidence. Built enablement
						programs for AWS consulting partners at scale.
					</p>
					<div className='flex flex-col sm:flex-row gap-4'>
						<Button variant='primary' size='md' href='/services'>
							Explore Our Services
						</Button>
						<Button variant='outline' size='md' href='/contact'>
							Schedule a Consultation
						</Button>
					</div>
				</AnimateOnScroll>
			</div>
		</header>
	);
}
