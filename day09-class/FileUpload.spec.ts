import test from '@playwright/test';

test('File Upload', async ({ page }) => {
  await page.goto('https://leafground.com/file.xhtml');

  // Upload the file
  await page.locator("(//span[text()='Choose'])[1]/following-sibling::input")
    .setInputFiles("D:\\ClassRoomTasks\\utils\\VM_list.png");

  // Get the uploaded filename text
  const filenameLocator = page.locator("//span[@class='ui-fileupload-filename']");
  const fileNameText = await filenameLocator.textContent();

  console.log("Uploaded file name is: " + fileNameText?.trim());

  await page.waitForTimeout(5000); 
});