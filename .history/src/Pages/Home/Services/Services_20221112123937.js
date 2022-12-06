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
                allServices.map( service => <Service key={service.name} service={service}></Service>)
            }
        </div>
    );
};

const Service = ({service}) => {
    return (
        // <div className="card  bg-primary text-white shadow-xl">
        //     <div className="card-body flex flex-col items-center  lg:flex-row">
        //         <div className=''>
        //             <img src={img1} alt="" className='w-20 h-20'/>
        //         </div>
        //         <div className='text-left'>
        //             <h2 className="card-title">Opening Hours</h2>
        //             <p>Servicing 24 Hour</p>
        //         </div>
        //     </div>
        // </div>

        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}
export default Services;