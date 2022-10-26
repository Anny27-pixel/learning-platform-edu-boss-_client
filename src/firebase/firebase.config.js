// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcGnoRohHJNRC2HQuesGPcmTcoH4xowXo",
    authDomain: "edu-boss.firebaseapp.com",
    projectId: "edu-boss",
    storageBucket: "edu-boss.appspot.com",
    messagingSenderId: "642342465326",
    appId: "1:642342465326:web:5b6840849686cbbf7f54bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;