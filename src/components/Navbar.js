import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';


const Navbar = () => {
    return (
        <nav className="NavContainer">
            <div className="NavLogo">
                <img src="/logo.png" alt="zanedriving" className="Logo" />
            </div>
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
        </nav>
    );
};

export default Navbar;
