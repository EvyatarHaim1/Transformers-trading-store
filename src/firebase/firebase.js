import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyATM-75tdth23pxfUNsJiJJZklHUHAHZIM",
    authDomain: "transformersstore.firebaseapp.com",
    databaseURL: "https://transformersstore.firebaseio.com",
    projectId: "transformersstore",
    storageBucket: "transformersstore.appspot.com",
    messagingSenderId: "14300606897",
    appId: "1:14300606897:web:3f35a8331279f2853e4d90",
    measurementId: "G-NVK7MTVT1X"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.analytics();
 
  const storage = firebase.storage();

  export  {
    storage, firebase as default
  }