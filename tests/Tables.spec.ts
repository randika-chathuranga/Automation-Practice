import {test, expect} from '@playwright/test';


//this is related  to pagination table.
test('Frames', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator('#productTable');
    //if we can capture <th> count then we know the columns count

    const columns = table.locator('thead tr th');
    console.log("number of columns", await columns.count());
    await expect(await columns.count()).toBe(4);

    //if we know the <tr> count then we knows rows
    const rows = table.locator('tbody tr');
    console.log('Number of rows', await rows.count());


    //select the checkbox for product 4

    // const matchedRows = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 4'
    // })
    // await matchedRows.locator('input').check();
    // await page.waitForTimeout(5000);





    //select multiple products 

    // await selectProduct(rows, page, 'Product 1');
    // await selectProduct(rows, page, 'Product 3');
    // await selectProduct(rows, page, 'Product 4');



    //print all the product details in the first page using loop

    // for(let i = 0; i < await rows.count(); i++){
    //     const row = rows.nth(i);
    //     const tds = rows.locator('td');

    //     for(let j = 0; j < await tds.count() - 1; j++){
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }




    //Read data form all the pages
    const pages = await page.locator('.pagination li a');

    for(let p = 0; p < await pages.count(); p++){
        if(p<0){
            await pages.nth(p).click();
        }
        for(let i = 0; i < await rows.count(); i++){
            const row = rows.nth(i);
            const tds = rows.locator('td');
    
            for(let j = 0; j < await tds.count() - 1; j++){
                console.log(await tds.nth(j).textContent());
            }
        }
    }

})

 
async function selectProduct(rows, page, name){
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRows.locator('input').check();
}
