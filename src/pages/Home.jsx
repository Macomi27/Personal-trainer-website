import React from 'react';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero.jsx';
import HeroSub from '../components/Hero/HeroSub.jsx';

const Home = () => {
    return(
        <>
            <Header />
            <Hero />
            <HeroSub />
            <Footer />
        </>
    )
}

export default Home;