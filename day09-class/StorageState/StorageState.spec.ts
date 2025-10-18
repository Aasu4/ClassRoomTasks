import test  from '@playwright/test';

test("Storage State", async({page})=> {
/*
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill("#username", "Demosalesmanager");
    await page.fill("#password", "crmsfa");
    await page.click(".decorativeSubmit");

    await page.getByText("CRM/SFA").click();*/

    await page.goto("http://demo.stackbill.com/");

    const emailInput = page.locator('[name="email"]');
await emailInput.click(); // triggers onfocus, removes readonly
await emailInput.fill("qatesting7@assistanz.com");

const passwordInput = page.locator('[name="password"]');
await passwordInput.click(); // just to be safe
await passwordInput.fill("Stackbill@2025");

await page.click('button:has-text("Login")');

    

    //Store the information in a file
    await page.context().storageState({path:"D:\\ClassRoomTasks\\utils\\stackBillLogin.json"});

await page.waitForTimeout(20000);
})


