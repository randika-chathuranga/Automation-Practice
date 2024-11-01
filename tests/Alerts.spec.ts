import { test, expect } from '@playwright/test';

test.skip('Alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click("//button[normalize-space()='Alert']");
    await page.waitForTimeout(5000);
});




test.skip('confirm-box', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by using Ok btn
        //await dialog.dismiss(); //close by using cancel btn
    })

    await page.click("//button[normalize-space()='Confirm Box']");
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")
    await page.waitForTimeout(5000);
});



test('prompt', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John'); //close by using Ok btn
        //await dialog.dismiss(); //close by using cancel btn
    })

    await page.click("//button[normalize-space()='Prompt']");
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?")
    await page.waitForTimeout(5000);

});



