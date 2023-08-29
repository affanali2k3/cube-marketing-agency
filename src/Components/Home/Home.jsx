import React from 'react'
import img from './1.webp'
import './Home.css'
import { Button } from '../Button/Button'

export const Home = () => {
    return (
        <div className='home-main-div'>
            <div className='home-content-main'>
                <h2 className='home-boosting-business'>Boosting your Business Growth Economically</h2>
                <p className='home-content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui repudiandae dicta odit et? Perferendis, illum aliquam! Doloribus ut autem nulla? Rem nam expedita incidunt beatae assumenda culpa consequatur molestias error totam! Quaerat ipsam obcaecati praesentium tempore blanditiis ipsa autem! Distinctio eius fuga rem dolores porro possimus quae, officiis dignissimos eligendi doloribus aut, vero doloremque, ipsam reiciendis iure eum?</p>

                <div className='home-button-div'>
                    <Button color={'black'} text={'Speak to our team today'} />
                </div>
            </div>
            <div className='image-div'>
                <img src={img} alt=''></img>
            </div>
        </div>
    )
}
