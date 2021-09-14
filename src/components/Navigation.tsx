import React from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/all';
import logo from '../img/full_logo.png';

const Navigation: React.FC = () => {
    return (
        <nav id="navbar" className="bg-white">
            <div className="container d-flex align-items-center">
                <Link to="/courses">
                    <img src={logo} alt="AI Academies" height={100} />
                </Link>
                {/*<div className="nav-search d-flex align-items-center" style={{ marginLeft: 'auto' }}>*/}
                {/*    <div className="flex-grow-1">*/}
                {/*        <input placeholder="Search..." />*/}
                {/*    </div>*/}
                {/*    <AiOutlineSearch size={25} className="text-gray" />*/}
                {/*</div>*/}
                {/*<button*/}
                {/*    className="nav-btn"*/}
                {/*    style={{ marginLeft: 30 }}*/}
                {/*>*/}
                {/*    Sign In*/}
                {/*</button>*/}
            </div>
        </nav>
    );
};

export default Navigation;
