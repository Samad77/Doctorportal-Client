import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../../Pages/Context/AuthProvider';

const MyAppoinments = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async() => {
            const res = await fetch(url, {
                headers : {
                    authorization :` bearer ${localStorage.getItem('My-Token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1>Appoinments</h1>

            <div className="overflow-x-auto  px-10">
                <table className="table table-zebra  ">
                                       <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>  
                        
                        {
                            bookings.map((booked, i) => <tr>
                                <th>{i+1}</th>
                                <td>{booked.patient}</td>
                                <td>{booked.treatment}</td>
                                <td>{booked.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;