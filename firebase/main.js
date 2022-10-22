// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbzH9QwSMMv4AJqF0XIbsWfFyg0JFZKcU",
  authDomain: "huskyshake.firebaseapp.com",
  projectId: "huskyshake",
  storageBucket: "huskyshake.appspot.com",
  messagingSenderId: "534769385128",
  appId: "1:534769385128:web:5148c242734444ad588c9d",
  measurementId: "G-Q25JQBRFYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);