// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXD8FxqiLl2c8omSCC1D28s8M9IGHaO2E",
  authDomain: "pasteleria-cz.firebaseapp.com",
  projectId: "pasteleria-cz",
  storageBucket: "pasteleria-cz.appspot.com",
  messagingSenderId: "85858625061",
  appId: "1:85858625061:web:13b10587754ba0ca4901cc",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
