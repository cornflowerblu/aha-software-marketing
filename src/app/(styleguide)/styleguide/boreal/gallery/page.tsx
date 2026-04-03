import type { Metadata } from "next";
import BorealComponentGallery from "../../components/boreal/BorealComponentGallery";
import BorealDemoChrome from "../../components/boreal/BorealDemoChrome";

export const metadata: Metadata = {
	title: "Component Gallery | Boreal",
};

export default function BorealGalleryPage() {
	return (
		<BorealDemoChrome title='Component Gallery' subtitle='Figma node 33:3'>
			<BorealComponentGallery underStyleguideChrome />
		</BorealDemoChrome>
	);
}
