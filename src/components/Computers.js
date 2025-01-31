import React from 'react';
import './styles/Computers.css';
import { FaFileWord, FaFileExcel, FaDatabase, FaFilePowerpoint, FaCode, FaNetworkWired, FaRobot } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courses = [
    {
        title: 'Microsoft Word',
        icon: <FaFileWord size={50} />,
        duration: '2 weeks',
        description: 'Learn the basics of Microsoft Word, including text formatting, creating documents, and more.',
        bgColor: '#1e90ff' // Blue for Word
    },
    {
        title: 'Microsoft Excel',
        icon: <FaFileExcel size={50} />,
        duration: '3 weeks',
        description: 'Master spreadsheet creation, data analysis, and visualization using Microsoft Excel.',
        bgColor: '#32cd32' // Green for Excel
    },
    {
        title: 'Microsoft Access',
        icon: <FaDatabase size={50} />,
        duration: '4 weeks',
        description: 'Understand database management with Microsoft Access.',
        bgColor: '#8b4513' // Brown for Access
    },
    {
        title: 'Microsoft PowerPoint',
        icon: <FaFilePowerpoint size={50} />,
        duration: '2 weeks',
        description: 'Create stunning presentations with Microsoft PowerPoint, including slides, transitions, and animations.',
        bgColor: '#ff6347' // Orange for PowerPoint
    },
    {
        title: 'Introduction to Programming',
        icon: <FaCode size={50} />,
        duration: '6 weeks',
        description: 'Learn the fundamentals of programming using popular languages such as Python and Java.',
        bgColor: '#4682b4' // Steel Blue for Programming
    },
    {
        title: 'Networking Essentials',
        icon: <FaNetworkWired size={50} />,
        duration: '5 weeks',
        description: 'Gain knowledge in networking basics, including network protocols, hardware, and troubleshooting.',
        bgColor: '#20b2aa' // Light Sea Green for Networking
    },
    {
        title: 'Machine Learning',
        icon: <FaRobot size={50} />,
        duration: '8 weeks',
        description: 'Explore the world of machine learning, covering algorithms, data analysis, and practical applications.',
        bgColor: '#9400d3' // Dark Violet for Machine Learning
    }
];

const Computers = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        alert('Application submitted successfully!');
        navigate('/ApplicationForm');
    };

    return (
        <div className="computer-catalogue-container">
            <h1>Computer Packages</h1>
            <div className="courses-list">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="course-item"
                        style={{ backgroundColor: course.bgColor }}
                    >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="course-icon">{course.icon}</div>
                                    <h2>{course.title}</h2>
                                </div>
                                <div className="flip-card-back">
                                    <h2>{course.title}</h2>
                                    <p><strong>Duration:</strong> {course.duration}</p>
                                    <p>{course.description}</p>
                                    <button onClick={handleClick}>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Computers;
