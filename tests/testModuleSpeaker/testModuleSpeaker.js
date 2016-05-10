var wdio = require("webdriverio");
var webdrivercss = require("webdrivercss");
var assert = require('assert');

var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

var browser = wdio.remote(options);

function assertShots (err, shots) {
  assert.ifError(err);
  Object.keys(shots).forEach(function(element) {
    shots[element].forEach(function(shot) {
      assert.ok(shot.isWithinMisMatchTolerance, ['☝️ 🤓 🔥  Daaaamn Turkledawg!!!💥  Betta check that diff/ folder‼️']);
    });
  });
};

webdrivercss.init(browser, {
  screenshotRoot: './tests/testIconTwitter/screenshots/',
  failedComparisonsRoot: './tests/testIconTwitter/screenshots/diffs/'
});

var moduleSpeaker = 'body > div > section.m-main > div.m-speaker__list > article:nth-child(2)'
var iconTwitter = 'body > div > section.m-main > div.m-speaker__list > article:nth-child(2) > div > h4 > a > .m-speaker__social'


browser
  .init()
  .url("localhost:2016")
  .webdrivercss('social', [
    {
      name: 'icon',
      elem: moduleSpeaker
    }
  ], assertShots)
  .moveToObject(iconTwitter)
  .buttonDown(iconTwitter)
  .pause(500)
  .webdrivercss('social', [
    {
      name: 'iconHovered',
      elem: moduleSpeaker
    }
  ], assertShots)
  .end();
