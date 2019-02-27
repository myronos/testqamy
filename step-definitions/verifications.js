const {Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

Then('Page title is equal to {string}', (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Then('History {string} is equal to {int}', (locator, result) => {
    return expect(element.all(by.repeater(locator)).count()).to.eventually.equal(result);
});

