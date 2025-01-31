import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Nav.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                {/* Replace brand name with logo */}
                <img src="/logo.png" alt="Zane Driving School Logo" className="logo" />
            </div>
            
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className="NavItem">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/admission"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-user-graduate"></i> Admission
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/courses"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-book"></i> Courses
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-envelope"></i> Contact
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/team"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-users"></i> Our Team
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-image"></i> Gallery
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            <i className="fas fa-info-circle"></i> About Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            <button className="NavIcon" aria-label="Toggle Menu" onClick={toggleMenu}>
                <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </nav>
    );
};

export default Navbar;
