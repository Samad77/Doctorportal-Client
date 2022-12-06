import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinment from '../AvailavleAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableAppoinment></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;