import React from 'react';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero.jsx';
import HeroSub from '../components/Hero/HeroSub.jsx';
import Signup from '../components/Signup/Signup.jsx';

const Home = () => {
    return(
        <>
            <Header />
            <Hero />
            <HeroSub />
            <Signup />
            <Footer />
        </>
    )
}

export default Home;