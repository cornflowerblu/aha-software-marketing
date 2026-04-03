import Image from "next/image";
import { figma } from "./figmaAssets";

const items = [
	{ label: "Overview", icon: figma.gallery.navOverview, active: true },
	{ label: "Elements", icon: figma.gallery.navElements, active: false },
	{ label: "Layouts", icon: figma.gallery.navLayouts, active: false },
	{ label: "Animations", icon: figma.gallery.navAnimations, active: false },
	{ label: "Settings", icon: figma.gallery.navSettings, active: false },
] as const;

const footerItems = [
	{ label: "Help", icon: figma.gallery.help },
	{ label: "Log out", icon: figma.gallery.logout },
] as const;

function ItemIcon({ src }: { src: string }) {
	return (
		<span className='relative h-5 w-5 shrink-0'>
			<Image src={src} alt='' fill className='object-contain' />
		</span>
	);
}

export default function BorealDocSidebar() {
	return (
		<aside className='hidden w-[220px] shrink-0 flex-col border-r border-outline-variant/50 bg-surface-lowest/80 py-6 backdrop-blur-md lg:flex'>
			<div className='flex items-center gap-2 px-5 pb-6'>
				<div className='relative h-8 w-8 shrink-0'>
					<Image
						src={figma.gallery.logoMark}
						alt=''
						fill
						className='object-contain'
					/>
				</div>
				<span className='text-sm font-bold text-on-surface'>Boreal DS</span>
			</div>
			<nav
				className='flex flex-1 flex-col gap-0.5 px-3'
				aria-label='Documentation'
			>
				{items.map((item) => (
					<button
						key={item.label}
						type='button'
						className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.8125rem] transition-colors ${
							item.active
								? "bg-primary/10 font-semibold text-primary"
								: "font-medium text-on-surface-variant hover:bg-surface-high/60"
						}`}
					>
						<ItemIcon src={item.icon} />
						{item.label}
					</button>
				))}
			</nav>
			<div className='mt-auto space-y-1 border-t border-outline-variant/40 px-3 pt-4'>
				{footerItems.map((item) => (
					<button
						key={item.label}
						type='button'
						className='flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[0.8125rem] text-on-surface-variant hover:bg-surface-high/60'
					>
						<ItemIcon src={item.icon} />
						{item.label}
					</button>
				))}
			</div>
		</aside>
	);
}
