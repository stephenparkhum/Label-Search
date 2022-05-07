import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
