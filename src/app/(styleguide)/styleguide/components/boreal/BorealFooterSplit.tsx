export default function BorealFooterSplit() {
	return (
		<footer className='bg-surface'>
			<div className='mx-auto flex max-w-[1280px] flex-wrap items-start justify-between gap-12 px-12 py-16'>
				<div>
					<p className='text-lg font-bold text-primary'>Boreal Breeze</p>
					<p className='mt-2 text-xs uppercase tracking-[0.1em] text-tertiary'>
						© 2024 Boreal Breeze. Designed for the Digital Conservatory.
					</p>
				</div>
				<div className='flex gap-12'>
					<div>
						<p className='text-[10px] font-bold uppercase tracking-[0.1em] text-primary'>
							Product
						</p>
						<ul className='mt-4 space-y-2 text-sm text-tertiary'>
							<li>Showcase</li>
							<li>Documentation</li>
						</ul>
					</div>
					<div>
						<p className='text-[10px] font-bold uppercase tracking-[0.1em] text-primary'>
							Connect
						</p>
						<ul className='mt-4 space-y-2 text-sm text-tertiary'>
							<li>Github</li>
							<li>Privacy</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
