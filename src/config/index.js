// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp16O51peeKYTlooyj_xZLD3d47BDAYsE",
  authDomain: "ecommerceapp-a6c8d.firebaseapp.com",
  projectId: "ecommerceapp-a6c8d",
  storageBucket: "ecommerceapp-a6c8d.appspot.com",
  messagingSenderId: "1066154270103",
  appId: "1:1066154270103:web:d5296060151c68bbdcf8d2",
  measurementId: "G-C5VYET6K5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;