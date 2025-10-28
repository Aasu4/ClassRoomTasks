import {test, chromium, expect} from '@playwright/test';

test ('Create Lead', async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://login.salesforce.com/');
    
    await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com');
    await page.getByLabel('Password').fill('TestLeaf@2025');

    await page.getByRole('button', { name: 'Log In' }).click();

    const title =await page.title();
    expect(title).toBe('Home | Salesforce');

    await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home');

    



})