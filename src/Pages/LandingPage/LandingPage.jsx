import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Home } from '../../Components/Home/Home'
import { About } from '../../Components/About/About'

import './LandingPage.css'
import { Services } from '../../Components/Services/Services'
import { Testimonials } from '../../Components/Testimonials/Testimonials'
import { CallToAction } from '../../Components/CallToAction/CallToAction'
import { FreeCall } from '../../Components/FreeCall/FreeCall'
import { Footer } from '../../Components/Footer/Footer'

export const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Testimonials></Testimonials>
            <CallToAction></CallToAction>
            <FreeCall></FreeCall>
            <Footer></Footer>
        </div>
    )
}
