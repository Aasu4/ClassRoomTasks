/*senario:

When you want different pages to follow the same rule,
but each will have its own way to do it.

Example: You have:

LoginPage (normal user login)

AdminLoginPage (admin credentials)

APILoginPage (API token-based)

Each of them logs in differently — but all must have:

login()

logout()*/

export interface ILogin {
  login(username: string, password: string): Promise<void>;
  logout(): Promise<void>;
}
