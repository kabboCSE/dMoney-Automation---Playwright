import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../page/login";
import { User } from "../page/user";
import { UserModel } from "../models/user.model";
import { faker } from "@faker-js/faker";
import { genearateRandomNumber } from "../utils/utils";
let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test("example", async () => {
  await page.goto("https://dmoneyportal.roadtocareer.net/login");
  const login = new LoginPage(page);
  await login.userLogin("admin@dmoney.com", "1234");
  // await page.pause();

  // await page.getByRole("textbox", { name: "Email or Phone Number" }).fill("admin@dmoney.com")
  // await page.getByRole("textbox", { name: "Password" }).fill("1234");
  // await page.getByRole("button", { name: "LOGIN" }).click();
  // await expect(page.getByRole('banner')).toContainText('Admin Dashboard');

  // type : 2
  const headerText = await page.getByText("Admin Dashboard").textContent();
  expect(headerText).toContain("Admin Dashboard");

  //type : 3
  // await expect(page.getByText("Admin Dashboard")).toContainText("Admin Dashboard")
    // await page.pause();
});

test("Search by user", async () => {
  //  await page.getByRole('link', { name: 'User List' }).click();

  // await page.getByText('Search by ID').click();

  // await page.getByRole('combobox').first().click();
  // await page.getByRole('option', { name: 'Search by ID' }).click();
  // await page.getByRole('textbox', { name: 'Enter User ID' }).click();
  // await page.getByRole('textbox', { name: 'Enter User ID' }).fill('104356');
  // await page.getByRole('button', { name: 'Search' }).click();
  const userID = "104356";
  const search = new User(page);
  await search.userSearch(userID);
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "View" }).click();
  await expect(page).toHaveURL(new RegExp(`.*/users/${userID}$`));
//   await page.pause();

});

test("Create New user", async () => {
  const crtUser = new User(page);
  const userModel:UserModel={
  name: faker.person.fullName(),
  email: `shahriarkabbo${genearateRandomNumber(1000,9999)}@gmail.com`,
  password: "954949",
  Phoneno: `016${genearateRandomNumber(10000000,99999999)}`,
  nid: 123456789,
  role: "Customer"
  }
  await crtUser.userCreate(userModel);
  await page.pause();
});
