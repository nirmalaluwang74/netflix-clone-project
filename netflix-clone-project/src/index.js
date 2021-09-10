import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import { GlobalStyles } from './global-styles';
import './index.css';
import App from './App';
import { FirebaseContext }from './context/firebase';
import { } from 'firebase/auth';


ReactDOM.render(
  <React.StrictMode>
    
    <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

