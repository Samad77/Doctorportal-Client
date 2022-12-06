import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const SecondCard = () => {
    const cardDetail = [
        {
            detail : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img : people1,
            name : "Winson Herry",
            address : "Calfornia"
        },
        {
            detail : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img : people2,
            name : "Winson Herry",
            address : "Calfornia"
        },
        {
            detail : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img : people3,
            name : "Winson Herry",
            address : "Calfornia"
        },
    ]
    return (
        <div>
            {
                cardDetail.map( detail => <PatientReview key={detail.name} detail={detail}></PatientReview>)
            }
        </div>
    );
};

const PatientReview = ({detail}) => {
    return (
        <section>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-left text-justify'>{detail.detail}</p>
                    
                    <section className='flex items-center'>
                        <div>
                            <img src={detail.img} className="w-14 h-14" alt="" />
                        </div>
                        <div>
                            <h2 className="card-title">{detail.name}</h2>
                            <p className='text-left'>{detail.address}</p>
                        </div>
                    </section>
                    
                </div>
            </div>
        </section>
    )
}
export default SecondCard;