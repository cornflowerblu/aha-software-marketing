import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Boreal demos | Styleguide",
};

export default function BorealLayout({ children }: { children: ReactNode }) {
	return <div className='min-h-screen bg-background'>{children}</div>;
}
