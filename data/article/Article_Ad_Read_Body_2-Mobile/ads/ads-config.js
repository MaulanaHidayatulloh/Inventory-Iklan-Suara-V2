// Kontrol iklan halaman artikel.
window.ADS_CONFIG = {
  ENABLE_ALL_ADS: true,
  ENABLE_INTERSTITIAL: false,
  ENABLE_EXTERNAL_ADS: true,
  ENABLE_ADS: {
    "div-ad-leaderboard": false,
    "div-ad-center_belt": false,
    "div-ad-read_body_1": false,
    "div-ad-read_body_2": true,
    "div-ad-read_body_3": false,
    "div-ad-read_body_4": false,
    "div-ad-mediumrectangle_1": false,
    "div-ad-mediumrectangle_2": false,
    "div-ad-mediumrectangle_3": false,
    "div-ad-bottom": false,
    "div-ad-otp": false,
    "div-ad-expose": false,
  },
};

/* Konfigurasi Google Publisher Tag untuk halaman artikel. */
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
  slot_ADdfpLeaderboard.setTargeting("page", ["article"]);
  slot_ADdfpLeaderboard.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpLeaderboard.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpLeaderboard.setTargeting("section", ["news"]);
  slot_ADdfpLeaderboard.setTargeting("subsection", ["nasional"]);

  slot_ADdfpLeaderboard.addService(googletag.pubads());

  var slot_ADdfpCenterBelt = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [320, 100],
      [320, 50],
    ],
    "div-ad-center_belt",
  );
  slot_ADdfpCenterBelt.setTargeting("pos", ["center_belt"]);
  slot_ADdfpCenterBelt.setTargeting("page", ["article"]);
  slot_ADdfpCenterBelt.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpCenterBelt.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpCenterBelt.setTargeting("section", ["news"]);
  slot_ADdfpCenterBelt.setTargeting("subsection", ["nasional"]);

  slot_ADdfpCenterBelt.addService(googletag.pubads());

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
  slot_ADdfpBottom.setTargeting("page", ["article"]);
  slot_ADdfpBottom.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpBottom.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpBottom.setTargeting("section", ["news"]);
  slot_ADdfpBottom.setTargeting("subsection", ["nasional"]);

  slot_ADdfpBottom.addService(googletag.pubads());

  var slot_ADdfpReadBody1 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [336, 280],
      [300, 600],
      [336, 300],
      [300, 450],
      [1, 1],
    ],
    "div-ad-read_body_1",
  );
  slot_ADdfpReadBody1.setTargeting("pos", ["read_body_1"]);
  slot_ADdfpReadBody1.setTargeting("page", ["article"]);
  slot_ADdfpReadBody1.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpReadBody1.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpReadBody1.setTargeting("section", ["news"]);
  slot_ADdfpReadBody1.setTargeting("subsection", ["nasional"]);

  slot_ADdfpReadBody1.addService(googletag.pubads());

  var slot_ADdfpReadBody2 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [336, 280],
      [300, 600],
      [336, 300],
      [300, 300],
      [1, 1],
    ],
    "div-ad-read_body_2",
  );
  slot_ADdfpReadBody2.setTargeting("pos", ["read_body_2"]);
  slot_ADdfpReadBody2.setTargeting("page", ["article"]);
  slot_ADdfpReadBody2.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpReadBody2.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpReadBody2.setTargeting("section", ["news"]);
  slot_ADdfpReadBody2.setTargeting("subsection", ["nasional"]);

  slot_ADdfpReadBody2.addService(googletag.pubads());

  var slot_ADdfpReadBody3 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [336, 280],
      [300, 600],
      [336, 300],
      [300, 300],
      [1, 1],
    ],
    "div-ad-read_body_3",
  );
  slot_ADdfpReadBody3.setTargeting("pos", ["read_body_3"]);
  slot_ADdfpReadBody3.setTargeting("page", ["article"]);
  slot_ADdfpReadBody3.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpReadBody3.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpReadBody3.setTargeting("section", ["news"]);
  slot_ADdfpReadBody3.setTargeting("subsection", ["nasional"]);

  slot_ADdfpReadBody3.addService(googletag.pubads());

  var slot_ADdfpReadBody4 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [336, 280],
      [300, 600],
      [336, 300],
      [300, 300],
      [1, 1],
    ],
    "div-ad-read_body_4",
  );
  slot_ADdfpReadBody4.setTargeting("pos", ["read_body_4"]);
  slot_ADdfpReadBody4.setTargeting("page", ["article"]);
  slot_ADdfpReadBody4.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpReadBody4.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpReadBody4.setTargeting("section", ["news"]);
  slot_ADdfpReadBody4.setTargeting("subsection", ["nasional"]);

  slot_ADdfpReadBody4.addService(googletag.pubads());

  var slot_ADdfpOtp = googletag.defineOutOfPageSlot(
    "/148558260/SuaraMobile",
    "div-ad-otp",
  );
  slot_ADdfpOtp.setTargeting("pos", ["otp"]);
  slot_ADdfpOtp.setTargeting("page", ["article"]);
  slot_ADdfpOtp.setTargeting("section", ["news"]);
  slot_ADdfpOtp.setTargeting("subsection", ["nasional"]);
  slot_ADdfpOtp.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle1 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [300, 450],
      [1, 1],
    ],
    "div-ad-mediumrectangle_1",
  );
  slot_ADdfpMediumrectangle1.setTargeting("pos", ["mediumrectangle_1"]);
  slot_ADdfpMediumrectangle1.setTargeting("page", ["article"]);
  slot_ADdfpMediumrectangle1.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpMediumrectangle1.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpMediumrectangle1.setTargeting("section", ["news"]);
  slot_ADdfpMediumrectangle1.setTargeting("subsection", ["nasional"]);

  slot_ADdfpMediumrectangle1.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle2 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [300, 450],
      [1, 1],
    ],
    "div-ad-mediumrectangle_2",
  );
  slot_ADdfpMediumrectangle2.setTargeting("pos", ["mediumrectangle_2"]);
  slot_ADdfpMediumrectangle2.setTargeting("page", ["article"]);
  slot_ADdfpMediumrectangle2.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpMediumrectangle2.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpMediumrectangle2.setTargeting("section", ["news"]);
  slot_ADdfpMediumrectangle2.setTargeting("subsection", ["nasional"]);

  slot_ADdfpMediumrectangle2.addService(googletag.pubads());

  var slot_ADdfpMediumrectangle3 = googletag.defineSlot(
    "/148558260/SuaraMobile",
    [
      [300, 250],
      [300, 300],
      [336, 280],
      [336, 300],
      [300, 450],
      [1, 1],
    ],
    "div-ad-mediumrectangle_3",
  );
  slot_ADdfpMediumrectangle3.setTargeting("pos", ["mediumrectangle_3"]);
  slot_ADdfpMediumrectangle3.setTargeting("page", ["article"]);
  slot_ADdfpMediumrectangle3.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpMediumrectangle3.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpMediumrectangle3.setTargeting("section", ["news"]);
  slot_ADdfpMediumrectangle3.setTargeting("subsection", ["nasional"]);

  slot_ADdfpMediumrectangle3.addService(googletag.pubads());

  var slot_ADdfpExpose = googletag.defineOutOfPageSlot(
    "/148558260/SuaraMobile",
    "div-ad-expose",
  );
  slot_ADdfpExpose.setTargeting("pos", ["expose"]);
  slot_ADdfpExpose.setTargeting("page", ["article"]);
  slot_ADdfpExpose.setTargeting("section", ["news"]);
  slot_ADdfpExpose.setTargeting("subsection", ["nasional"]);
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
