import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="HeaderContainer">
            <div className="HeaderTop">
                <div className="ContactInfo">
                    <a href="tel:+254717612213" className="ContactLink">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>0717612213</span>
                    </a>
                    <a href="tel:+254115820508" className="ContactLink">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>0115820508</span>
                    </a>
                    <a href="mailto:zanedrivingschool2022@gmail.com" className="ContactLink">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>zanedrivingschool2022@gmail.com</span>
                    </a>
                </div>
                <div className="SocialMedia">
                    <a href="https://wa.me/+254115820508" className="SocialLink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span>Whatsapp</span>
                    </a>
                    <a href="https://facebook.com/zanedrivingschool" className="SocialLink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
            <div className="HeaderBottom">
                <h1 className="SchoolName">ZANE DRIVING SCHOOL AND COMPUTER PACKAGES</h1>
            </div>
        </header>
    );
};

export default Header;
