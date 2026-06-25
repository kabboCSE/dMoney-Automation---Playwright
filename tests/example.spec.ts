
import { test, expect, Page } from '@playwright/test';
let page:Page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage();
})

test.afterAll(async()=>{
    await page.close();
})

test("example", async () => {

    await page.goto("https://dmoneyportal.roadtocareer.net/login");

    await page.getByRole("textbox", { name: "Email or Phone Number" }).fill("admin@dmoney.com")
    await page.getByRole("textbox", { name: "Password" }).fill("1234");
    await page.getByRole("button", { name: "LOGIN" }).click();
    // await expect(page.getByRole('banner')).toContainText('Admin Dashboard');

    // type : 2
    const headerText = await page.getByText('Admin Dashboard').textContent();
    expect(headerText).toContain("Admin Dashboard");
   
    //type : 3
    // await expect(page.getByText("Admin Dashboard")).toContainText("Admin Dashboard")

})

test("Search by user", async () =>{
     await page.getByRole('link', { name: 'User List' }).click();

    // await page.getByText('Search by ID').click();

    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Search by ID' }).click();
    await page.getByRole('textbox', { name: 'Enter User ID' }).click();
    await page.getByRole('textbox', { name: 'Enter User ID' }).fill('104356');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'View' }).click();
    await expect(page).toHaveURL(/.*\/users\/104356$/);
    // await page.pause();



} )

test("Create New user", async()=>{
      await page.getByRole('link', { name: 'Create User' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Sahil Test');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sahil@mail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('01627963258');
  await page.getByRole('textbox', { name: 'NID' }).click();
  await page.getByRole('textbox', { name: 'NID' }).fill('454353535435');
//   await page.getByLabel('', { exact: true }).click();
await page.getByRole('combobox', { exact: true }).click();
await page.locator('.MuiOutlinedInput-notchedOutline').nth(0).press('ArrowDown')
await page.locator('.MuiOutlinedInput-notchedOutline').nth(0).press('ArrowDown')
await page.locator('.MuiOutlinedInput-notchedOutline').nth(0).press('Enter')
//   await page.getByRole('option', { name: 'Customer' }).click();
  await page.getByRole('button', { name: 'Create User' }).click();
})
