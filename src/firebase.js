// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGw8jXXtdcQbVrbjx1BHZX33O-8v2lPfg",
  authDomain: "canvas-project-6ae81.firebaseapp.com",
  projectId: "canvas-project-6ae81",
  storageBucket: "canvas-project-6ae81.appspot.com",
  messagingSenderId: "964038546628",
  appId: "1:964038546628:web:3cd7d10fde7b77c399a591",
  measurementId: "G-DX1623SJBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);