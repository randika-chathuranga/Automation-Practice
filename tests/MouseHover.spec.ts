import {test, expect} from '@playwright/test';


//mouse hover
test.skip('Mouse hover', async({page})=>{
    await page.goto("https://demo.opencart.com/");

    const desktop = await page.locator("//a[normalize-space()='Desktops']");
    const mac = await page.locator("//a[normalize-space()='Mac (1)']");

    await desktop.hover();
    await mac.hover();

    await page.waitForTimeout(5000);
})


//Right click
test.skip('Right Click', async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']");

    await button.click({button: "right"});

    await page.waitForTimeout(5000);
})


//double click
test('Double click', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const buttonCopy = await page.locator("//button[normalize-space()='Copy Text']");

    await buttonCopy.dblclick();

    await page.waitForTimeout(5000);
})








