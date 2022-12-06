import React from 'react';
import chair from '../../../assets/images/chair.png'
import {DayPicker} from 'react-day-picker'
const AppointmentBanner = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-1/2 rounded-lg shadow-2xl" />
                <div className=' w-1/2'>
                    <DayPicker></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;