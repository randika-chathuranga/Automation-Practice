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


test('Locate multiple elements', async({page})=>{

    await page.goto('https://www.saucedemo.com/inventory.html');

    // const links = await page.$$('a');
    // for(const link of links){
    //     const imgs = await link.$$('img');

    //     for (const img of imgs) {
    //         // Extract the 'src' attribute from the <img> tag
    //         const imgSrc = await img.getAttribute('src');
    //         console.log(imgSrc); // Log the image source
    //     }
    // }

    //page.waitForSelector("//div[@data-test='inventory-list']//div[@data-test='inventory-item-name']");
    const products = await page.$$("//div[@data-test='inventory-list']//div[@data-test='inventory-item-name']");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }


    //if we having list and we need to select the element in specific place
    // you can choose a specific element from a list with locator.first(), locator.last() or locator.nth().
    const banana = await page.getByRole('listitem').nth(1);


    //we can use filter method also.
    const rowLocator = page.getByRole('listitem');

    await rowLocator
        .filter({ hasText: 'Mary' })
        .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })
        .screenshot({ path: 'screenshot.png' });

})



