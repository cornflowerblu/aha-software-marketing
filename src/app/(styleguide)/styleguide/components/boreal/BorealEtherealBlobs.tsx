/**
 * Decorative aurora-style layers for the animated showcase variant.
 */
export default function BorealEtherealBlobs() {
	return (
		<div
			className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
			aria-hidden
		>
			<div
				className='absolute -left-[20%] top-[10%] h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-primary/20 blur-[100px] motion-safe:animate-[boreal-blob-drift_22s_ease-in-out_infinite]'
				style={{ animationDelay: "0s" }}
			/>
			<div
				className='absolute -right-[15%] top-[40%] h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-secondary-container/40 blur-[90px] motion-safe:animate-[boreal-blob-drift_28s_ease-in-out_infinite_reverse]'
				style={{ animationDelay: "-4s" }}
			/>
			<div
				className='absolute bottom-[5%] left-[25%] h-[min(60vw,380px)] w-[min(60vw,380px)] rounded-full bg-tertiary-container/35 blur-[110px] motion-safe:animate-[boreal-blob-drift_26s_ease-in-out_infinite]'
				style={{ animationDelay: "-8s" }}
			/>
		</div>
	);
}
