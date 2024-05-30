import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Header = () => {
    return (
        <header className="HeaderContainer">
            <div className="HeaderTop">
                <div className="ContactInfo">
                    <a href="tel:0725153581" className="ContactLink">
                        <FontAwesomeIcon icon={faPhone} /> contact 1
                    </a>
                    <a href="tel:0725713192" className="ContactLink">
                        <FontAwesomeIcon icon={faPhone} /> contact 2
                    </a>
                    <a href="zanedrivingschool2022@gmail.com" className="ContactLink">
                        <FontAwesomeIcon icon={faEnvelope} /> zanedrivingschool2022@gmail.com
                    </a>
                </div>
                <div className="SocialMedia">
                    <a href="https://wa.me/0725153581" className="SocialLink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />Whatsapp
                    </a>
                    <a href="https://facebook.com/zanedrivingschool" className="SocialLink" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />{" "}Like us on Facebook
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
