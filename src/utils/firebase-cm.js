importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyDN1D6fIH8prZrVe6AR0GFGc1P3Vv4XC6s",
    authDomain: "test-push-notifications-c7a2e.firebaseapp.com",
    projectId: "test-push-notifications-c7a2e",
    storageBucket: "test-push-notifications-c7a2e.appspot.com",
    messagingSenderId: "502723987621",
    appId: "1:502723987621:web:fe18291401197a6e4fa54c"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});