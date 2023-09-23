// PrivacyPolicy.js

import React from 'react';import Modal from 'react-modal';
import './PrivacyPolicy.css'
const PrivacyPolicy = ({ isOpen, onClose  }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Privacy Policy"
    style={{overlay: {zIndex: 1000}}}
  >
    <div>
      <h2>Privacy Policy for Cube Media Marketing
</h2>
      {/* Add your privacy policy content here */}
      <h3>1. Introduction</h3>
      <p>Cube Media Marketing is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our website and services.
</p>
      <h3>2. Information We Collect
</h3>
      <p>Personal Information: When you engage with Cube Media Marketing, we may collect personal information, including but not limited to your name, email address, phone number, and company details.
</p>
      <h3>2. Information We Collect
</h3>
      <p>- Personal Information: When you engage with Cube Media Marketing, we may collect personal information, including but not limited to your name, email address, phone number, and company details.

</p><p>- Usage Information: We automatically collect information about your interaction with our website and services, such as your IP address, browser type, and operating system.
</p>
<h3>3. How We Use Your Information
</h3><p>We use the information we collect for the following purposes:
</p><ul><li>To provide and improve our services</li>
<li>To communicate with you regarding our services and updates.
</li>
<li>To respond to your inquiries and requests.
</li>
<li>To analyze and optimize our website and marketing efforts.
</li></ul>
<h3>4. Sharing Your Information
</h3>
<p>
We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website or providing our services.
</p>
<h3>5. Cookies and Tracking Technologies
</h3><p>We use cookies and similar tracking technologies to collect usage information and improve our website's functionality. You can manage your cookie preferences through your browser settings.

</p><h3>6. Your Choices
</h3><p>You have the right to access, correct, or delete your personal information. You may also choose to opt out of receiving marketing communications from us.
</p><h3>
7. Data Security
</h3><p>We implement security measures to protect your information, but no method of transmission over the internet is entirely secure. We cannot guarantee the absolute security of your data.
</p><h3>8. Changes to This Privacy Policy
</h3><p>
We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on our website with a revised effective date.
</p><h3>9. Contact Us
</h3><p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at support@cubemediamarketing.com</p>
      <button className='close-button' onClick={onClose}>Close</button>
    </div>
  </Modal>
);
};


export default PrivacyPolicy;
