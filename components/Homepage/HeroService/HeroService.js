import React from 'react';
import Image from 'next/image';
import service1 from '../../../public/images/service-1.png'
import service2 from '../../../public/images/service-2.png'
import service3 from '../../../public/images/service-3.png'

const HeroService = () => {
    return (
        <div className='container mt-5 text-center'>
            <div className="row ms-md-5 g-3">
                <div className="col-md-3 ms-md-5 serviceCard">
                    <Image src={service1} alt="service1"></Image>
                    <h4>IT industry</h4>
                </div>
                <div className="col-md-3 serviceCard">
                    <Image src={service2} height="100px" width="100px" alt="service2"></Image>
                    <h4>IT industry</h4>
                </div>
                <div className="col-md-3 serviceCard">
                    <Image src={service3} height="100px" width="100px" alt="service3"></Image>
                    <h4>IT industry</h4>
                </div>
            </div>
        </div>
    );
};

export default HeroService;