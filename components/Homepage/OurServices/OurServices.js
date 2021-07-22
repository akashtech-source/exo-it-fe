import { Typography } from '@material-ui/core';
import React from 'react';
import OurServiceCard from './OurServiceCard';
import Link from 'next/link'

const OurServices = () => {
    return (
        <div className="mt-5">
            <div className="text-center">
                <Typography
                variant="h6"
                >
                    OUR SERVICE
                </Typography>
                <Typography
                variant="h3"
                >
                    Services We Provide
                </Typography>
            </div>
            <OurServiceCard />
            <div className="text-center mt-5">
                <em className="fs-6">If you want to know more details about services Please check 
                    <span className="text-primary">
                    <Link href="/"> All Services</Link>    
                    </span> </em>
            </div>
        </div>
    );
};

export default OurServices;