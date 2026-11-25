// Konfigurasi Google Publisher Tag untuk halaman artikel desktop.
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var REFRESH_KEY = "refresh";
var REFRESH_VALUE = "true";

googletag.cmd.push(function () {
  var slot_ADdfpLeaderboard = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [728, 90],
      [970, 90],
      [970, 250],
      [360, 100],
      [360, 150],
      [384, 100],
      [393, 100],
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
    "/148558260/SuaraDesktop",
    [
      [653, 100],
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

  var slot_ADdfpRight1 = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [300, 600],
      [300, 450],
      [160, 600],
    ],
    "div-ad-right_1",
  );
  slot_ADdfpRight1.setTargeting("pos", ["right_1"]);
  slot_ADdfpRight1.setTargeting("page", ["article"]);
  slot_ADdfpRight1.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpRight1.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpRight1.setTargeting("section", ["news"]);
  slot_ADdfpRight1.setTargeting("subsection", ["nasional"]);
  slot_ADdfpRight1.addService(googletag.pubads());

  var slot_ADdfpRight2 = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [300, 600],
      [300, 450],
      [160, 600],
    ],
    "div-ad-right_2",
  );
  slot_ADdfpRight2.setTargeting("pos", ["right_2"]);
  slot_ADdfpRight2.setTargeting("page", ["article"]);
  slot_ADdfpRight2.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpRight2.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpRight2.setTargeting("section", ["news"]);
  slot_ADdfpRight2.setTargeting("subsection", ["nasional"]);
  slot_ADdfpRight2.addService(googletag.pubads());

  var slot_ADdfpRight3 = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [300, 600],
      [300, 450],
      [160, 600],
    ],
    "div-ad-right_3",
  );
  slot_ADdfpRight3.setTargeting("pos", ["right_3"]);
  slot_ADdfpRight3.setTargeting("page", ["article"]);
  slot_ADdfpRight3.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpRight3.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpRight3.setTargeting("section", ["news"]);
  slot_ADdfpRight3.setTargeting("subsection", ["nasional"]);
  slot_ADdfpRight3.addService(googletag.pubads());

  var slot_ADdfpRight4 = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [300, 600],
      [300, 450],
      [160, 600],
    ],
    "div-ad-right_4",
  );
  slot_ADdfpRight4.setTargeting("pos", ["right_4"]);
  slot_ADdfpRight4.setTargeting("page", ["article"]);
  slot_ADdfpRight4.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpRight4.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpRight4.setTargeting("section", ["news"]);
  slot_ADdfpRight4.setTargeting("subsection", ["nasional"]);
  slot_ADdfpRight4.addService(googletag.pubads());

  var slot_ADdfpBottom = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [970, 50],
      [970, 90],
      [728, 90],
      [1, 1],
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

  var slot_ADdfpSkinRight = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [160, 600],
      [1, 1],
    ],
    "div-ad-skin_right",
  );
  slot_ADdfpSkinRight.setTargeting("pos", ["skin_right"]);
  slot_ADdfpSkinRight.setTargeting("page", ["article"]);
  slot_ADdfpSkinRight.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpSkinRight.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpSkinRight.setTargeting("section", ["news"]);
  slot_ADdfpSkinRight.setTargeting("subsection", ["nasional"]);
  slot_ADdfpSkinRight.setTargeting(REFRESH_KEY, REFRESH_VALUE);
  slot_ADdfpSkinRight.addService(googletag.pubads());

  var slot_ADdfpSkinLeft = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [160, 600],
      [1, 1],
    ],
    "div-ad-skin_left",
  );
  slot_ADdfpSkinLeft.setTargeting("pos", ["skin_left"]);
  slot_ADdfpSkinLeft.setTargeting("page", ["article"]);
  slot_ADdfpSkinLeft.setTargeting("flag", ["kasih-paham"]);
  slot_ADdfpSkinLeft.setTargeting("subtopic", ["badak jawa"]);
  slot_ADdfpSkinLeft.setTargeting("section", ["news"]);
  slot_ADdfpSkinLeft.setTargeting("subsection", ["nasional"]);
  slot_ADdfpSkinLeft.setTargeting(REFRESH_KEY, REFRESH_VALUE);
  slot_ADdfpSkinLeft.addService(googletag.pubads());

  var slot_ADdfpReadBody1 = googletag.defineSlot(
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [336, 280],
      [653, 280],
      [653, 250],
      [653, 100],
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
    // "/148558260/SuaraDesktop",
    [
      [300, 250],
      [336, 280],
      [653, 280],
      [653, 250],
      [653, 100],
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
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [336, 280],
      [653, 280],
      [653, 250],
      [653, 100],
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
    "/148558260/SuaraDesktop",
    [
      [300, 250],
      [336, 280],
      [653, 280],
      [653, 250],
      [653, 100],
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
  googletag.pubads().addEventListener("slotRenderEnded", function (event) {
    var el_id = document.getElementById(event.slot.getSlotElementId());
    if (el_id !== null) {
      var ad_type = el_id.getAttribute("data-ad-type");
    } else {
      var ad_type = "empty";
    }

    switch (ad_type) {
      case "desktop_headline_1":
        if (!event.isEmpty) {
          document.getElementsByClassName("headlineWs-2")[0].remove();
          el_id.parentNode.style.display = "block";
        } else {
          el_id.parentNode.remove();
        }
        break;
      case "desktop_headline_2":
        if (!event.isEmpty) {
          document.getElementsByClassName("headlineWs-4")[0].remove();
          el_id.parentNode.style.display = "block";
        } else {
          el_id.parentNode.remove();
        }
        break;
    }
  });
});
