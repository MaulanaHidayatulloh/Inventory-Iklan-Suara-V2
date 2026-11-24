/* Kontrol display dan visibilitas slot iklan artikel. */
(function () {
  var config = window.ADS_CONFIG || {};
  var slotConfig = config.ENABLE_ADS || {};

  // Sembunyikan pembungkus agar ruang kosong iklan ikut hilang.
  var wrapperSelectors = {
    "div-ad-leaderboard": ".placeholder_medium",
    "div-ad-center_belt": ".placeholder_belt",
    "div-ad-read_body_1": ".placeholder_medium",
    "div-ad-read_body_2": ".placeholder_medium",
    "div-ad-read_body_3": ".placeholder_medium",
    "div-ad-read_body_4": ".placeholder_medium",
    "div-ad-mediumrectangle_1": ".placeholder_medium",
    "div-ad-mediumrectangle_2": ".placeholder_medium",
    "div-ad-mediumrectangle_3": ".placeholder_medium",
    "div-ad-bottom": "#anchorads",
    "div-ad-otp": null,
    "div-ad-expose": null
  };

  function isEnabled(adId) {
    return config.ENABLE_ALL_ADS !== false && slotConfig[adId] !== false;
  }

  function hideAd(adElement, adId) {
    var selector = wrapperSelectors[adId];
    var wrapper = selector ? adElement.closest(selector) : adElement;
    if (wrapper) wrapper.style.display = "none";
  }

  function displayAds() {
    Object.keys(slotConfig).forEach(function (adId) {
      var element = document.getElementById(adId);
      if (!element) return;

      if (!isEnabled(adId)) {
        hideAd(element, adId);
        return;
      }

      if (window.googletag && window.googletag.cmd) {
        window.googletag.cmd.push(function () {
          window.googletag.display(adId);
        });
      }
    });

    // Slot eksternal (RCV) bukan slot GPT, jadi dikontrol terpisah.
    if (config.ENABLE_ALL_ADS === false || config.ENABLE_EXTERNAL_ADS === false) {
      // Sembunyikan seluruh pembungkus RCV agar margin/padding iklannya ikut hilang.
      var externalAd = document.getElementById("bn_1JtyiBuqH0");
      var externalWrapper = externalAd ? externalAd.closest("#pariwara_dua") : null;
      if (externalWrapper) externalWrapper.style.display = "none";
      else if (externalAd) externalAd.style.display = "none";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", displayAds);
  } else {
    displayAds();
  }
})();
