import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayloadClient } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { generateGoogleCalendarLink } from "@/lib/calendar";
import { resolveMediaUrl } from "@/lib/media";
import { generateEventSchema, generateBreadcrumbSchema } from "@/lib/seo";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CapacityBar from "@/components/events/CapacityBar";
import RegistrationForm from "@/components/events/RegistrationForm";
import EventHeroImage from "@/components/events/EventHeroImage";
import { Logger } from "next-axiom";

type Props = {
	params: Promise<{ slug: string }>;
};

interface EventDoc {
	id: string;
	slug: string;
	title: string;
	description?: Record<string, unknown>;
	date: string;
	endDate?: string;
	location?: string;
	capacity?: number;
	price?: number;
	status?: "upcoming" | "past" | "cancelled";
	registrationDeadline?: string;
	featuredImage?: { url?: string; alt?: string } | null;
	speaker?: {
		name?: string;
		title?: string;
		image?: { url?: string; alt?: string } | null;
	} | null;
	meta?: { title?: string; description?: string };
}

function formatDate(iso: string) {
	return new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(new Date(iso));
}

function formatTime(iso: string) {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		timeZoneName: "short",
	}).format(new Date(iso));
}

async function getEvent(slug: string): Promise<EventDoc | null> {
	try {
		const payload = await getPayloadClient();
		const result = await payload.find({
			collection: "events",
			where: { slug: { equals: slug } },
			depth: 2,
			limit: 1,
		});
		return (result.docs[0] as unknown as EventDoc) ?? null;
	} catch {
		return null;
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const event = await getEvent(slug);

	if (!event) return { title: "Event Not Found | AHA Software" };

	const title = event.meta?.title || `${event.title} | AHA Software`;
	const description =
		event.meta?.description || `Join us on ${formatDate(event.date)}`;
	const imageUrl =
		event.featuredImage && typeof event.featuredImage === "object"
			? resolveMediaUrl(event.featuredImage.url)
			: undefined;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
		},
	};
}

