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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;