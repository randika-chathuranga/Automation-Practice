import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/auth/login');
  
  
  await page.getByPlaceholder('email@example.com').fill('amaanrc11@gmail.vom');
  
  await page.getByPlaceholder('enter your passsword').fill('amaan345');

  await page.waitForTimeout(5000);
  
});