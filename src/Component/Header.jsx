import React from 'react'
import PropTypes from 'prop-types';

import Hamburger from 'hamburger-react';
import { motion } from "framer-motion";
import { Link as RouterLink, useHistory } from "react-router-dom";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Container
} from "@chakra-ui/react";

import "../Style/Component/Header.css";

const Header = ({ open, setOpen }) => {

    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    }

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
                <Container padding="4">
                    <Menu>
                        <MenuButton as={Button} colorScheme="transparent" sx={{ fontWeight: "normal", outline: "none" }} _active={{
                            transform: "scale(0.98)",
                            borderColor: "transparent",
                        }}>
                            Academics
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => handleClick("/classes")}><RouterLink to="/classes">Classes</RouterLink></MenuItem>
                            <MenuItem onClick={() => handleClick("/tutoring")}>Tutoring</MenuItem>
                            <MenuItem onClick={() => handleClick("/tutoring-summer")}>Tutoring Summer Program</MenuItem>
                        </MenuList>
                    </Menu>
                </Container>
                <Container>
                    <Menu className="nav-item">
                        <MenuButton as={Button} colorScheme="transparent" sx={{ fontWeight: "normal" }}>
                            Events
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                        </MenuList>
                    </Menu>
                </Container>
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
