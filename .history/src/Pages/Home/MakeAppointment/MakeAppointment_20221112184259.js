import React from 'react';
import img1 from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <div className="hero bg-base-100 mt-16 text-white" style={{background : `url(${img1})`}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className='text-primary text-xl font-bold' >Appointment</h1>
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <img src={doctor} alt="" />
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;