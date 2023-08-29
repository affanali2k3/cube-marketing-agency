import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar-main-div'>
            <p className='navbar-logo-name'>Cube Marketing</p>
            <ul className='navbar-list'>

                <li><Link
                    to="home-main-div"
                    spy={true}
                    smooth={true}

                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >Home
                </Link></li>
                <li><Link
                    to="about-main-div"
                    spy={true}
                    smooth={true}

                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >About
                </Link></li>
                <li><Link
                    to="services-main-div"
                    spy={true}
                    smooth={true}

                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >Services
                </Link></li>
                <li><Link
                    to="testimonial-main-div"
                    spy={true}
                    smooth={true}

                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                >Testimonials
                </Link></li>
            </ul>
            <div className='navbar-signup-button'>
            </div>
            <div class="toggle-menu">&#9776;</div>

        </div>
    )
}
