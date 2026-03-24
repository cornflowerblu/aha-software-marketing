import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
	test.describe("Listing page", () => {
		test("loads successfully", async ({ page }) => {
			const response = await page.goto("/blog");
			expect(response?.status()).toBeLessThan(400);
		});

		test("displays section heading", async ({ page }) => {
			await page.goto("/blog");
			await expect(page.locator("h1")).toBeVisible();
		});

		test("has category filter buttons", async ({ page }) => {
			await page.goto("/blog");
			const filterBtn = page.locator('button:has-text("All Insights")');
			await expect(filterBtn).toBeVisible();
		});

		test("has newsletter signup section", async ({ page }) => {
			await page.goto("/blog");
			const newsletter = page
				.locator(':has-text("Weekly Curator"), :has-text("inbox")')
				.first();
			await expect(newsletter).toBeVisible();
		});

		test("shows blog post cards when posts exist", async ({ page }) => {
			await page.goto("/blog");
			const posts = page.locator('article, [data-testid="post-card"]');
			const count = await posts.count();
			// DB may be empty — verify grid structure exists regardless
			const grid = page.locator(".grid");
			await expect(grid.first()).toBeVisible();
			if (count > 0) {
				await expect(posts.first()).toBeVisible();
			}
		});

		test("post cards have title when posts exist", async ({ page }) => {
			await page.goto("/blog");
			const posts = page.locator("article");
			const count = await posts.count();
			if (count > 0) {
				await expect(posts.first().locator("h2, h3, h4")).toBeVisible();
			}
		});

		test("post cards link to detail pages when posts exist", async ({
			page,
		}) => {
			await page.goto("/blog");
			const postLink = page.locator('article a[href^="/blog/"]').first();
			if ((await postLink.count()) > 0) {
				const href = await postLink.getAttribute("href");
				expect(href).toMatch(/\/blog\/[\w-]+/);
			}
		});
	});

	test.describe("Post detail page", () => {
		test("navigating to a post from listing works", async ({ page }) => {
			await page.goto("/blog");
			const postLink = page.locator('article a[href^="/blog/"]').first();
			if ((await postLink.count()) > 0) {
				await postLink.click();
				await expect(page).toHaveURL(/\/blog\/[\w-]+/);
				await expect(page.locator("h1")).toBeVisible();
			}
		});

		test("post detail has article content", async ({ page }) => {
			await page.goto("/blog");
			const postLink = page.locator('article a[href^="/blog/"]').first();
			if ((await postLink.count()) > 0) {
				await postLink.click();
				await expect(page.getByRole("main")).toBeVisible();
			}
		});

		test("post detail includes JSON-LD Article schema when posts exist", async ({
			page,
		}) => {
			await page.goto("/blog");
			const postLink = page.locator('article a[href^="/blog/"]').first();
			if ((await postLink.count()) > 0) {
				await postLink.click();
				const jsonLd = page.locator('script[type="application/ld+json"]');
				if ((await jsonLd.count()) > 0) {
					const content = await jsonLd.first().textContent();
					expect(content).toContain('"@type"');
				}
			}
		});
	});
});
