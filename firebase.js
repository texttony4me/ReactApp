
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCxeJkd4C4fmWbyag-Mzb2AOFj0G8jCmbI",
    authDomain: "fir-react-c8312.firebaseapp.com",
    projectId: "fir-react-c8312",
    storageBucket: "fir-react-c8312.appspot.com",
    messagingSenderId: "765141086238",
    appId: "1:765141086238:web:9f657f44bc7c9f9e0cbe0f"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;