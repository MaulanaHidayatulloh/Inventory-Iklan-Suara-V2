function getCookie(name, defaultVal) {
    var name = name + '=';
    var cookies = decodeURIComponent(document.cookie).split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return defaultVal;
}
window.getUid2AdvertisingToken = async () => {
    var id;
    if (typeof window.jxGetUid2 == 'function') {
        id = await window.jxGetUid2();
    } else {
        id = getCookie('__uid2_advertising_token', null);
    }
    return id;
}

function moveSlider(step) {
        const slider = document.getElementById('slider');
        slider.scrollBy({
            left: step,
            behavior: 'smooth'
        });
    }

document.addEventListener("DOMContentLoaded", function () {
        const slider = document.getElementById('brMarketSlider');
        const dots = document.querySelectorAll('.br-dot');

        if (slider && dots.length > 0) {
            slider.addEventListener('scroll', function () {
                const width = slider.clientWidth;
                if (width > 0) {
                    const activeIndex = Math.round(slider.scrollLeft / width);
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === activeIndex);
                    });
                }
            });
        }
    });

window.addEventListener('load', function(){
  handleOneTap('130110993426-opunngk3k6o94onths6j7emdf7er71pl.apps.googleusercontent.com');
});

document.addEventListener('DOMContentLoaded', function () {
    new Swiper(".movieSwiper", {
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});
