import firebase  from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOc9wjhdzArS7rhFu1HsjZUIgsoRqEAJ8",
    authDomain: "udemy-vue-e9d6d.firebaseapp.com",
    projectId: "udemy-vue-e9d6d",
    storageBucket: "udemy-vue-e9d6d.appspot.com",
    messagingSenderId: "749045751515",
    appId: "1:749045751515:web:b68cecb913e473795476fe",
    measurementId: "G-Z66DQ5PX5G"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export {projectAuth,projectFirestore,timestamp}