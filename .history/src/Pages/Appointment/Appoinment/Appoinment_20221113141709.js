import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinment from '../AvailavleAppoinment/AvailableAppoinment';

const Appoinment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppoinment></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;