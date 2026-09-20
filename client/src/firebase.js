// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebbuilder-11f06.firebaseapp.com",
  projectId: "aiwebbuilder-11f06",
  storageBucket: "aiwebbuilder-11f06.firebasestorage.app",
  messagingSenderId: "995031029710",
  appId: "1:995031029710:web:999908d239ecc2636abd9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}