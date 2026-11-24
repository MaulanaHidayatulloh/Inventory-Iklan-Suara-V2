/* Interstitial advertisement. Mengikuti toggle pada ads-config.js. */
(function () {
  var config = window.ADS_CONFIG || {};
  if (config.ENABLE_ALL_ADS === false || config.ENABLE_INTERSTITIAL === false) return;

  window.googletag = window.googletag || { cmd: [] };
  if (document.cookie.indexOf("interstitial_capping=") !== -1) return;

  window.googletag.cmd.push(function () {
    var interstitialSlot = window.googletag.defineOutOfPageSlot(
      "/148558260/Suara_Interstitial",
      window.googletag.enums.OutOfPageFormat.INTERSTITIAL
    );

    if (interstitialSlot) {
      interstitialSlot.addService(window.googletag.pubads());
      window.googletag.enableServices();
      window.googletag.display(interstitialSlot);
    }
  });

  var expires = new Date();
  expires.setTime(expires.getTime() + 1800 * 1000);
  document.cookie = "interstitial_capping=1;expires=" + expires.toUTCString() + ";path=/";
})();
