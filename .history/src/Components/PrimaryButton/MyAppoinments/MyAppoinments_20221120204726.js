import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../../Pages/Context/AuthProvider';

const MyAppoinments = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1>Appoinments</h1>

            <div className="overflow-x-auto w-screen px-10">
                <table className="table table-zebra w-full ">
                                       <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>  
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                        {
                            bookings.map(booked => )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;