import { Page } from "@playwright/test";
import { UserModel } from "../models/user.model";
export class User {
  constructor(private page:Page) {}
  async userSearch(userID: string) {
    await this.page.getByRole('link', { name: 'User List' }).click();
    await this.page.getByRole("combobox").first().click();
    await this.page.getByRole("option", { name: "Search by ID" }).click();
    await this.page.getByRole("textbox", { name: "Enter User ID" }).click();
    await this.page
      .getByRole("textbox", { name: "Enter User ID" })
      .fill(userID);
    await this.page.getByRole("button", { name: "Search" }).click();
  }
  async userCreate(userModel:UserModel){
  await this.page.getByRole("link", { name: "Create User" }).click();
  await this.page.getByRole("textbox", { name: "Name" }).fill(userModel.name);
  await this.page.getByRole("textbox", { name: "Email" }).fill(userModel.email);
  await this.page.getByRole("textbox", { name: "Password" }).fill(userModel.password);
  await this.page.getByRole("textbox", { name: "Phone Number" }).fill(userModel.Phoneno);
  await this.page.getByRole("textbox", { name: "NID" }).fill(String(userModel.nid));
  //   await page.getByLabel('', { exact: true }).click();
  await this.page.getByRole("combobox", { exact: true }).click();
  await this.page.getByRole("option", {name: userModel.role}).click();
  await this.page.getByRole("button", { name: "Create User" }).click();
  }
}
