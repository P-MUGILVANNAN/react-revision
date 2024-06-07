// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5pf68o8zVLh610OJaBvT_lfQQxY2W-b4",
  authDomain: "sample-afc0a.firebaseapp.com",
  projectId: "sample-afc0a",
  storageBucket: "sample-afc0a.appspot.com",
  messagingSenderId: "283656837715",
  appId: "1:283656837715:web:c64e565fb1ecc8f40b84a6",
  measurementId: "G-HV7NTFJ07E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;