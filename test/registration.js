const { Builder, By, Key } = require("selenium-webdriver");
//firefox //chrome
const driver = new Builder()
    .forBrowser("chrome")
    .build();


async function registration() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("Test@123");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error)
    }
}

async function radioButtonForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css('#title')).sendKeys('Title that has at least 20 chars');
        await driver.findElement(By.css('#description')).sendKeys("Description must be at least 20 chars");
        await driver.findElement(By.css('div:nth-child(1) > label > span.custom-control-indicator')).click();
        await driver.findElement(By.css('#submit')).click();
    } catch (error) {
        console.log(error);
    }
}

async function checkboxForm() {
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("My Name");
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys('My funny comment');
        await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

async function dropdownFormn() {
    try {
        //nb-select[@formcontrolname='select1']/button
        //nb-option[@value='1']
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const select1 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        await select1.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await select1.click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();
        const select3 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"));
        await select3.click();
        await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
        const select4 = await driver.findElement(By.xpath("//select[@formcontrolname='select4']"));
        await select4.click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='audi']")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

async function datepickerFrom() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form")
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Aug 16, 2019");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Aug 7, 2019 - Aug 16, 2019");
        await driver.findElement(By.id("submit")).click();
        //await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

async function fileUpload() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname + "/exampleFile.jpg");
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

//await driver
//    .findElement(By.xpath("//input[@aria-label='Name']"))
//    .sendKeys("Rangel Stoilov");
async function iframeFrom() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        //await driver.switchTo().frame(driver.findElement(By.xpath("//*[@id='mG61Hd']/div[2]/div[1]/div[2]/div[1]/div")));
        await driver.switchTo().frame(0);
        await driver.switchTo().defaultContent();
        await driver
            .findElement(By.xpath("//input[@tabindex='0']"))
            .sendKeys("Rangel Stoilov");
        /*
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(
            Key.chord(
                Key.ARROW_DOWN,
                Key.ARROW_DOWN,
                Key.ARROW_DOWN,
                Key.ARROW_DOWN
            )
        ).perform();
        await driver.actions().sendKeys(Key.chord(
            Key.TAB,
            Key.TAB,
            Key.TAB
            )
        ).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "07")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "08")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "2020")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "Secret answer")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        */
    } catch (error) {
        console.log(error);
    }
}

async function extractTable() {
    let results = [];
    try {
        await driver.get(
            "https://rori4.github.io/selenium-practice/#/pages/tables/smart-table"
        );
        let numberOfPages = 6;
        for (let i = 0; i < numberOfPages; i++) {
            let rows = await driver.findElements(By.xpath("//tbody//tr"));
            for (const row of rows) {
                let rowData = await row.getText();
                let user = rowData.split(/\n/);
                results.push({
                    id: user[0],
                    firstName: user[1],
                    lastName: user[2],
                    username: user[3],
                    email: user[4],
                    age: user[5]
                });
            }
            if (i !== numberOfPages - 1) {
                await driver.findElement(By.css(".page-link-next")).click();
            }
        }
        console.table(results);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    registration,
    radioButtonForm,
    checkboxForm,
    dropdownFormn,
    datepickerFrom,
    fileUpload,
    iframeFrom,
    extractTable
}
