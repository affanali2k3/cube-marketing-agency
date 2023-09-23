import React from 'react'
import './Testimonials.css'
import company1 from './company1.png'
import company2 from './company2.png'
import company3 from './company3.png'
import company4 from './company4.png'
import company5 from './company5.png'

export const Testimonials = () => {
    return (
        <div className='testimonial-main-div'>
            <h2>Companies Who Worked With Us</h2>
            <div className='testimonial-cards-main'>
               <div className="slider">
                <div className="slide-track">
                    <div className="slide">
            <img className='company1-img' src={company1} alt=''></img>
            <img  className='company2-img'  src={company2} alt=''></img>
            <img className='company3-img'   src={company3} alt=''></img>
            <img className='company4-img'src={company4} alt=''></img>
            <img className='company1-img' src={company1} alt=''></img>
            <img  className='company2-img'  src={company2} alt=''></img>
            <img className='company3-img'   src={company3} alt=''></img>
            <img className='company4-img'src={company4} alt=''></img>
            <img className='company1-img'src={company1} alt=''></img>
            <img className='company2-img'src={company2} alt=''></img>
            <img className='company3-img'src={company3} alt=''></img>
            <img className='company4-img'src={company4} alt=''></img>



            </div>
            </div>
            </div>
                
            </div>
        </div>
    )
}
