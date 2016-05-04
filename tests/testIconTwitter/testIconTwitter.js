var wdio = require("webdriverio");
var webdrivercss = require("webdrivercss");
var assert = require('assert');

var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};


var browser = wdio.remote(options);

webdrivercss.init(browser, {
  screenshotRoot: './tests/testIconTwitter/screenshots/',
  failedComparisonsRoot: './tests/testIconTwitter/screenshots/diffs/'
});

var iconTwitter = 'body > div > section.m-main > div.m-speaker__list > article:nth-child(1) > div > h4 > a > .m-speaker__social'


browser
  .init()
  .url("localhost:2016")
  .webdrivercss('social', [
    {
      name: 'icon',
      elem: iconTwitter
    }
  ],
    function(err, res) {
      console.log(err);
      console.log(res);
    }
  )
  .moveToObject(iconTwitter)
  .buttonDown(iconTwitter)
  .pause(500)
  .webdrivercss('social', [
    {
      name: 'iconHovered',
      elem: iconTwitter
    }
  ],
    function(err, res) {
      // assert.ifError(err);
      // assert.ok(res.iconHovered[0].isWithinMisMatchTolerance);
      // assert.ok(res.iconHovered[0].isWithinMisMatchTolerance);
      console.log(err);
      console.log(res);
    }
  )
  .end();
