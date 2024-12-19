import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const activeNavStyle = {
        textDecorationColor: "black",
        textDecorationLine: "underline"
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                </button>
            </div>
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <NavLink to="/read" style={({isActive}) => isActive ? activeNavStyle : undefined} onClick={toggleMenu}>
                        Read
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tbr" style={({isActive}) => isActive ? activeNavStyle : undefined} onClick={toggleMenu}>
                        To Be Read
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" style={({isActive}) => isActive ? activeNavStyle : undefined} onClick={toggleMenu}>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recommendations" style={({isActive}) => isActive ? activeNavStyle : undefined} onClick={toggleMenu}>
                        Recommendations
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
