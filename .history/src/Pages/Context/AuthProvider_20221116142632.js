import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/FirebaseConfig'

export const AuthContext = createContext();
const auth = getAuth(app)

    

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    const authInfo = {};
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;