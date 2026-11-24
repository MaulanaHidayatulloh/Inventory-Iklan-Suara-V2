// Tombol tutup untuk iklan sticky bagian bawah.
document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.querySelector('#close-ads-bottom');
  if (!closeButton) return;

  closeButton.addEventListener('click', function () {
    var wrapper = document.querySelector('.wrap-ads-bottom-sticky');
    if (wrapper) wrapper.remove();
  });
});
