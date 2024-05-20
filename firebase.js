import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey,
  authDomain: "app--eventos.firebaseapp.com",
  projectId: "app--eventos",
  storageBucket: "app--eventos.appspot.com",
  messagingSenderId: "1034490131505",
  appId: "1:1034490131505:web:c0d8cc7e00d783590c5110",
  measurementId: "G-VFNDETFR13"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
