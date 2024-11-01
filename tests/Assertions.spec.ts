import { test, expect } from '@playwright/test';

test('Locators', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    //provide username
    await page.locator('id=user-name').fill('standard_user');

    //click on username button
    await page.locator('id=password').fill('secret_sauce');

    //click on login button
    await page.locator('id=login-button').click();
    //await page.click("//input[@id='login-button']")
    await page.goto('https://www.saucedemo.com/inventory.html');
})


test('assertions', async({page})=>{
    //hard assertions
    await expect(page).toHaveTitle('');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator("//button[@id='react-burger-menu-btn']")).toBeVisible();
})


test('soft-assertions', async({page})=>{
    //soft assertions
    await expect.soft(page).toHaveTitle('');
    await expect.soft(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect.soft(page.locator("//button[@id='react-burger-menu-btn']")).toBeVisible();
})
