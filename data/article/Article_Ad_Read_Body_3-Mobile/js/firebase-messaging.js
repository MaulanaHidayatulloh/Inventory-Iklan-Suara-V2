import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getMessaging, onMessage, getToken } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";

    // Pastikan konfigurasi ini sesuai dengan project Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAjP9vT2GzOKgp-fkhY2515IzAFQxvN0pw",
      authDomain: "suara-com.firebaseapp.com",
      databaseURL: "https://suara-com.firebaseio.com",
      projectId: "suara-com",
      storageBucket: "suara-com.firebasestorage.app",
      messagingSenderId: "238632102604",
      appId: "1:238632102604:web:df2e454964611569533069",
      measurementId: "G-H3X4SRHE6Y"
    };

    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    const VAPID_KEY = 'BLEiEZfB2lemUOD0PGrnp87CV94FGYroVZqo9DfrOEcsMhZ4uFqzU5lJ8PnHlDhtujm51HyD1JgL10N-GB_7JME';

    // Fungsi untuk mendapatkan token dan mengirimkannya ke server
    function retrieveToken() {
      getToken(messaging, { vapidKey: VAPID_KEY }).then((currentToken) => {
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          subscribeByTopic(currentToken, 'news');
        } else {
          // Jika tidak ada token, berarti izin belum diberikan.
          console.log('No registration token available. Request permission to generate one.');
          // Tampilkan soft ask jika diperlukan
          showSoftAsk();
        }
      }).catch((err) => {
        console.error('An error occurred while retrieving token. ', err);
      });
    }
    
    // Fungsi untuk mengirim token ke backend
    function subscribeByTopic(token, topic) {
      console.log("Subscribing to topic:", topic);
      fetch('https://www.suara.com/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          topic: topic
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error subscribing to topic: ' + response.status);
        }
        console.log('Subscribed to "' + topic + '" successfully!');
      })
      .catch(error => {
        console.error("Failed to subscribe:", error);
      });
    }

    // Fungsi untuk menampilkan dialog "soft ask"
    function showSoftAsk() {
      const softAsk = document.getElementById("soft-ask");
      const alreadyPrompted = localStorage.getItem("notifPrompted");

      // Hanya tampilkan jika izin masih default dan belum pernah ditanya
      if (!alreadyPrompted && Notification.permission === "default") {
        setTimeout(() => {
          softAsk.style.display = "block";
        }, 3000); // Tunda 3 detik
      }
    }

// MAIN logic
function initializeNotificationFlow() {
  // Cek status izin notifikasi saat ini
  if (Notification.permission === 'granted') {
    console.log('Permission already granted. Retrieving token.');
    retrieveToken(); // Jika sudah diizinkan, langsung ambil token
  } else if (Notification.permission === 'default') {
    console.log('Permission is default. Showing soft ask.');
    showSoftAsk(); // Jika belum ditentukan, tampilkan soft ask
  } else {
    console.log('Permission is denied.');
    // Tidak melakukan apa-apa jika sudah diblokir
  }
}

// 1. Jalankan alur utama saat halaman dimuat
initializeNotificationFlow();

// 2. Siapkan event listener untuk dialog "soft ask"
document.getElementById("allow-btn").addEventListener("click", () => {
  document.getElementById("soft-ask").style.display = "none";
  localStorage.setItem("notifPrompted", "yes");

  // Minta izin ke browser
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log('Notification permission granted.');
      new Notification("Terima kasih! Notifikasi berhasil diaktifkan 🎉");
      // Setelah izin diberikan, BARU panggil fungsi untuk mengambil token!
      retrieveToken();
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
});

document.getElementById("deny-btn").addEventListener("click", () => {
  document.getElementById("soft-ask").style.display = "none";
  localStorage.setItem("notifPrompted", "yes");
});

// 3. Handle notifikasi saat website sedang dibuka (foreground)
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };
  new Notification(notificationTitle, notificationOptions);
});
