import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin';
const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin] = useAdmin(user?.email)
    if (user?.uid && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>

};

export default AdminRoute;