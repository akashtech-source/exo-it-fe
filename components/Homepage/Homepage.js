import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import ContactForm from './ContactForm/ContactForm';
import HeroSection from './HeroSection/HeroSection';
import HeroService from './HeroService/HeroService';
import Navbar from './Navbar/Navbar';
import OurProject from './OurProject/OurProject';
import OurServices from './OurServices/OurServices';
import Query from './Query/Query';

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <HeroService />
            <AboutUs />
            <OurServices />
            <Query />
            <OurProject />
            <ContactForm />
        </div>
    );
};

export default Homepage;