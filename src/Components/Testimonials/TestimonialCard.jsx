import React from 'react'
import Image1 from './1.jpg'
import './Testimonials.css'

export const TestimonialCard = () => {
  return (
    <div className="testimonial-container">
                    <div className="testimonial-upper">

                        <div className="testimonial-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    </div>

                    <p className='testimonial-sentences'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum necessitatibus temporibus? Molestias et accusantium odio ratione. Impedit ducimus sunt nulla beatae voluptas. Laudantium dolor placeat neque officiis quasi asperiores totam rem voluptatem ratione atque. Repellat quibusdam error exercitationem odio.</p>
                    </div>
                    <div className="testimonial-details">
                        <img className='testimonial-image' src={Image1} alt=''></img>
                        <div className="bio">
                            <h3>Kristin Watson</h3>
                            <p>Marketing Coordinator</p>
                        </div>
                    </div>
                </div>
  )
}
