// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ45BtBSUIx6xnsJMjgJbPrhsJXjKnahY",
  authDomain: "huskyshack-df767.firebaseapp.com",
  databaseURL: "https://huskyshack-df767-default-rtdb.firebaseio.com",
  projectId: "huskyshack-df767",
  storageBucket: "huskyshack-df767.appspot.com",
  messagingSenderId: "580332296984",
  appId: "1:580332296984:web:4b682fa05fa1bde4f2dc6d",
  measurementId: "G-ZEYYX29PTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;