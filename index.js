const {Builder, By, Key, util, WebElement, WebDriver} = require("selenium-webdriver");
const { Keyboard } = require("selenium-webdriver/lib/input");

async function realmLottery() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://realmstock.com/");
    await (await driver.findElement(By.className("floating-lottery-button realmstock-panel-fancy"))).click();
    await (await driver.findElement(By.id("rs-giveaway-enter-button"))).click();

    await driver.findElement(By.id("rs-giveaway-email-input")).sendKeys("johnshin62@gmail.com");
    await driver.findElement(By.id("rs-giveaway-submit")).click();
    
    setTimeout(function () {
        driver.close();
    }, 2500);
}


async function runScript(){
    const isRunning = true;
    await (new Promise((resolve, reject) => { //awaits setTimeout, but the new Promise allows setTimeout to be awaited
        setTimeout(async function(){                //await = start and finish this, then move on (only in async););
            
            while (isRunning){
                const date = new Date();
                if (date.getMinutes() === 1 && date.getHours() === 15){
                    break;
                }
                if (date.getMinutes() === 0)
                {
                    await realmLottery();
                    await (new Promise((resolve, reject) => {
                        setTimeout(function(){
                            resolve();
                        }, 60000);
                    }));
                }
            }

        }, 45000);
    }));
}

runScript();

/* async function running(){
    console.log("i");
    await realmLottery();
    console.log("j");
    await (new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("k");
            resolve();
        }, 3000);
    }));
    console.log("l");
}

running(); */