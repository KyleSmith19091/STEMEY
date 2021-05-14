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
                        <a href="#">Classes</a>
                        <a href="#">Tutoring</a>
                        <a href="/tutoring-summer">Tutoring Summer Program</a>
                    </div>
                </li>
                <li className="drawer-list-item">
                    <p href="/">Events</p>
                    <div className="drawer-list-links-container">
                        <a href="#">Volunteer</a>
                        <a href="#">Join Our Community</a>
                        <a href="#">Partner With Us</a>
                    </div>
                </li>
                <li className="drawer-list-item">
                    <p href="/">Get Involved</p>
                    <div className="drawer-list-links-container">
                        <a href="#">STEM World I</a>
                        <a href="#">STEM World II</a>
                        <a href="#">STEM-Tober</a>
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
