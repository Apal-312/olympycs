// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALzeWWMVbIojPC4to0rXSZ4vxyaHgyQB0",
  authDomain: "olympics-2fc20.firebaseapp.com",
  projectId: "olympics-2fc20",
  storageBucket: "olympics-2fc20.appspot.com",
  messagingSenderId: "582979271227",
  appId: "1:582979271227:web:30fabccdd791b563ae7a1e",
  measurementId: "G-6HZPZH6YD5",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
