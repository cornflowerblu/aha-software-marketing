"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { figma } from "./figmaAssets";

export default function BorealParallaxHero() {
	const mediaLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const mediaLayer = mediaLayerRef.current;
		const contentLayer = contentLayerRef.current;
		if (!mediaLayer || !contentLayer) return;

		let rafId = 0;
		let currentOffset = 0;
		let targetOffset = 0;

		const setTargetOffset = () => {
			targetOffset = Math.min(window.scrollY * 0.24, 160);
		};

		const animate = () => {
			currentOffset += (targetOffset - currentOffset) * 0.08;
			const mediaOffset = currentOffset.toFixed(2);
			const contentOffset = (currentOffset * -0.32).toFixed(2);
			mediaLayer.style.setProperty(
				"--boreal-parallax-media",
				`${mediaOffset}px`,
			);
			contentLayer.style.setProperty(
				"--boreal-parallax-content",
				`${contentOffset}px`,
			);
			rafId = window.requestAnimationFrame(animate);
		};

		setTargetOffset();
		rafId = window.requestAnimationFrame(animate);
		window.addEventListener("scroll", setTargetOffset, { passive: true });
		window.addEventListener("resize", setTargetOffset);

		return () => {
			window.cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", setTargetOffset);
			window.removeEventListener("resize", setTargetOffset);
		};
	}, []);

	return (
		<section className='relative h-[min(92vh,720px)] w-full overflow-hidden'>
			<div
				ref={mediaLayerRef}
				className='absolute inset-0 will-change-transform [transform:translate3d(0,var(--boreal-parallax-media,0px),0)]'
			>
				<Image
					src={figma.heroForest}
					alt=''
					fill
					className='object-cover object-[center_30%] scale-[1.06]'
					sizes='100vw'
					priority
				/>
			</div>
			<div className='absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent' />
			<div
				ref={contentLayerRef}
				className='absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center will-change-transform [transform:translate3d(0,var(--boreal-parallax-content,0px),0)]'
			>
				<p className='ea-label mb-3 text-primary-container/90'>
					01 — Digital Conservatory
				</p>
				<h1 className='max-w-[20ch] text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl'>
					Fluidity in the Frost
				</h1>
				<p className='mt-6 max-w-xl text-base leading-relaxed text-white/85'>
					Where design breathes like the winter wind. A serene, fluid interface
					for the modern curator.
				</p>
				<div className='mt-10 flex flex-wrap gap-4'>
					<button
						type='button'
						className='rounded-full bg-primary px-8 py-3 text-sm font-semibold text-on-primary shadow-raised'
					>
						Explore Collection
					</button>
					<button
						type='button'
						className='rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm'
					>
						View Documentation
					</button>
				</div>
			</div>
		</section>
	);
}
