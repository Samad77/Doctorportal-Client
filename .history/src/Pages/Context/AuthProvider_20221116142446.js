import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/FirebaseConfig'

export AuthContext = createContext();
const auth = getAuth(app)

const authInfo = {};
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;