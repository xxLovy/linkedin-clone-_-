import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8UbDgVPp0ZzSORtSvb13JE25R2xIffjE",
    authDomain: "linkedin-clone-25fc7.firebaseapp.com",
    projectId: "linkedin-clone-25fc7",
    storageBucket: "linkedin-clone-25fc7.appspot.com",
    messagingSenderId: "581037766630",
    appId: "1:581037766630:web:df4616d46f28422599c827"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth }