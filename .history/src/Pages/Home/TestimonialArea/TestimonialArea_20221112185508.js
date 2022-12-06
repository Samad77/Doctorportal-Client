import React from 'react';
import comma from '../../../assets/icons/quote.svg'
const TestimonialArea = () => {
    return (
        <div className='my-24 flex'>
            <div>
                <h1 className='text-primary text-xl font-bold' >Appointment</h1>
                <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            </div>
            <div>
                <img src={comma} alt="" />
            </div>
        </div>
    );
};

export default TestimonialArea;