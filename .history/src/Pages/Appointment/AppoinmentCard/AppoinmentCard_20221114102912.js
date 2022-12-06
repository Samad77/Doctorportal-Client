import React, { useEffect, useState } from 'react';

const AppoinmentCard = () => {
    const [appoinmentOption, setAppoinmentOption] = useState([]);
    useEffect(() => {
        fetch('Services.json').then(Response => Response.json()).then(data => setAppoinmentOption(data))
    }, [])
    return (
        <div className='grid grid-cols-1 gap-6 my-10 lg:grid-cols-3'>
             
            {
                appoinmentOption.map(option => <ShowOption key={option._id} option={option}></ShowOption>)
            }
        </div>
    );
};

const ShowOption = ({ option }) => {
    return (
        <div className="card w-96 bg-slate-100 text-primary-content shadow-2xl">
            <div className="card-body text-center">
                <h2 className="card-title text-primary font-bold">{option.name}</h2>
                <p>{option.slots.length > 0 ? option.slots[0] : "Try another day"}</p>
                <p>{option.slots.length}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default AppoinmentCard;
