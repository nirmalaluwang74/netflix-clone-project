import { useState, useEffect, useContext } from 'react';
import * as firebase from "firebase/compat//app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);
    
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        
        return () => listener();
    }, []);
    
    return { user };
}
