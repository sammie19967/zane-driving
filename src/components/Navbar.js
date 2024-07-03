import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="NavContainer">
            <div className="NavLogo">
                <img src="/logo.png" alt="zanedriving" className="Logo" />
            </div>
            <div className={`NavMenu ${isOpen ? 'responsive' : ''}`}>
                <ul className="NavList">
                    <li className="NavItem">
                        <NavLink
                            exact="true"
                            to="/"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/services"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className="NavItem">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'NavLink ActiveLink' : 'NavLink')}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="NavIcon" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
