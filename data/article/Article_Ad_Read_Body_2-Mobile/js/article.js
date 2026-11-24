/* JavaScript khusus halaman artikel. */

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

/* Quiz slider */
function scrollSlider(direction) {
            const slider = document.getElementById('quizSlider');
            const scrollAmount = window.innerWidth > 768 ? 300 : 220; 
            slider.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }

        let isDown = false;
        let startX;
        let scrollLeft;
        const slider = document.getElementById('quizSlider');

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener('click', (e) => {
            if (isDown) e.preventDefault();
        });

/* One Tap */
window.addEventListener('load', function(){
  handleOneTap('130110993426-opunngk3k6o94onths6j7emdf7er71pl.apps.googleusercontent.com');
});

/* Share URL artikel */
window.articleShareLink = "https://www.suara.com/news/2026/11/23/141732/badak-jawa-terancam-punah-mengapa-memindahkannya-ke-habitat-baru-tak-bisa-sembarangan";
