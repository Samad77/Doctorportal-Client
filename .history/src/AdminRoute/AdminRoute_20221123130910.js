import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin';
const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    if(loading ,isAdminLoading){
        <p>Loading...</p>
    }
    if (user?.uid && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>

};

export default AdminRoute;