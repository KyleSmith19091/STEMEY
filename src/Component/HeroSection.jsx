// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// External Components
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

// Internal Components
import HoverCard from "./HoverCard";
import AnimPlayer from "./AnimPlayer";

// Images
import { ReactComponent as ChevronUp } from "../Img/Icon/chevron_up.svg";

import animationData from "../Img/animation/flying-man.json";

// CSS
import "../Style/Component/HeroSection.css";

const HeroSection = ({ open }) => {

    const words = ["STEM", "SCIENCE", "TECHNOLOGY", "ENGINEERING", "MATHEMATICS"];
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            wordIndex === words.length - 1 ? setWordIndex(0) : setWordIndex(wordIndex + 1);
        }, 2000);
    });

    return (
        <section className="hero-section" style={{ filter: open ? "blur(2px)" : "none" }}>
            <div className="hero-title-container">
                <h1>Build your future in <motion.span className="stem-anim">{words[wordIndex]}<br /></motion.span> with
                    <span className="hero-text"> STEMEY </span>
                </h1>
            </div>

            <HoverCard bgColor="transparent">
                <motion.div animate={{ scale: [0, 0.5, 1, 1.1] }} transition={{ duration: 1 }} className="hero-image-parent-container">
                    <div className="hero-image-container">
                        <AnimPlayer className="hero-img" data={animationData} />
                    </div>
                </motion.div>
            </HoverCard>

            <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="chevron-container" onClick={onChevronClick}>
                <ChevronUp />
            </motion.div>

        </section>
    )
}

HeroSection.propTypes = {
    open: PropTypes.bool.isRequired
}

const onChevronClick = (e) => {
    scroll.scrollTo(1000);
};

export default HeroSection
