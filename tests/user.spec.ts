import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../page/login";
import { lastuserData } from "../utils/utils";

test("Last login user",async({page})=>{
      await page.goto("https://dmoneyportal.roadtocareer.net/login");
      const login = new LoginPage(page);
      const userData =  lastuserData("./resources/users.json");
      console.log("Login data:", { email: userData.email, password: userData.password });
      await page.waitForTimeout(3000);
      await login.userLogin(userData.email, userData.password);
      await page.waitForTimeout(3000);
      await page.pause();
})