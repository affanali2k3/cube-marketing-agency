import React from 'react'
import './FreeCall.css'
import checkIcon from './check.png'

export const FreeCall = () => {
    return (
        <div className='schedule-call-main-div'>
            <div className="schedule-call-content-div">
                <img alt=''></img>
                <h3 className='schedule-call-with-sales'>SCHEDULE YOUR CALL WITH DANY</h3>
                <h3 className='free-call-minutes'>Free 15-Minute Demo Call</h3>
                <p>By the end of this Audit call, you will have a clear understanding of the next steps you can t
                    ake for your business to start generating consistent and reliable
                    results online with Funnels & Paid Advertising.</p>
                <p className='schedule-call-para-2'>Find a time on Dany’s calendar to schedule your call today and we look forward to speaking to you soon!</p>

                <h3 className='audit-perfect-for'>THIS AUDIT CALL IS PERFECT FOR:</h3>
                <div className='audit-perfect-for-point'>
                    <div className='check-icon-div'>
                        <img src={checkIcon} alt=''></img>
                    </div>
                    <p>Businesses looking to convert their current website into a high quality & streamlined funnel format.</p>
                </div>
                <div className='audit-perfect-for-point'>
                    <div className='check-icon-div'>
                        <img src={checkIcon} alt=''></img>
                    </div>
                    <p>Businesses looking to take their offline business online</p>
                </div>
                <div className='audit-perfect-for-point'>
                    <div className='check-icon-div'>
                        <img src={checkIcon} alt=''></img>
                    </div>
                    <p>​Businesses looking for a reliable agency that can make their company a priority.</p>
                </div>
                <div className='audit-perfect-for-point'>
                    <div className='check-icon-div'>
                        <img src={checkIcon} alt=''></img>
                    </div>
                    <p>Businesses looking to maximize their conversion rates & average order value.</p>
                </div>
                <div className='audit-perfect-for-point'>
                    <div className='check-icon-div'>
                        <img src={checkIcon} alt=''></img>
                    </div>
                    <p>​Businesses looking to understand their increased revenue potential with funnels & conversion rate optimization.</p>
                </div>

            </div>

        </div>
    )
}
