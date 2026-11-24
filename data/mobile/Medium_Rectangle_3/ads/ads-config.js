/* Google Publisher Tag configuration extracted from the original mobile homepage. */
window.ADS_CONFIG = {
  ENABLE_ADS: {
    "div-ad-leaderboard": false,
    "div-ad-expose": false,
    "div-ad-mediumrectangle_1": false,
    "div-ad-mediumrectangle_2": false,
    "div-ad-mediumrectangle_3": true,
    "div-ad-mediumrectangle_4": false,
    "div-ad-mediumrectangle_5": false,
    "div-ad-bottom": false,
    "div-ad-otp": false,
  },
};

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var REFRESH_KEY = "refresh";
var REFRESH_VALUE = "true";

googletag.cmd.push(function () {
  var slot_ADdfpLeaderboard = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [320, 100],
    ],
    "div-ad-leaderboard",
  );
  slot_ADdfpLeaderboard.setTargeting("pos", ["leaderboard"]);
  slot_ADdfpLeaderboard.setTargeting("page", ["home"]);

  slot_ADdfpLeaderboard.addService(googletag.pubads());

  var slot_ADdfpBottom = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [320, 50],
      [320, 100],
      [1, 1],
      [320, 150],
    ],
    "div-ad-bottom",
  );
  slot_ADdfpBottom.setTargeting("pos", ["bottom"]);
  slot_ADdfpBottom.setTargeting("page", ["home"]);

  slot_ADdfpBottom.addService(googletag.pubads());

  var slot_ADdfpOtp = googletag.defineOutOfPageSlot(
    "/148558260/SuaraMobile",
    "div-ad-otp",
  );
  slot_ADdfpOtp.setTargeting("pos", ["otp"]);
  slot_ADdfpOtp.setTargeting("page", ["home"]);
  slot_ADdfpOtp.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle1 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [1, 1],
    ],
    "div-ad-mediumrectangle_1",
  );
  slot_ADdfpMediumrectangle1.setTargeting("pos", ["mediumrectangle_1"]);
  slot_ADdfpMediumrectangle1.setTargeting("page", ["home"]);

  slot_ADdfpMediumrectangle1.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle2 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [1, 1],
    ],
    "div-ad-mediumrectangle_2",
  );
  slot_ADdfpMediumrectangle2.setTargeting("pos", ["mediumrectangle_2"]);
  slot_ADdfpMediumrectangle2.setTargeting("page", ["home"]);

  slot_ADdfpMediumrectangle2.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle3 = googletag.defineSlot(
    // "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [1, 1],
    ],
    "div-ad-mediumrectangle_3",
  );
  slot_ADdfpMediumrectangle3.setTargeting("pos", ["mediumrectangle_3"]);
  slot_ADdfpMediumrectangle3.setTargeting("page", ["home"]);

  slot_ADdfpMediumrectangle3.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle4 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [1, 1],
    ],
    "div-ad-mediumrectangle_4",
  );
  slot_ADdfpMediumrectangle4.setTargeting("pos", ["mediumrectangle_4"]);
  slot_ADdfpMediumrectangle4.setTargeting("page", ["home"]);

  slot_ADdfpMediumrectangle4.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle5 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [1, 1],
    ],
    "div-ad-mediumrectangle_5",
  );
  slot_ADdfpMediumrectangle5.setTargeting("pos", ["mediumrectangle_5"]);
  slot_ADdfpMediumrectangle5.setTargeting("page", ["home"]);

  slot_ADdfpMediumrectangle5.addService(googletag.pubads());

  var slot_ADdfpExpose = googletag.defineOutOfPageSlot(
    "/148558260/SuaraMobile",
    "div-ad-expose",
  );
  slot_ADdfpExpose.setTargeting("pos", ["expose"]);
  slot_ADdfpExpose.setTargeting("page", ["home"]);
  slot_ADdfpExpose.addService(googletag.pubads());

  var SECOND = 30;
  googletag.pubads().addEventListener("impressionViewable", function (event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function () {
        googletag.pubads().refresh([slot]);
      }, SECOND * 1000);
    }
  });
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
});
