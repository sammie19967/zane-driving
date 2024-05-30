import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Footer = () => {
    return (
        <footer className="FooterContainer">
            <div className="FooterContent">
                <div className="ContactInfo">
                    <a href="tel:+1234567890" className="ContactLink">
                        <FontAwesomeIcon icon={faPhone} /> +123 456 7890
                    </a>
                    <a href="mailto:info@zanedrivingschool.com" className="ContactLink">
                        <FontAwesomeIcon icon={faEnvelope} /> info@zanedrivingschool.com
                    </a>
                </div>
                <div className="SocialMedia">
                    <a href="https://wa.me/1234567890" className="SocialLink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://facebook.com/zanedrivingschool" className="SocialLink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </div>
            <div className="FooterBottom">
                <p>&copy; 2024 Zane Driving School. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
