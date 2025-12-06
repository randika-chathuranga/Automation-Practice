//import the 2 packages test & expect using the module playwright/test
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('check feeling happy btn click', async ({ page }) => {
  //click on the Google search button
  await page.getByRole('button', { name: "I'm Feeling Happy" }).click({ timeout: 60000 });
  //Expecting page is redirected to happy page
  await expect(page.goto('https://doodles.google/'))
});
