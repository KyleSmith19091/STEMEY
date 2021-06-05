// React
import React from 'react'
import PropTypes from 'prop-types';

// External Components
import Hamburger from 'hamburger-react';
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// Internal Components
import NavItem from "./NavItem";

// Internal Data
import { Academics, Events, Team, GetInvolved } from "../Model/NavBarContent";

import "../Style/Component/Header.css";

const Header = ({ open, setOpen }) => {

    return (
        <header className="header">

            <div className="logo-container" style={{ filter: open ? "blur(2px)" : "none" }}>
                <RouterLink to="/" className="logo">
                    <motion.h1 whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        STEMEY
                    </motion.h1>
                </RouterLink>
            </div>

            <nav className="nav">
                <NavItem name={Academics.name} content={Academics.content} />
                <NavItem name={Events.name} content={Events.content} />
                <NavItem name={Team.name} content={Team.content} />
                <NavItem name={GetInvolved.name} content={GetInvolved.content} />
            </nav>

            <div className="menu-icon-container">
                <Hamburger onToggle={setOpen} color="#ffffff" />
            </div>
        </header >
    )
}


Header.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default Header
