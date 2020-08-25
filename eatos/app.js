const { Builder, By, Key, util } = require('selenium-webdriver')
//firefox //chrome
const $browser = new Builder()
    .forBrowser("chrome")
    .build();

// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 30000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";


async function order() {
    console.log('Starting synthetics script: {Untitled Test Case}');
    console.log('Default timeout is set to ' + (DefaultTimeout / 1000) + ' seconds');

    // Setting User Agent is not then-able, so we do this first (if defined and not default)
    if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
        $browser.addHeader('User-Agent', UserAgent);
        console.log('Setting User-Agent to ' + UserAgent);
    }

    // Get browser capabilities and do nothing with it, so that we start with a then-able command
    $browser.getCapabilities()
        .then(() => {
            return $browser.get("https://eatoscafe.orderos.co/");
        })
        .then(() => {
            return $browser.findElement(By.xpath("//*[@id='pop-box']/div/div[2]/div/div/div/div[1]/mat-card"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            console.log("ventaaaa")
            $browser.sleep(2000)
            return $browser.findElement(By.xpath("//mat-dialog-container[@id='mat-dialog-0']/productmodal/div/div[2]/div/div[3]/img"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(function () {
            console.log('Browser script execution SUCCEEDED.');
        }, function (err) {
            console.log('Browser script execution FAILED.');
            throw (err);
        });

}

module.exports = {
    order
}


/*
async function order() {
    console.log('Starting synthetics script: {Untitled Test Case}');
    console.log('Default timeout is set to ' + (DefaultTimeout / 1000) + ' seconds');

    // Setting User Agent is not then-able, so we do this first (if defined and not default)
    if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
        $browser.addHeader('User-Agent', UserAgent);
        console.log('Setting User-Agent to ' + UserAgent);
    }

    // Get browser capabilities and do nothing with it, so that we start with a then-able command
    $browser.getCapabilities().then(function () { })
        .then(() => {
            return $browser.get("https://eatoscafe.orderos.co/");
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//top-productsv2[@id='pop-box']/div/div[3]/div/div/mat-card/div/div/div[2]/p"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-0']/productmodal/div/div[2]/div/div[3]/img"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-0']/productmodal/div/div[2]/div[2]/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//top-productsv2[@id='pop-box']/div/div[3]/div/div[6]/mat-card/div/div/div[2]/p"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-1']/productmodal/div/div[2]/div/div[3]/img"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-1']/productmodal/div/div[2]/div[2]/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//button/div/div[2]"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-select[@id='mat-select-0']/div/div/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-option[@id='mat-option-0']/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-select[@id='mat-select-1']/div/div/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//mat-option[@id='mat-option-2']/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-0"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-0"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('saul');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-1"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-1"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('quispe');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//ngx-intl-tel-input/div/div/div"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//li[@id='pe']/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("number"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('991001348');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-2"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-2"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('saul9412@hotmail.com');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-3"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-3"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('lima1');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-4"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-4"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('lima2');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-5"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-5"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('chorrillos');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-6"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-6"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('caledonia');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-7"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-7"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('15081');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//div[@id='tipsBox']/div[3]/div[2]"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//div[@id='payments']/div/div"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            let type = ("index=2").split("=")
            var value

            if (type[0] == "index") {
                value = parseInt(type[1]);  // int type
            } else {
                value = type[1]; // string type
            }

            return $browser.switchTo().frame(value)
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.name("cardnumber"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.name("cardnumber"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('4242 4242 4242 4242');
                })
        })
        .then(() => {
            let type = ("relative=parent").split("=")
            var value

            if (type[0] == "index") {
                value = parseInt(type[1]);  // int type
            } else {
                value = type[1]; // string type
            }

            return $browser.switchTo().frame(value)
        })
        .then(() => {
            let type = ("index=4").split("=")
            var value

            if (type[0] == "index") {
                value = parseInt(type[1]);  // int type
            } else {
                value = type[1]; // string type
            }

            return $browser.switchTo().frame(value)
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.name("exp-date"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.name("exp-date"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('05 / 24');
                })
        })
        .then(() => {
            let type = ("relative=parent").split("=")
            var value

            if (type[0] == "index") {
                value = parseInt(type[1]);  // int type
            } else {
                value = type[1]; // string type
            }

            return $browser.switchTo().frame(value)
        })
        .then(() => {
            let type = ("index=3").split("=")
            var value

            if (type[0] == "index") {
                value = parseInt(type[1]);  // int type
            } else {
                value = type[1]; // string type
            }

            return $browser.switchTo().frame(value)
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.name("cvc"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.name("cvc"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('123');
                })
        })
        .then(() => {
            let type = ("relative=parent").split("=")
            var value

            if (type[0] == "index") {
                value = parseInt(type[1]);  // int type
            } else {
                value = type[1]; // string type
            }

            return $browser.switchTo().frame(value)
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//button[@type='submit']"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-20"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.id("mat-input-20"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('saul9412@hotmail.com');
                })
        })
        .then(() => {
            return $browser.waitForAndFindElement(By.xpath("//button"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(function () {
            console.log('Browser script execution SUCCEEDED.');
        }, function (err) {
            console.log('Browser script execution FAILED.');
            throw (err);
        });

}
*/