import { test, expect } from "@playwright/test";

test.describe("Premium Content", () => {
	test.describe("Premium hub page", () => {
		test("loads successfully @smoke", async ({ page }) => {
			const response = await page.goto("/premium");
			expect(response?.status()).toBeLessThan(400);
		});

		test("displays heading", async ({ page }) => {
			await page.goto("/premium");
			await expect(page.locator("h1")).toBeVisible();
		});

		test("shows pricing section", async ({ page }) => {
			await page.goto("/premium");
			const pricing = page.locator(
				'section#pricing, :has-text("Choose your level")',
			);
			await expect(pricing.first()).toBeVisible();
		});

		test("has Community and Full Access tiers", async ({ page }) => {
			await page.goto("/premium");
			await expect(page.locator('h3:has-text("Community")')).toBeVisible();
			await expect(page.locator('h3:has-text("Full Access")')).toBeVisible();
		});

		test("has registration CTAs", async ({ page }) => {
			await page.goto("/premium");
			const joinCta = page.locator('a:has-text("Join the Community")');
			const upgradeCta = page.locator('a:has-text("Upgrade to Full Access")');
			await expect(joinCta).toBeVisible();
			await expect(upgradeCta).toBeVisible();
		});

		test("CTAs link to registration", async ({ page }) => {
			await page.goto("/premium");
			const joinCta = page.locator('a:has-text("Join the Community")');
			await expect(joinCta).toHaveAttribute("href", "/register");
			const upgradeCta = page.locator('a:has-text("Upgrade to Full Access")');
			await expect(upgradeCta).toHaveAttribute(
				"href",
				"/register?plan=full-access",
			);
		});
	});

	test.describe("Auth flow", () => {
		test("login page loads @smoke", async ({ page }) => {
			const response = await page.goto("/login", {
				waitUntil: "domcontentloaded",
			});
			expect(response?.status()).toBeLessThan(400);
			await expect(page.locator("h1")).toBeVisible({ timeout: 15000 });
		});

		test("login page has email and password fields", async ({ page }) => {
			await page.goto("/login", { waitUntil: "domcontentloaded" });
			await expect(page.locator('input[name="email"]')).toBeVisible({
				timeout: 15000,
			});
			await expect(page.locator('input[name="password"]')).toBeVisible();
			await expect(page.locator('button[type="submit"]')).toBeVisible();
		});

		test("register page loads @smoke", async ({ page }) => {
			const response = await page.goto("/register", {
				waitUntil: "domcontentloaded",
			});
			expect(response?.status()).toBeLessThan(400);
			await expect(page.locator("h1")).toBeVisible({ timeout: 15000 });
		});

		test("register page has form fields", async ({ page }) => {
			await page.goto("/register", { waitUntil: "domcontentloaded" });
			await expect(page.locator('input[name="name"]')).toBeVisible({
				timeout: 15000,
			});
			await expect(page.locator('input[name="email"]')).toBeVisible();
			await expect(page.locator('input[name="password"]')).toBeVisible();
			await expect(page.locator('button[type="submit"]')).toBeVisible();
		});

		test("register page links to login", async ({ page }) => {
			await page.goto("/register", { waitUntil: "domcontentloaded" });
			const loginLink = page.locator('a[href="/login"]');
			await expect(loginLink).toBeVisible({ timeout: 15000 });
		});
	});
});
