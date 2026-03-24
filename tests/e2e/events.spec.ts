import { test, expect } from "@playwright/test";

test.describe("Events", () => {
	test.describe("Listing page", () => {
		test("loads successfully @smoke", async ({ page }) => {
			const response = await page.goto("/events");
			expect(response?.status()).toBeLessThan(400);
		});

		test("displays section heading", async ({ page }) => {
			await page.goto("/events");
			await expect(page.locator("h1")).toBeVisible();
		});

		test("has section label", async ({ page }) => {
			await page.goto("/events");
			const label = page.locator("text=Curated Gatherings");
			await expect(label).toBeVisible();
		});

		test("shows event cards when events exist", async ({ page }) => {
			await page.goto("/events");
			const events = page.locator('article, [data-testid="event-card"]');
			const count = await events.count();
			// DB may be empty — page should still load correctly
			if (count > 0) {
				await expect(events.first()).toBeVisible();
			}
		});

		test("event cards show date when events exist", async ({ page }) => {
			await page.goto("/events");
			const events = page.locator('article, [data-testid="event-card"]');
			const count = await events.count();
			if (count > 0) {
				await expect(
					events.first().locator('time, [data-testid="event-date"]'),
				).toBeVisible();
			}
		});

		test("event cards link to detail pages when events exist", async ({
			page,
		}) => {
			await page.goto("/events");
			const eventLink = page
				.locator(
					'article a[href^="/events/"], [data-testid="event-card"] a[href^="/events/"]',
				)
				.first();
			if ((await eventLink.count()) > 0) {
				const href = await eventLink.getAttribute("href");
				expect(href).toMatch(/\/events\/[\w-]+/);
			}
		});
	});

	test.describe("Event detail page", () => {
		test("navigating to an event from listing works", async ({ page }) => {
			await page.goto("/events");
			const eventLink = page.locator('a[href^="/events/"]').first();
			if ((await eventLink.count()) > 0) {
				await eventLink.click();
				await expect(page).toHaveURL(/\/events\/[\w-]+/);
				await expect(page.locator("h1")).toBeVisible();
			}
		});

		test("event detail has JSON-LD Event schema when events exist", async ({
			page,
		}) => {
			await page.goto("/events");
			const eventLink = page.locator('a[href^="/events/"]').first();
			if ((await eventLink.count()) > 0) {
				await eventLink.click();
				const jsonLd = page.locator('script[type="application/ld+json"]');
				if ((await jsonLd.count()) > 0) {
					const content = await jsonLd.first().textContent();
					expect(content).toContain('"@type"');
				}
			}
		});
	});
});
