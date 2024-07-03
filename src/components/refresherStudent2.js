import React from 'react';
import './styles/ImageText.css';

const RefresherStudent = () => {
    return (
        <div className="image-text-container">
            <img src="/background.jpeg" alt="New Student Driving School Offer" className="image" />
            <div className="text-container">
                <h2>Refresher Course</h2>
                <p>
                    Do you already know how to drive but want to improve your skills behind the wheel?
                </p>
                <p>
                    <b>Cost: Ksh. 9,000</b>
                </p>
                <button className="enroll-button">Enroll Now</button>
            </div>
        </div>
    );
}

export default RefresherStudent;
