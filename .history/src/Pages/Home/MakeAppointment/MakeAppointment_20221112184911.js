import React from 'react';
import img1 from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className="hero bg-base-100 my-32 text-white rounded-xl" style={{background : `url(${img1})`}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className='text-primary text-xl font-bold' >Appointment</h1>
      <h1 className="text-4xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
    <div className=" card hidden flex-shrink-0 w-1/2 -mt-36 -mb-4 ">
       <img src={doctor} alt="" />
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;