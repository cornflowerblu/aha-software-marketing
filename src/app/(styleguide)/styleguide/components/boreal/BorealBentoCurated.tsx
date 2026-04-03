import BorealImageTile from "./BorealImageTile";
import BorealSectionIntro from "./BorealSectionIntro";
import { figma } from "./figmaAssets";

const cards = [
	{
		title: "Frosted Glass",
		body: "Translucent layers stack without hard lines — the no-line rule in practice.",
		image: figma.bentoFrost,
		span: "md:col-span-5",
		minH: "min-h-[380px]",
	},
	{
		title: "Editorial Rhythm",
		body: "Long-form layouts breathe with 7/5 splits and generous vertical rhythm.",
		image: figma.bentoEditorial,
		span: "md:col-span-7",
		minH: "min-h-[380px]",
	},
] as const;

export default function BorealBentoCurated() {
	return (
		<section className='bg-surface-low py-24'>
			<div className='mx-auto max-w-[1280px] px-8'>
				<BorealSectionIntro
					label='Curated Precision'
					title='A bento of intent'
					description={
						<>
							Each tile is a vignette: hero imagery, editorial copy, and tonal
							surfaces working together.
						</>
					}
					className='mb-14 max-w-2xl'
				/>
				<div className='grid gap-6 md:grid-cols-12'>
					{cards.map((c) => (
						<BorealImageTile
							key={c.title}
							title={c.title}
							body={c.body}
							image={c.image}
							span={c.span}
							minH={c.minH}
							titleClassName='text-xl font-bold text-white'
							bodyClassName='mt-2 max-w-md text-sm leading-relaxed text-white/85'
							imageClassName='object-cover transition-transform duration-500 group-hover:scale-[1.02]'
							scrimClassName='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'
							enableHoverZoom
						/>
					))}
				</div>
			</div>
		</section>
	);
}
