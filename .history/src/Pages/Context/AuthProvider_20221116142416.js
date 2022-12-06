import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/FirebaseConfig'

export AuthContext = createContext(app);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;