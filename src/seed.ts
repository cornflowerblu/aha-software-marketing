/**
 * Seed script — run with: bun run seed
 * Uses Payload's local API directly (no HTTP server needed).
 * Idempotent — checks for existing data before inserting.
 */

import { getPayload } from "payload";
import type { Post } from "./payload-types";
import config from "./payload.config";
import path from "path";
import fs from "fs";

type PostContent = NonNullable<Post["content"]>;

async function uploadMedia(
	payload: Awaited<ReturnType<typeof getPayload>>,
	filename: string,
	alt: string,
) {
	const filePath = path.resolve(process.cwd(), "public/assets", filename);
	if (!fs.existsSync(filePath)) {
		console.log(`  Skipping ${filename} (not found at ${filePath})`);
		return null;
	}

	const buffer = fs.readFileSync(filePath);
	const ext = path.extname(filename).slice(1);
	const mimeMap: Record<string, string> = {
		png: "image/png",
		jpg: "image/jpeg",
		jpeg: "image/jpeg",
		webp: "image/webp",
	};

	const result = await payload.create({
		collection: "media",
		data: { alt },
		file: {
			data: buffer,
			name: filename,
			mimetype: mimeMap[ext] || "image/png",
			size: buffer.length,
		},
	});

	console.log(`  Uploaded ${filename} → id:${result.id}`);
	return result.id;
}

