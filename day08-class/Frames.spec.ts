import { expect,test} from '@playwright/test'

test ("Testing Frames", async ({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/");

//Find all frames-list all frames
const allFrames = await page.frames();
console.log("Total available Frames are : " + allFrames.length);

//using frame object name or url
const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });

frame1.fill('input[name="mytext1"]', 'Welcome to Frame1');

const inputMsg = await frame1.locator('input[name="mytext1"]');

expect(inputMsg).toHaveValue('Welcome to Frames1');

await page.waitForTimeout(3000);

})

test ("Testing Frames-2", async ({page})=>{


})




