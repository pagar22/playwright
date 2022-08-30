import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to about:blank
  await page.goto('about:blank');

  // Go to http://localhost:19006/
  await page.goto('http://localhost:19006/');

  // Go to http://localhost:19006/pre-login
  await page.goto('http://localhost:19006/pre-login');

  // Click div[role="button"]:has-text("Start")
  await page.locator('div[role="button"]:has-text("Start")').click();
  await expect(page).toHaveURL('http://localhost:19006/login/fan');

  // Click [placeholder="\31 76 456 87 910"]
  await page.locator('[placeholder="\\31 76 456 87 910"]').click();

  // Fill [placeholder="\31 76 456 87 910"]
  await page.locator('[placeholder="\\31 76 456 87 910"]').fill('15223703461');

  // Click div[role="button"]:has-text("Weiter")
  await page.locator('div[role="button"]:has-text("Weiter")').click();
  await expect(page).toHaveURL('http://localhost:19006/login/code-verification');

  // Fill [placeholder="\31 23456"]
  await page.locator('[placeholder="\\31 23456"]').fill('654321');
  await expect(page).toHaveURL('http://localhost:19006/marketplace');

});