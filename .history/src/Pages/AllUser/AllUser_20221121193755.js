import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const {data : allUser = []} = useQuery({
        queryFn : ['users'],
        queryKey : async() => {
            const res = await fetch(`http://localhost:5000/allUser`);
            const data = await res.json();
            return data
        }   
    })
    return (
        <div  className='ml-20'>
            
            <p>{allUser.length}</p>
        </div>
    );
};

export default AllUser;