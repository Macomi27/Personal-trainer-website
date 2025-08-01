import React from 'react';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero.jsx';
import HeroSub from '../components/Hero/HeroSub.jsx';
import Signup from '../components/Signup/Signup.jsx';
import Offer from '../components/Offer/Offer.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import PriceList from '../components/Pricelist/Pricelist.jsx';
import Worth from '../components/Worth/Worth.jsx';

const Home = () => {
    return(
        <>
            <Header />
            <Hero />
            <HeroSub />
            <Offer />
            <Gallery />
            <PriceList />
            <Worth />
            <Signup />
            <Footer />
        </>
    )
}

export default Home;