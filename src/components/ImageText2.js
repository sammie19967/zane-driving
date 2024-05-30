import React from 'react';
import '../index.css';
import frameImage from '../assets/frame.png';

const ImageText2 = () => {
    return (
        <div className="ImageTextContainer">
            <div className="ImageContainer">
                <img src={frameImage} alt="Frame" className="FrameImage" />
            </div>
            <div className="TextContainer">
                <h1>Refresh Driver</h1>
                <p>Do you know how to drive but need to elevate your skills?We have a place for you</p>
                <p>Refresher Classes Offered</p>
                <ul>

                    <li>A1</li>
                    <li>A2</li>
                    <li>B1</li>
                    <li>B2</li>
                </ul>
                <div className="Banner">
                    <p>@ Ksh 9000 only</p>
                </div>
                <button className="JoinButton">Register Today</button>
            </div>
        </div>
    );
};

export default ImageText2;
