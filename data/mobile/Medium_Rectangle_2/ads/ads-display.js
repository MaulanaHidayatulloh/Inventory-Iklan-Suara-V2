/* Centralized display controls for all ad slots present in the original HTML. */
(function () {
  var config = window.ADS_CONFIG || {};
  var slots = config.ENABLE_ADS || {};

  var wrapperSelectors = {
    "div-ad-leaderboard": ".placeholder_medium",
    "div-ad-mediumrectangle_1": ".placeholder_medium",
    "div-ad-mediumrectangle_2": ".placeholder_medium",
    "div-ad-mediumrectangle_3": ".placeholder_medium",
    "div-ad-mediumrectangle_4": ".placeholder_medium",
    "div-ad-mediumrectangle_5": ".placeholder_medium",
    "div-ad-expose": null,
    "div-ad-bottom": "#anchorads",
    "div-ad-otp": null
  };

  function hideAdWrapper(adElement, adId) {
    var selector = wrapperSelectors[adId];
    var wrapper = selector ? adElement.closest(selector) : adElement;
    if (wrapper) wrapper.style.display = "none";
  }

  function displayAds() {
    Object.keys(slots).forEach(function (adId) {
      var adElement = document.getElementById(adId);
      if (!adElement) return;

      if (slots[adId] === false) {
        hideAdWrapper(adElement, adId);
        return;
      }

      if (window.googletag && googletag.cmd) {
        googletag.cmd.push(function () {
          googletag.display(adId);
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", displayAds);
  } else {
    displayAds();
  }
})();
