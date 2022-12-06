import React, { useEffect, useState } from 'react';

const AppoinmentCard = () => {
    const [appoinmentOption, setAppoinmentOption] = useState([]);
    useEffect(() => {
        fetch('Services.json').then(Response => Response.json()).then(data => setAppoinmentOption(data))
    }, [])
    return (
        <div>
            {
                appoinmentOption.map(option => console.log(option))
            }
            {
                appoinmentOption.map(option => <ShowOption key={option._id} option={option}></ShowOption>)
            }
        </div>
    );
};

const ShowOption = ({ option }) => {
    return (
        <div className="card w-96 bg-slate-100 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default AppoinmentCard;
