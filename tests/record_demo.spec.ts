import { test, expect } from '@playwright/test';


test.describe('Log-in Feature', () => {
  test('Login', async ({ page }) => {
    await page.locator('body').click();
    await page.goto('https://dev-identifi.vercel.app/login');
    await page.locator('[data-test="email\\.input"]').click();
    await page.locator('[data-test="email\\.input"]').fill('tabornok2105@gmail.com');
    await page.locator('[data-test="email\\.input"]').press('Enter');
    await page.locator('[data-test="password\\.input"]').click();
    await page.locator('[data-test="password\\.input"]').fill('Tagaytay123');
    await page.locator('[data-test="password\\.input"]').press('Enter');
  });

  test('Check-in', async ({ page }) => {
    await page.locator('body').click();
    await page.goto('https://dev-identifi.vercel.app/login');
    await page.locator('[data-test="email\\.input"]').click();
    await page.locator('[data-test="email\\.input"]').fill('tabornok2105@gmail.com');
    await page.locator('[data-test="email\\.input"]').press('Enter');
    await page.locator('[data-test="password\\.input"]').click();
    await page.locator('[data-test="password\\.input"]').fill('Tagaytay123');
    await page.locator('[data-test="password\\.input"]').press('Enter');
  });

})

