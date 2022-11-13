// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const clientCredentials = {
  apiKey: "AIzaSyBx5b8AhNXKyo_BHV9Qaj-UOJLNL9_fpUk",
  authDomain: "next-testing-5252a.firebaseapp.com",
  databaseURL:
    "https://next-testing-5252a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "next-testing-5252a",
  storageBucket: "next-testing-5252a.appspot.com",
  messagingSenderId: "979264417018",
  appId: "1:979264417018:web:113a22594a999acf6e2d43",
  measurementId: "G-V91DCQW3MZ",
};

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(clientCredentials);
    console.log("Firebase has been init successfully");
  }
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };
