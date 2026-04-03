import Image from "next/image";
import { figma } from "./figmaAssets";

export default function BorealGalleryFab() {
	return (
		<button
			type='button'
			className='fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full ea-gradient text-on-primary shadow-[var(--shadow-floating)]'
			aria-label='Create'
		>
			<span className='relative h-6 w-6'>
				<Image
					src={figma.gallery.fabPlus}
					alt=''
					fill
					className='object-contain'
				/>
			</span>
		</button>
	);
}
