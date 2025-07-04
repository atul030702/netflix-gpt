// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCMBkyYzbTPmk48Tnm8NYLWXR4FDX_q3o",
  authDomain: "netflixgpt-2d94e.firebaseapp.com",
  projectId: "netflixgpt-2d94e",
  storageBucket: "netflixgpt-2d94e.firebasestorage.app",
  messagingSenderId: "29569557074",
  appId: "1:29569557074:web:bf692f8a10f09b2b08f58b",
  measurementId: "G-ZGX1L4X8Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();