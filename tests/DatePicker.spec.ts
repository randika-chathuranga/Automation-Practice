import {test, expect} from '@playwright/test';

test('Date Picker', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator('#datepicker').fill('09/22/2024');
    const year = '2024';
    const month = 'March';
    const date = '25';

    await page.click('#datepicker'); //opens the calander
    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear === year && currentMonth === month){
            break;
        }
        await page.locator("a[title='Next']").click();
    }

    //date selecting using loop.
    const dates = await page.$$("//a[@class='ui-state-default']");

    for(const dt of dates){
        if(await dt.textContent() === date){
            await dt.click();
            break;
        }
    }


    //date selection without loop(check this)

    await page.waitForTimeout(3000);


})