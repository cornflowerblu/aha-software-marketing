import Link from "next/link";

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
			{ label: "Editorial", href: "/blog" },
			{ label: "Insights", href: "/blog" },
			{ label: "Sitemap", href: "#" },
		],
	},
	{
		title: "Connect",
		links: [
			{ label: "Newsletter", href: "/contact" },
			{ label: "Privacy Policy", href: "#" },
			{ label: "Security Architecture", href: "#", highlight: true },
		],
	},
];

export function Footer() {
	return (
		<footer className='bg-[--color-surface-container] border-t border-[--color-outline-variant]/10'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-20 max-w-[1440px] mx-auto'>
				<div className='flex flex-col gap-6'>
					<div className='font-headline text-3xl text-[--color-on-background] tracking-tighter font-bold'>
						AHA Software
					</div>
					<p className='font-body text-sm tracking-wide text-[--color-on-background]/60 leading-relaxed max-w-xs'>
						Architectural alignment for the modern enterprise. We build the
						systems that build the future with precision structuralism.
					</p>
				</div>
				{footerSections.map((section) => (
					<div key={section.title} className='flex flex-col gap-6'>
						<h4 className='font-label text-sm tracking-wide uppercase text-[--color-primary] font-bold'>
							{section.title}
						</h4>
						<nav className='flex flex-col gap-4'>
							{section.links.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className={`hover:opacity-100 hover:translate-x-1 transition-all font-body text-sm uppercase ${
										(link as { highlight?: boolean }).highlight
											? "text-[--color-primary] font-bold opacity-100"
											: "text-[--color-on-background] opacity-60"
									}`}
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				))}
			</div>
			<div className='px-6 md:px-12 pb-10 border-t border-[--color-outline-variant]/10 pt-8 max-w-[1440px] mx-auto'>
				<p className='text-[--color-on-background]/40 font-label text-[10px] tracking-[0.2em] uppercase'>
					&copy; {new Date().getFullYear()} AHA Software. Precision
					Structuralism in Digital Engineering.
				</p>
			</div>
		</footer>
	);
}
