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

// Seed Firebase Firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  for (const object of objectsToAdd) {
    const newDocRef = collectionRef.doc(); //get me a new document in this collection with a random ID
    batch.set(newDocRef, object);
  }

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = collections => {
  //convert collection to an object
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  /*
    * convert transformedCollection from an array to an object:
    *   [{hats: {id, routeName, ...}}, {jackets: {id, routeName, ...}}]
    *   to
    *   {hats: {id, routeName, ...}, jackets: {id, routeName, ...}}
    *
     */
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {});
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
