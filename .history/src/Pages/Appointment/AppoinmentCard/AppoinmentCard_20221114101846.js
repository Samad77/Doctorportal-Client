import React, { useEffect, useState } from 'react';

const AppoinmentCard = () => {
    const [appoinmentOption, setAppoinmentOption] = useState([]);
    useEffect( () => {
        fetch('Services.json').then(Response => Response.json()).then( data => setAppoinmentOption(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AppoinmentCard;
