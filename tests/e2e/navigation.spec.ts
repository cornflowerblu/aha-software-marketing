import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
	const pages = [
		{ path: "/", title: /AHA Software/ },
		{ path: "/blog", title: /AHA Software/ },
		{ path: "/events", title: /AHA Software/ },
		{ path: "/contact", title: /AHA Software/ },
		{ path: "/services", title: /AHA Software/ },
		{ path: "/premium", title: /AHA Software/ },
		{ path: "/login", title: /AHA Software/ },
		{ path: "/register", title: /AHA Software/ },
	];

	for (const { path, title } of pages) {
		test(`${path} loads successfully @smoke`, async ({ page }) => {
			const response = await page.goto(path);
			expect(response?.status()).toBeLessThan(400);
			await expect(page).toHaveTitle(title);
		});
	}

	test("nav links navigate to correct pages", async ({ page }) => {
		await page.goto("/");
		// Click Insights nav link (desktop)
		const insightsLink = page.locator('nav a:has-text("Insights")').first();
		if (await insightsLink.isVisible()) {
			await insightsLink.click();
			await expect(page).toHaveURL(/\/blog/);
		}
	});

	test("nav links have correct hrefs @smoke", async ({ page }) => {
		await page.goto("/");
		const expectedLinks = [
			{ text: "Services", href: "/services" },
			{ text: "Insights", href: "/blog" },
			{ text: "Events", href: "/events" },
			{ text: "Contact", href: "/contact" },
		];
		for (const { text, href } of expectedLinks) {
			const link = page.locator(`nav a:has-text("${text}")`).first();
			await expect(link).toHaveAttribute("href", href);
		}
	});
});
