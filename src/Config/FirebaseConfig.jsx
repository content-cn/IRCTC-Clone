// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// Replace with your actual Firebase config values
const firebaseConfig = {
    apiKey: "AIzaSyApWcGGncOUPVs9xTLv3nsAQc48B4t9_7E",
    authDomain: "react-irctc-clone.firebaseapp.com",
    projectId: "react-irctc-clone",
    storageBucket: "react-irctc-clone.firebasestorage.app",
    messagingSenderId: "704114071218",
    appId: "1:704114071218:web:2fce2c6cd33532b813dbab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };