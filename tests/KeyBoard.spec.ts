import {test, expect} from '@playwright/test';


//KeyBoard
test.skip('KeyBoard', async({page})=>{
    await page.goto("https://www.diffchecker.com/");

    await page.locator("//div[@aria-label='Original text input']").fill("text");

    //ctrl + A
    await page.keyboard.press('Control+A');
    //ctrl + C
    await page.keyboard.press('Control+C');
    //ctrl + V
    await page.keyboard.press('Control+V');

    //can use these two commands also
    // await page.keyboard.down('Tab');
    // await page.keyboard.up('Tab');

})