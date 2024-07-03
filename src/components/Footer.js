import React from 'react';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img src="/logo.png" alt="Zane Driving School Logo" className="logo" />
                    <p>
                        Zane Driving School is committed to providing top-notch driving education and road safety training. Join us to become a safe and confident driver.
                    </p>
                    <div className="contact">
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
                    <div className="socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>

                <div className="footer-section-links">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-section-hours">
                    <h2>Office Hours</h2>
                    <ul>
                        <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                        <li>Saturday: 9:00 AM - 1:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Zane Driving School | Designed by Monsieur Barasa
            </div>
        </footer>
    );
};

export default Footer;
