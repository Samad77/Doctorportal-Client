import React from 'react';
import comma from '../../../assets/icons/quote.svg'
const TestimonialArea = () => {
    return (
        <div className='my-24 flex'>
            <div className='text-left justify-between w-full'>
                <h1 className='text-primary text-xl font-bold' >Appointment</h1>
                <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            </div>
            <div>
                <img src={comma} alt="" className='w-32 h-32' />
            </div>
        </div>
    );
};

export default TestimonialArea;