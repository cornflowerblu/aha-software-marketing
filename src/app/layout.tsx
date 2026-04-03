import type { Metadata } from "next";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "AHA Software | Radical Change for the Post-AI Organization",
		template: "%s | AHA Software",
	},
	description:
		"We empower developers and align teams—from product to DevOps—to eliminate costly rework using the GitHub Spec Kit methodology.",
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://ahasw.com",
	),
	alternates: {
		types: {
			"application/rss+xml": "/api/feed",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${plusJakarta.variable} scroll-smooth`}
		>
			<head>
				<link
					href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
