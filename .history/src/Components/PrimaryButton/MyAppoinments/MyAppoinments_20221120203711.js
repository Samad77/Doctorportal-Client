import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../../Pages/Context/AuthProvider';

const MyAppoinments = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: fetch(`http://localhost:5000/bookings?email=${user?.email}`).then(Response => Response.json()).then(data => console.log(data))
    })
    return (
        <div>
            <h1>Appoinments</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                                       <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                       
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                       
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;