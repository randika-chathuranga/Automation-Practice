import { test, expect } from '@playwright/test';
//expect use for validations

//property/css/xpaths


//page is fixture.
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
    const loginpage = await page.goto('https://www.saucedemo.com/inventory.html');

    //use assertion
    //const loginLink = expect(loginpage).toBeVisible();

    await page.close();

})