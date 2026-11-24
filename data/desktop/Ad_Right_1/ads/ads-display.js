// PENGATURAN IKLAN
var adSettings = {
  "div-ad-skin_left": false,
  "div-ad-skin_right": false,
  "div-ad-leaderboard": false,
  "div-ad-headline_1": false,
  "div-ad-center_belt": false,
  "div-ad-right_1": true,
  "div-ad-right_2": false,
  "div-ad-right_4": false,
  "div-ad-right_3": false,
  "div-ad-bottom": false,
  "div-ad-otp": false,
};

// PEMETAAN PEMBUNGKUS IKLAN
// Digunakan untuk menghilangkan ruang kosong, ketika iklan dinonaktifkan.
var adWrappers = {
  "div-ad-skin_left": ".sticky-ads.left",
  "div-ad-skin_right": ".sticky-ads.right",
  "div-ad-leaderboard": ".bg-ads-sticky-top",
  "div-ad-headline_1": ".item",
  "div-ad-center_belt": ".placeholder_belt",
  "div-ad-right_1": ".cstm_promo_aside",
  "div-ad-right_2": ".wrap-ads",
  "div-ad-right_4": ".wrap-ads",
  "div-ad-right_3": "#bannerWrapper",
  "div-ad-bottom": ".wrap-ads-bottom-sticky",
  "div-ad-otp": null,
};

// FUNGSI MENYEMBUNYIKAN IKLAN
function hideAd(slotId) {
  var adElement = document.getElementById(slotId);

  if (!adElement) return;

  var wrapperSelector = adWrappers[slotId];
  var wrapper = wrapperSelector
    ? adElement.closest(wrapperSelector)
    : adElement;

  if (wrapper) {
    wrapper.style.setProperty("display", "none", "important");
  }
}

// PROSES AKTIVASI / NONAKTIVASI IKLAN
window.googletag = window.googletag || { cmd: [] };

// Sembunyikan iklan nonaktif sejak awal
Object.keys(adSettings).forEach(function (slotId) {
  if (adSettings[slotId] === false) {
    hideAd(slotId);
  }
});

// Tampilkan hanya slot yang aktif
googletag.cmd.push(function () {
  Object.keys(adSettings).forEach(function (slotId) {
    if (adSettings[slotId] === true) {
      var adElement = document.getElementById(slotId);

      if (adElement) {
        googletag.display(slotId);
      }
    }
  });
});
