import { chromium } from "@playwright/test";

/**
 * Global setup for canary runs. Navigates to /?vcrrForceCanary=true so Vercel
 * sets the rolling-release cookie, then saves the storage state so all test
 * workers inherit the pinned canary session.
 */
export default async function setup() {
	const baseURL =
		process.env.PLAYWRIGHT_BASE_URL ||
		process.env.E2E_BASE_URL ||
		"http://localhost:3000";

	const browser = await chromium.launch();
	const context = await browser.newContext({
		...(process.env.VERCEL_AUTOMATION_BYPASS_SECRET
			? {
					extraHTTPHeaders: {
						"x-vercel-protection-bypass":
							process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
					},
				}
			: {}),
	});

	const page = await context.newPage();
	await page.goto(`${baseURL}/?vcrrForceCanary=true`);

	// Persist cookies so all test workers start with the canary session
	await context.storageState({ path: "tests/e2e/.canary-state.json" });
	await browser.close();
}
