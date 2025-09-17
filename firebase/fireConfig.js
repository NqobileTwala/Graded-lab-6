
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZqy5bopyWK9--uXOvMB7wXHMpv32tOAY",
  authDomain: "to-do-list-2a187.firebaseapp.com",
  projectId: "to-do-list-2a187",
  storageBucket: "to-do-list-2a187.firebasestorage.app",
  messagingSenderId: "86447175360",
  appId: "1:86447175360:web:77909238872263857d5f25",
  measurementId: "G-FTKBXS5SFW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);