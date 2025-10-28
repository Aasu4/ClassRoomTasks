import { test, expect, chromium } from '@playwright/test';
import { Verify } from 'crypto';

test('Launch Browser', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.fill('#username', 'demosalesmanager');
  await page.fill('#password', 'crmsfa');
  await page.click('.decorativeSubmit');
  await page.click('text="CRM/SFA"');
  await page.click('text="Leads"');
  await page.click('//div//ul//li//a[text()="Create Lead"]');
  await page.fill('#createLeadForm_companyName', 'Stacks');
  await page.fill('#createLeadForm_firstName', 'AisN');
  await page.fill('#createLeadForm_lastName', 'testing');
  await page.fill('#createLeadForm_personalTitle', 'Ms');
  await page.fill('#createLeadForm_generalProfTitle', 'Software Tester');
  await page.fill('#createLeadForm_annualRevenue', '1000000');
  await page.fill('#createLeadForm_departmentName', 'QA');
  await page.fill('#createLeadForm_primaryPhoneNumber', '1234567890');
  await page.click('//input[@name="submitButton"]');

  //Verify the company name, first name, last name and the status  
  const companyName = await page.locator('#viewLead_companyName_sp').textContent();
  expect(companyName).toContain('Stacks');

  const firstName = await page.locator('#viewLead_firstName_sp').textContent();
  expect(firstName).toContain('AisN');

  const lastName = await page.locator('#viewLead_lastName_sp').textContent();
  expect(lastName).toContain('testing');


  //verify the page title
  await expect(page).toHaveTitle('View Lead | opentaps CRM');
  await browser.close();



});
