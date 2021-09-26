import React from 'react';
import { FaDiscord, FaInstagram } from 'react-icons/all';
import logo from '../img/full_logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-800 text-white">
            <div className="container d-flex justify-content-between">
                <div>
                    <img src={logo} alt="AI Academies" height={100} />
                    <p className="mb-0">&copy; 2021 Young Brains AI</p>
                    <p>All Rights Reserved</p>
                </div>
                <div>
                    <h4 className="mb-3 font-w600">Explore</h4>
                    <p className="mb-1">Home</p>
                    <p className="mb-1">About Us</p>
                    <p>Challenge</p>
                </div>
                <div>
                    <h4 className="mb-3 font-w600">Resources</h4>
                    <p className="mb-1">Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div>
                    <h4 className="mb-3 font-w600">Contact Us</h4>
                    <p className="mb-1">youngbrainsai@gmail.com</p>
                    <button className="btn-social me-2">
                        <FaInstagram/>
                    </button>
                    <button className="btn-social">
                        <FaDiscord/>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
