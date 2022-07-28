// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHXbRpHZB74_gQ-dYWUFDNkdb_gf0U5NI",
  authDomain: "portfolio-e61ed.firebaseapp.com",
  projectId: "portfolio-e61ed",
  storageBucket: "portfolio-e61ed.appspot.com",
  messagingSenderId: "451067815650",
  appId: "1:451067815650:web:c3c1093ff16933791e60bb",
  measurementId: "G-ED5V9VLM2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);