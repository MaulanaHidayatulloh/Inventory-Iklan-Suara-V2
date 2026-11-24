// Close control for the bottom sticky ad.
document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("close-ads-bottom");
  if (!closeButton) return;

  closeButton.addEventListener("click", function () {
    var stickyAd = document.querySelector(".wrap-ads-bottom-sticky");
    if (stickyAd) stickyAd.remove();
  });
});
