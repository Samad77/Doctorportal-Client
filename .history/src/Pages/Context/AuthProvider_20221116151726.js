import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/FirebaseConfig'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState("Samad");

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {

    }, [])
    const authInfo = {user, createUser, loginUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;