import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { AxiomWebVitals } from "next-axiom";

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
			<main className='pt-24'>{children}</main>
			<Footer />
		</>
	);
}
