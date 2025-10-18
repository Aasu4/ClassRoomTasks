import test from '@playwright/test'

test ('Create and verify a New Case in Chatter', async ({ page }) => {

    //Login to URL
    await page.goto('https://login.salesforce.com/');

    //Enter user name and password

    await page.locator('#username').fill('ravindran.ramdas@testleaf.com');
    await page.locator('#password').fill('RaviTestleaf#1432');
    await page.locator('#Login').click();

    const getTitle = await page.title();
    console.log(getTitle);
    
    //step4
    await page.locator("//button//div//div[@class='slds-r8']").click();
    //step5
    await page.locator("//button[text()='View All']").click();

    //step6
    await page.locator("//input[@class='slds-input']").fill("Service");
   


    //step7
    //await page.locator("//mark[text()='Service']").first().click();
    await page.locator("(//span//mark[text()='Service'])[1]").click();
    const caseDahsboard = page.locator("//a//span[text()='Cases']");
    console.log(caseDahsboard.getByText);

    
    //Step8
    await page.locator("//a//span[text()='Cases']").click();
    await page.locator("//div[text()='New']").click();
    
    //Step9
    





    



});