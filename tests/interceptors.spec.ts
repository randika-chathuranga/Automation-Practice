//without interceptors

const { test, expect } = require('@playwright/test');

test('fetch user data from API without interceptors', async ({ page }) => {
  // Navigate to the page that makes the API call
  await page.goto('https://example.com'); // Replace with your actual URL

  // Trigger the API call (e.g., by clicking a button)
  await page.click('button#load-data'); // Replace with your actual button selector

  // Wait for the content to be rendered
  const itemName = await page.locator('h1#item-name'); // Replace with your actual selector
  await expect(itemName).toHaveText('John Doe'); // Check for the expected user name

  const itemDescription = await page.locator('p#item-description'); // Replace with your actual selector
  await expect(itemDescription).toHaveText('Description for John Doe'); // Check for the expected description
});

/* 

What Happens Here:
The test navigates to the web page and triggers the API call to fetch user data.
If the API is reachable and returns the expected data, the test passes.
If the API is down or returns unexpected data, the test could fail, making it dependent on external factors.

*/




//with interceptors

test('fetch user data from API with interceptors', async ({ page }) => {
  // Intercept the network request to the API endpoint
  await page.route('https://example.com/api/users', async (route) => {
    // Create a mocked response
    const mockResponse = {
      data: {
        id: 1,
        name: 'John Doe',
        description: 'Description for John Doe',
      },
    };

    // Respond with the mocked response
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(mockResponse),
    });
  });

  // Navigate to the page that makes the API call
  await page.goto('https://example.com'); // Replace with your actual URL

  // Trigger the API call (e.g., by clicking a button)
  await page.click('button#load-data'); // Replace with your actual button selector

  // Wait for the content to be rendered
  const itemName = await page.locator('h1#item-name'); // Replace with your actual selector
  await expect(itemName).toHaveText('John Doe'); // Check for the expected user name

  const itemDescription = await page.locator('p#item-description'); // Replace with your actual selector
  await expect(itemDescription).toHaveText('Description for John Doe'); // Check for the expected description
});


/*

What Happens Here:
The test intercepts requests to the API endpoint and provides a predefined mocked response.
The test does not depend on the actual API; it will always pass as long as the mock data is correctly structured.
This makes the test more reliable and faster since it doesn’t rely on network conditions or the state of the backend.

*/