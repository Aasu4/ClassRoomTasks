import test from '@playwright/test';

//Get stored information from a file
/*
test.use({storageState:"D:\\ClassRoomTasks\\utils\\leafTapLogin.json"});

test("Skip Login Here", async({page})=> {

    await page.goto("http://leaftaps.com/crmsfa/control/main");

    await page.click("//a[text()='Leads']");

})*/

test.use({storageState:"D:\\ClassRoomTasks\\utils\\stackBillLogin.json"});

test("Skip Login StackBill", async({page})=> {
    await page.goto("http://demo.stackbill.com/");
    await page.click("//button//span[text()='Add Payment']");
    console.log(await page.title());
})