import type { ReactNode } from "react";

export default function BorealSectionIntro({
	label,
	title,
	description,
	className = "mb-12 max-w-2xl",
}: {
	label: string;
	title: ReactNode;
	description?: ReactNode;
	className?: string;
}) {
	return (
		<div className={className}>
			<p className='ea-label mb-3 text-primary'>{label}</p>
			<h2 className='text-3xl font-bold tracking-[-0.02em] text-on-surface md:text-4xl'>
				{title}
			</h2>
			{description ? (
				<p className='mt-4 text-on-surface-variant'>{description}</p>
			) : null}
		</div>
	);
}
