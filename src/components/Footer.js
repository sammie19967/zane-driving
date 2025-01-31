import React from 'react';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="new-footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img src="/logo.png" alt="Zane Driving School Logo" className="logo" />
                    <p className="description">
                    </p>
                    <div className="socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>

                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                        <div>
                            <FontAwesomeIcon icon={faPhone} /> +254725153581
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} /> zanedrivingschool2022@gmail.com
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Driving School Lane, Nairobi, Kenya
                        </div>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <button onClick={scrollToTop} className="to-top-button">
                    <FontAwesomeIcon icon={faArrowUp} /> Back to Top
                </button>
                <p>&copy; 2024 Zane Driving School | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
