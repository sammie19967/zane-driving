import React, { useEffect } from 'react';
import './styles/ScrollNavbar.css'; // Import your CSS file

const ScrollNavbar = () => {
    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        const logo = document.getElementById('logo');

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navbar.style.padding = '30px 10px';
            logo.style.fontSize = '25px';
        } else {
            navbar.style.padding = '80px 10px';
            logo.style.fontSize = '35px';
        }
    };

    return (
        <div id="navbar" className="scroll-navbar">
            <a href="#default" id="logo">CompanyLogo</a>
            <div id="navbar-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
};

export default ScrollNavbar;
