import React from 'react';
import './styles/ImageText.css'; // Assuming your stylesheet is at ImageText.css

const ImageText = () => {
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
                <button className="enroll-button">Enroll Now</button>
            </div>
            <img src="/background.jpeg" alt="New Student Driving School Offer" className="image" />
        </div>
    );
};

export default ImageText;
