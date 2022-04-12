// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChH7tiQlICmDSRXDjLNQ-0UltS1V0MA4Q",
  authDomain: "blog-application-react.firebaseapp.com",
  projectId: "blog-application-react",
  storageBucket: "blog-application-react.appspot.com",
  messagingSenderId: "866202935887",
  appId: "1:866202935887:web:36d0664536eb5aeb8dc03a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth