// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXkFV604-TfteGz3XECVde1mGElWwn39w",
  authDomain: "waldo-b4195.firebaseapp.com",
  projectId: "waldo-b4195",
  storageBucket: "waldo-b4195.appspot.com",
  messagingSenderId: "720213078613",
  appId: "1:720213078613:web:2114f05f1d82a86ff9dadc",
  measurementId: "G-YHS3K2ZXXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};