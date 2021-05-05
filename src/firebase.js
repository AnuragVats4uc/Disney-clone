import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB0vDBWKQYoTbZdswgm61cHoPFQzuPadZ4",
  authDomain: "disneyplus-clone-76e32.firebaseapp.com",
  projectId: "disneyplus-clone-76e32",
  storageBucket: "disneyplus-clone-76e32.appspot.com",
  messagingSenderId: "525124963423",
  appId: "1:525124963423:web:1ebcdfb1b518ef9f4b9fea",
  measurementId: "G-E53EZBSG1Y"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;