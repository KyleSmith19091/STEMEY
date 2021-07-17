// React
import React from "react";

// PropTypes
import PropTypes from "prop-types";

// External Components
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

// CSS
import "../Style/Component/SlideDrawer.css";

const SlideDrawer = ({ isOpen, onClose, focusRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={focusRef}
      size="xlg"
      sx={{ backgroundColor: "purple" }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          sx={{
            backgroundColor: "var(--primary-purple)",
            color: "white",
            float: "right",
          }}
        >
          <Link onClick={onClose} to="/">
            STEMEY.
          </Link>
        </DrawerHeader>

        <DrawerBody
          className="drawer-body"
          sx={{ backgroundColor: "var(--primary-purple)" }}
        >
          <ul className="drawer-list">
            <li className="drawer-list-item">
              <p>Academics</p>
              <div className="drawer-list-links-container">
                <Link onClick={onClose} to="/classes">
                  Classes
                </Link>
                <Link onClick={onClose} to="/tutoring">
                  Tutoring
                </Link>
                <Link onClick={onClose} to="/tutoring-summer">
                  Tutoring Summer Program
                </Link>
              </div>
            </li>
            <li className="drawer-list-item">
              <p>Events</p>
              <div className="drawer-list-links-container">
                <Link onClick={onClose} to="/volunteer">
                  Volunteer
                </Link>
                <Link onClick={onClose} to="/community">
                  Join Our Community
                </Link>
                <Link onClick={onClose} to="/partner">
                  Partner With Us
                </Link>
              </div>
            </li>
            <li className="drawer-list-item">
              <p>Get Involved</p>
              <div className="drawer-list-links-container">
                <Link onClick={onClose} to="/stemworld">
                  STEM World I
                </Link>
                <Link onClick={onClose} to="/stemworld2">
                  STEM World II
                </Link>
                <Link onClick={onClose} to="/test">
                  STEM-Tober
                </Link>
              </div>
            </li>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

SlideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
};

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

export default SlideDrawer;
