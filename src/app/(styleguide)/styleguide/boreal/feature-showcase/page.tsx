import type { Metadata } from "next";
import BorealCtaConservatory from "../../components/boreal/BorealCtaConservatory";
import BorealDemoChrome from "../../components/boreal/BorealDemoChrome";
import BorealFeatureBentoLibrary from "../../components/boreal/BorealFeatureBentoLibrary";
import BorealFooterSplit from "../../components/boreal/BorealFooterSplit";
import BorealHeroAsymmetric from "../../components/boreal/BorealHeroAsymmetric";
import BorealLandingNav from "../../components/boreal/BorealLandingNav";
import BorealToolkitGrid from "../../components/boreal/BorealToolkitGrid";

export const metadata: Metadata = {
	title: "Feature showcase | Boreal",
};

export default function BorealFeatureShowcasePage() {
	return (
		<BorealDemoChrome title='Feature showcase' subtitle='Figma node 33:364'>
			<>
				<BorealLandingNav active='features' underStyleguideChrome />
				<BorealHeroAsymmetric />
				<BorealFeatureBentoLibrary />
				<BorealToolkitGrid />
				<BorealCtaConservatory />
				<BorealFooterSplit />
			</>
		</BorealDemoChrome>
	);
}
