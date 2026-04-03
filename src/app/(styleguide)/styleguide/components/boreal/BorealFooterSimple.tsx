import Link from "next/link";

export default function BorealFooterSimple() {
	return (
		<footer className='rounded-t-3xl bg-surface'>
			<div className='mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 px-12 py-16'>
				<div>
					<p className='text-lg font-bold text-primary'>Boreal Breeze</p>
					<p className='mt-2 text-xs uppercase tracking-[0.1em] text-tertiary'>
						© 2024 Boreal Breeze. Designed for the Digital Conservatory.
					</p>
				</div>
				<div className='flex flex-wrap gap-8 text-sm uppercase tracking-[0.1em] text-tertiary'>
					<Link href='#' className='hover:text-primary'>
						Privacy
					</Link>
					<Link href='#' className='hover:text-primary'>
						Terms
					</Link>
					<Link href='#' className='hover:text-primary'>
						Github
					</Link>
					<Link href='#' className='hover:text-primary'>
						Documentation
					</Link>
				</div>
			</div>
		</footer>
	);
}
