// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXzgZXap9EwR4CzZcb1jsIImnKI0sgbqA",
  authDomain: "htv-project-63941.firebaseapp.com",
  projectId: "htv-project-63941",
  storageBucket: "htv-project-63941.appspot.com",
  messagingSenderId: "846327699447",
  appId: "1:846327699447:web:be046ea11b33c3d7f540f2",
  measurementId: "G-2FQ7VVN17T"
};

//let app;
//if (firebase.apps.length === 0) {
  //  app = firebase.initializeApp(firebaseConfig);
//}else{
  //  app = firebase.app()
//}
// Initialize Firebase
//const auth = firebase.auth()
firebase.initializeApp(firebaseConfig);

export default firebase;