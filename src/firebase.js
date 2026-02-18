// Firebase configuration for Revoshalaa
// Replace these values with your Firebase project config from:
// https://console.firebase.google.com → Project Settings → General → Your apps → Web app

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyABs3PiELekAtgC2gqMA_bMBN-nSr68wzQ",
    authDomain: "revoshalaa.firebaseapp.com",
    databaseURL: "https://revoshalaa-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "revoshalaa",
    storageBucket: "revoshalaa.firebasestorage.app",
    messagingSenderId: "822194885874",
    appId: "1:822194885874:web:b611a7396f33a256a42c6b",
    measurementId: "G-M81CEC0RHX"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export default app;
