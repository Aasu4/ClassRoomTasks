import test from '@playwright/test'
import { LoginPage } from '../day14-class/LoginPage'




test("Login Page",async({page})=>{

const lp= new LoginPage(page)

await lp.loadURL("http://leaftaps.com/opentaps/control/main")
await lp.loginData("Demosalesmanager","crmsfa")
await lp.clickLogin()

//democsr , demoCSR2





})