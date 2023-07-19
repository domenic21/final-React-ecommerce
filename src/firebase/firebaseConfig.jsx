// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_cukA8f2MgnmIA3-rmC-u1JOU7ZYImmI",
  authDomain: "react-final-ecommerce.firebaseapp.com",
  projectId: "react-final-ecommerce",
  storageBucket: "react-final-ecommerce.appspot.com",
  messagingSenderId: "826470856776",
  appId: "1:826470856776:web:e9612cff7863ae2c07007d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);