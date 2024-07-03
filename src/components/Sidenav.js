import React from 'react';
import './styles/Sidenav.css'; // Import your CSS file

const Sidenav = () => {
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" id="about">About</a>
            <a href="#" id="blog">Blog</a>
            <a href="#" id="projects">Projects</a>
            <a href="#" id="contact">Contact</a>
        </div>
    );
};

export default Sidenav;
