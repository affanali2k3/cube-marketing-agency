import React from 'react'
import img from './1.webp'
import './Home.css'
import { Button } from '../Button/Button'

export const Home = () => {
    return (
        <div className='home-main-div'>
            <div className='home-content-main'>
                <h2 className='home-boosting-business'>Boosting your Business Growth Economically</h2>
                <p className='home-content-para main-para'>We Work With Companies To Generate Mind-Boggling ROI Through Paid Advertising.</p> 
                <p className='home-content-para'>Put an end to squandering time and money on poor and inefficient advertising. It's time to scale your business, increase sales, and get the most of your advertising money.</p>

                <div className='home-button-div'>
                <Button style={{ transform: 'translateX(8%)' }} mainText={'Speak To Our Team Today'} subText={'Schedule Your FREE Audit Call Now'} color={'black'} text={'Speak to our team today'} />
                </div>
            </div>
            <div className='image-div'>
                <img src={img} alt=''></img>
            </div>
        </div>
    )
}
