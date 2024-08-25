// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_qXRjO7aNjqyl6HT4gStVxmh4WsGEK6Y",
  authDomain: "nexus-ex.firebaseapp.com",
  projectId: "nexus-ex",
  storageBucket: "nexus-ex.appspot.com",
  messagingSenderId: "340560906583",
  appId: "1:340560906583:web:f2584b77b4aabfa3511612",
  measurementId: "G-RMGE2H62Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};
