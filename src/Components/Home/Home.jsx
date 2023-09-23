import React from 'react'
import img from './1.webp'
import './Home.css'
import { Button } from '../Button/Button'
import { Link } from 'react-scroll'
import { PopupWidget } from 'react-calendly'

export const Home = () => {
    
    return (
        <div className='home-main-div'>
            <div className='home-content-main'>
                <h2 className='home-boosting-business'>We Help Businesses Scale To 7 Figures Through Paid Traffic.</h2>
                <p className='home-content-para main-para'>Boosting Your Business Growth Via Meta & Google Ads To Generate Mind-Boggling ROI</p> 
                <p className='home-content-para'>Put an end to squandering time and money on poor and inefficient advertising. It's time to scale your business, increase sales, and get the most of your advertising money.</p>

                <div className='home-button-div'>
                    
        <Link href="#" onClick={() => window.Calendly.initPopupWidget({url:'https://calendly.com/abrahmwhyite'})}>

                <Button  mainText={'Speak To Our Team Today'} subText={'Schedule Your FREE Audit Call Now'} color={'black'} text={'Speak to our team today'} /></Link>
                </div>
            </div>
            <div className='image-div'>
                <img src={img} alt=''></img>
            </div>

        </div>
    )
}
