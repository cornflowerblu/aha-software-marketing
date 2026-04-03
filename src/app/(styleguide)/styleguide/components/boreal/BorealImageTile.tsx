import Image from "next/image";

export default function BorealImageTile({
	title,
	body,
	image,
	span,
	minH,
	titleClassName = "text-lg font-bold text-white",
	bodyClassName = "mt-2 text-sm text-white/85",
	imageClassName = "object-cover",
	scrimClassName = "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent",
	className = "",
	sizes = "(max-width:768px) 100vw, 50vw",
	priority = false,
	enableHoverZoom = false,
	dataReveal = false,
	dataHover = false,
}: {
	title: string;
	body: string;
	image: string;
	span: string;
	minH: string;
	titleClassName?: string;
	bodyClassName?: string;
	imageClassName?: string;
	scrimClassName?: string;
	className?: string;
	sizes?: string;
	priority?: boolean;
	enableHoverZoom?: boolean;
	dataReveal?: boolean;
	dataHover?: boolean;
}) {
	const tileClasses = [
		"relative overflow-hidden rounded-3xl bg-surface-lowest shadow-ambient",
		span,
		minH,
		enableHoverZoom ? "group" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			className={tileClasses}
			data-boreal-reveal={dataReveal ? "" : undefined}
			data-boreal-hover={dataHover ? "" : undefined}
		>
			<Image
				src={image}
				alt=''
				fill
				className={imageClassName}
				sizes={sizes}
				priority={priority}
			/>
			<div className={scrimClassName} />
			<div className='absolute inset-x-0 bottom-0 p-8'>
				<h3 className={titleClassName}>{title}</h3>
				<p className={bodyClassName}>{body}</p>
			</div>
		</div>
	);
}
