const { Builder, By, until } = require('selenium-webdriver');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {Options} = require('selenium-webdriver/chrome');

const createDriver = async () => {
    return new Builder()
        .forBrowser('chrome')
        //.setChromeOptions(options)
        .build()
}

module.exports = {
    createDriver
}