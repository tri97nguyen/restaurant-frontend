import 'firebase/firebase-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyA8MOHtlsgvpdsAtXDb68q0tbb0UttBJe0",
    authDomain: "restaurant-42709.firebaseapp.com",
    projectId: "restaurant-42709",
    storageBucket: "restaurant-42709.appspot.com",
    messagingSenderId: "160393098715",
    appId: "1:160393098715:web:edd37d17ca1e3c49e9a3fe",
    measurementId: "G-TH93YDFP4C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

window.firestore = firestore

