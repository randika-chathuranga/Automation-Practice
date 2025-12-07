import { test, expect } from '@playwright/test';
//expect use for validations

//property/css/xpaths


//page is fixture.
test('Locators', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    await page.locator('id=login').click();

    //provide username
    await page.locator('id=user-name').fill('standard_user');

    //click on username button
    await page.locator('id=password').fill('secret_sauce');


    //use css=>selector hub, enter that input field with #, then check that element is highlighted
    await page.locator('#password').fill('secret_sauce');


    //this is another way we use the Css
    await page.locator("//input[@id='login-button']").click();


    //this is X PATH => Selector hub-->Rel Xpath
    await page.locator("//butto.....]").click();



    //click on login button
    //await page.locator('id=login-button').click();
    //await page.click("//input[@id='login-button']");

    //check the page is redirected
    const loginpage = await page.goto('https://www.saucedemo.com/inventory.html');

    //use assertion
    //const loginLink = expect(loginpage).toBeVisible();

    await page.close();

})