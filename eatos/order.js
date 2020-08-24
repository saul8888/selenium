const { Builder, By, Key, util } = require('selenium-webdriver')
//firefox //chrome
const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function order() {
    try {
        //---open page---//
        await driver.get("https://eatoscafe.orderos.co/");

        //---add 1 element--//
        const select1 = await driver.findElement(By.xpath("//*[@id='pop-box']/div/div[2]/div/div/div/div[1]/mat-card"));
        const aa = await select1.click();
        //console.log(select1)
        await driver.sleep(2000)

        await driver.findElement(By.css('.buttonOption:nth-child(3) > img')).click();
        await driver.sleep(2000)
        await driver.findElement(By.css('.button-text:nth-child(1)')).click();

        //---add 2 element--//
        const select2 = await driver.findElement(By.xpath("//*[@id='menu_items_holder']/div/div[1]/div/div[3]/div[3]/mat-card"));
        await select2.click();
        await driver.sleep(2000)

        await driver.findElement(By.css('.buttonOption:nth-child(3) > img')).click();
        await driver.sleep(2000)
        await driver.findElement(By.css('.button-text:nth-child(1)')).click();

        //---buy element--//
        await driver.sleep(2000)
        await driver.findElement(By.xpath("html/body/app-root/app-categoryv2/div")).click();

        await driver.get("https://eatoscafe.orderos.co/checkout");
        //--date customer--//
        await driver.sleep(2000)
        await driver.findElement(By.xpath('/html/body/app-root/checkout/mat-drawer-container/mat-drawer-content/div[2]/div/div[2]/div[2]/div[3]/mat-form-field/div/div[1]/div')).click();
        await driver.findElement(By.xpath("//*[@id='mat-option-26']/span")).click();

        await driver.sleep(2000)
        await driver.findElement(By.xpath("/html/body/app-root/checkout/mat-drawer-container/mat-drawer-content/div[2]/div/div[2]/div[2]/div[4]/mat-form-field")).click();
        await driver.findElement(By.xpath("//*[@id='mat-option-31']/span")).click();

        //---TIP---//
        await driver.findElement(By.xpath("//*[@id='tipsBoxMobile']/div[3]")).click();

        //---customer information---//
        await driver.findElement(By.id("mat-input-10")).sendKeys("Saul");
        await driver.findElement(By.id("mat-input-11")).sendKeys("Quispe");

        //await driver.findElement(By.xpath("//*[@id='customer information']/div/div/table[2]/tr[1]/td/div/ngx-intl-tel-input/div/div/div[1]/div[1]")).sendKeys("peru").click();
        //await driver.findElement(By.id("phone")).sendKeys("991001348");

        await driver.findElement(By.id("mat-input-12")).sendKeys("saul9412@hotmail.com");
        await driver.findElement(By.id("mat-input-13")).sendKeys("Lima-1");
        await driver.findElement(By.id("mat-input-14")).sendKeys("Lima-2");
        await driver.findElement(By.id("mat-input-15")).sendKeys("Chorrillos");
        await driver.findElement(By.id("mat-input-16")).sendKeys("Nueva Caledonia");
        await driver.findElement(By.id("mat-input-17")).sendKeys("15081");
        await driver.findElement(By.id("mat-input-17")).sendKeys("Lion");

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    order
}