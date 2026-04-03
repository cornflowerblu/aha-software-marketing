import type { Metadata } from "next";
import BorealBentoCurated from "../../components/boreal/BorealBentoCurated";
import BorealCtaConservatory from "../../components/boreal/BorealCtaConservatory";
import BorealDemoChrome from "../../components/boreal/BorealDemoChrome";
import BorealFooterSimple from "../../components/boreal/BorealFooterSimple";
import BorealLandingNav from "../../components/boreal/BorealLandingNav";
import BorealParallaxHero from "../../components/boreal/BorealParallaxHero";
import BorealPhilosophySection from "../../components/boreal/BorealPhilosophySection";

export const metadata: Metadata = {
	title: "Parallax landing | Boreal",
};

export default function BorealParallaxPage() {
	return (
		<BorealDemoChrome title='Parallax landing' subtitle='Figma node 33:238'>
			<>
				<BorealLandingNav active='showcase' underStyleguideChrome />
				<BorealParallaxHero />
				<BorealPhilosophySection />
				<BorealBentoCurated />
				<BorealCtaConservatory />
				<BorealFooterSimple />
			</>
		</BorealDemoChrome>
	);
}
