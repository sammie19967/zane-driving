import React from "react";
import "./styles/PackageComponent.css";
import { useNavigate } from "react-router-dom";
import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaDatabase } from 'react-icons/fa'; // Updated imports

const PackageComponent = () => {
    const navigate = useNavigate();
    const handleComputers = () => {
        navigate('/Computers');
    };

    return (
        <div className="package-container">
            <h2 className="package-title">Computer Packages</h2>
            <div className="package-content">
                <img
                    src="/driving-course.png"
                    alt="Computer Package Training"
                    className="package-image"
                />
                <div className="package-text">
                    <p className="description">
                        Unlock your potential with our comprehensive computer training program at Zane Driving School.
                    </p>
                    <ul className="package-list">
                        <li>
                            <FaFileWord className="icon word-icon" /> MS Word
                        </li>
                        <li>
                            <FaFileExcel className="icon excel-icon" /> MS Excel
                        </li>
                        <li>
                            <FaFilePowerpoint className="icon ppt-icon" /> MS PowerPoint
                        </li>
                        <li>
                            <FaDatabase className="icon access-icon" /> MS Access
                        </li>
                        <li>And many more...</li>
                    </ul>
                    <div className="price-tag">
                        <span>Ksh.</span>
                        3000 only
                    </div>
                    <button className="apply-button" onClick={handleComputers}>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageComponent;
