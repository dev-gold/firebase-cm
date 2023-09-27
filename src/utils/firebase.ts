import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDN1D6fIH8prZrVe6AR0GFGc1P3Vv4XC6s",
  authDomain: "test-push-notifications-c7a2e.firebaseapp.com",
  projectId: "test-push-notifications-c7a2e",
  storageBucket: "test-push-notifications-c7a2e.appspot.com",
  messagingSenderId: "502723987621",
  appId: "1:502723987621:web:fe18291401197a6e4fa54c",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = async () => {
  return await getToken(messaging, {
    vapidKey:
      "BB9H0FiKmd0S1Tw46-RlBtg98Rv__jVhjkMOunp89VPYr02t91QfajdYCY-FghhNXYFlrAX9HAc3rOvzk_gYU0o",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
