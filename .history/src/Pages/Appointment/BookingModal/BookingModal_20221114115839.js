import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bookingData, selected }) => {
    const date = format(selected, "PPP")
    const {slots} = bookingData;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-left">{bookingData.name}</h3>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full my-2 bg-slate-600 text-white font-bold" value={date} readOnly />

                        <select className="select select-bordered select-sm w-full my-2 bg-slate-600 text-white font-bold" placeholder='Select your date'>
                            
                            
                            {
                                slots.map( slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />

                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />

                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;