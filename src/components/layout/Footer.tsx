import Link from "next/link";
import Image from "next/image";

const footerSections = [
	{
		title: "Capabilities",
		links: [
			{ label: "Software Consulting", href: "/services" },
			{ label: "DevOps Architecture", href: "/services" },
			{ label: "Strategic Advisory", href: "/services" },
		],
	},
	{
		title: "Navigation",
		links: [
			{ label: "Insights", href: "/blog" },
			{ label: "Events", href: "/events" },
			{ label: "About", href: "/about" },
		],
	},
	{
		title: "Connect",
		links: [
			{ label: "Newsletter", href: "/contact" },
			{ label: "Privacy Policy", href: "#" },
			{ label: "Security Architecture", href: "#" },
		],
	},
];

export function Footer() {
	return (
		<footer className='bg-surface-high'>
			<div className='mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4 md:px-12'>
				<div>
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/assets/logo-mark-traced.svg"
							alt="AHA Software"
							width={36}
							height={36}
						/>
						<span className='text-lg font-bold text-primary'>AHA Software</span>
					</Link>
					<p className='mt-3 text-sm leading-relaxed text-tertiary max-w-xs'>
						Architectural alignment for the modern enterprise. We build the
						systems that build the future.
					</p>
				</div>
				{footerSections.map((section) => (
					<div key={section.title}>
						<p className='text-[10px] font-bold uppercase tracking-[0.1em] text-primary'>
							{section.title}
						</p>
						<nav className='mt-4 flex flex-col gap-3'>
							{section.links.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className='text-sm text-tertiary hover:text-primary hover:translate-x-1 transition-all'
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				))}
			</div>
			<div className='mx-auto max-w-[1280px] px-6 pb-10 pt-8 md:px-12'>
				<p className='text-[10px] uppercase tracking-[0.1em] text-tertiary/60'>
					&copy; {new Date().getFullYear()} AHA Software. Precision
					Structuralism in Digital Engineering.
				</p>
			</div>
		</footer>
	);
}
