import { test, expect } from '@playwright/test';
import { getStartedLink } from '../fixtures/selectors';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.use({ browserName: 'chromium' });

test.only('get started link', async ({ context }) => {
  const page = await context.newPage();

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.locator(getStartedLink).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
