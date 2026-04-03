import Image from "next/image";
import { figma } from "./figmaAssets";

export default function BorealCtaConservatory() {
	return (
		<section className='relative min-h-[400px] overflow-hidden py-24'>
			<div className='absolute inset-0'>
				<Image
					src={figma.ctaTexture}
					alt=''
					fill
					className='object-cover object-center'
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-primary/85' />
			</div>
			<div className='relative z-10 mx-auto flex min-h-[400px] max-w-[720px] flex-col items-center justify-center px-8 py-12 text-center'>
				<p className='ea-label mb-4 text-primary-container'>The Conservatory</p>
				<h2 className='text-3xl font-bold tracking-[-0.02em] text-on-primary md:text-4xl'>
					Step into the frost
				</h2>
				<p className='mt-6 text-base leading-relaxed text-on-primary/90'>
					Adopt the Boreal patterns in your product — glassmorphism, tonal
					depth, and asymmetry that never shouts.
				</p>
				<div className='mt-10 flex flex-wrap justify-center gap-4'>
					<button
						type='button'
						className='rounded-full bg-on-primary px-8 py-3 text-sm font-semibold text-primary'
					>
						Start building
					</button>
					<button
						type='button'
						className='rounded-full border border-on-primary/40 px-8 py-3 text-sm font-semibold text-on-primary'
					>
						Read principles
					</button>
				</div>
			</div>
		</section>
	);
}
