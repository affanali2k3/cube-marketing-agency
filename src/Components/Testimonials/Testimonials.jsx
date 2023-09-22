import React from 'react'
import './Testimonials.css'
import { TestimonialCard } from './TestimonialCard'

export const Testimonials = () => {
    return (
        <div className='testimonial-main-div'>
            <h2>Testimonials</h2>
            <div className='testimonial-cards-main'>
               
            <TestimonialCard></TestimonialCard>
            <TestimonialCard></TestimonialCard>
            <TestimonialCard></TestimonialCard>

                
            </div>
        </div>
    )
}
