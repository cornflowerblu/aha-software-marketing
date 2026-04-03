import Image from "next/image";
import { figma } from "./figmaAssets";
import BorealDocSidebar from "./BorealDocSidebar";
import BorealDocTopNav from "./BorealDocTopNav";
import BorealGalleryFab from "./BorealGalleryFab";

export default function BorealComponentGallery({
	underStyleguideChrome = false,
}: {
	underStyleguideChrome?: boolean;
}) {
	return (
		<div className='flex min-h-screen bg-background'>
			<BorealDocSidebar />
			<div className='flex min-w-0 flex-1 flex-col'>
				<BorealDocTopNav underStyleguideChrome={underStyleguideChrome} />
				<main className='flex-1 overflow-auto px-6 py-10 pb-24 lg:px-12'>
					{/* Hero */}
					<section className='relative overflow-hidden rounded-3xl'>
						<div className='relative aspect-[21/9] min-h-[200px] w-full md:aspect-[21/7]'>
							<Image
								src={figma.cardForest}
								alt=''
								fill
								className='object-cover'
								sizes='(max-width:1024px) 100vw, 80vw'
								priority
							/>
							<div className='absolute inset-0 bg-gradient-to-r from-black/55 to-transparent' />
							<div className='absolute inset-0 flex flex-col justify-center px-8 md:px-14'>
								<p className='ea-label mb-2 text-primary-container'>
									Component gallery
								</p>
								<h1 className='max-w-lg text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl'>
									Atoms through organisms
								</h1>
								<p className='mt-4 max-w-xl text-sm leading-relaxed text-white/85'>
									Explore buttons, inputs, cards, and navigation primitives in
									one scroll — the Ethereal Atrium kit in context.
								</p>
							</div>
						</div>
					</section>

					{/* Actions & signifiers */}
					<section className='mt-12 space-y-6'>
						<h2 className='text-lg font-bold text-on-surface'>Actions</h2>
						<div className='flex flex-wrap gap-3'>
							<button
								type='button'
								className='rounded-full ea-gradient px-6 py-2.5 text-sm font-semibold text-on-primary'
							>
								Primary
							</button>
							<button
								type='button'
								className='rounded-full border border-outline-variant bg-surface-lowest px-6 py-2.5 text-sm font-semibold text-primary'
							>
								Secondary
							</button>
							<button
								type='button'
								className='rounded-full bg-surface-high px-6 py-2.5 text-sm font-semibold text-on-surface'
							>
								Tertiary
							</button>
						</div>
						<div className='flex flex-wrap items-center gap-2'>
							<span className='rounded-full bg-primary-container px-3 py-1 text-[0.6875rem] font-semibold text-on-primary-container'>
								New
							</span>
							<span className='rounded-full bg-surface-high px-3 py-1 text-[0.6875rem] font-medium text-on-surface-variant'>
								Stable
							</span>
						</div>
					</section>

					{/* Data entry */}
					<section className='mt-12 space-y-4'>
						<h2 className='text-lg font-bold text-on-surface'>Data entry</h2>
						<div className='grid gap-4 md:grid-cols-2'>
							<label className='block space-y-2'>
								<span className='text-[0.8125rem] font-medium text-on-surface-variant'>
									Email
								</span>
								<input
									type='email'
									placeholder='you@example.com'
									className='w-full rounded-xl border border-outline-variant bg-surface-lowest px-4 py-3 text-sm outline-none ring-primary/0 transition-shadow focus:ring-2 focus:ring-primary/30'
								/>
							</label>
							<label className='block space-y-2'>
								<span className='text-[0.8125rem] font-medium text-on-surface-variant'>
									Role
								</span>
								<div className='relative'>
									<select className='w-full appearance-none rounded-xl border border-outline-variant bg-surface-lowest px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30'>
										<option>Designer</option>
										<option>Developer</option>
									</select>
									<span className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2'>
										<Image
											src={figma.gallery.selectChevron}
											alt=''
											width={16}
											height={16}
										/>
									</span>
								</div>
							</label>
						</div>
					</section>

					{/* Cards */}
					<section className='mt-12'>
						<h2 className='mb-6 text-lg font-bold text-on-surface'>Cards</h2>
						<div className='grid gap-6 md:grid-cols-2'>
							<article className='overflow-hidden rounded-2xl bg-surface-lowest shadow-ambient'>
								<div className='relative aspect-[2/1]'>
									<Image
										src={figma.needlesMacro}
										alt=''
										fill
										className='object-cover'
										sizes='(max-width:768px) 100vw, 40vw'
									/>
								</div>
								<div className='p-6'>
									<h3 className='font-bold text-on-surface'>Ambient lift</h3>
									<p className='mt-2 text-sm text-on-surface-variant'>
										Tonal depth without outline borders — the no-line rule.
									</p>
								</div>
							</article>
							<article className='flex flex-col justify-between rounded-2xl bg-primary-container/40 p-6 shadow-ambient'>
								<div>
									<h3 className='font-bold text-on-primary-container'>
										Glass stack
									</h3>
									<p className='mt-2 text-sm text-on-primary-container/90'>
										Translucent panels for overlays and side sheets.
									</p>
								</div>
								<div className='mt-6 flex -space-x-2'>
									<div className='relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-surface-lowest'>
										<Image
											src={figma.avatarA}
											alt=''
											fill
											className='object-cover'
										/>
									</div>
									<div className='relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-surface-lowest'>
										<Image
											src={figma.avatarB}
											alt=''
											fill
											className='object-cover'
										/>
									</div>
								</div>
							</article>
						</div>
					</section>

					{/* Inline CTA */}
					<section className='mt-12 rounded-2xl ea-gradient px-8 py-10 text-center text-on-primary'>
						<h2 className='text-xl font-bold'>Ship with confidence</h2>
						<p className='mt-2 text-sm text-on-primary/90'>
							Tokens, components, and motion — all aligned to the conservatory.
						</p>
						<button
							type='button'
							className='mt-6 rounded-full bg-on-primary px-6 py-2.5 text-sm font-semibold text-primary'
						>
							Get the kit
						</button>
					</section>

					{/* Doc footer */}
					<footer className='mt-12 border-t border-outline-variant/50 pt-8'>
						<div className='flex flex-wrap items-center justify-between gap-4 text-[0.8125rem] text-on-surface-variant'>
							<p>© Boreal Design System</p>
							<div className='flex gap-6'>
								<button type='button' className='hover:text-primary'>
									Changelog
								</button>
								<button type='button' className='hover:text-primary'>
									License
								</button>
							</div>
						</div>
					</footer>
				</main>
			</div>
			<BorealGalleryFab />
		</div>
	);
}
