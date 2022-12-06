import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <section>
            <div className="hero my-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-3/4 rounded-lg shadow-2xl lg:w-1/2" />
                    <div className=' w-full px-20 lg:w-1/2'>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>
                    </div>
                </div>
            </div>
            <p className='mb-5 text-primary font-bold'>Your appoinment date is <span>{format(selected, "PPP")}</span></p>
        </section>
    );
};

export default AppointmentBanner;