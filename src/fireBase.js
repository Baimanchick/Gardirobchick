// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1VHnNyqma8cDpTcSjDJBdMBYf4IHogJ8",
  authDomain: "gard-bed8c.firebaseapp.com",
  projectId: "gard-bed8c",
  storageBucket: "gard-bed8c.appspot.com",
  messagingSenderId: "272604073462",
  appId: "1:272604073462:web:e88ec3a927684dfbd04bd7",
  measurementId: "G-1QFKL3K8VK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
