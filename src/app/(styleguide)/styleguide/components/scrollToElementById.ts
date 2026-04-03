const DEFAULT_HEADER_OFFSET = 80;

export function scrollToElementById(
	id: string,
	offset = DEFAULT_HEADER_OFFSET,
) {
	const el = document.getElementById(id);
	if (!el) return;

	const top = el.getBoundingClientRect().top + window.scrollY - offset;
	window.scrollTo({ top, behavior: "smooth" });
}
