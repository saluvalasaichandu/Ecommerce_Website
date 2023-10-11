import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBShSh96-42ffS4j0QjYImSZeMbh0daN10",
    authDomain: "website-25e58.firebaseapp.com",
    projectId: "website-25e58",
    storageBucket: "website-25e58.appspot.com",
    messagingSenderId: "815803028447",
    appId: "1:815803028447:web:27d2c6c3711eb6ef88aa6a"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export{db,auth}