import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Attendee, Doot } from "./interfaces";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "otgw-9730c.firebaseapp.com",
  projectId: "otgw-9730c",
  storageBucket: "otgw-9730c.firebasestorage.app",
  messagingSenderId: "438549560841",
  appId: process.env.FIREBASE_APP_ID,
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
