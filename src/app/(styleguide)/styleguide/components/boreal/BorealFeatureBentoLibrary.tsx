import BorealImageTile from "./BorealImageTile";
import BorealSectionIntro from "./BorealSectionIntro";
import { figma } from "./figmaAssets";

const tiles = [
	{
		title: "Glass panels",
		body: "Backdrop blur with tonal tints — no hard borders.",
		image: figma.bentoFrost,
		span: "md:col-span-7",
		minH: "min-h-[300px]",
	},
	{
		title: "Hero imagery",
		body: "Full-bleed photography with gradient scrims.",
		image: figma.needlesMacro,
		span: "md:col-span-5",
		minH: "min-h-[300px]",
	},
	{
		title: "Editorial cards",
		body: "Asymmetric grids with ambient shadow only.",
		image: figma.cardForest,
		span: "md:col-span-12",
		minH: "min-h-[260px]",
	},
] as const;

export default function BorealFeatureBentoLibrary() {
	return (
		<section className='relative z-10 bg-surface-low py-24'>
			<div className='mx-auto max-w-[1280px] px-8'>
				<BorealSectionIntro
					label='Library of Fluidity'
					title='Patterns you can recombine'
				/>
				<div className='grid gap-6 md:grid-cols-12'>
					{tiles.map((t, i) => (
						<BorealImageTile
							key={t.title}
							title={t.title}
							body={t.body}
							image={t.image}
							span={t.span}
							minH={t.minH}
							priority={i === 0}
							dataReveal
							dataHover
						/>
					))}
				</div>
			</div>
		</section>
	);
}
