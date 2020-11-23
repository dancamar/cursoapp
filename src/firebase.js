import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBzqAzsp_wn6-QpRkpqE_uiOgbY6RGjuQQ",
    authDomain: "cursoapptec-f6433.firebaseapp.com",
    databaseURL: "https://cursoapptec-f6433.firebaseio.com",
    projectId: "cursoapptec-f6433",
    storageBucket: "cursoapptec-f6433.appspot.com",
    messagingSenderId: "195825507497",
    appId: "1:195825507497:web:1901a4b52367f55e089db8"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db=fb.firestore();

  