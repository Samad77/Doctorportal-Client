import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const {data : allUser = []} = useQuery({
        queryKey : ['users'],
        queryFn : async() => {
            const res = await fetch(`http://localhost:4000/users`);
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