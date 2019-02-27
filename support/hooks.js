const {Before, After, Status} = require('cucumber');

Before(function () {
    return browser.waitForAngularEnabled(false);
});
After(function (testCase) {
    const world = this;

    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then(function (screenShot) {
//screenShot is a base-64 encoded PNG
            return world.attach(screenShot, 'image/png');
        });
    } else {
        return console.log("test passed");
    }
});


