import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import {useQuery} from '@tanstack/react-query'
import { format } from 'date-fns/esm';

const AppoinmentCard = ({ selected }) => {
    // const [appoinmentOption, setAppoinmentOption] = useState([]);
    const [bookingData, setBookingData] = useState({})
    // useEffect(() => {
    //     fetch('http://localhost:5000/appoinmentOption').then(Response => Response.json()).then(data => setAppoinmentOption(data))
    // }, []);
    const date = format(selected, "PPP")
    const {data:appoinmentOption = [], refetch} = useQuery({
        queryKey : ["appoinmentOption", date],
        queryFn : () => 
            fetch(`http://localhost:4000/appoinmentOption?date=${date}`).then( Response => Response.json())
        
    })
    return (
        <section>
            <div className='grid grid-cols-1 gap-6 my-10 lg:grid-cols-3'>
                {
                    appoinmentOption.map(option => <ShowOption key={option._id} option={option} setBookingData={setBookingData}></ShowOption>)
                }
            </div>

            <BookingModal bookingData={bookingData} selected={selected} refetch={refetch}></BookingModal>
        </section>
    );
};

const ShowOption = ({ option, setBookingData }) => {
    return (
        <div className="card w-96 bg-slate-100 text-primary-content shadow-2xl">
            <div className="card-body text-center">
                <h2 className=" text-primary font-bold text-center text-xl">{option.name}</h2>
                <p className='text-sm font-semibold'>{option.slots.length > 0 ? option.slots[0] : "Try another day"}</p>
                <p className='text-sm font-semibold'>{option.slots.length} Spaces available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="my-modal-3" className="btn bg-secondary border-0 text-md text-white " onClick={() => setBookingData(option)}>Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default AppoinmentCard;
