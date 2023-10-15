
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdAa2R4coIcA-wplVjkSzET99cCMm1XgI",
  authDomain: "ecommerce-80730.firebaseapp.com",
  projectId: "ecommerce-80730",
  storageBucket: "ecommerce-80730.appspot.com",
  messagingSenderId: "343172936858",
  appId: "1:343172936858:web:bad12ab7bf96da6a791b23"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export{db,auth}