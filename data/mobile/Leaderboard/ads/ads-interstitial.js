/* Interstitial advertisement extracted from the original mobile homepage. */
var ENABLE_INTERSTITIAL = false;

if (ENABLE_INTERSTITIAL) {
  window.googletag = window.googletag || { cmd: [] };
  if (document.cookie.indexOf("interstitial_capping=") == -1) {
    googletag.cmd.push(function () {
      var interstitialSlot = googletag.defineOutOfPageSlot(
        // "/148558260/Suara_Interstitial",
        googletag.enums.OutOfPageFormat.INTERSTITIAL,
      );

      if (interstitialSlot) {
        interstitialSlot.addService(googletag.pubads());
        googletag.enableServices();
        googletag.display(interstitialSlot);
      }
    });
    var d = new Date();
    d.setTime(d.getTime() + 1800 * 1000);
    document.cookie =
      "interstitial_capping=1;expires=" + d.toUTCString() + ";path=/";
  }
}
