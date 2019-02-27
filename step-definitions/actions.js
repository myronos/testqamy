const {Given, When} = require('cucumber');

Given('User prints comment {string}', (comment) => {
    return console.log(comment);
});
When('User navigates to the {string} with url {string}', (_, url) => {
    return browser.driver.get(url);
});

When('User clicks {string} {string}', (_,locator) => {
        const elem = element(by.css(locator));

        return elem.click();
});
/*When('User enters {int} in field {string}', (number, locator) => {
    return element(by.model(locator)).sendKeys(number);
});*/
