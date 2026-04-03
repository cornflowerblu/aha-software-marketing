import Image from "next/image";
import { figma } from "./figmaAssets";

export default function BorealDocTopNav({
	underStyleguideChrome = false,
}: {
	underStyleguideChrome?: boolean;
}) {
	return (
		<header
			className={`sticky z-30 flex items-center justify-between gap-4 border-b border-outline-variant/40 bg-surface-lowest/90 px-6 py-3 backdrop-blur-md ${
				underStyleguideChrome ? "top-12" : "top-0"
			}`}
		>
			<div className='relative mx-auto flex w-full max-w-[720px] flex-1 items-center gap-2 rounded-full border border-outline-variant/50 bg-surface-high/40 px-4 py-2'>
				<span className='relative h-4 w-4 shrink-0 opacity-60'>
					<Image
						src={figma.gallery.searchIcon}
						alt=''
						fill
						className='object-contain'
					/>
				</span>
				<input
					type='search'
					placeholder='Search components…'
					className='min-w-0 flex-1 bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant'
					aria-label='Search components'
				/>
				<span className='relative h-4 w-4 shrink-0 opacity-60'>
					<Image
						src={figma.gallery.aiSparkle}
						alt=''
						fill
						className='object-contain'
					/>
				</span>
			</div>
			<div className='flex shrink-0 items-center gap-2'>
				<button
					type='button'
					className='relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-high/70'
					aria-label='Cloud'
				>
					<span className='relative h-5 w-5'>
						<Image
							src={figma.gallery.cloudIcon}
							alt=''
							fill
							className='object-contain'
						/>
					</span>
				</button>
				<button
					type='button'
					className='relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-high/70'
					aria-label='Theme'
				>
					<span className='relative h-5 w-5'>
						<Image
							src={figma.gallery.moonIcon}
							alt=''
							fill
							className='object-contain'
						/>
					</span>
				</button>
				<button
					type='button'
					className='relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-high/70'
					aria-label='Notifications'
				>
					<span className='relative h-5 w-5'>
						<Image
							src={figma.gallery.bellIcon}
							alt=''
							fill
							className='object-contain'
						/>
					</span>
				</button>
				<div className='relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-primary/20'>
					<Image src={figma.userAvatar} alt='' fill className='object-cover' />
				</div>
			</div>
		</header>
	);
}
