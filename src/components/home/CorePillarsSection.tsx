import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { HomepagePillar } from "@/payload-types";

const defaults = {
	sectionHeading: "How We Deliver Results",
	sectionSubheading:
		"A consulting firm that builds products. A product built from consulting expertise. Three ways we help enterprise engineering teams ship better software, faster.",
	sectionLabel: "How We Deliver",
	pillars: [
		{
			icon: "hub",
			title: "SpecKit Platform",
			description:
				"A spec-driven development platform that turns requirements into executable specifications, bridging the gap between what your teams plan and what they deliver.",
			capabilities: [
				"Spec-Driven Development",
				"Executable Requirements",
				"SDLC Optimization",
			],
		},
		{
			icon: "rocket_launch",
			title: "Enterprise Enablement",
			description:
				"AHA deploys SpecKit inside your organization to transform how teams build software. Proven at AWS scale, our enablement programs accelerate delivery and reduce rework across distributed teams.",
			capabilities: [
				"At-Scale Transformation",
				"Team Enablement",
				"Process Modernization",
			],
		},
		{
			icon: "strategy",
			title: "Strategic Advisory",
			description:
				"Hands-on CTO advisory for engineering leaders navigating AI adoption, delivery bottlenecks, and organizational change. We assess readiness and chart a path forward.",
			capabilities: [
				"CTO Advisory",
				"AI Readiness Assessment",
				"Delivery Health Check",
			],
		},
	],
};

export default function CorePillarsSection({
	pillarsData,
}: {
	pillarsData?: HomepagePillar;
}) {
	const data = pillarsData || defaults;
	const pillars = (data.pillars || defaults.pillars).map((p) => ({
		...p,
		capabilities: Array.isArray(p.capabilities)
			? p.capabilities.map((c) => (typeof c === "string" ? c : c.label))
			: [],
	}));
	return (
		<section className='py-24 bg-surface-low opacity-100' id='services'>
			<div className='max-w-[1280px] mx-auto px-6 md:px-12'>
				<AnimateOnScroll>
					<div className='mb-16 max-w-2xl'>
						<p className='ea-label mb-3 text-primary'>
							{data.sectionLabel || defaults.sectionLabel}
						</p>
						<h2 className='text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface mb-4'>
							{data.sectionHeading || defaults.sectionHeading}
						</h2>
						<p className='text-on-surface-variant'>
							{data.sectionSubheading || defaults.sectionSubheading}
						</p>
					</div>
				</AnimateOnScroll>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{pillars.map(
						(
							pillar: {
								icon: string;
								title: string;
								description: string;
								capabilities: string[];
							},
							i: number,
						) => (
							<AnimateOnScroll key={pillar.title} delay={i * 150}>
								<div className='group rounded-2xl bg-surface-lowest p-8 shadow-ambient hover:shadow-raised transition-shadow duration-300'>
									<span className='material-symbols-outlined text-3xl text-primary mb-6 block'>
										{pillar.icon}
									</span>
									<h3 className='text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors'>
										{pillar.title}
									</h3>
									<p className='text-on-surface-variant text-sm leading-relaxed mb-8'>
										{pillar.description}
									</p>
									<ul className='space-y-3'>
										{pillar.capabilities.map((cap: string) => (
											<li
												key={cap}
												className='flex items-center gap-3 text-xs font-bold uppercase tracking-[0.08em] text-tertiary'
											>
												<span className='w-3 h-[1.5px] bg-primary rounded-full' />
												{cap}
											</li>
										))}
									</ul>
								</div>
							</AnimateOnScroll>
						),
					)}
				</div>
			</div>
		</section>
	);
}
