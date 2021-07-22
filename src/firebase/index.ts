import firebase from "firebase/app"

if (firebase.app.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyC15lue_2H4pbBDCBsNQCtG9EVMEgh-Uz0",
    authDomain: "react-worker-experiment.firebaseapp.com",
    projectId: "react-worker-experiment",
    storageBucket: "react-worker-experiment.appspot.com",
    messagingSenderId: "885096528311",
    appId: "1:885096528311:web:8e4698b456c1c821e2d032",
    measurementId: "G-DPZ1LXXGLS",
  })
}

firebase.analytics()
