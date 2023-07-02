// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRY_Cl0YZe9Es5UBcHEIieXtZnEnVm6VI",
  authDomain: "linkedin-clone-f68d0.firebaseapp.com",
  projectId: "linkedin-clone-f68d0",
  storageBucket: "linkedin-clone-f68d0.appspot.com",
  messagingSenderId: "226895748424",
  appId: "1:226895748424:web:a3e4e4258ae1cc0075277d",
  measurementId: "G-TZ2QY4E4DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export { auth,app, analytics };