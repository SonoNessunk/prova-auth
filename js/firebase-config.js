import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyDwOE-BPRa0-Hp8hWxXgTiQRLvc-v2SeDU",
    authDomain: "prova-71e08.firebaseapp.com",
    projectId: "prova-71e08",
    storageBucket: "prova-71e08.firebasestorage.app",
    messagingSenderId: "966511631113",
    appId: "1:966511631113:web:1936fbc07d2f832bbc11d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { doc, setDoc, getDoc, collection, query, where, getDocs, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile };