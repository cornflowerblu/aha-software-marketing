import Image from "next/image";
import { figma } from "./figmaAssets";

const tiles = [
	{ label: "Layers", icon: figma.toolkit.icons[0] },
	{ label: "Motion", icon: figma.toolkit.icons[1] },
	{ label: "Typography", icon: figma.toolkit.icons[2] },
	{ label: "Color", icon: figma.toolkit.icons[3] },
	{ label: "Elevation", icon: figma.toolkit.icons[4] },
	{ label: "Accessibility", icon: figma.toolkit.icons[5] },
] as const;

export default function BorealToolkitGrid() {
	return (
		<section className='relative z-10 bg-surface py-24'>
			<div className='mx-auto max-w-[1280px] px-8'>
				<div className='mb-12 flex flex-wrap items-end justify-between gap-6'>
					<div>
						<p className='ea-label mb-3 text-primary'>Atomistic elements</p>
						<h2 className='text-3xl font-bold tracking-[-0.02em] text-on-surface md:text-4xl'>
							Toolkit grid
						</h2>
					</div>
					<p className='max-w-md text-sm text-on-surface-variant'>
						Six primitives — each tile is a doorway into the same Ethereal
						Atrium vocabulary.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
					{tiles.map((tile) => (
						<div
							key={tile.label}
							className='flex flex-col items-center rounded-2xl bg-surface-lowest p-6 shadow-ambient'
							data-boreal-reveal
							data-boreal-hover
						>
							<div className='relative mb-4 h-14 w-14'>
								<Image
									src={tile.icon}
									alt=''
									fill
									className='object-contain'
									sizes='56px'
								/>
							</div>
							<p className='text-center text-xs font-bold uppercase tracking-[0.08em] text-on-surface'>
								{tile.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
