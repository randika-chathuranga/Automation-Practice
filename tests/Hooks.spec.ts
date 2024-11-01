import {test, expect} from '@playwright/test';

let page;

//1. beforeEach->homepage->afterEach test run this flow first time
//2. beforeEach->add products to the cart->afterEach test run this flow second time

test.beforeEach(async({browser})=>{        
    page = await browser.newPage();
    //login related test
    await page.goto(".....");
})

test.afterEach(async()=>{
    //logout related tests
    await page.locator('#logout2').click();
})

test('Home page', async({page})=>{
    //home page redirection and check element test
    // in these scenarios also should avoid passign {page} fixture. already we have defined one and need to use that page instance everywhere.
})

test('add products to the cart', async({page})=>{
    //add product related test
})


///need to check configuration on plaright.config.ts file
//fullyParallel: false;
//workers: process.env.CI ? 1 : undefined,
//what we have on the basis of the exact way to work for hard something for a reason.

//--------------------------------------------------------------------------------------------------------------------------------


//beforeAll->home page->add product->afterAll   //execute only once in one sequence of process.

test.beforeAll(async({browser})=>{        
    page = await browser.newPage();
    //login related test
    await page.goto(".....")
})

test.afterAll(async()=>{
    //logout related tests
    await page.locator('#logout2').click();
})