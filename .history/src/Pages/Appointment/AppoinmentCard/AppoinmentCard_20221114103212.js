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
                <h2 className=" text-primary font-bold text-center text-xl">{option.name}</h2>
                <p className='text-sm font-semibold'>{option.slots.length > 0 ? option.slots[0] : "Try another day"}</p>
                <p>{option.slots.length} Spaces available</p>
                <div className="card-actions justify-center ">
                    <button className="btn bg-secondary border-0 text-md text-white"></button>
                </div>
            </div>
        </div>
    )
}

export default AppoinmentCard;
