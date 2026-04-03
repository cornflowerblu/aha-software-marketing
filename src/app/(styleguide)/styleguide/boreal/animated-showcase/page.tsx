import type { Metadata } from "next";
import BorealCtaConservatory from "../../components/boreal/BorealCtaConservatory";
import BorealDemoChrome from "../../components/boreal/BorealDemoChrome";
import BorealEtherealBlobs from "../../components/boreal/BorealEtherealBlobs";
import BorealFeatureBentoLibrary from "../../components/boreal/BorealFeatureBentoLibrary";
import BorealFooterSplit from "../../components/boreal/BorealFooterSplit";
import BorealHeroAsymmetric from "../../components/boreal/BorealHeroAsymmetric";
import BorealLandingNav from "../../components/boreal/BorealLandingNav";
import BorealMotionStage from "../../components/boreal/BorealMotionStage";
import BorealToolkitGrid from "../../components/boreal/BorealToolkitGrid";

export const metadata: Metadata = {
	title: "Animated showcase | Boreal",
};

export default function BorealAnimatedShowcasePage() {
	return (
		<BorealDemoChrome title='Animated showcase' subtitle='Figma node 33:563'>
			<BorealMotionStage>
				<div className='relative'>
					<BorealEtherealBlobs />
					<div className='relative z-10'>
						<BorealLandingNav active='library' underStyleguideChrome />
						<BorealHeroAsymmetric />
						<BorealFeatureBentoLibrary />
						<BorealToolkitGrid />
						<BorealCtaConservatory />
						<BorealFooterSplit />
					</div>
				</div>
			</BorealMotionStage>
		</BorealDemoChrome>
	);
}
