import { format } from 'date-fns';
import React, { useState } from 'react';

const BookingModal = ({ bookingData, selected }) => {
    const date = format(selected, "PPP")
    const {slots, name} = bookingData;
    console.log(bookingData)
  

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(fullName, email, phone);

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    
                    <h3 className="text-lg font-bold text-left">{bookingData.name}</h3>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full my-2 bg-slate-600 text-white font-bold" value={date} readOnly name='scheduleDate'/>

                        <select className="select select-bordered select-sm w-full my-2 bg-slate-600 text-white font-bold" placeholder='Select your date' name='schedule'>                           
                            {
                                slots?.map( slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" placeholder="Full Name" className="input input-bordered input-sm w-full my-2" name='fullName'/>

                        <input type="text" placeholder="Phone Number" className="input input-bordered input-sm w-full my-2" name='phone'/>

                        <input type="text" placeholder="Email" className="input input-bordered input-sm w-full my-2" name='email'/>
                        {/* <label className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                        <button className="btn w-full " htmlFor="my-modal-3" onClick={handleBooking}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;