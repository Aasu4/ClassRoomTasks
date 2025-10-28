import {test as base, Page } from '@playwright/test';
//{page}-> browser,context,page

//{page}
export const commonFixture = base.extend<{ login: Page }>({

// custom fixture -> Login Page
login: async ({ page }: { page: Page }, use: (page: Page) => Promise<void>) => {

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.fill("#username","dilipkumar.rajendran@testleaf.com")
    await page.fill("#password","TestLeaf@2025")
    await page.click("#Login")
    await use(page)

}

})


