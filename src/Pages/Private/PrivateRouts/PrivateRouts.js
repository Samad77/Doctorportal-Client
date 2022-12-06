import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRouts = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <p>Loading...</p>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>

};

export default PrivateRouts;