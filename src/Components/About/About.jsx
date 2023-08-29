import React from 'react'
import { Button } from '../Button/Button'
import './About.css'

export const About = () => {
    return (
        <div className='about-main-div'>
            <div className='about-stats'>
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
            </div>
            <div className='about-content'>
                <h2>About Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolorum minima dolor quae fuga deserunt ullam pariatur sequi. Velit quo, ipsum adipisci tenetur culpa ipsam obcaecati. Distinctio eaque, eum nihil inventore totam ipsam eveniet aliquid quaerat sapiente voluptatem rem sequi suscipit repellat iste explicabo labore ipsum, nostrum ducimus odio vitae laborum excepturi aperiam. Esse ipsa ex cum magni. Voluptatem, itaque.</p>

                <div className='about-button-div'>
                    <Button color={'black'} text={'Speak to our team now'}></Button>
                </div>
            </div>
        </div>
    )
}