async function seed() {
	console.log("Starting seed...");

	const payload = await getPayload({ config });

	// Check if already seeded
	const existingPosts = await payload.find({ collection: "posts", limit: 1 });
	if (existingPosts.totalDocs > 0) {
		console.log(
			`Already seeded (${existingPosts.totalDocs} posts exist). Skipping.`,
		);
		process.exit(0);
	}

	// Ensure admin user exists
	const existingUsers = await payload.find({ collection: "users", limit: 1 });
	if (existingUsers.totalDocs === 0) {
		console.log("Creating admin user...");
		await payload.create({
			collection: "users",
			data: {
				email: "roger@ahasw.com",
				password: "troy-LAYING-somewhat",
				name: "Roger Urich",
				role: "admin",
			},
		});
		console.log("Admin user created");
	}

	// Upload images — skip if media already exists (shared Blob across all DBs)
	const existingMedia = await payload.find({ collection: "media", limit: 1 });
	let serverRoomId: number | string | null = null;
	let codeScreenId: number | string | null = null;
	let heroAbstractId: number | string | null = null;
	let specKitId: number | string | null = null;

	if (existingMedia.totalDocs === 0) {
		console.log("Uploading images to Blob...");
		serverRoomId = await uploadMedia(payload, "insight-server-room.png", "Server room with data racks");
		codeScreenId = await uploadMedia(payload, "insight-code-screen.png", "Code on screen");
		heroAbstractId = await uploadMedia(payload, "hero-abstract.png", "Modern workspace with afternoon sunlight");
		specKitId = await uploadMedia(payload, "spec-kit-integration.png", "Seamless integration");
	} else {
		console.log(`Media already exists (${existingMedia.totalDocs} items). Reusing.`);
		const allMedia = await payload.find({ collection: "media", limit: 10 });
		for (const m of allMedia.docs) {
			const fn = (m as { filename?: string }).filename || "";
			if (fn.includes("server-room")) serverRoomId = m.id;
			else if (fn.includes("code-screen")) codeScreenId = m.id;
			else if (fn.includes("hero-abstract")) heroAbstractId = m.id;
			else if (fn.includes("spec-kit")) specKitId = m.id;
		}
	}

	// Create event
	console.log("Creating event...");
	await payload.create({
		collection: "events",
		data: {
			title: "The Future is Yesterday, Teams Who Adapt will Thrive.",
			slug: "future-is-yesterday-workshop",
			...(heroAbstractId ? { featuredImage: heroAbstractId } : {}),
			date: "2026-10-24T14:00:00.000Z",
			endDate: "2026-10-24T16:30:00.000Z",
			location: "Virtual Gallery Studio",
			capacity: 500,
			price: 0,
			status: "upcoming",
			registrationDeadline: "2026-10-20T23:59:00.000Z",
		},
	});

	// Create blog posts
	console.log("Creating blog posts...");
	await payload.create({
		collection: "posts",
		data: {
			title: "High-Quality Software Delivery: Beyond the Sprint.",
			slug: "high-quality-software-delivery",
			...(serverRoomId ? { featuredImage: serverRoomId } : {}),
			excerpt:
				"Why traditional agile metrics are failing your engineering culture and how to shift towards structural quality metrics that drive revenue.",
			status: "published",
			premium: false,
			publishedAt: "2024-05-15T00:00:00.000Z",
			content: {
				root: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "The software industry has spent the last two decades optimizing for velocity. Sprint velocity, deployment frequency, lead time for changes — these metrics have become the lingua franca of engineering leadership. But something is fundamentally broken.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "Teams that ship fast often ship fragile. The cost of rework — the silent killer of engineering productivity — has been systematically ignored in favor of throughput metrics that look good in stakeholder reviews but mask deep structural issues.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "At AHA Software, we have seen this pattern repeat across dozens of enterprise engagements. The solution is not to slow down. It is to redefine what quality means in the context of continuous delivery, and to build that definition into the DNA of your development process.",
								},
							],
						},
					],
					direction: null,
					format: "",
					indent: 0,
					version: 1,
				},
			} as unknown as PostContent,
		},
	});

	await payload.create({
		collection: "posts",
		data: {
			title: "DevOps for Modern Teams: Radical Automation.",
			slug: "devops-radical-automation",
			...(codeScreenId ? { featuredImage: codeScreenId } : {}),
			excerpt:
				"Implementing zero-touch deployments in complex legacy environments. A guide to navigating the friction between speed and safety.",
			status: "published",
			premium: false,
			publishedAt: "2024-06-10T00:00:00.000Z",
			content: {
				root: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "The promise of DevOps was simple: break down the wall between development and operations. Ship faster, fail less, recover quickly. But for most enterprise teams, the reality is far more complicated.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "Radical automation is not about removing humans from the loop. It is about removing humans from the repetitive, error-prone tasks that slow delivery and introduce risk — and redirecting that human energy toward the creative, strategic work that actually moves the business forward.",
								},
							],
						},
					],
					direction: null,
					format: "",
					indent: 0,
					version: 1,
				},
			} as unknown as PostContent,
		},
	});

	await payload.create({
		collection: "posts",
		data: {
			title: "The Art of the Digital Monograph",
			slug: "art-of-digital-monograph",
			...(heroAbstractId ? { featuredImage: heroAbstractId } : {}),
			excerpt:
				"Translating traditional publishing aesthetics into highly functional SaaS marketing engines.",
			status: "published",
			premium: true,
			publishedAt: "2024-03-22T00:00:00.000Z",
			content: {
				root: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "This is premium content that demonstrates the paywall gate functionality. Only premium subscribers can see the full article content below this point.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "The traditional monograph — a detailed, authoritative treatment of a single subject — has been the gold standard of thought leadership for centuries. In the digital age, we have the opportunity to reinvent this format for the web.",
								},
							],
						},
					],
					direction: null,
					format: "",
					indent: 0,
					version: 1,
				},
			} as unknown as PostContent,
		},
	});

	// More blog posts
	await payload.create({
		collection: "posts",
		data: {
			title: "Semantic Systems in Modern UI Design",
			slug: "semantic-systems-ui-design",
			...(codeScreenId ? { featuredImage: codeScreenId } : {}),
			excerpt:
				"How taxonomy and structure influence user trust in complex software environments.",
			status: "published",
			premium: false,
			publishedAt: "2024-07-08T00:00:00.000Z",
			content: {
				root: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "Every interface tells a story. The question is whether that story is intentional or accidental. In enterprise software, where users make high-stakes decisions under time pressure, the structure of your UI is not decoration — it is infrastructure.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "Semantic design systems go beyond component libraries. They encode meaning into the visual hierarchy itself. A card's elevation, a label's tracking, the ratio of whitespace to content — these choices communicate authority, urgency, and trust before a single word is read.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "At AHA Software, we apply the 'Digital Curator' philosophy to every interface we build. The warm stone palette, the editorial typography, the intentional asymmetry — these aren't aesthetic preferences. They're strategic decisions that measurably increase engagement and reduce cognitive load.",
								},
							],
						},
					],
					direction: null,
					format: "",
					indent: 0,
					version: 1,
				},
			} as unknown as PostContent,
		},
	});

	await payload.create({
		collection: "posts",
		data: {
			title: "The ROI of Editorial Design in B2B Software",
			slug: "roi-editorial-design",
			...(serverRoomId ? { featuredImage: serverRoomId } : {}),
			excerpt:
				"Measuring the intangible: how beauty and whitespace drive conversion in high-ticket software.",
			status: "published",
			premium: false,
			publishedAt: "2024-08-14T00:00:00.000Z",
			content: {
				root: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "In the world of enterprise software, design is often treated as a cost center — a necessary expense to make things 'look nice' before the real work of engineering begins. This is a fundamental misunderstanding of what design does.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "Our data across 47 enterprise engagements shows a consistent pattern: teams that invest in editorial-quality design see 2.3x higher demo-to-close rates, 40% reduction in support tickets related to UI confusion, and a measurable increase in perceived product value that directly impacts pricing power.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "The secret is not complexity. It is restraint. Premium is synonymous with space. When every pixel has to justify its existence, the ones that remain carry extraordinary weight.",
								},
							],
						},
					],
					direction: null,
					format: "",
					indent: 0,
					version: 1,
				},
			} as unknown as PostContent,
		},
	});

	await payload.create({
		collection: "posts",
		data: {
			title: "CTO as a Service: When to Bring in Outside Leadership",
			slug: "cto-as-a-service",
			...(heroAbstractId ? { featuredImage: heroAbstractId } : {}),
			excerpt:
				"Not every organization needs a full-time CTO. But every organization needs CTO-level thinking.",
			status: "published",
			premium: true,
			publishedAt: "2024-09-02T00:00:00.000Z",
			content: {
				root: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "The traditional model of technology leadership assumes a binary: either you have a CTO or you don't. But in a world where the pace of technological change outstrips any single person's ability to stay current, this model is breaking down.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "Fractional CTO engagements — what we call 'CTO as a Service' — provide the strategic depth of executive technology leadership without the overhead of a C-suite hire. The model works particularly well for organizations in three situations: pre-Series A startups building their technical foundation, mid-market companies navigating cloud migration, and enterprises launching new digital product lines.",
								},
							],
						},
						{
							type: "paragraph",
							children: [
								{
									type: "text",
									text: "The key insight is that CTO-level thinking is not about knowing every technology. It is about knowing which questions to ask, which trade-offs matter, and how to align technical decisions with business outcomes. That expertise can be engaged on demand.",
								},
							],
						},
					],
					direction: null,
					format: "",
					indent: 0,
					version: 1,
				},
			} as unknown as PostContent,
		},
	});

	// More events
	await payload.create({
		collection: "events",
		data: {
			title: "Spec Kit Deep Dive: From Spec to Ship",
			slug: "spec-kit-deep-dive",
			...(specKitId ? { featuredImage: specKitId } : {}),
			date: "2026-11-12T10:00:00.000Z",
			endDate: "2026-11-12T12:30:00.000Z",
			location: "London, EC2A",
			capacity: 100,
			price: 49,
			status: "upcoming",
			registrationDeadline: "2026-11-08T23:59:00.000Z",
		},
	});

	await payload.create({
		collection: "events",
		data: {
			title: "Radical QA: Zero-Rework Workshop",
			slug: "radical-qa-workshop",
			date: "2025-08-15T09:00:00.000Z",
			endDate: "2025-08-15T12:00:00.000Z",
			location: "Virtual",
			capacity: 300,
			price: 0,
			status: "past",
		},
	});

	console.log("Seed complete!");
	console.log("  - 3 events (2 upcoming, 1 past)");
	console.log("  - 6 posts (4 free, 2 premium)");
	process.exit(0);
}

seed().catch((err) => {
	console.error("Seed failed:", err);
	process.exit(1);
});
