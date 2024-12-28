// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merlumbung.firebaseapp.com",
  projectId: "merlumbung",
  storageBucket: "merlumbung.firebasestorage.app",
  messagingSenderId: "704424730430",
  appId: "1:704424730430:web:165249f7053fb2a52ad66f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
