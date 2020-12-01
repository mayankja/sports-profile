/* eslint-disable no-undef */
const { buildDriver } = require("./utility/buildDriver");
const { By, until } = require("selenium-webdriver");

describe("Test for card header", () => {
  let driver;
  before(async () => {
    driver = await buildDriver();
  });

  it("Correctly rendered player name and location", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.elementLocated(By.id("player-name")), 20000);
    await driver.wait(until.elementLocated(By.id("player-location")), 20000);
    await driver.sleep(1000);
  });

  it("Correctly rendered qualifications", async () => {
    await driver.wait(until.elementLocated(By.id("quality")), 20000);
    await driver.wait(until.elementLocated(By.id("handicap")), 20000);
    await driver.wait(until.elementLocated(By.id("sg-total")), 20000);
    await driver.sleep(1000);
  });

  it("Correctly rendered latest activity", async () => {
    await driver.wait(until.elementLocated(By.id("latest-activity")), 20000);
    await driver.sleep(1000);
  });

  it("Correctly change theme", async () => {
    await driver.wait(until.elementLocated(By.id("switch-theme")), 20000);
    await driver.findElement(By.id("switch-theme")).click();
    await driver.sleep(1000);
  })
});
