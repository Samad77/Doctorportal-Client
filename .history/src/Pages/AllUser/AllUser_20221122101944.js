import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const { data: allUser = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/users`);
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='ml-20'>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='btn btn-primary btn-xs mt-4 text-center bg-primary text-white'>Make Admin</td>
                            </tr>)
                        }

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;