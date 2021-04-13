import React from 'react';
import PropTypes from 'prop-types';

import { motion } from "framer-motion"

// CSS
import "../Style/Component/HeroSection.css";

// Other Components
import heroImg from "../Img/HeroImage.png";
import { ReactComponent as Slider } from "../Img/Slider.svg";

const HeroSection = ({ open }) => {
    return (
        <section className="hero-section" style={{ filter: open ? "blur(2px)" : "none" }}>
            <div className="hero-title-container">
                <motion.h1
                    animate={{
                        y: [-100, 0],
                    }}
                    initial={true}
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                    transition={{ type: 'spring' }}
                    whileHover={{ scale: 0.5 }}
                >
                    <span>Build </span>your future with <span>STEM</span>
                </motion.h1>
            </div>
            <motion.div className="hero-image-container"
                animate={{
                    x: [150, 0],
                }}
                initial={true}
                transition={{ ease: "easeOut", duration: 1 }}
            >
                <motion.img
                    drag
                    dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                    }}
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: 'spring' }}
                    src={heroImg} alt="Person on rocket" />
            </motion.div>
            <motion.div
                animate={{ x: [-100, 0] }}
                transition={{ ease: "easeOut", duration: 1 }}
                initial={true}
                drag
                dragConstraints={{
                    top: -100,
                    left: -100,
                    right: 100,
                    bottom: 100,
                }}
                className="hero-slider-container">
                <Slider className="slider" />
            </motion.div>
        </section>
    )
}

HeroSection.propTypes = {
    open: PropTypes.bool.isRequired
}

export default HeroSection
