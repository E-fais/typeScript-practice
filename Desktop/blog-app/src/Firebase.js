// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvoira4aEBuI2YswFHoeYBi94FsKuZCRs",
  authDomain: "ninja-firegram-68424.firebaseapp.com",
  projectId: "ninja-firegram-68424",
  storageBucket: "ninja-firegram-68424.appspot.com",
  messagingSenderId: "292353018756",
  appId: "1:292353018756:web:0e2ac39b407146203aabd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db=getFirestore(app)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider()
