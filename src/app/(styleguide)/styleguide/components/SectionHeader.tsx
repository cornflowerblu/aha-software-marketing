interface SectionHeaderProps {
	label: string;
	title: string;
	description?: string;
}

export default function SectionHeader({
	label,
	title,
	description,
}: SectionHeaderProps) {
	return (
		<div className="mb-10">
			<p className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-tertiary mb-2">
				{label}
			</p>
			<h2
				className={`text-[1.75rem] font-semibold leading-[1.3] tracking-[-0.02em] text-on-surface${description ? " mb-3" : ""}`}
			>
				{title}
			</h2>
			{description && (
				<p className="text-base font-normal leading-relaxed text-on-surface-variant max-w-[560px]">
					{description}
				</p>
			)}
		</div>
	);
}
