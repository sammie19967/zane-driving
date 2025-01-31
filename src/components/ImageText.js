
import React from 'react';
import './styles/ImageText.css';
import { useNavigate } from 'react-router-dom';

const ImageText = () => {
    const navigate = useNavigate();
    const handleEnrollClick = () => {
        navigate('./ApplicationForm');
    };
    return (
        <div className="image-text-container">

            <div className="text-container">
                <h2>New Student Offer!</h2>
                <p>
                    Get your driver's license at an affordable price! Enroll now and enjoy a discount for new students.
                </p>
                <p>
                    <b>Cost: Ksh. 15,000</b>
                </p>
                <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
            </div>
            <img src="/newstudent.jpg" alt="New Student Driving School Offer" className="image" />
        </div>
    );
};

export default ImageText;
