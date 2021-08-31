import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import { GlobalStyles } from './global-styles';
import './index.css';
import App from './App';
import { FirebaseContext }from './context/firebase';
import reportWebVitals from './reportWebVitals';
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// const db = getFirestore(firebaseApp);

const firebaseConfig = {
  apiKey: "AIzaSyAIeLFJBFivavwsZS-aSNYlzvSp0uaYXVY",
  authDomain: "netflix-clone-project-df649.firebaseapp.com",
  projectId: "netflix-clone-project-df649",
  storageBucket: "netflix-clone-project-df649.appspot.com",
  messagingSenderId: "356706309966",
  appId: "1:356706309966:web:7b5a96c7223f2cff26701f",
  measurementId: "G-6LWKEM7M4P"
};

const firebaseApp = initializeApp({ firebaseConfig });




ReactDOM.render(
  <React.StrictMode>
    
    <FirebaseContext.Provider value={{ firebaseApp}}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
