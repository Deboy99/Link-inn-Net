// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <ul className="flex space-x-6 justify-center">
                <li>
                    <Link to="/" className="text-white hover:text-gray-200">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/packages" className="text-white hover:text-gray-200">
                        Packages
                    </Link>
                </li>
                <li>
                    <Link to="/community" className="text-white hover:text-gray-200">
                        Community
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

