import type { Metadata } from "next";
import { getPayloadClient } from "@/lib/payload";
import EventCard from "@/components/events/EventCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Logger } from "next-axiom";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Events | AHA Software",
	description:
		"Workshops, webinars, and exclusive gatherings for digital architects and engineering leaders.",
};

interface EventDoc {
	slug: string;
	title: string;
	date: string;
	endDate?: string;
	location?: string;
	capacity?: number;
	price?: number;
	status?: "upcoming" | "past" | "cancelled";
	featuredImage?: { url?: string; alt?: string } | null;
}

function mapEvent(doc: EventDoc) {
	const imageUrl =
		doc.featuredImage && typeof doc.featuredImage === "object"
			? doc.featuredImage.url
			: undefined;
	const imageAlt =
		doc.featuredImage && typeof doc.featuredImage === "object"
			? doc.featuredImage.alt
			: undefined;

	return {
		slug: doc.slug,
		title: doc.title,
		date: doc.date,
		location: doc.location,
		capacity: doc.capacity,
		price: doc.price ?? 0,
		status: doc.status || "upcoming",
		image: imageUrl,
		imageAlt,
	};
}

async function fetchEvents() {
	try {
		const payload = await getPayloadClient();

		const [upcoming, past] = await Promise.all([
			payload.find({
				collection: "events",
				where: { status: { equals: "upcoming" } },
				sort: "date",
				limit: 20,
				depth: 1,
			}),
			payload.find({
				collection: "events",
				where: { status: { equals: "past" } },
				sort: "-date",
				limit: 20,
				depth: 1,
			}),
		]);

		return {
			upcoming: upcoming.docs.map((d) => mapEvent(d as unknown as EventDoc)),
			past: past.docs.map((d) => mapEvent(d as unknown as EventDoc)),
		};
	} catch (err) {
		const fallbackLog = new Logger();
		fallbackLog.warn("events_index_cms_fallback", {
			error: err instanceof Error ? err.message : "unknown",
		});
		await fallbackLog.flush();
		return {
			upcoming: [
				{
					slug: "future-is-yesterday",
					title: "The Future is Yesterday: Teams Who Adapt Will Thrive",
					date: "2024-10-24T14:00:00Z",
					location: "Virtual Gallery Studio",
					capacity: 500,
					price: 0,
					status: "upcoming" as const,
				},
				{
					slug: "spec-kit-deep-dive",
					title: "Spec Kit Deep Dive: From Spec to Ship",
					date: "2024-11-12T10:00:00Z",
					location: "London, EC2A",
					capacity: 100,
					price: 49,
					status: "upcoming" as const,
				},
			],
			past: [
				{
					slug: "radical-qa-workshop",
					title: "Radical QA: Zero-Rework Workshop",
					date: "2024-08-15T09:00:00Z",
					location: "Virtual",
					capacity: 300,
					price: 0,
					status: "past" as const,
				},
			],
		};
	}
}

export default async function EventsPage() {
	const { upcoming, past } = await fetchEvents();

	return (
		<div className='pb-20 px-6 md:px-12 max-w-[1280px] mx-auto'>
			<header className='pt-28 pb-16 text-center max-w-3xl mx-auto'>
				<p className='ea-label mb-4 text-primary'>Curated Gatherings</p>
				<h1 className='text-4xl md:text-5xl font-bold tracking-[-0.03em] text-on-surface mb-6 leading-[1.08]'>
					Workshops &amp; Exclusive Events
				</h1>
				<p className='text-lg text-on-surface-variant leading-relaxed'>
					Deep-dive sessions, strategy workshops, and thought leadership for
					engineering teams and digital leaders.
				</p>
			</header>

			{upcoming.length > 0 && (
				<section className='mb-20'>
					<div className='flex justify-between items-end mb-8'>
						<h2 className='text-2xl font-bold text-on-surface'>
							Upcoming
						</h2>
						<span className='ea-label text-tertiary'>
							{upcoming.length} Event{upcoming.length !== 1 ? "s" : ""}
						</span>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{upcoming.map((event, i) => (
							<AnimateOnScroll key={event.slug} delay={i * 100}>
								<EventCard {...event} />
							</AnimateOnScroll>
						))}
					</div>
				</section>
			)}

			{past.length > 0 && (
				<section>
					<div className='flex justify-between items-end mb-8'>
						<h2 className='text-2xl font-bold text-on-surface'>
							Past Events
						</h2>
						<span className='ea-label text-tertiary'>
							Archive
						</span>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{past.map((event, i) => (
							<AnimateOnScroll key={event.slug} delay={i * 100}>
								<EventCard {...event} />
							</AnimateOnScroll>
						))}
					</div>
				</section>
			)}
		</div>
	);
}
