
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAT1vFZKERRQ58NNix0a30OQ68hLT4-5_g",
  authDomain: "chaton-210fe.firebaseapp.com",
  projectId: "chaton-210fe",
  storageBucket: "chaton-210fe.appspot.com",
  messagingSenderId: "114670556886",
  appId: "1:114670556886:web:25b5f2209f2300226e9b77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
