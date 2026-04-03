import SectionHeader from "../components/SectionHeader";
import { typography } from "../tokens";

const specimens = [
	{
		name: "Display LG",
		sample: "Ethereal Atrium",
		...typography.display.lg,
	},
	{
		name: "Headline LG",
		sample: "Tonal Depth & Hierarchy",
		...typography.headline.lg,
	},
	{
		name: "Body LG",
		sample:
			"Every surface, shadow, and spacing decision follows the Digital Conservatory philosophy — where light, depth, and restraint create sophisticated interfaces.",
		...typography.body.lg,
	},
	{
		name: "Label MD",
		sample: "SECTION LABEL",
		...typography.label.md,
	},
];

type TypoToken = {
	size: string;
	weight: number;
	lineHeight: number;
	tracking: string;
};

const scaleRows: { style: string; sample: string; token: TypoToken }[] = [
	{ style: "Display LG", sample: "Aa", token: typography.display.lg },
	{ style: "Display MD", sample: "Aa", token: typography.display.md },
	{ style: "Display SM", sample: "Aa", token: typography.display.sm },
	{ style: "Headline LG", sample: "Aa", token: typography.headline.lg },
	{ style: "Headline MD", sample: "Aa", token: typography.headline.md },
	{ style: "Headline SM", sample: "Aa", token: typography.headline.sm },
	{ style: "Title LG", sample: "Aa", token: typography.title.lg },
	{ style: "Title MD", sample: "Aa", token: typography.title.md },
	{ style: "Title SM", sample: "Aa", token: typography.title.sm },
	{ style: "Body LG", sample: "Aa", token: typography.body.lg },
	{ style: "Body MD", sample: "Aa", token: typography.body.md },
	{ style: "Body SM", sample: "Aa", token: typography.body.sm },
	{ style: "Label LG", sample: "AA", token: typography.label.lg },
	{ style: "Label MD", sample: "AA", token: typography.label.md },
	{ style: "Label SM", sample: "AA", token: typography.label.sm },
];

function weightName(w: number) {
	if (w === 400) return "Regular";
	if (w === 600) return "Semibold";
	if (w === 700) return "Bold";
	return String(w);
}

export default function TypographySection() {
	return (
		<section id='typography' className='space-y-10'>
			<SectionHeader
				label='03 — Typography'
				title='Editorial Authority'
				description='Plus Jakarta Sans carries the system through every weight and size — geometric clarity with humanist warmth.'
			/>

			{/* Type Specimens */}
			<div className='grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5'>
				{specimens.map((spec) => (
					<div
						key={spec.name}
						className='rounded-xl bg-surface-lowest p-8 shadow-ambient'
					>
						<p
							className='mb-6 text-on-surface'
							style={{
								fontSize: spec.size,
								fontWeight: spec.weight,
								lineHeight: spec.lineHeight,
								letterSpacing: spec.tracking,
							}}
						>
							{spec.sample}
						</p>
						<div className='h-px bg-outline-variant/[0.08]' />
						<div className='mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[0.75rem] text-on-surface-variant'>
							<span>
								<span className='font-semibold text-on-surface'>Style</span>{" "}
								{spec.name}
							</span>
							<span>
								<span className='font-semibold text-on-surface'>Size</span>{" "}
								{spec.size}
							</span>
							<span>
								<span className='font-semibold text-on-surface'>Weight</span>{" "}
								{weightName(spec.weight)}
							</span>
							<span>
								<span className='font-semibold text-on-surface'>Line</span>{" "}
								{spec.lineHeight}
							</span>
							<span>
								<span className='font-semibold text-on-surface'>Tracking</span>{" "}
								{spec.tracking}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Type Scale Table */}
			<div className='overflow-hidden rounded-xl bg-surface-lowest shadow-ambient'>
				{/* Header */}
				<div className='grid grid-cols-[1fr_100px_80px_90px_70px_90px] gap-4 bg-surface-low px-6 py-3 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant'>
					<span>Style</span>
					<span>Sample</span>
					<span>Size</span>
					<span>Weight</span>
					<span>Line</span>
					<span>Tracking</span>
				</div>

				{/* Rows */}
				{scaleRows.map((row, i) => (
					<div
						key={row.style}
						className={`grid grid-cols-[1fr_100px_80px_90px_70px_90px] items-center gap-4 px-6 py-3 ${
							i % 2 === 0 ? "bg-surface-lowest" : "bg-surface"
						}`}
					>
						<span className='text-sm font-semibold text-on-surface'>
							{row.style}
						</span>
						<span
							className='text-on-surface'
							style={{
								fontSize: row.token.size,
								fontWeight: row.token.weight,
								lineHeight: row.token.lineHeight,
								letterSpacing: row.token.tracking,
							}}
						>
							{row.sample}
						</span>
						<span className='text-[0.8125rem] text-on-surface-variant'>
							{row.token.size}
						</span>
						<span className='text-[0.8125rem] text-on-surface-variant'>
							{weightName(row.token.weight)}
						</span>
						<span className='text-[0.8125rem] text-on-surface-variant'>
							{row.token.lineHeight}
						</span>
						<span className='text-[0.8125rem] text-on-surface-variant'>
							{row.token.tracking}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
