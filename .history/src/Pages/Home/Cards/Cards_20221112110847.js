import React from 'react';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'
import img4 from '../../../assets/icons/quote.svg'

const Cards = () => {
    return (
        <section>
            <div className="card w-96 bg-primary text-white shadow-xl">
                <div className="card-body grid ">
                    <div>
                        <img src={img1} alt="" className='w-20 h-20'/>
                    </div>
                    <div className='text-left'>
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cards;