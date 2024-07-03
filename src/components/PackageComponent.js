import React from 'react';
import './styles/PackageComponent.css';

const PackageComponent = () => {
    return (
        <div className="package-container">
            <h2>Boost Your Skills with Our Computer Packages!</h2>
            <div className="package-content">
                <img src="/driving-course.png" alt="Computer Package Training" className="package-image" />
                <div className="package-text">
                    <p>
                        Unlock your potential with our comprehensive computer training program at Zane Driving School. Master essential applications like MS Word, Excel, PowerPoint, Access, and more. Enhance your productivity and open doors to exciting opportunities.
                    </p>
                    <ul className="package-list">
                        <li>MS Word</li>
                        <li>MS Excel</li>
                        <li>MS PowerPoint</li>
                        <li>MS Access</li>
                        <li>And many more...</li>
                    </ul>
                    <div className="price-tag">
                        <span>Ksh.</span>
                        2500 only
                    </div>
                    <button className="apply-button">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default PackageComponent;
