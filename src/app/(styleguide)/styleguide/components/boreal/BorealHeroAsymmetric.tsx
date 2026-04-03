import Image from "next/image";
import { figma } from "./figmaAssets";
import BorealGlassQuoteCard from "./BorealGlassQuoteCard";

export default function BorealHeroAsymmetric() {
	return (
		<section className='relative bg-surface pt-28'>
			<div className='mx-auto grid max-w-[1280px] gap-12 px-8 pb-16 md:grid-cols-12 md:items-center'>
				<div className='md:col-span-7' data-boreal-reveal>
					<p className='ea-label mb-4 text-primary'>Feature spotlight</p>
					<h1 className='text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-on-surface md:text-5xl lg:text-6xl'>
						Library of
						<br />
						<span className='text-primary'>Fluidity</span>
					</h1>
					<p className='mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant'>
						Components that respect silence — glass, gradient soul, and
						intentional asymmetry for editorial interfaces.
					</p>
					<div className='mt-10 flex flex-wrap gap-4'>
						<button
							type='button'
							className='rounded-full ea-gradient px-8 py-3 text-sm font-semibold text-on-primary shadow-raised'
						>
							Browse kit
						</button>
						<button
							type='button'
							className='rounded-full border border-outline-variant bg-surface-lowest px-8 py-3 text-sm font-semibold text-primary'
						>
							View tokens
						</button>
					</div>
				</div>
				<div
					className='relative pb-28 md:col-span-5 md:pb-0'
					data-boreal-reveal
				>
					<div
						className='relative aspect-[4/5] overflow-hidden rounded-3xl shadow-ambient-lg'
						data-boreal-hover
					>
						<Image
							src={figma.glassHero}
							alt=''
							fill
							className='object-cover'
							sizes='(max-width:768px) 100vw, 40vw'
							priority
						/>
					</div>
					<BorealGlassQuoteCard
						quote={['"Design is the silence"', 'between the notes."']}
						attribution='— Digital Conservatory'
					/>
				</div>
			</div>
		</section>
	);
}
