import Image from "next/image";
import { figma } from "./figmaAssets";

export default function BorealPhilosophySection() {
	return (
		<section className='bg-surface py-24'>
			<div className='mx-auto grid max-w-[1280px] items-center gap-16 px-8 md:grid-cols-12'>
				<div className='relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-7'>
					<Image
						src={figma.philosophyInterior}
						alt=''
						fill
						className='object-cover'
						sizes='(max-width:768px) 100vw, 60vw'
					/>
					<div className='absolute bottom-6 left-6 right-6 rounded-2xl bg-white/75 p-6 shadow-ambient-lg backdrop-blur-md dark:bg-surface-lowest/75'>
						<p className='ea-label mb-2 text-primary'>Philosophy</p>
						<p className='text-lg font-semibold leading-snug text-on-surface'>
							Light refracts through intention — every surface answers to
							clarity.
						</p>
					</div>
				</div>
				<div className='md:col-span-5'>
					<p className='ea-label mb-4 text-primary'>The Ethereal Core</p>
					<h2 className='text-3xl font-bold tracking-[-0.02em] text-primary md:text-4xl'>
						Designed for Silence
					</h2>
					<p className='mt-6 text-base leading-relaxed text-on-surface-variant'>
						Boreal Breeze strips away noise. Typography floats; imagery anchors.
						We favor asymmetry that feels inevitable — never arbitrary.
					</p>
					<div className='mt-10 overflow-hidden rounded-2xl'>
						<Image
							src={figma.philosophyAccent}
							alt=''
							width={480}
							height={280}
							className='h-auto w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
