import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CoursesOffered.css';

const CoursesOffered = () => {
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleCourseChange = (event) => {
        const course = event.target.value;
        setSelectedCourse(course);

        if (course === 'driving-courses') {
            navigate('/catalogue');
        } else if (course === 'computer-packages') {
            navigate('/Computers');
        }
    };

    return (
        <div className="courses-offered-container">
            <h1>Courses Offered</h1>
            <div>
                <label>Select a course:</label>
                <select value={selectedCourse} onChange={handleCourseChange}>
                    <option value="">Select Course to access its catalogue...</option>
                    <option value="driving-courses">Driving Courses</option>
                    <option value="computer-packages">Computer Packages</option>
                </select>
            </div>
            <div className="fees-structure">
                <h2>Our Fees Structure</h2>
                <a href="/path/to/fees-structure.pdf" download="FeesStructure.pdf">
                    Download Fees Structure
                </a>
            </div>
        </div>
    );
};

export default CoursesOffered;
