//import test from '@playwright/test'

import  test from '@playwright/test';

test ("Handle Promot Alers", async ({page}) =>{

    //Handle Prompt Alert
      // Step 1️⃣ — Attach the listener FIRST
    page.on('dialog',alertType=>{
        // type of alert
        const type=alertType.type();
        console.log(type);
        //alert box what message it has
        console.log(alertType.message());
        //handle alert
        alertType.accept("Aiswarya");

    })

    //Login to URL
    await page.goto("https://www.leafground.com/alert.xhtml");
    await page.locator("//span[text()='Show']").nth(4).click();
    //(//button//span[text()='Show'])[5]
    await page.waitForTimeout(3000);

})