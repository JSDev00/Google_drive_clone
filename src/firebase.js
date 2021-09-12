// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk7gOYYbSTQFNUa1blBiLXH7dSTLV7u2I",
    authDomain: "drive-bc9e7.firebaseapp.com",
    projectId: "drive-bc9e7",
    storageBucket: "drive-bc9e7.appspot.com",
    messagingSenderId: "632242760428",
    appId: "1:632242760428:web:23c6d1bfa37843248a13c9",
    measurementId: "G-EVQKDYX9WW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage =firebaseApp.storage();  
  const db = firebaseApp.firestore();
  export{auth,provider,storage,db};