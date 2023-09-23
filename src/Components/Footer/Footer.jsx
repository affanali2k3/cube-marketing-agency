import React from 'react'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { useState } from 'react';
import './Footer.css'

export const Footer = () => {
    const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

    const openPrivacyPolicy = () => {
      setIsPrivacyPolicyOpen(true);
    };
  
    const closePrivacyPolicy = () => {
      setIsPrivacyPolicyOpen(false);
    };
    return (
        <div className="footer-main-div">
        <div className='footer'>
            <div>
                <h3>Cube Media Marketing</h3>
                <p>© 2023 Cube Media Marketing. All rights reserved.
</p>
            </div>  
         
        </div><div className="privacy-text-div"><p className='privacy-text' onClick={openPrivacyPolicy}>Privacy Policy</p></div>

{/* Render Privacy Policy Popup */}
<PrivacyPolicy isOpen={isPrivacyPolicyOpen} onClose={closePrivacyPolicy} /> <div className="copyright-para-div">  <p className='copyright-para'>
The content, images, graphics, and other materials on this website are protected by copyright and other intellectual property laws. Any unauthorized use, reproduction, or distribution of the materials on this site is prohibited without the written consent of Cube Media Marketing.</p>
<p>
You may view and use the content on this website for your personal, non-commercial use only. You may not modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content, information, software, products, or services obtained from this website.</p>
<p>
Cube Media Marketing is a registered trademark. All other trademarks, service marks, and trade names contained in this site are the properties of their respective owners.
</p><p>
For inquiries, please contact support@cubemediamarketing.com</p></div></div>
    )
}
