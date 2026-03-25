import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("loads successfully with correct title @smoke", async ({ page }) => {
		await expect(page).toHaveTitle(/AHA Software/);
		const response = await page.goto("/");
		expect(response?.status()).toBeLessThan(400);
	});

	test("displays hero heading", async ({ page }) => {
		const h1 = page.locator("h1");
		await expect(h1).toBeVisible();
	});

	test("hero section has CTA button", async ({ page }) => {
		// The hero is a <header> element but there may be a nav <header> before it
		// in the DOM. Search page-wide for the unique CTA text instead of scoping
		// by element type. Use toBeAttached() to avoid failures from the
		// AnimateOnScroll opacity-0 initial state before IntersectionObserver fires.
		const cta = page
			.locator(
				'a:has-text("Start the Transformation"), a:has-text("Our Methodology")',
			)
			.first();
		await expect(cta).toBeAttached();
	});

	test("has Core Pillars section", async ({ page }) => {
		const pillarsHeading = page.locator("h2").filter({
			hasText: /Pillars/i,
		});
		await expect(pillarsHeading.first()).toBeVisible();
	});

	test("has Spec Kit section", async ({ page }) => {
		const specKitHeading = page.locator('h2:has-text("Spec Kit")');
		await expect(specKitHeading).toBeVisible();
	});

	test("has Insights / blog preview section", async ({ page }) => {
		const insightsHeading = page.locator('h2:has-text("Insights")');
		await expect(insightsHeading).toBeVisible();
	});

	test("has Contact section with form", async ({ page }) => {
		const contactSection = page.locator("section#contact");
		await expect(contactSection).toBeVisible();
		await expect(contactSection.locator("form")).toBeVisible();
	});

	test("nav has navigation links", async ({ page }) => {
		const nav = page.locator("nav").first();
		await expect(nav).toBeVisible();
		const navLink = nav.locator("a").first();
		await expect(navLink).toBeVisible();
	});

	test("footer is visible", async ({ page }) => {
		await expect(page.locator("footer")).toBeVisible();
	});

	test("page has no console errors @smoke", async ({ page }) => {
		const errors: string[] = [];
		page.on("console", (msg) => {
			if (msg.type() === "error") errors.push(msg.text());
		});
		await page.goto("/");
		await page.waitForLoadState("networkidle");
		const realErrors = errors.filter(
			(e) =>
				!e.includes("HMR") &&
				!e.includes("DevTools") &&
				!e.includes("Warning:") &&
				!e.includes("Failed to load resource") &&
				// CORS rejection of x-vercel-protection-bypass on third-party CDNs
				// (Google Fonts, etc.) is a CI artifact, not an app error.
				!e.includes("x-vercel-protection-bypass"),
		);
		expect(realErrors).toHaveLength(0);
	});

	test("all images have alt attributes", async ({ page }) => {
		const images = page.locator("img");
		const count = await images.count();
		for (let i = 0; i < count; i++) {
			const alt = await images.nth(i).getAttribute("alt");
			expect(alt).not.toBeNull();
		}
	});
});
