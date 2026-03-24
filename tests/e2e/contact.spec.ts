import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
	test("loads successfully", async ({ page }) => {
		const response = await page.goto("/contact");
		expect(response?.status()).toBeLessThan(400);
	});

	test("displays heading", async ({ page }) => {
		await page.goto("/contact");
		await expect(page.locator("h1, h2").first()).toBeVisible();
	});
});

test.describe("Homepage Contact Form", () => {
	// The main contact form lives on the homepage in section#contact
	test("has contact form with required fields", async ({ page }) => {
		await page.goto("/");
		const form = page.locator("section#contact form");
		await expect(form).toBeVisible();
		await expect(form.locator('input[name="name"]')).toBeVisible();
		await expect(form.locator('textarea[name="message"]')).toBeVisible();
		await expect(form.locator('button[type="submit"]')).toBeVisible();
	});

	test("contact form submit button has text", async ({ page }) => {
		await page.goto("/");
		const submit = page.locator('section#contact button[type="submit"]');
		await expect(submit).toBeVisible();
		const text = await submit.textContent();
		expect(text?.trim().length).toBeGreaterThan(0);
	});

	test("contact form has company field", async ({ page }) => {
		await page.goto("/");
		const companyInput = page.locator('section#contact input[name="company"]');
		await expect(companyInput).toBeVisible();
	});
});
