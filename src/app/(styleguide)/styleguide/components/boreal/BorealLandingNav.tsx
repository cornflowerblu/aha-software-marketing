import Link from "next/link";

const links = [
	{ href: "/styleguide/boreal/parallax", label: "Showcase", key: "showcase" },
	{
		href: "/styleguide/boreal/feature-showcase",
		label: "Features",
		key: "features",
	},
	{
		href: "/styleguide/boreal/animated-showcase",
		label: "Library",
		key: "library",
	},
	{ href: "#", label: "About", key: "about" },
] as const;

export default function BorealLandingNav({
	active,
	underStyleguideChrome = false,
}: {
	active: "showcase" | "features" | "library" | "about";
	/** When true, sits below the fixed styleguide demo bar (h-12). */
	underStyleguideChrome?: boolean;
}) {
	return (
		<header
			className={`fixed left-0 right-0 z-[90] backdrop-blur-[12px] bg-surface-lowest/70 shadow-ambient-lg ${
				underStyleguideChrome ? "top-12" : "top-0"
			}`}
		>
			<div className='mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4'>
				<Link
					href='/styleguide/boreal'
					className='text-xl font-bold text-primary'
				>
					Boreal Breeze
				</Link>
				<nav className='flex items-center gap-8' aria-label='Primary'>
					{links.map((l) => {
						const isActive = active === l.key;
						return (
							<Link
								key={l.key}
								href={l.href}
								className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${
									isActive
										? "border-b-2 border-primary pb-0.5 text-primary"
										: "text-secondary"
								}`}
							>
								{l.label}
							</Link>
						);
					})}
				</nav>
				<Link
					href='/styleguide/boreal/gallery'
					className='rounded-full bg-primary px-6 py-2 text-sm font-semibold text-on-primary'
				>
					Get Started
				</Link>
			</div>
		</header>
	);
}
