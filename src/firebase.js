// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL_7NLeKeQ5zk9AfLLlNjrAm1qJdT1RLU",
  authDomain: "casinoxs.firebaseapp.com",
  projectId: "casinoxs",
  storageBucket: "casinoxs.appspot.com",
  messagingSenderId: "820330056591",
  appId: "1:820330056591:web:c5456af7a19ebb7d5299fa",
  measurementId: "G-PHKS0XKW24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider }
export default db