import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import ServicePage from './Service-page'
import AboutUs from './About-us'
import Article from './Article'
import ContactUs from './Contact-us'

const Home = () => {
    return (
        <div>
            <LandingPage />
            <ServicePage />
            <AboutUs />
            <Article />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home