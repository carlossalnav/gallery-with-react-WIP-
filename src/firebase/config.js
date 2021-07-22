import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAHBDxKl7d3ygkUok4PidgBhQz3Q7fefiA",
    authDomain: "reactllery.firebaseapp.com",
    projectId: "reactllery",
    storageBucket: "reactllery.appspot.com",
    messagingSenderId: "549732659146",
    appId: "1:549732659146:web:687dff529e3dac2524a933"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};