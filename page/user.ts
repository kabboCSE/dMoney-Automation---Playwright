import { Page } from "@playwright/test";
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
  async userCreate(name:string, email:string, password:string, Phoneno:string, nid:number, role:string){
  await this.page.getByRole("link", { name: "Create User" }).click();
  await this.page.getByRole("textbox", { name: "Name" }).fill(name);
  await this.page.getByRole("textbox", { name: "Email" }).fill(email);
  await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  await this.page.getByRole("textbox", { name: "Phone Number" }).fill(Phoneno);
  await this.page.getByRole("textbox", { name: "NID" }).fill(String(nid));
  //   await page.getByLabel('', { exact: true }).click();
  await this.page.getByRole("combobox", { exact: true }).click();
  await this.page.getByRole("option", {name: role}).click();
  await this.page.getByRole("button", { name: "Create User" }).click();
  }
}
