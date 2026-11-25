// JavaScript interaksi khusus halaman detail artikel desktop.

// Fungsi share/copy URL artikel (dipanggil dari atribut onclick di HTML).
window.copyToClipboard = function copyToClipboard() {
  var aux = document.createElement('input');
  aux.setAttribute('value', 'https://www.suara.com/news/2026/11/23/141732/badak-jawa-terancam-punah-mengapa-memindahkannya-ke-habitat-baru-tak-bisa-sembarangan');
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  alert('URL copy to clipboard');
};

// Slider kuis yang menggunakan onclick="scrollSlider(...)".
window.scrollSlider = function scrollSlider(direction) {
  var slider = document.getElementById('quizSlider');
  if (!slider) return;
  var scrollAmount = window.innerWidth > 768 ? 300 : 220;
  slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', function () {
  var quizSlider = document.getElementById('quizSlider');
  if (quizSlider) {
    var isDown = false;
    var startX = 0;
    var scrollLeft = 0;

    quizSlider.addEventListener('mousedown', function (event) {
      isDown = true;
      quizSlider.style.cursor = 'grabbing';
      startX = event.pageX - quizSlider.offsetLeft;
      scrollLeft = quizSlider.scrollLeft;
    });
    quizSlider.addEventListener('mouseleave', function () {
      isDown = false;
      quizSlider.style.cursor = 'grab';
    });
    quizSlider.addEventListener('mouseup', function () {
      isDown = false;
      quizSlider.style.cursor = 'grab';
    });
    quizSlider.addEventListener('mousemove', function (event) {
      if (!isDown) return;
      event.preventDefault();
      var x = event.pageX - quizSlider.offsetLeft;
      quizSlider.scrollLeft = scrollLeft - (x - startX) * 2;
    });
    quizSlider.addEventListener('click', function (event) {
      if (isDown) event.preventDefault();
    });
  }

  // Tambahkan atribusi sumber ketika pembaca menyalin teks artikel.
  document.addEventListener('copy', function (event) {
    var selection = window.getSelection().toString().split(/\n\n/);
    if (selection.length > 1) {
      event.preventDefault();
      var copyText = selection[0] + ' \n\nArtikel ini telah tayang di Suara.com dengan judul "Badak Jawa Terancam Punah, Mengapa Memindahkannya ke Habitat Baru Tak Bisa Sembarangan?", Klik untuk baca: https://www.suara.com/news/2026/11/23/141732/badak-jawa-terancam-punah-mengapa-memindahkannya-ke-habitat-baru-tak-bisa-sembarangan.\n\nMau konten menarik lainnya?\nFollow Instagram: https://www.instagram.com/suaradotcom\nFollow Facebook: https://www.facebook.com/suaradotcom\nFollow Twitter: https://twitter.com/suaradotcom\nSubscribe YouTube: https://www.youtube.com/user/suaradotcom';
      event.clipboardData.setData('text/plain', copyText);
      window.getSelection().removeAllRanges();
    }
  });

  // Tampilkan artikel berikutnya saat pembaca melewati bagian tag.
  var nextArticle = document.getElementById('next-article');
  var tagDetail = document.querySelector('.article-tags');
  var navbar = document.querySelector('.navbar');
  var closeNext = document.querySelector('.close-next');

  if (nextArticle && tagDetail && closeNext) {
    var tagOffsetTop = tagDetail.getBoundingClientRect().top + window.pageYOffset;
    var navbarHeight = navbar ? navbar.clientHeight : 0;

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > tagOffsetTop - navbarHeight) {
        nextArticle.style.display = 'block';
      }
    });

    closeNext.addEventListener('click', function () {
      nextArticle.style.display = 'none';
      nextArticle.remove();
    });
  }

  // Dropdown daftar penulis.
  var authorTrigger = document.querySelector('.author-trigger');
  var authorPopup = document.querySelector('.author-popup');
  if (authorTrigger && authorPopup) {
    authorTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      authorPopup.style.display = authorPopup.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.article-profile')) authorPopup.style.display = 'none';
    });
  }

  // Tombol perbesar dan lightbox gambar artikel.
  var zoomableImages = document.querySelectorAll('img.zoomable');
  zoomableImages.forEach(function (img) {
    var wrapper = document.createElement('div');
    wrapper.className = 'dynamic-zoom-wrapper';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    var zoomButton = document.createElement('button');
    zoomButton.type = 'button';
    zoomButton.className = 'btn-perbesar';
    zoomButton.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> Perbesar';
    zoomButton.addEventListener('click', function () { window.openImageLightbox(img); });
    wrapper.appendChild(zoomButton);
  });
});

window.openImageLightbox = function openImageLightbox(imgElement) {
  var figure = imgElement ? imgElement.closest('figure') : null;
  var originalCaption = figure ? figure.querySelector('figcaption, .caption') : null;
  var lightbox = document.getElementById('imageLightbox');
  var activeImage = document.getElementById('lightboxActiveImg');
  var caption = document.getElementById('lightboxCaption');

  if (!imgElement || !lightbox || !activeImage) return;
  activeImage.src = imgElement.src;
  if (originalCaption && caption) {
    caption.innerText = originalCaption.innerText;
    caption.style.display = 'block';
  } else if (caption) {
    caption.style.display = 'none';
  }
  lightbox.style.display = 'flex';
};

window.closeImageLightbox = function closeImageLightbox() {
  var lightbox = document.getElementById('imageLightbox');
  if (lightbox) lightbox.style.display = 'none';
};
