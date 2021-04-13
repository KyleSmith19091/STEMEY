import React from 'react'
import PropTypes from 'prop-types';

// Libraries
import { motion } from "framer-motion"

// CSS
import "../Style/Component/SlideDrawer.css";

const SlideDrawer = ({ open }) => {

    return (
        <motion.div
            className="slide-drawer"
            style={{ transform: open ? "translate(45%,-10%)" : "translate(145%,-10%)", display: open ? "block" : "none" }}
        >
            <ul className="drawer-list">
                <li className="drawer-list-item"><a href="/">Academics</a></li>
                <li className="drawer-list-item"><a href="/">Events</a></li>
                <li className="drawer-list-item"><a href="/">Teams</a></li>
                <li className="drawer-list-item"><a href="/">Get Involved</a></li>
            </ul>
        </motion.div>
    )
}

SlideDrawer.propTypes = {
    open: PropTypes.bool.isRequired
}

export default SlideDrawer
