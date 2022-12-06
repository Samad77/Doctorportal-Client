import React from 'react';
import img1 from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero bg-base-100 my-36">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img1} className=" rounded-lg shadow-2xl lg:w-1/2" />
                <div className='text-left'>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary border-0 bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;