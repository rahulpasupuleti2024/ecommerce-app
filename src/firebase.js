import {initializeApp} from "firebase/app";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPfeZHrJ2NYK-KJWdvsITFr4WeSumeFLI",
  authDomain: "shopper-app-64330.firebaseapp.com",
  projectId: "shopper-app-64330",
  storageBucket: "shopper-app-64330.appspot.com",
  messagingSenderId: "425608614133",
  appId: "1:425608614133:web:9401a9cf684c1f3580f5bc"
};

 const app=firebase.initializeApp(firebaseConfig)

 export const myDatabase = firebase.firestore()
 export const auth =getAuth(app)
 export const provider = new GoogleAuthProvider()


