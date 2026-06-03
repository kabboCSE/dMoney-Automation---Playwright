import { test, expect } from "@playwright/test";
import * as path from "path";
import { faker } from "@faker-js/faker";

test("Trackforce", async ({ page }) => {
  await page.goto("https://app.trackforce.io/");
  await page.getByRole("textbox", { name: "Email" }).fill("kabbo@ibos.io");

  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Admin1234#");
  await page.getByRole("button", { name: "Log In" }).click();
await page.getByRole("complementary").getByText("Monitoring", { exact: true }).click();
  await page.getByRole("link", { name: "Console Commands" }).click();
  await page.getByRole("textbox", { name: "Search" }).click();
  await page.getByRole("textbox", { name: "Search" }).fill("SQA");
  await page.getByRole("button", { name: "Clear search" }).click();
  await page.getByRole("link", { name: "Emailing" }).click();
  await page.getByRole("link", { name: "File Transfers" }).click();
  await page.getByRole("link", { name: "Online Meetings" }).click();
  await page.getByRole("link", { name: "Instant Messaging" }).click();
  await page.getByRole("link", { name: "Social Media" }).click();
  await page.getByRole("link", { name: "Searches" }).click();
  await page.getByRole("link", { name: "Keystrokes" }).click();
  await page.getByRole("link", { name: "Websites" }).click();
  await page.getByRole("link", { name: "Snapshots" }).click();
  await page.getByRole("link", { name: "Screen Records" }).click();
  await page.getByRole("link", { name: "Applications" }).click();
  await page.getByRole("button", { name: "Details" }).nth(0).click();
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await page.getByRole("link", { name: "Drive Log" }).click();
  await page.getByRole("complementary").getByText("Manage Project").click();
  await page.getByRole("link", { name: "Project Management" }).click();
  await page.getByRole("link", { name: "Tasks" }).click();
  await page
    .getByRole("complementary")
    .getByText("Employee Management")
    .click();
  await page.getByRole("link", { name: "Employees" }).click();
  // await page.pause();
  // Employee Create
  await page.getByRole("button", { name: "plus Add New" }).click();
  await page.getByRole("button", { name: "Add Employee" }).click();
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("textbox", { name: "Full Name" }).click();
  // Combining with fullName for consistent test data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  await page
    .getByRole("textbox", { name: "Full Name" })
    .fill(`${firstName} ${lastName}`);
  // await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill(faker.internet.email({ firstName, lastName }));
  await page.getByRole("spinbutton", { name: "Phone Number" }).click();
  await page
    .getByRole("spinbutton", { name: "Phone Number" })
    .fill("01627505754");

  //upload img
  const filepath0 = path.join(process.cwd(), "resources", "stream.webp");
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByText("Browse File", { exact: true }).click(),
  ]);
  await fileChooser.setFiles(filepath0);

  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("textbox", { name: "Enroll ID" }).click();
  await page.getByRole("textbox", { name: "Enroll ID" }).fill("231456");
  const modal = page
    .locator('.ant-modal-wrap TFModelWrapper, div[role="dialog"]')
    .last();

  // Department
  await page.getByRole("combobox", { name: "Department Name" }).click();
  await page
    .locator(".ant-select-item-option-content")
    .getByText("Software Development", { exact: true })
    .click();

  // Designation
  await page.getByRole("combobox", { name: "Designation Name" }).click();
  await page
    .locator(".ant-select-item-option-content")
    .getByText("SQA Engineer", { exact: true })
    .click();

  // Supervisor
  await page.getByRole("combobox", { name: "Supervisor" }).click();
  await page
    .locator(".ant-select-item-option-content")
    .getByText("SQA Test", { exact: true })
    .click();
  await page.getByRole("button", { name: "loading Submit" }).click();

  await page.getByRole("link", { name: "Device List" }).click();
  await page.getByRole("complementary").getByText("Reports").click();
  await page.getByRole("link", { name: "Context Switching" }).click();
  await page.getByRole("link", { name: "Top Supervisors" }).click();
  await page.getByRole("link", { name: "Top Employees" }).click();
  await page.getByRole("link", { name: "Monthly Report" }).click();
  await page.getByRole("link", { name: "Daily Report" }).click();
  await page.getByRole("link", { name: "Daily Work Load" }).click();
  await page.getByRole("link", { name: "Meeting Report" }).click();
  await page.getByRole("link", { name: "Ai Summary" }).click();
  await page
    .getByRole("menuitem", { name: "bank Organization Management" })
    .click();
  // await page.getByRole('textbox', { name: 'Email' }).click();

  //*
  // await page.goto('https://app.trackforce.io/login');
  // await page.getByRole('textbox', { name: 'Email' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).fill('kabbo@ibos.io');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('00Developer999@');
  // await page.getByRole('button', { name: 'Log In' }).click();
  // await page.getByRole('menuitem', { name: 'bank Organization Management' }).click();
  // await page.getByRole('link', { name: 'Supervisor Management' }).click();
  // await page.getByRole('button', { name: 'user-add Assign' }).click();
  // await page.getByLabel('', { exact: true }).check();
  // await page.getByRole('button', { name: 'check-circle Assign (1)' }).click();
  // await page.getByRole('button', { name: 'eye View Team' }).click();
  // await page.getByRole('button', { name: 'Close' }).click();
  // await page.getByRole('link', { name: 'Roles & Privileges' }).click();
  // await page.getByRole('button', { name: 'Create New Permission Set' }).click();
  // await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.getByRole('link', { name: 'Assign Roles' }).click();

  //*
  await page.getByRole("link", { name: "Supervisor Management" }).click();
  await page.getByRole("link", { name: "Roles & Privileges" }).click();
  await page.getByRole("link", { name: "Assign Roles" }).click();
  await page.getByRole("menuitem", { name: "control Configuration" }).click();
  await page.getByRole("link", { name: "Monitoring Configuration" }).click();
  await page.getByRole("link", { name: "Restriction" }).click();
  await page.getByRole("link", { name: "Risk User Settings" }).click();
  await page.getByRole("link", { name: "Email Report" }).click();
  await page.getByRole("complementary").getByText("Manage Account").click();
  await page.getByRole("link", { name: "Billing" }).click();
  await page.getByRole("link", { name: "Settings", exact: true }).click();
  // await page.locator("span").filter({ hasText: "Upload" }).nth(1).click();
  await page.waitForTimeout(2000);
  //upload
  //  delete
  // await page.locator('[data-icon="delete"]').click();

  const filepath = path.join(process.cwd(), "resources", "stream.webp");
  await page
    .locator('span.ant-upload-picture-card-wrapper input[name="file"]')
    .setInputFiles(filepath);
  await page.waitForTimeout(2000);

  await page.locator('[data-icon="delete"]').click();
  const filepath2 = path.join(process.cwd(), "resources", "stream2.png");
  await page
    .locator('span.ant-upload-picture-card-wrapper input[name="file"]')
    .setInputFiles(filepath2);

  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Update Profile" }).click();

  await page.getByRole("link", { name: "System Support" }).click();

  await page.getByRole("complementary").getByText("Manage Account").click();
  await page.getByRole("link", { name: "Billing" }).click();
  // await page.waitForLoadState('networkidle');
  await page.getByRole("menuitem", { name: "logout Logout" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
  // await page.pause();

  // await page.getByRole("textbox", { name: "Email" }).click();
  // await page.getByRole("textbox", { name: "Email" }).fill("kabbo@ibos.io");
  // await page.getByRole("textbox", { name: "Password" }).click();
});
