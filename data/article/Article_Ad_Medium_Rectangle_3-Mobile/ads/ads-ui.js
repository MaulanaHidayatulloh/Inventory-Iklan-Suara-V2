/* Interaksi UI iklan halaman artikel. */
document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector("#close-ads-bottom");
  const anchorAds = document.querySelector("#anchorads");

  if (closeButton && anchorAds) {
    closeButton.addEventListener("click", function () {
      anchorAds.remove();
    });
  }
});
