// React
import React, { useRef } from 'react'

// External Components
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button
} from "@chakra-ui/react";

// Internal Components
import NavItem from "./NavItem";

// Internal Data
import { Academics, Events, Team, GetInvolved } from "../Model/NavBarContent";

// Images 
import { ReactComponent as Hamburger } from "../Img/Icon/hamburger.svg";

// CSS
import "../Style/Component/Header.css";

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const hamburgerRef = useRef();

    return (
        <header className="header">

            <div className="logo-container">
                <Link to="/" className="logo">
                    <motion.h1 whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        STEMEY.
                    </motion.h1>
                </Link>
            </div>

            <nav className="nav" style={{ display: "none" }}>
                <NavItem name={Academics.name} content={Academics.content} />
                <NavItem name={Events.name} content={Events.content} />
                <NavItem name={Team.name} content={Team.content} />
                <NavItem name={GetInvolved.name} content={GetInvolved.content} />
            </nav>

            <div className="menu-icon-container">
                <Button ref={hamburgerRef} colorScheme="transparent" onClick={onOpen} _focus={{ ringColor: "transparent" }}>
                    <Hamburger className="hamburger-icon" />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={hamburgerRef}
                    size="lg"
                    sx={{ backgroundColor: "purple" }}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader sx={{ backgroundColor: "var(--primary-purple)", color: "white" }}>STEMEY.</DrawerHeader>

                        <DrawerBody className="drawer-body" sx={{ backgroundColor: "var(--primary-purple)" }}>
                            <ul className="drawer-list">
                                <li className="drawer-list-item">
                                    <p>Academics</p>
                                    <div className="drawer-list-links-container">
                                        <Link onClick={onClose} to="/classes">Classes</Link>
                                        <Link onClick={onClose} to="/tutoring">Tutoring</Link>
                                        <Link onClick={onClose} to="/tutoring-summer">Tutoring Summer Program</Link>
                                    </div>
                                </li>
                                <li className="drawer-list-item">
                                    <p>Events</p>
                                    <div className="drawer-list-links-container">
                                        <Link onClick={onClose} to="/volunteer">Volunteer</Link>
                                        <Link onClick={onClose} to="/community">Join Our Community</Link>
                                        <Link onClick={onClose} to="/partner">Partner With Us</Link>
                                    </div>
                                </li>
                                <li className="drawer-list-item">
                                    <p>Get Involved</p>
                                    <div className="drawer-list-links-container">
                                        <Link onClick={onClose} to="/stemworld">STEM World I</Link>
                                        <Link onClick={onClose} to="/stemworldII">STEM World II</Link>
                                        <Link onClick={onClose} to="/test">STEM-Tober</Link>
                                    </div>
                                </li>
                            </ul>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </header >
    )
}

export default Header
