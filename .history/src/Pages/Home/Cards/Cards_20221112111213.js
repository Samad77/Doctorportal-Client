import React from 'react';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'
import img4 from '../../../assets/icons/quote.svg'

const Cards = () => {
    return (
        <section>
            <div className="card w-96 bg-primary text-white shadow-xl">
                <div className="card-body flex ">
                    <div className=''>
                        <img src={img1} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>

                </div>
            </div>

            <div className="card w-96 bg-primary text-white shadow-xl">
                <div className="card-body flex ">
                    <div className=''>
                        <img src={img2} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>

                </div>
            </div>

            <div className="card w-96 bg-primary text-white shadow-xl">
                <div className="card-body flex ">
                    <div className=''>
                        <img src={img4} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cards;