import { test, expect } from "@playwright/test";
import * as path from "path";
import { faker } from "@faker-js/faker";

test("Travilo", async ({ page }) => {
  await page.goto("https://uat-partner.travilo.io");

  await page.getByRole("textbox", { name: "Enter your email" }).click();
  await page
    .getByRole("textbox", { name: "Enter your email" })
    .fill("kabbo@ibos.io");
  await page.getByRole("textbox", { name: "Enter your email" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Enter password" })
    .fill("00Developer999@");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Close" }).click();
await page.getByRole('button', { name: 'Journey Date' }).click();
  await page.getByText("30").nth(1).click();
  await page.getByRole("button", { name: "search Search" }).click();
  await page.getByRole("button", { name: "Select flight" }).first().click();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  await page.getByRole("textbox", { name: "First Name *" }).click();
  await page.getByRole("textbox", { name: "First Name *" }).fill(`${firstName}`);
  await page.getByRole("textbox", { name: "Last Name (Surname) *" }).click();
  await page
    .getByRole("textbox", { name: "Last Name (Surname) *" })
    .fill(`${lastName}`);

    await page.waitForTimeout(2000);
  await page.locator(".ant-picker-input").click();
  await page.getByRole("button", { name: "Choose a year" }).click();
  await page
    .getByRole("button", { name: "Last year (Control + left)" })
    .click();
  await page
    .getByRole("button", { name: "Last year (Control + left)" })
    .click();
  await page.getByText("1999", { exact: true }).click();
  await page.getByRole("cell", { name: "Aug" }).click();
  await page.getByRole('cell', { name: '18', exact: true }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.keyboard.press('Control+A');
await page.keyboard.press('Backspace');
  await page.getByRole('textbox', { name: 'Email *' }).fill(`${firstName.toLowerCase()}${lastName.toLowerCase()}@gmail.com`);
     await page.pause();
  await page.getByRole("textbox", { name: "Enter contact number" }).click();
  await page
    .getByRole("textbox", { name: "Enter contact number" })
    .fill("+880 162 750 5754");
  await page.getByRole("button", { name: "Preview Booking" }).click();
  await page.getByRole("button", { name: "Book & Hold" }).click();
  await page.waitForTimeout(2000);

  // await page.goto('https://uat-travilo.ibos.io/flight/checkout?flightId=FS0006-15&trackingId=TVL-639124503575398263&supplierCode=BS&step=2');
  // await page.getByRole('button', { name: 'Issue Ticket' }).click();
  // await page.goto('https://uat-travilo.ibos.io/flight/checkout?flightId=FS0006-15&trackingId=TVL-639124503575398263&supplierCode=BS&step=3');
  // await page.getByRole('link', { name: 'Void' }).click();
  // await page.getByRole('row', { name: 'MR RAHIM MIA Male 18 Aug,' }).getByLabel('', { exact: true }).check();
  // await page.goto('https://uat-travilo.ibos.io/void-request?trackingId=TVL-639124503575398263&ticketnumbers=7792411761042');
  // await page.getByLabel('', { exact: true }).first().check();
  // await page.goto('https://uat-travilo.ibos.io/void-request?trackingId=TVL-639124503575398263&ticketnumbers=7792411761042&segmentGroupIds=1');
  // await page.getByRole('button', { name: 'Preview' }).click();
  // await page.getByRole('button', { name: 'Preview' }).click();
  // await page.getByRole('button', { name: 'Request to Void' }).click();
  // await page.getByRole('button', { name: 'Go to Request List' }).click();
});
