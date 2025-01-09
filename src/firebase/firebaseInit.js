import { firebase } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASeUdDvFcIPT-lZi2vMRAl7cc9HGbghyk",
  authDomain: "invoice-app-4531c.firebaseapp.com",
  projectId: "invoice-app-4531c",
  storageBucket: "invoice-app-4531c.firebasestorage.app",
  messagingSenderId: "40431960683",
  appId: "1:40431960683:web:b0daf923f0bcc90f99a72e",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
