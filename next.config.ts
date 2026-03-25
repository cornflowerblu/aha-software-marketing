import { withPayload } from "@payloadcms/next/withPayload";
const { withAxiom } = require("next-axiom");
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	turbopack: {
		root: ".",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.public.blob.vercel-storage.com",
			},
			{
				protocol: "https",
				hostname: "images.ahasw.com",
			},
		],
	},
};

export default withPayload(withAxiom(nextConfig));
