import React from 'react'
import { Button } from '../Button/Button'
import './About.css'

export const About = () => {
    return (
        <div className='about-main-div'>
            {/* <div className='about-stats'>
                <div>
                    <h3>15K+</h3>
                    <p>Happy Clients</p>
                </div>
                <div>
                    <h3>600+</h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3>12K+</h3>
                    <p>Reviews</p>
                </div>
                <div>
                    <h3>$1.2M</h3>
                    <p>ADs Spent</p>
                </div>
            </div> */}
            <div className='about-content'>
                <h2>About Us</h2>
                <p className='about-para-1'>At Cube Media Marketing, we're not just another digital marketing agency – we're your strategic ally in navigating the dynamic digital landscape. With a passion for innovation and a knack for results, we're here to empower your brand's online presence like never before.</p>
                <p className='about-para-2'>Cube Media has collaborated with the best in the business to generate millions of dollars in return on advertising expenditure. We do away with the formalities & inefficiencies that most agencies experience. 
</p>

                <div className='about-button-div'>
                    <Button mainText={'Speak To Our Team Today'} subText={'Schedule Your FREE Audit Call Now'}  color={'black'} text={'Speak to our team now'}></Button>
                </div>
            </div>

        </div>
    )
}
