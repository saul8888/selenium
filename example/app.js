
const { Builder, By, Key, util } = require('selenium-webdriver')
//firefox //chrome
async function example1() {
  //console.log(__dirname)
  const chrome = require('selenium-webdriver/chrome');
  const options = new chrome.Options();

  options.addArguments('--disable-dev-shm-usage')
  options.addArguments('--no-sandbox')

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build() 


  await driver.get('https://google.com')
  await driver.sleep(1000)
  const text = await driver.executeScript('return document.documentElement.innerText')
  console.log(text)
  //driver.quit()


}

async function example2() {
    let driver = await new Builder().forBrowser("chrome").build();
    //await driver.get("http://facebook.com");
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
}

module.exports = {
    example1,
    example2
}
