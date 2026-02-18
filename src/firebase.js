// Firebase configuration for Revoshalaa
// Replace these values with your Firebase project config from:
// https://console.firebase.google.com → Project Settings → General → Your apps → Web app

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDEXAMPLE-replace-with-your-key",
    authDomain: "revoshalaa.firebaseapp.com",
    databaseURL: "https://revoshalaa-default-rtdb.firebaseio.com",
    projectId: "revoshalaa",
    storageBucket: "revoshalaa.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export default app;
