import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { AxiomWebVitals } from "next-axiom";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function FrontendLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<Analytics />
			<AxiomWebVitals />
			<SpeedInsights />
			<main className='pt-24'>{children}</main>
			<Footer />
		</>
	);
}
