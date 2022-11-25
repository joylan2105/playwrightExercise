import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page, context }) => {
  await context.tracing.start({ snapshots: true, screenshots: true });

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
  await context.tracing.stop({path:'test1_trace.zip'})
});
