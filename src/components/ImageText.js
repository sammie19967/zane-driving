import React from 'react';
import '../index.css';
import frameImage from '../assets/frame.png';

const ImageText = () => {
    return (
        <div className="ImageTextContainer">
            <div className="ImageContainer">
                <img src={frameImage} alt="Frame" className="FrameImage" />
            </div>
            <div className="TextContainer">
                <h1>New Driver</h1>
                <p>New to driving, don't worry we got you covered.</p>
                <p>Classes Offered</p>
                <ul>

                    <li>A1</li>
                    <li>A2</li>
                    <li>B1</li>
                    <li>B2</li>
                </ul>
                <div className="Banner">
                    <p>@ Ksh 15000 only</p>
                </div>
                <button className="JoinButton">Join Us</button>
            </div>
        </div>
    );
};

export default ImageText;
