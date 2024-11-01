import { test, expect, chromium } from '@playwright/test';

test("multiple pages", async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = await context.pages();

    await page1.goto("https://www.google.com");
    await expect(page1).toHaveTitle("Google");

    const pagePromise = context.waitForEvent('page');
    await page1.locator('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList').click();

    const newPage = await pagePromise;
    //await page2.goto("https://ikman.lk")

    const page3 = context.waitForEvent('page');
    await page1.locator('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

    //here we have separate places to work on add.addEventListener('type', listener, options)
    const allTimePrefer = (await context.waitForEvent('page'));

    const page4 = context.waitForEvent('page');

    const h1 = expect(page1);
})


