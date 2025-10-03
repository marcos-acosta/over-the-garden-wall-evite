// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Attendee, Doot } from "./interfaces";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "otgw-9730c.firebaseapp.com",
  projectId: "otgw-9730c",
  storageBucket: "otgw-9730c.firebasestorage.app",
  messagingSenderId: "438549560841",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-GE9NVCSDT8",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const register = (name: string) => {
  addDoc(collection(getFirestore(firebaseApp), "attendees"), {
    name: name,
    timestamp: new Date().valueOf(),
  } as Attendee);
};

export const logDoot = (name: string, ignoreInLeaderboard?: boolean) => {
  addDoc(collection(getFirestore(firebaseApp), "doots"), {
    dooter: name,
    timestamp: new Date().valueOf(),
    ignoreInLeaderboard: ignoreInLeaderboard,
  } as Doot);
};
