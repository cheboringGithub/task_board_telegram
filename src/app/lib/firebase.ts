'use client';

import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB528IOukNK6ngmAH6anJ6J-tbhqReDVBU",
    authDomain: "task-board-telegram-8c84f.firebaseapp.com",
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: "task-board-telegram-8c84f",
    storageBucket: "task-board-telegram-8c84f.firebasestorage.app",
    messagingSenderId: "838974252585",
    appId: "1:838974252585:web:70424727d10fa6a5591e38",
    measurementId: "G-BZS36VCLPW"
};

// Initialize Firebase
// Initialize Firebase only on client side
let app;
let db: Firestore;

if (typeof window !== 'undefined') {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
}

export { db };