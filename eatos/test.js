// Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
var ScriptTimeout = 180000;
// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 30000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER VARIABLES AND FUNCTIONS **/

const $driver = require('assert'),
    By = $driver.By
//browser = $browser.manage()
/** BEGINNING OF SCRIPT **/

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
            logger.log(1, "https://eatoscafe.orderos.co/");
            return $browser.get("https://eatoscafe.orderos.co/");
        })
        .then(() => {
            logger.log(2, "clickElement //top-productsv2[@id=\'pop-box\']/div/div[3]/div/div/mat-card/div/div/div[2]/p");
            return $browser.waitForAndFindElement(By.xpath("//top-productsv2[@id='pop-box']/div/div[3]/div/div/mat-card/div/div/div[2]/p"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(3, "clickElement //mat-dialog-container[@id=\'mat-dialog-0\']/productmodal/div/div[2]/div/div[3]/img");
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-0']/productmodal/div/div[2]/div/div[3]/img"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(4, "clickElement //mat-dialog-container[@id=\'mat-dialog-0\']/productmodal/div/div[2]/div[2]/span");
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-0']/productmodal/div/div[2]/div[2]/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(5, "clickElement //top-productsv2[@id=\'pop-box\']/div/div[3]/div/div[6]/mat-card/div/div/div[2]/p");
            return $browser.waitForAndFindElement(By.xpath("//top-productsv2[@id='pop-box']/div/div[3]/div/div[6]/mat-card/div/div/div[2]/p"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(6, "clickElement //mat-dialog-container[@id=\'mat-dialog-1\']/productmodal/div/div[2]/div/div[3]/img");
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-1']/productmodal/div/div[2]/div/div[3]/img"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(7, "clickElement //mat-dialog-container[@id=\'mat-dialog-1\']/productmodal/div/div[2]/div[2]/span");
            return $browser.waitForAndFindElement(By.xpath("//mat-dialog-container[@id='mat-dialog-1']/productmodal/div/div[2]/div[2]/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(8, "clickElement //button/div/div[2]");
            return $browser.waitForAndFindElement(By.xpath("//button/div/div[2]"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(9, "clickElement //mat-select[@id=\'mat-select-0\']/div/div/span");
            return $browser.waitForAndFindElement(By.xpath("//mat-select[@id='mat-select-0']/div/div/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(10, "clickElement //mat-option[@id=\'mat-option-0\']/span");
            return $browser.waitForAndFindElement(By.xpath("//mat-option[@id='mat-option-0']/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(11, "clickElement //mat-select[@id=\'mat-select-1\']/div/div/span");
            return $browser.waitForAndFindElement(By.xpath("//mat-select[@id='mat-select-1']/div/div/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(12, "clickElement //mat-option[@id=\'mat-option-2\']/span");
            return $browser.waitForAndFindElement(By.xpath("//mat-option[@id='mat-option-2']/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(13, "clickElement id=mat-input-0");
            return $browser.waitForAndFindElement(By.id("mat-input-0"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(14, "type saul");
            return $browser.waitForAndFindElement(By.id("mat-input-0"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('saul');
                })
        })
        .then(() => {
            logger.log(15, "clickElement id=mat-input-1");
            return $browser.waitForAndFindElement(By.id("mat-input-1"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(16, "type quispe");
            return $browser.waitForAndFindElement(By.id("mat-input-1"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('quispe');
                })
        })
        .then(() => {
            logger.log(17, "clickElement //ngx-intl-tel-input/div/div/div");
            return $browser.waitForAndFindElement(By.xpath("//ngx-intl-tel-input/div/div/div"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(18, "clickElement //li[@id=\'pe\']/span");
            return $browser.waitForAndFindElement(By.xpath("//li[@id='pe']/span"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(19, "type 991001348");
            return $browser.waitForAndFindElement(By.id("number"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('991001348');
                })
        })
        .then(() => {
            logger.log(20, "clickElement id=mat-input-2");
            return $browser.waitForAndFindElement(By.id("mat-input-2"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(21, "type saul9412@hotmail.com");
            return $browser.waitForAndFindElement(By.id("mat-input-2"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('saul9412@hotmail.com');
                })
        })
        .then(() => {
            logger.log(22, "clickElement id=mat-input-3");
            return $browser.waitForAndFindElement(By.id("mat-input-3"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(23, "type lima1");
            return $browser.waitForAndFindElement(By.id("mat-input-3"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('lima1');
                })
        })
        .then(() => {
            logger.log(24, "clickElement id=mat-input-4");
            return $browser.waitForAndFindElement(By.id("mat-input-4"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(25, "type lima2");
            return $browser.waitForAndFindElement(By.id("mat-input-4"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('lima2');
                })
        })
        .then(() => {
            logger.log(26, "clickElement id=mat-input-5");
            return $browser.waitForAndFindElement(By.id("mat-input-5"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(27, "type chorrillos");
            return $browser.waitForAndFindElement(By.id("mat-input-5"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('chorrillos');
                })
        })
        .then(() => {
            logger.log(28, "clickElement id=mat-input-6");
            return $browser.waitForAndFindElement(By.id("mat-input-6"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(29, "type caledonia");
            return $browser.waitForAndFindElement(By.id("mat-input-6"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('caledonia');
                })
        })
        .then(() => {
            logger.log(30, "clickElement id=mat-input-7");
            return $browser.waitForAndFindElement(By.id("mat-input-7"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(31, "type 15081");
            return $browser.waitForAndFindElement(By.id("mat-input-7"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('15081');
                })
        })
        .then(() => {
            logger.log(32, "clickElement //div[@id=\'tipsBox\']/div[3]/div[2]");
            return $browser.waitForAndFindElement(By.xpath("//div[@id='tipsBox']/div[3]/div[2]"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(33, "clickElement //div[@id=\'payments\']/div/div");
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

            logger.log(34, "switch to frame  index=2");
            return $browser.switchTo().frame(value)
        })
        .then(() => {
            logger.log(35, "clickElement name=cardnumber");
            return $browser.waitForAndFindElement(By.name("cardnumber"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(36, "type 4242 4242 4242 4242");
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

            logger.log(37, "switch to frame  relative=parent");
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

            logger.log(38, "switch to frame  index=4");
            return $browser.switchTo().frame(value)
        })
        .then(() => {
            logger.log(39, "clickElement name=exp-date");
            return $browser.waitForAndFindElement(By.name("exp-date"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(40, "type 05 / 24");
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

            logger.log(41, "switch to frame  relative=parent");
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

            logger.log(42, "switch to frame  index=3");
            return $browser.switchTo().frame(value)
        })
        .then(() => {
            logger.log(43, "clickElement name=cvc");
            return $browser.waitForAndFindElement(By.name("cvc"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(44, "type 123");
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

            logger.log(45, "switch to frame  relative=parent");
            return $browser.switchTo().frame(value)
        })
        .then(() => {
            logger.log(46, "clickElement //button[@type=\'submit\']");
            return $browser.waitForAndFindElement(By.xpath("//button[@type='submit']"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(47, "clickElement id=mat-input-20");
            return $browser.waitForAndFindElement(By.id("mat-input-20"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(() => {
            logger.log(48, "type saul9412@hotmail.com");
            return $browser.waitForAndFindElement(By.id("mat-input-20"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('saul9412@hotmail.com');
                })
        })
        .then(() => {
            logger.log(49, "clickElement //button");
            return $browser.waitForAndFindElement(By.xpath("//button"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
        .then(function () {
            logger.end();
            console.log('Browser script execution SUCCEEDED.');
        }, function (err) {
            logger.end();
            console.log('Browser script execution FAILED.');
            throw (err);
        });
}



//** Export Functions
const logger = (function (timeout = 3000, mode = 'production') {

    var startTime = Date.now(),
        stepStartTime = Date.now(),
        prevMsg = '',
        prevStep = 0;


    if (typeof $util == 'undefined') {
        $util = {
            insights: {
                set: (msg) => {
                    console.log(`dryRun: sending to Insights using ${msg}`)
                }
            }
        }

    }

    function log(thisStep, thisMsg) {

        if (thisStep > prevStep && prevStep != 0) {
            end()
        }

        stepStartTime = Date.now() - startTime;

        if (mode != "production") {
            stepStartTime = 0

        }

        console.log(`Step ${thisStep}: ${thisMsg} STARTED at ${stepStartTime}ms.`);

        prevMsg = thisMsg;
        prevStep = thisStep;

    }

    function end() {
        var totalTimeElapsed = Date.now() - startTime;
        var prevStepTimeElapsed = totalTimeElapsed - stepStartTime;

        if (mode != 'production') {
            prevStepTimeElapsed = 0
            totalTimeElapsed = 0
        }

        console.log(`Step ${prevStep}: ${prevMsg} FINISHED. It took ${prevStepTimeElapsed}ms to complete.`);

        $util.insights.set(`Step ${prevStep}: ${prevMsg}`, prevStepTimeElapsed);
        if (timeout > 0 && totalTimeElapsed > timeout) {
            throw new Error('Script timed out. ' + totalTimeElapsed + 'ms is longer than script timeout threshold of ' + timeout + 'ms.');
        }
    }

    return {
        log,
        end
    }
})(ScriptTimeout)

module.exports = {
    order
}