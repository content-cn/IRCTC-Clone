// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// Replace with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyAg8NlqNXInxVzTEckUrlqeuFiOciHgdQk",
  authDomain: "irctc-clone-5f77f.firebaseapp.com",
  projectId: "irctc-clone-5f77f",
  storageBucket: "irctc-clone-5f77f.firebasestorage.app",
  messagingSenderId: "901222177029",
  appId: "1:901222177029:web:5c028b75e5e3bf90813f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db,auth, googleProvider };