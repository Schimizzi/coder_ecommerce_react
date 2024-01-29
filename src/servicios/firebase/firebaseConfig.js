// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1g_NYu57yhMq9Otw9hqPiRod3YBLYCmY",
  authDomain: "ecommercecoder-df0fa.firebaseapp.com",
  projectId: "ecommercecoder-df0fa",
  storageBucket: "ecommercecoder-df0fa.appspot.com",
  messagingSenderId: "81067629375",
  appId: "1:81067629375:web:6c6130e1fda93a1b7f918a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)