import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({selected}) => {
    return (
        <div>
            <p className='text-secondary text-bold text-xl'>Available Appointments on {format(selected, "PPP")}</p>
        </div>
    );
};

export default AvailableAppoinment;