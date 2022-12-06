import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRouts = ({children}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouts;