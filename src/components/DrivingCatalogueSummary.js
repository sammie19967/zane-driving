import React from 'react';
import './styles/DrivingCatalogueSummary.css';

const DrivingCatalogueSummary = () => {
    return (
        <div className="summary-container">
            <h1>Driving Catalogue Summary</h1>

            <div className="catalogue-section">
                <h2>Requirements</h2>
                <ul>
                    <li>National ID</li>
                    <li>Driving Licence (Endorsement and Refresher)</li>
                </ul>
            </div>

            <div className="catalogue-section">
                <h2>Payment Methods</h2>
                <ul>
                    <li>Mpesa through buygoods and services till 888888</li>
                    <li>Through Bank account Number</li>
                </ul>
            </div>

            <div className="catalogue-section">
                <h2>Payment Terms</h2>
                <ul>
                    <li>Pay full amount e.g ksh.15000 for new students and get a receipt</li>
                    <li>
                        Pay in three Installments of 5k each which must be completed before the exams
                        <br />
                        Note: 15k includes Tuition fees, convenience fees, PDL and test booking fees
                    </li>
                    <li>
                        Students who enroll for boarding should pay accommodation fees of 15k
                    </li>
                    <li>
                        Note: Driving course takes one month at most
                    </li>
                </ul>
            </div>

            <div className="catalogue-section">
                <h2>Courses Offered</h2>
                <ul>
                    <li>B light</li>
                    <li>B automatic</li>
                    <li>A1 and A2 motorbike</li>
                    <li>Light Truck</li>
                    <li>PSV</li>
                    <li>Bus</li>
                </ul>
            </div>

            <div className="button-container">
                <button className="apply-button">Apply</button>
                <button className="download-button">Download Fees Structure</button>
            </div>
        </div>
    );
};

export default DrivingCatalogueSummary;
