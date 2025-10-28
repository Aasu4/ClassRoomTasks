import {test, chromium, expect} from '@playwright/test';

test ('Edit Lead', async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.fill('#username', 'demosalesmanager');
    await page.fill('#password', 'crmsfa');
    await page.click('.decorativeSubmit');
    await page.click('text="CRM/SFA"');
    await page.click('text="Leads"');
    await page.click('//div//ul//li//a[text()="Find Leads"]');
    await page.fill('//input[@id="ext-gen249"]', 'AisN');
    await page.click('//button[text()="Find Leads"]');
    await page.waitForTimeout(2000);
    await page.click('//div[@class="x-panel-body x-panel-body-noheader x-panel-body-noborder"]//label[normalize-space(text())="First name:"]/following::input[1]');
    await page.click('//div[@class="frameSectionExtra"]//a[text()="Edit"]');
    await page.fill('//input[@id="updateLeadForm_companyName"]', 'ModifiedStacks');
    await page.fill('//input[@id="updateLeadForm_annualRevenue"]', '6,00,000');
    await page.fill('//input[@id="updateLeadForm_departmentName"]', 'QA_testing');
    await page.fill('//input[@id="updateLeadForm_description"]', 'Edit-Lead');
    await page.click('//input[@name="submitButton"]');
    const title = await page.title();
    expect(title).toBe('Edit Lead | opentaps CRM');

    const companyName = await page.locator('#viewLead_companyName_sp').textContent();
    expect(companyName).toContain('ModifiedStacks');

    const revenue = await page.locator('#viewLead_annualRevenue_sp').textContent();
    expect(revenue).toBe('600000'); 

    const department = await page.locator('#viewLead_departmentName_sp').textContent(); 
    expect(department).toBe('QA_testing');

    await browser.close();


})