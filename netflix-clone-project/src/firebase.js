import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { } from 'firebase/auth';

// import {seedDatabase} from './seed';

const config = {
    apiKey: "AIzaSyAIeLFJBFivavwsZS-aSNYlzvSp0uaYXVY",
    authDomain: "netflix-clone-project-df649.firebaseapp.com",
    projectId: "netflix-clone-project-df649",
    storageBucket: "netflix-clone-project-df649.appspot.com",
    messagingSenderId: "356706309966",
    appId: "1:356706309966:web:7b5a96c7223f2cff26701f",
    measurementId: "G-6LWKEM7M4P"
  };
  
  firebase.initializeApp(config);

  // seedDatabase(firebase);


  export default firebase;
  
