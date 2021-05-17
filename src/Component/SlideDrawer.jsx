import React from 'react'
import PropTypes from 'prop-types';

// Libraries

// CSS
import "../Style/Component/SlideDrawer.css";

const SlideDrawer = ({ open }) => {

    return (
        <div
            className="slide-drawer"
            style={{ transform: open ? "translate(45%,-10%)" : "translate(145%,-10%)", display: open ? "block" : "none" }}
        >
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
        </div>
    )
}

SlideDrawer.propTypes = {
    open: PropTypes.bool.isRequired
}

export default SlideDrawer
