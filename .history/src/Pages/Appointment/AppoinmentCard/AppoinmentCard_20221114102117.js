import React, { useEffect, useState } from 'react';

const AppoinmentCard = () => {
    const [appoinmentOption, setAppoinmentOption] = useState([]);
    useEffect( () => {
        fetch('Services.json').then(Response => Response.json()).then( data => setAppoinmentOption(data))
    }, [])
    return (
        <div>
            {
                appoinmentOption.map( option => console.log(option))
            }
            {
                appoinmentOption.map( option => <ShowOption key={option._id} option={option}></ShowOption>)
            }
        </div>
    );
};

const ShowOption = ({option}) => {
    return (
        <div>

        </div>
    )
}

export default AppoinmentCard;
