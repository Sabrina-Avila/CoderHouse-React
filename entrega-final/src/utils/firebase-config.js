import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const config = {
  apiKey: "AIzaSyBXD8FxqiLl2c8omSCC1D28s8M9IGHaO2E",
  authDomain: "pasteleria-cz.firebaseapp.com",
  projectId: "pasteleria-cz",
  storageBucket: "pasteleria-cz.appspot.com",
  messagingSenderId: "85858625061",
  appId: "1:85858625061:web:13b10587754ba0ca4901cc",
};

// Initialize Firebase
initializeApp(config);
export default getFirestore();
