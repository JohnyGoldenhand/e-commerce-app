import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCNBV6AIXtZo78HLkc-AYHN_LUgNFI1cjw",
    authDomain: "e-commerce-shop-db-463c1.firebaseapp.com",
    projectId: "e-commerce-shop-db-463c1",
    storageBucket: "e-commerce-shop-db-463c1.appspot.com",
    messagingSenderId: "131900806987",
    appId: "1:131900806987:web:db9f317f0d1726f31b3ace",
    measurementId: "G-NX2C2ED69V"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
