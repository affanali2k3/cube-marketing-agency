import React from 'react'
import { Button } from '../Button/Button'
import './CallToAction.css'

export const CallToAction = () => {
    return (
        <div className='call-to-action-and-footer'>

            <div className='call-to-action-main-div'>
                <div>
                    <h3>Have A General Inquiry?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe natus qui rem placeat quis aspernatur quo, ipsa autem ex, reprehenderit dolor recusandae libero quod voluptatibus rerum labore aliquam molestias! Laboriosam!</p>

                    <div className='call-to-action-button-div'>
                        <Button color={'black'} text={'Speak To Our Team Now'}></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
