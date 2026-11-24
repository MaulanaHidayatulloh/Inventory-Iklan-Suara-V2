// PENGATURAN IKLAN ARTIKEL DESKTOP
var adSettings = {
  "div-ad-skin_left": false,
  "div-ad-skin_right": false,
  "div-ad-leaderboard": false,
  "div-ad-center_belt": false,
  "div-ad-read_body_1": false,
  "div-ad-read_body_2": false,
  "div-ad-read_body_3": true,
  "div-ad-right_1": false,
  "div-ad-right_2": false,
  "div-ad-right_4": false,
  "div-ad-right_3": false,
  "div-ad-bottom": false,
};

// Wrapper terdekat disembunyikan juga agar tidak menyisakan ruang kosong.
var adWrappers = {
  "div-ad-skin_left": ".sticky-ads.left",
  "div-ad-skin_right": ".sticky-ads.right",
  "div-ad-leaderboard": ".bg-ads-sticky-top",
  "div-ad-center_belt": ".placeholder_belt",
  "div-ad-read_body_1": ".placeholder_read_body",
  "div-ad-read_body_2": ".placeholder_read_body",
  "div-ad-read_body_3": ".placeholder_read_body",
  "div-ad-right_1": ".wrap-ads",
  "div-ad-right_2": ".wrap-ads",
  "div-ad-right_4": ".wrap-ads",
  "div-ad-right_3": "#bannerWrapper",
  "div-ad-bottom": ".wrap-ads-bottom-sticky",
};

function hideAdSlot(slotId) {
  var adElement = document.getElementById(slotId);
  if (!adElement) return;

  var selector = adWrappers[slotId];
  var wrapper = selector ? adElement.closest(selector) : adElement;
  if (wrapper) wrapper.style.setProperty("display", "none", "important");
}

window.googletag = window.googletag || { cmd: [] };

// Sembunyikan slot nonaktif sebelum pemanggilan GPT.
Object.keys(adSettings).forEach(function (slotId) {
  if (adSettings[slotId] === false) hideAdSlot(slotId);
});

// Hanya slot aktif yang dipanggil; slot nonaktif tidak meminta iklan.
googletag.cmd.push(function () {
  Object.keys(adSettings).forEach(function (slotId) {
    if (adSettings[slotId] !== true) return;
    if (document.getElementById(slotId)) googletag.display(slotId);
  });
});
