import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
const Services = () => {
    const allServices = [
        {
            img : img1,
            name : "Fluoride Treatment",
            about : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            img : img2,
            name : "Cavity Filling",
            about : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            img : img3,
            name : "Teeth Whitening",
            about : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div>
            {
                allServices.map( service => <Service key={service.name}></Service>)
            }
        </div>
    );
};

const Service = ({}) => {

}
export default Services;