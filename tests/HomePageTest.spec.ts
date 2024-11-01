import { test, expect } from '@playwright/test';

test('home page', async ({page})=>{
    await page.goto('https://www.logitech.com') //page.goto statement wait till the page is loaded. after that next step will be executed
    
    const pageTitle = await page.title();
    console.log(pageTitle);

    const pageUrl = await page.url();

    await expect(page).toHaveTitle('Logitech | Official Online Store');
    await page.close();

    //--------------------------------------------------------------------------------------------------------


    //For select option from dropdown(many ways)
    await page.locator(".product_sort_container").selectOption({label: "Name (Z to A)"});
    await page.locator(".product_sort_container").selectOption("Name (Z to A)");

    //visible text in dropdown option and value attribute e=may be same or not. If not same,
    await page.locator(".product_sort_container").selectOption({value: "india_value"});
    await page.locator(".product_sort_container").selectOption({index: 2});
    await page.selectOption(".product_sort_container", "india");


    // for checking drop down options count and other stuffs
    const options = await page.locator(".product_sort_container");
    await expect(options).toHaveCount(10);

    // Check number of options indropdown - Approach 2
    const option = await page.$$('.product_sort_container')
    await expect(option.length).toBe(10);

    //check the presence of the value in dropdown.
    const content = await page.locator(".product_sort_container").textContent();
    await expect(content?.includes('india')).toBeTruthy();


    //check presence of value
    const optionForSecondMethod = await page.$$('.product_sort_container');
    let status = false;
    for(const opt of optionForSecondMethod){
        let value = await opt.textContent();
        if(value?.includes("France")){
            status = true;
            break;
        }
        
    }
    expect(status).toBeTruthy();



    
})