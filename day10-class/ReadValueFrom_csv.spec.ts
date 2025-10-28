import test from '@playwright/test';
import { parse } from 'csv-parse/sync'; //used to convert the contents of a CSV file into JavaScript objects.
import fs from 'fs'; //reads files from your local system.
import path from 'path'; //helps in handling and transforming file paths.

// Read and parse CSV file
const readCSV = parse(fs.readFileSync(path.join(__dirname,"../utils/login.csv")),
//parse-converts the CSV text into structured JSON-like objects.
{
    columns: true,//treats the first row of the CSV file as headers
    skip_empty_lines: true //ignores any blank rows in the CSV.
}
);
for (let csv of readCSV.slice(0, 1)) {

    test(`login with csv file ${csv.TcName}`, async ({page}) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.fill("#username", csv.UserName);
        await page.fill("#password", csv.Password);
        await page.click(".decorativeSubmit");

    });

}

