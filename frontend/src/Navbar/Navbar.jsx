import React from 'react';
import './Navbar.css'; // Import the CSS file for styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-title">Hiremitra</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
