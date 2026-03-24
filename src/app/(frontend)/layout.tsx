import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function FrontendLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<Analytics />
			<main className='pt-24'>{children}</main>
			<Footer />
		</>
	);
}
