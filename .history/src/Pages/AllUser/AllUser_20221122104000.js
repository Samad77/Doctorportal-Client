import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/users`);
            const data = await res.json();
            return data
        }
    });

    const handleAdminRole = (id) => {
        fetch(`http://localhost:4000/users/admin/${id}`, {
            method : "PUT"
        }).then(res => res.json()).then(data => {
            console.log(data);
            refetch()

        })
    }
    return (
        <div className='ml-20'>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>

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
                                {
                                    user?.role ? "Admin" : <td onClick={() => handleAdminRole(user._id)} className='btn btn-primary btn-xs mt-4 text-center bg-primary '>Make Admin</td>
                                }
                                <td>
                                    <button className="btn btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;