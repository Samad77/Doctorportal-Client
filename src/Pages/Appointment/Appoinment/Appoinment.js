import React, { useState } from 'react';
import AppoinmentCard from '../AppoinmentCard/AppoinmentCard';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinment from '../AvailavleAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableAppoinment selected={selected}></AvailableAppoinment>
            <AppoinmentCard selected={selected}></AppoinmentCard>
        </div>
    );
};

export default Appoinment;