import React from 'react'
import PropTypes from 'prop-types';

// External Components
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from "@chakra-ui/react"

// CSS
import "../Style/Component/SlideDrawer.css";

const SlideDrawer = ({ open, myRef }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={myRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                </DrawerBody>

                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>

        </Drawer>
    )
}

SlideDrawer.propTypes = {
    open: PropTypes.bool.isRequired
}

/**
 

                <ul className="drawer-list">
                <li className="drawer-list-item">
                    <p>Academics</p>
                    <div className="drawer-list-links-container">
                        <a href="/classes">Classes</a>
                        <a href="/tutoring">Tutoring</a>
                        <a href="/tutoring-summer">Tutoring Summer Program</a>
                    </div>
                </li>
                <li className="drawer-list-item">
                    <p href="/">Events</p>
                    <div className="drawer-list-links-container">
                        <a href="/volunteer">Volunteer</a>
                        <a href="/community">Join Our Community</a>
                        <a href="/partner">Partner With Us</a>
                    </div>
                </li>
                <li className="drawer-list-item">
                    <p href="/">Get Involved</p>
                    <div className="drawer-list-links-container">
                        <a href="/stemworldI">STEM World I</a>
                        <a href="/stemworldII">STEM World II</a>
                        <a href="/stemtober">STEM-Tober</a>
                    </div>
                </li>
            </ul>




 */

export default SlideDrawer
