// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBK5YpyWsI2remwN7oyUu88lyOCFG0meE4",
  authDomain: "plantstwo-d190f.firebaseapp.com",
  projectId: "plantstwo-d190f",
  storageBucket: "plantstwo-d190f.appspot.com",
  messagingSenderId: "142743498798",
  appId: "1:142743498798:web:a04ba6660938aad596afbf",
  measurementId: "G-HK63HGF4SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);