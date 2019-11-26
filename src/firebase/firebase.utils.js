import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'frsh-clothing.firebaseapp.com',
    databaseURL: 'https://frsh-clothing.firebaseio.com',
    projectId: 'frsh-clothing',
    storageBucket: '',
    messagingSenderId: '549705122038',
    appId: '1:549705122038:web:90d726abfd3134ea176cd7'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuthObj, additionalDataObj) => {
    if (!userAuthObj) return;

    const userRef = firestore.doc(`users/${userAuthObj.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuthObj;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalDataObj
            });
        } catch (error) {
            console.log(`Error creating user: ${error.message}`);
        }
    }
    return userRef;
};

//google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();

//set the provider to show 'select google accounts' when prompt shows up
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () =>
    auth.signInWithPopup(provider).catch(error => console.log(error.code));

export default firebase;
