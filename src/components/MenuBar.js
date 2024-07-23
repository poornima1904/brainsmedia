import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <nav className="menu-bar">
            <ul>
                <li><a href="#slider">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </nav>
    );
}

export default MenuBar;
