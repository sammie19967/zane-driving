import React from 'react';
import './styles/ImageText.css';
import { useNavigate } from 'react-router-dom';

const RefresherStudent = () => {
    const navigate = useNavigate();
    const handleEnrollClick = () => {
        navigate('./ApplicationForm')
    }
    return (
        <div className="image-text-container">
            <img src="/refresher.jpg" alt="New Student Driving School Offer" className="image" />
            <div className="text-container">
                <h2>Refresher Course and Endorsement</h2>
                <p>
                    Do you already know how to drive but want to improve/refresh your skills behind the wheel?
                    Or you want to endorse to a new class
                </p>
                <p>
                    <b>Cost: Ksh. 9,000</b>
                </p>
                <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
            </div>
        </div>
    );
}

export default RefresherStudent;