export default async function EventDetailPage({ params }: Props) {
	const { slug } = await params;
	const event = await getEvent(slug);

	if (!event) {
		const notFoundLog = new Logger();
		notFoundLog.warn("event_detail_not_found", { slug });
		await notFoundLog.flush();
		notFound();
	}

	const imageUrl =
		event.featuredImage && typeof event.featuredImage === "object"
			? resolveMediaUrl(event.featuredImage.url)
			: undefined;
	const imageAlt =
		event.featuredImage && typeof event.featuredImage === "object"
			? event.featuredImage.alt
			: undefined;

	const isPast = event.status === "past";

	const calendarLink = generateGoogleCalendarLink({
		title: event.title,
		date: event.date,
		endDate: event.endDate,
		location: event.location,
	});

	const timeRange = event.endDate
		? `${formatTime(event.date)} — ${formatTime(event.endDate)}`
		: formatTime(event.date);

	const breadcrumbLd = generateBreadcrumbSchema([
		{ name: "Home", url: "/" },
		{ name: "Events", url: "/events" },
		{ name: event.title, url: `/events/${event.slug}` },
	]);

	const jsonLd = generateEventSchema({
		title: event.title,
		slug: event.slug,
		date: event.date,
		...(event.endDate ? { endDate: event.endDate } : {}),
		...(event.location ? { location: event.location } : {}),
		...(event.price != null ? { price: event.price } : {}),
		...(event.capacity != null ? { capacity: event.capacity } : {}),
		...(imageUrl ? { featuredImage: { url: imageUrl, alt: imageAlt } } : {}),
	});

	// Speaker data (from CMS or fallback)
	const speakerName =
		event.speaker && typeof event.speaker === "object"
			? event.speaker.name
			: undefined;
	const speakerTitle =
		event.speaker && typeof event.speaker === "object"
			? event.speaker.title
			: undefined;
	const speakerImage =
		event.speaker &&
		typeof event.speaker === "object" &&
		event.speaker.image &&
		typeof event.speaker.image === "object"
			? event.speaker.image.url
			: undefined;

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
			/>

			{/* ───────── Hero Section ───────── */}
			<section className='pt-[120px] pb-20 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative overflow-hidden'>
				{/* Subtle radial glow */}
				<div
					className='absolute inset-0 opacity-[0.08] pointer-events-none'
					style={{
						backgroundImage:
							"radial-gradient(ellipse at 50% 50%, var(--color-primary-container) 0%, transparent 70%)",
					}}
				/>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12 relative w-full items-end'>
					{/* Left: headline + metadata (7 cols) */}
					<div className='lg:col-span-7 flex flex-col gap-4 items-start self-end'>
						<AnimateOnScroll animation='fade-up'>
							<SectionLabel color='tertiary'>
								{isPast ? "Past Event" : "Exclusive Workshop"}
							</SectionLabel>
						</AnimateOnScroll>

						<AnimateOnScroll animation='fade-up' delay={100}>
							<h1 className='font-headline text-5xl md:text-7xl tracking-tighter text-on-surface leading-[1]'>
								{/* Split the title for italic accent on the first period/comma phrase */}
								<EventHeadline title={event.title} />
							</h1>
						</AnimateOnScroll>

						<AnimateOnScroll animation='fade-up' delay={200}>
							<div className='flex flex-wrap gap-8 items-center pt-4'>
								<div className='flex items-center gap-3'>
									<span className='material-symbols-outlined text-primary text-xl'>
										calendar_today
									</span>
									<span className='font-body text-on-surface-variant'>
										{formatDate(event.date)}
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<span className='material-symbols-outlined text-primary text-xl'>
										schedule
									</span>
									<span className='font-body text-on-surface-variant'>
										{timeRange}
									</span>
								</div>
								{event.location && (
									<div className='flex items-center gap-3'>
										<span className='material-symbols-outlined text-primary text-xl'>
											distance
										</span>
										<span className='font-body text-on-surface-variant'>
											{event.location}
										</span>
									</div>
								)}
							</div>
						</AnimateOnScroll>
					</div>

					{/* Right: capacity card (5 cols) */}
					{event.capacity && !isPast && (
						<div className='lg:col-span-5 self-end hidden lg:block'>
							<CapacityBar capacity={event.capacity} registered={0} />
						</div>
					)}
				</div>
			</section>

			{/* ───────── Featured Image with Parallax ───────── */}
			{imageUrl && (
				<EventHeroImage src={imageUrl} alt={imageAlt || event.title} />
			)}

			{/* ───────── Content + Registration Sidebar ───────── */}
			<section className='px-6 md:px-12 max-w-[1440px] mx-auto w-full pb-32'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-x-20'>
					{/* Left: About the Session (7 cols) */}
					<div className='lg:col-span-7 flex flex-col gap-0'>
						<AnimateOnScroll>
							{/* Section heading */}
							<h2 className='font-headline italic text-[30px] leading-[36px] text-on-surface mb-8'>
								About the Session
							</h2>

							{/* Rich text content from Payload */}
							{event.description && (
								<div className='editorial-rich-text font-body text-lg text-on-surface-variant leading-[1.8] mb-8'>
									<RichText
										data={event.description as unknown as SerializedEditorState}
									/>
								</div>
							)}
						</AnimateOnScroll>

						{/* Coming Soon: Post-Event Recording */}
						<AnimateOnScroll delay={100}>
							<div className='bg-surface-container-low rounded-lg p-10'>
								<h3 className='font-headline text-2xl text-on-surface mb-6'>
									Coming Soon: Post-Event Recording
								</h3>
								<div className='bg-surface-dim rounded-sm flex items-center justify-center py-20 relative border border-dashed border-outline'>
									<div className='flex flex-col items-center gap-4'>
										<span className='material-symbols-outlined text-4xl text-outline opacity-60'>
											play_circle
										</span>
										<p className='font-label text-sm uppercase tracking-[0.1em] text-outline text-center'>
											Available 24h after live stream
										</p>
									</div>
								</div>
							</div>
						</AnimateOnScroll>
					</div>

					{/* Right: Registration sidebar (5 cols) */}
					<div className='lg:col-span-5 flex flex-col gap-8 self-start'>
						<div className='sticky top-28 space-y-8'>
							{/* Registration form */}
							{!isPast && (
								<RegistrationForm
									eventSlug={event.slug}
									eventTitle={event.title}
									eventDate={event.date}
									eventEndDate={event.endDate}
									eventLocation={event.location}
									registrationDeadline={event.registrationDeadline}
									calendarLink={calendarLink}
								/>
							)}

							{/* Past event: show recording placeholder instead */}
							{isPast && (
								<AnimateOnScroll delay={200}>
									<div className='bg-surface-container-lowest rounded-lg p-10 shadow-ambient ghost-border text-center'>
										<span className='material-symbols-outlined text-5xl text-outline mb-4 block'>
											lock_clock
										</span>
										<h3 className='font-headline text-2xl mb-2'>
											Event Concluded
										</h3>
										<p className='text-on-surface-variant font-body'>
											Recording will be available soon.
										</p>
									</div>
								</AnimateOnScroll>
							)}

							{/* Speaker / Host card */}
							{speakerName && (
								<AnimateOnScroll delay={300}>
									<div className='bg-surface-container-low rounded-lg p-8'>
										<p className='font-label text-xs uppercase tracking-[0.1em] text-outline mb-6'>
											Hosted By
										</p>
										<div className='flex items-center gap-4'>
											{/* Grayscale avatar */}
											<div className='relative size-16 rounded-xl overflow-hidden shrink-0 bg-surface-container-lowest'>
												{speakerImage ? (
													<>
														<Image
															src={speakerImage}
															alt={speakerName}
															fill
															className='object-cover'
														/>
														{/* Grayscale overlay via mix-blend-saturation */}
														<div className='absolute inset-0 bg-white mix-blend-saturation' />
													</>
												) : (
													<div className='w-full h-full flex items-center justify-center bg-surface-container'>
														<span className='material-symbols-outlined text-2xl text-outline'>
															person
														</span>
													</div>
												)}
											</div>
											<div>
												<p className='font-headline text-lg text-on-surface leading-7'>
													{speakerName}
												</p>
												{speakerTitle && (
													<p className='font-body text-sm text-on-surface-variant leading-5'>
														{speakerTitle}
													</p>
												)}
											</div>
										</div>
									</div>
								</AnimateOnScroll>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* ───────── Back link ───────── */}
			<div className='max-w-[1440px] mx-auto px-6 md:px-12 pb-20'>
				<div className='pt-8 border-t border-outline-variant/20'>
					<Link
						href='/events'
						className='inline-flex items-center gap-2 font-label text-sm uppercase tracking-widest text-primary hover:opacity-70 transition-opacity'
					>
						<span className='material-symbols-outlined text-sm'>
							arrow_back
						</span>
						All Events
					</Link>
				</div>
			</div>
		</>
	);
}

/**
 * Splits event title for the italic accent pattern from the Make reference.
 * If the title contains a comma, the word before the comma gets italic + primary color styling.
 * Otherwise renders as-is with the whole title in headline style.
 */
function EventHeadline({ title }: { title: string }) {
	// Try to split at first comma for italic accent
	const commaIndex = title.indexOf(",");
	if (commaIndex > 0) {
		const words = title.substring(0, commaIndex).split(" ");
		const lastWord = words.pop();
		const before = words.join(" ");
		const after = title.substring(commaIndex + 1);

		return (
			<>
				{before && <>{before} </>}
				<span className='font-headline italic text-primary'>{lastWord},</span>
				{after}
			</>
		);
	}

	return <>{title}</>;
}
