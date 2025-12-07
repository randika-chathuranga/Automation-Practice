//import the 2 packages test & expect using the module playwright/test
//'expect' for adding validations


import { test, expect } from '@playwright/test';


//Fixture=>contains so many functions and through them we can use
//ex: page, request
//when ever pass the argument page fixture, before we use async
//when ever accessing the methods from the page, before we use await



/*
JS is asynchronous=>steps not dpend on the any steps, steps are executed paralley.
But we need to execute one steps after that only execute next step, to make it handle we use promise

when use async=> make the function return the promise
         await=>                   wait for the promise

*/


test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  //how to capture the title.
  const pageTitle = page.title();
  const url = page.url();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('hello machn');
  await page.close();
});


test('check feeling happy btn click', async ({ page }) => {
  //click on the Google search button
  await page.getByRole('button', { name: "I'm Feeling Happy" }).click({ timeout: 60000 });
  //Expecting page is redirected to happy page
  await expect(page.goto('https://doodles.google/'))
});


/*
A parameter is the variable defined in the function definition.
It’s like a placeholder that waits to receive a value.

An argument is the actual value you pass into the function when calling it.
*/

