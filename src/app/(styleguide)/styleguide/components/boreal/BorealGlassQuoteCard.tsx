export default function BorealGlassQuoteCard({
	quote,
	attribution,
}: {
	quote: string[];
	attribution: string;
}) {
	return (
		<div className='absolute bottom-0 left-0 z-10 max-w-[min(100%,20rem)] rounded-2xl border border-white/20 bg-white/40 p-6 shadow-[var(--shadow-floating)] backdrop-blur-[20px] sm:-bottom-8 sm:-left-8 sm:p-8 dark:bg-surface-lowest/50 dark:border-outline-variant/30'>
			<blockquote className='text-base font-bold italic leading-relaxed text-primary'>
				{quote.map((line) => (
					<p key={line}>{line}</p>
				))}
			</blockquote>
			<cite className='mt-2 block text-sm not-italic text-tertiary'>
				{attribution}
			</cite>
		</div>
	);
}
