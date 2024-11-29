import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wosp-dashboard.firebaseapp.com",
  databaseURL: "https://wosp-dashboard-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wosp-dashboard",
  storageBucket: "wosp-dashboard.firebasestorage.app",
  messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:  import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {
  app,
}