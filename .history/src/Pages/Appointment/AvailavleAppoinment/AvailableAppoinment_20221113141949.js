import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({selected}) => {
    return (
        <div>
            <p>Available Appointments on {format(selected, "PPP")}</p>
        </div>
    );
};

export default AvailableAppoinment;