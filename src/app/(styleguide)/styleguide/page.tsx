import type { Metadata } from "next";
import StyleguideShell from "./components/StyleguideShell";
import OverviewSection from "./sections/OverviewSection";
import ColorSection from "./sections/ColorSection";
import TypographySection from "./sections/TypographySection";
import SurfaceSection from "./sections/SurfaceSection";
import ButtonsSection from "./sections/ButtonsSection";
import InputsSection from "./sections/InputsSection";
import NavigationSection from "./sections/NavigationSection";
import CardsSection from "./sections/CardsSection";
import ChipsSection from "./sections/ChipsSection";
import ElevationSection from "./sections/ElevationSection";
import SpacingSection from "./sections/SpacingSection";

export const metadata: Metadata = {
	title: "Ethereal Atrium — Design System | Styleguide",
};

export default function StyleguidePage() {
	return (
		<StyleguideShell>
			<OverviewSection />
			<ColorSection />
			<TypographySection />
			<SurfaceSection />
			<ButtonsSection />
			<InputsSection />
			<NavigationSection />
			<CardsSection />
			<ChipsSection />
			<ElevationSection />
			<SpacingSection />
		</StyleguideShell>
	);
}
