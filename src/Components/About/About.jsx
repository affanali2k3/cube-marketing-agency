import React from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-scroll'
import './About.css'

export const About = () => {
    return (
        <div className='about-main-div'>
            <div className='about-stats'>
                <div>
                    <h3>200+</h3>
                    <p>Clients Helped</p>
                </div>
                <div>
                    <h3>$50M+</h3>
                    <p>Revenue Generated</p>
                </div>
                <div>
                    <h3>7+</h3>
                    <p>Years Of Experience</p>
                </div>
                {/* <div>
                    <h3>$1.2M</h3>
                    <p>ADs Spent</p>
                </div> */}
            </div>
            <div className='about-content'>
                <h2>About Us</h2>
                <p className='about-para-1'>At Cube Media Marketing, we're not just another digital marketing agency – we're your strategic ally in navigating the dynamic digital landscape. With a passion for innovation and a knack for results, we're here to empower your brand's online presence like never before.</p>
                <p className='about-para-2'>Cube Media has collaborated with the best in the business to generate millions of dollars in return on advertising expenditure. We do away with the formalities & inefficiencies that most agencies experience. </p>

                <div className='about-button-div'>
                <Link href="#" onClick={() => window.Calendly.initPopupWidget({url:'https://calendly.com/abrahmwhyite'})}>

                    <Button mainText={'Speak To Our Team Today'} subText={'Schedule Your FREE Audit Call Now'}  color={'black'} text={'Speak to our team now'}></Button></Link>
                </div>
            </div>
            <div className='about-stats-after'>
            <div>
                    <h3>200+</h3>
                    <p>Clients Helped</p>
                </div>
                <div>
                    <h3>$50M+</h3>
                    <p>Revenue Generated</p>
                </div>
                <div>
                    <h3>7+</h3>
                    <p>Years Of Experience</p>
                </div>
                {/* <div>
                    <h3>$1.2M</h3>
                    <p>ADs Spent</p>
                </div> */}
            </div>

        </div>
    )
}
