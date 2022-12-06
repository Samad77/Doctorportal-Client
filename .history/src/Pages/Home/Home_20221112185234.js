import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import TestimonialArea from './TestimonialArea/TestimonialArea';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <TestimonialArea></TestimonialArea>
        </div>
    );
};

export default Home;