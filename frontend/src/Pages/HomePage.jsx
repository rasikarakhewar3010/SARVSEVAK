import Footer from '@/components/Footer';
import AboutSection from '@/components/Home/AboutSection';
import Hero from '@/components/Home/Hero';
import KeyFeaturesSection from '@/components/Home/KeyFeaturesSection';
import NavBar from '@/components/NavBar';
import React from 'react';


const HomePage = () => {
    return (
        <>
        <NavBar/>
        <Hero/>
        <AboutSection/>
        <KeyFeaturesSection/>
        <Footer/>
        </>
    );
};

export default HomePage;