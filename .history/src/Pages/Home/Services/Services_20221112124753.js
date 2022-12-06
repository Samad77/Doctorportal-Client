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

        <section>

            <div className=''>
                <h1 className='text-primary text-lg font-extrabold'>Our Services</h1>
                <p className='text-3xl'>Services We Provide</p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                allServices.map( service => <Service key={service.name} service={service}></Service>)
            }
            </div>
        </section>
        
    );
};

const Service = ({service}) => {
    return (
        <div className="card  bg-primary text-white shadow-xl bg-slate-100 text-black my-10">
            <div className="card-body flex flex-col items-center  ">
                <div className=''>
                    <img src={service.img} alt="" className='w-20 h-20'/>
                </div>
                <div className='text-left'>
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.about}</p>
                </div>
            </div>
        </div>

        
    )
}
export default Services;