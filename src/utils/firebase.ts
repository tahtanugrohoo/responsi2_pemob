// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKIJ9Drzm9KBS0DyqlrzWOVY4qRbB9Ro0",
    authDomain: "mainan-e50a4.firebaseapp.com",
    projectId: "mainan-e50a4",
    storageBucket: "mainan-e50a4.firebasestorage.app",
    messagingSenderId: "901516291357",
    appId: "1:901516291357:web:957d7e4230b539c45045f4"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };