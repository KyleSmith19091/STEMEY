import React from 'react'
import PropTypes from 'prop-types';

import Hamburger from 'hamburger-react'
import { motion } from "framer-motion"

import "../Style/Component/Header.css";

const Header = ({ open, setOpen }) => {
    return (
        <header className="header">

            <div className="logo-container" style={{ filter: open ? "blur(2px)" : "none" }}>
                <a href="/" className="logo">
                    <motion.h1 whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        STEMEY
                    </motion.h1>
                </a>
            </div>

            <nav className="nav">
                <ul className="nav-list">
                    <motion.li className="nav-item">
                        <p href="/">Learn With Us </p>
                        <div className="dropdown-content">
                            <a href="/classes">Classes</a>
                            <a href="/tutoring">Tutoring</a>
                            <a href="/tutoring-summer">Tutoring Summer Program</a>
                        </div>
                    </motion.li>
                    <motion.li className="nav-item"><p href="/">Events</p>
                        <div className="dropdown-content">
                            <a href="/classes">Classes</a>
                            <a href="/tutoring">Tutoring</a>
                            <a href="/tutoring-summer">Tutoring Summer Program</a>
                        </div>
                    </motion.li>
                    <motion.li className="nav-item"><p href="/">Teams</p>
                        <div className="dropdown-content">
                            <a href="/classes">Classes</a>
                            <a href="/tutoring">Tutoring</a>
                            <a href="/tutoring-summer">Tutoring Summer Program</a>
                        </div>
                    </motion.li>
                    <motion.li className="nav-item"><p href="/">Get Involved </p>
                        <div className="dropdown-content">
                            <a href="/classes">Classes</a>
                            <a href="/tutoring">Tutoring</a>
                            <a href="/tutoring-summer">Tutoring Summer Program</a>
                        </div>
                    </motion.li>
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
