import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests/e2e",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		baseURL:
			process.env.PLAYWRIGHT_BASE_URL ||
			process.env.E2E_BASE_URL ||
			"http://localhost:3000",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
		// Bypass Vercel Deployment Protection on preview/staged deployments.
		// Set VERCEL_AUTOMATION_BYPASS_SECRET in GitHub secrets and Vercel
		// Project Settings → Deployment Protection → Protection Bypass for Automation.
		...(process.env.VERCEL_AUTOMATION_BYPASS_SECRET
			? {
					extraHTTPHeaders: {
						"x-vercel-protection-bypass":
							process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
					},
				}
			: {}),
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "mobile",
			use: { ...devices["Pixel 7"] },
		},
		{
			name: "tablet",
			use: { ...devices["Galaxy Tab S4"] },
		},
	],
	...(!process.env.PLAYWRIGHT_BASE_URL
		? {
				webServer: {
					command: "bun run dev",
					url: "http://localhost:3000",
					reuseExistingServer: !process.env.CI,
					timeout: 120_000,
				},
			}
		: {}),
});
