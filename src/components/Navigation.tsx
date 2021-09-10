import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/all';

const Navigation: React.FC = () => {
    return (
        <nav id="navbar" className="bg-white">
            <div className="container d-flex align-items-center">
                <h1 className="me-5">Logo Here</h1>
                <Link to="/courses" className="text-gray nav-item">Courses</Link>
                {/*<Link to="/challenges" className="text-gray nav-item">Challenges</Link>*/}
                {/*<Link to="/blog" className="text-gray nav-item">Blog</Link>*/}
                <div className="nav-search d-flex align-items-center" style={{ marginLeft: 'auto' }}>
                    <div className="flex-grow-1">
                        <input placeholder="Search..." />
                    </div>
                    <AiOutlineSearch size={25} className="text-gray" />
                </div>
                <button
                    className="nav-btn"
                    style={{ marginLeft: 30 }}
                >
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
