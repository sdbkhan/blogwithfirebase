// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49ZisepMZMKBPYPNfimofdC-fe33R2R8",
  authDomain: "firbaseproject-ceb0f.firebaseapp.com",
  projectId: "firbaseproject-ceb0f",
  storageBucket: "firbaseproject-ceb0f.appspot.com",
  messagingSenderId: "409993267554",
  appId: "1:409993267554:web:0173a73c8ad684134f843b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
