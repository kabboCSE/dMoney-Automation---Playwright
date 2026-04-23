 
 import { test, expect } from '@playwright/test';

test("example", async({page})=>{

    await page.goto("https://dmoneyportal.roadtocareer.net/login");

     await page.getByRole("textbox",{name:"Email or Phone Number"}).fill("admin@dmoney.com")
    await page.getByRole("textbox",{name:"Password"}).fill("1234");
    await page.getByRole("button",{name:"LOGIN"}).click();
    // await expect(page.getByRole('banner')).toContainText('Admin Dashboard');

    // type : 2
    const headerText = await page.getByText('Admin Dashboard').textContent();
    expect(headerText).toContain("Admin Dashboard")

    //type : 3
    // await expect(page.getByText("Admin Dashboard")).toContainText("Admin Dashboard")

})

