import React from 'react';
import comma from '../../../assets/icons/quote.svg'
const TestimonialArea = () => {
    return (
        <div className='my-24 flex px-10'>
            <div className='text-left justify-between w-full'>
                <h1 className='text-primary text-xl font-bold'>Appointment</h1>
                <h1 className="text-3xl lg:text-4xl font-bold">Make an appointment Today</h1>
            </div>
            <div>
                <img src={comma} alt="" className='w-36 h-36' />
            </div>
        </div>
    );
};

export default TestimonialArea;