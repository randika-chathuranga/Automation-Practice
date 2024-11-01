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

test('input', async({page})=>{
    await page.goto('https://saucelabs.com/request-demo');

    await expect(await page.locator("//input[@id='Email']")).toBeVisible();
    //check input box is empty
    await expect(await page.locator("//input[@id='Email']")).toBeEmpty();
    //check editable
    await expect(await page.locator("//input[@id='Email']")).toBeEditable();
    //enable
    await expect(await page.locator("//input[@id='Email']")).toBeEnabled();

    await page.locator("//input[@id='Email']").fill('hello@gmail.com');
    await page.waitForTimeout(5000);
})


//for check boxes

test('input-check-boxes', async({page})=>{
    await page.goto('https://saucelabs.com/request-demo');

    //put tick on radio btn
    await expect(await page.locator("//input[@value='Option1']")).toBeChecked();
    //check whether it is checked
    await expect(await page.locator("//input[@value='Option1']").isChecked()).toBeTruthy();
    //check other button is not cheked
    await expect(await page.locator("//input[@value='Option2']").isChecked()).toBeFalsy();
})




