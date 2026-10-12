export enum Role{
    Admin = "Admin",
    Agent = "Agent",
    Customer = "Customer",
    Merchant = "Merchant"
}
export interface UserModel {
  name: string,
  email: string,
  password: string,
  phoneno: string,
  nid: number,
  role?: Role
}
