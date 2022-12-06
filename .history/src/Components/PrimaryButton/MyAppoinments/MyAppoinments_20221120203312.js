import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import AuthProvider from '../../../Pages/Context/AuthProvider';

const MyAppoinments = () => {

    const {user} = useContext(AuthProvider);

    const {} = useQuery({
        queryKey : ["bookings", ]
    })
    return (
        <div>
            <h1>Appoinments</h1>

        </div>
    );
};

export default MyAppoinments;