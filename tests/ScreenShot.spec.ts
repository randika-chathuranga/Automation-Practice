import {test, expect} from '@playwright/test';

test('Page Screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/en-gb?route=common/home');
    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'HomePage.png'})
});


test('Full page Screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/en-gb?route=common/home');
    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true})
});


test.only('Element Screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/en-gb?route=common/home');
    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path: 'tests/screenshots/' + Date.now() + 'MacBook.png'})
});