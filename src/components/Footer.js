import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <p>&copy; 2024 Brains Media Solutions. All rights reserved.</p>
                <div className="social-media">
                    <a href="#" className="social-icon">FB</a>
                    <a href="#" className="social-icon">TW</a>
                    <a href="#" className="social-icon">IG</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
