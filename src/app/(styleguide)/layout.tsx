import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./styleguide.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Ethereal Atrium — Design System",
};

export default function StyleguideLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	if (process.env.ENABLE_STYLEGUIDE !== "true") {
		notFound();
	}

	return (
		<div
			className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-on-surface min-h-screen`}
		>
			{children}
		</div>
	);
}
