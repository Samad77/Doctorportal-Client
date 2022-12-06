import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import {Navigate} from 'react-router-dom'
const PrivateRouts = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user?.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
   
};

export default PrivateRouts;