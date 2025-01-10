// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASeUdDvFcIPT-lZi2vMRAl7cc9HGbghyk",
  authDomain: "invoice-app-4531c.firebaseapp.com",
  projectId: "invoice-app-4531c",
  storageBucket: "invoice-app-4531c.firebasestorage.app",
  messagingSenderId: "40431960683",
  appId: "1:40431960683:web:b0daf923f0bcc90f99a72e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
