import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const {} = useQuery({
        queryFn : ['users'],
        queryKey : async() => {
            const res = await fetch(`http://localhost:5000/allUser`);
            const allUser = await res.json();
            return allUser
        }   
    })
    return (
        <div>
            
        </div>
    );
};

export default AllUser;