import { test, expect } from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';
const loginPage = require("../pages/LoginPage");
const logOutPage = require("../pages/HomePage");

test('login And logout', async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const login =  new loginPage(page);
    await login.loginToApplication();
    

    const logout =  new logOutPage(page);
    await logout.logOutFromApplication();

    await page.waitForTimeout(5000);
});
