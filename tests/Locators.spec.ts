import { test, expect } from '@playwright/test';

test('Locators', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    //provide username
    await page.locator('id=user-name').fill('standard_user');

    //click on username button
    await page.locator('id=password').fill('secret_sauce');

    //click on login button
    //await page.locator('id=login-button').click();
    await page.click("//input[@id='login-button']");

    //check the page is redirected
    await page.goto('https://www.saucedemo.com/inventory.html');

})