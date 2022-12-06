import React from 'react';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'
import img4 from '../../../assets/icons/quote.svg'

const Cards = () => {
    return (
        <section className='grid grid-cols-1 md: grid-col-2 lg: grid-col-3 '>
            <div className="card  bg-primary text-white shadow-xl">
                <div className="card-body lg :flex flex-row items-center sm: flex flex-col ">
                    <div className=''>
                        <img src={img1} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Servicing 24 Hour</p>
                    </div>

                </div>
            </div>

            <div className="card  bg-neutral text-white shadow-xl">
                <div className="card-body lg :flex flex-row items-center ">
                    <div className=''>
                        <img src={img2} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Visit our location</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>

                </div>
            </div>

            <div className="card  bg-primary text-white shadow-xl">
                <div className="card-body lg :flex flex-row items-center  ">
                    <div className=''>
                        <img src={img3} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Contact us now</h2>
                        <p>+000 123 456789</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cards;