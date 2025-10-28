import test from '@playwright/test'

//import from json
import LoginInfo from '../utils/login.json'

for(let value of LoginInfo.slice(1,2)) {

test('Read Json data $(value.TcName)', async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    console.log(value.key)
    await page.fill("#username", value.username);
    await page.fill("#password", value.password);
    await page.click(".decorativeSubmit");
});
}

