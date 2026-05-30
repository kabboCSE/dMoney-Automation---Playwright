
import { test, expect } from '@playwright/test';

test("example", async ({ page }) => {

    await page.goto("https://dmoneyportal.roadtocareer.net/login");

    await page.getByRole("textbox", { name: "Email or Phone Number" }).fill("admin@dmoney.com")
    await page.getByRole("textbox", { name: "Password" }).fill("1234");
    await page.getByRole("button", { name: "LOGIN" }).click();
    // await expect(page.getByRole('banner')).toContainText('Admin Dashboard');

    // type : 2
    const headerText = await page.getByText('Admin Dashboard').textContent();
    expect(headerText).toContain("Admin Dashboard");
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
    await page.pause();

    //type : 3
    // await expect(page.getByText("Admin Dashboard")).toContainText("Admin Dashboard")

})

