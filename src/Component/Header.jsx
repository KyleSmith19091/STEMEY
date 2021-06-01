import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Hamburger from 'hamburger-react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../Style/Component/Header.css";

const Academics = [
    {
        name: "Classes",
        link: "/classes"
    },
    {
        name: "Tutoring",
        link: "/tutoring"
    },
    {
        name: "Tutoring Summer Program",
        link: "/summer"
    }
]


const Header = ({ open, setOpen }) => {

    return (
        <header className="header">

            <div className="logo-container" style={{ filter: open ? "blur(2px)" : "none" }}>
                <Link to="/" className="logo">
                    <motion.h1 whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        STEMEY
                    </motion.h1>
                </Link>
            </div>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <button className="nav-link">Academics</button>
                        <ul className="dropdown">
                            <li><Link className="link" to="/classes">Classes</Link></li>
                            <li><Link className="link" to="/tutoring">Tutoring</Link></li>
                            <li><Link className="link" to="/tutoring-summer">Tutoring Summer</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Events</button>
                        <ul className="dropdown">
                            <li><Link className="link" to="/stemworld">STEM World I</Link></li>
                            <li><Link className="link" to="/tutoring">STEM World II</Link></li>
                            <li><Link className="link" to="/tutoring-summer">STEM-Tober</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Academics</button>
                        <ul className="dropdown">
                            <li><Link className="link" to="/classes">Classes</Link></li>
                            <li><Link className="link" to="/tutoring">Tutoring</Link></li>
                            <li><Link className="link" to="/tutoring-summer">Tutoring Summer</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="menu-icon-container">
                <Hamburger onToggle={setOpen} color="#ffffff" />
            </div>
        </header>
    )
}


Header.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default Header
