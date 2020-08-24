
const { Builder } = require('selenium-webdriver')
//firefox //chrome
async function download() {
  //console.log(__dirname)
  const firefox = require('selenium-webdriver/firefox');
  const options = new firefox.Options();

  options.setPreference("browser.dowload.dir","/home/cpu/Downloads")
  options.setPreference("browser.dowload.folderList",2)
  options.setPreference("browser.helperApps.neverAsk.saveToDisk","appliction/x-csv")

  const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build() 

    await driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");

}


module.exports = {
    download
}
