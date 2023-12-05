// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBXmgqNDj7hxs2DsOB3pE-CYWzm5puMgo",
  authDomain: "aut5nv50eru-e1afc.firebaseapp.com",
  projectId: "aut5nv50eru-e1afc",
  storageBucket: "aut5nv50eru-e1afc.appspot.com",
  messagingSenderId: "54350862370",
  appId: "1:54350862370:web:3a764a3e9a96f25212d27b",
  measurementId: "G-C5DNPRJ3TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
