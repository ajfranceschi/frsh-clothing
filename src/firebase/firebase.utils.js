import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBO3P8S-Ksf2STZiYAamt-PO6gU3hymOKc",
  authDomain: "frsh-clothing.firebaseapp.com",
  databaseURL: "https://frsh-clothing.firebaseio.com",
  projectId: "frsh-clothing",
  storageBucket: "",
  messagingSenderId: "549705122038",
  appId: "1:549705122038:web:90d726abfd3134ea176cd7"
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

//set the provider to show 'select google accounts' when prompt shows up
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(error => console.log(error.code));

export default firebase;