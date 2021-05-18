// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

// Internal Components
import HoverCard from "./HoverCard";
import AnimPlayer from "./AnimPlayer";

// Images
import { ReactComponent as ChevronUp } from "../Img/Icon/chevron_up.svg";
import { ReactComponent as Science } from "../Img/SVG/science.svg";
import { ReactComponent as Books } from "../Img/SVG/books.svg";

import animationData from "../Img/animation/flying-man.json";

// CSS
import "../Style/Component/HeroSection.css";

const HeroSection = ({ open }) => {

    const words = ["STEM", "SCIENCE", "TECHNOLOGY", "ENGINEERING", "MATHEMATICS"];
    const images = [<Science />, <Books />];
    const [wordIndex, setWordIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            wordIndex === words.length - 1 ? setWordIndex(0) : setWordIndex(wordIndex + 1);
        }, 2000);

    });

    const onHeroImageClick = (e) => {
        imageIndex === images.length - 1 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
    };

    return (
        <section className="hero-section" style={{ filter: open ? "blur(2px)" : "none" }}>
            <div className="hero-title-container">
                <h1>Build your future in <br /><motion.span className="stem-anim">{words[wordIndex]}<br /></motion.span> with
                    <span className="hero-text"> STEMEY </span>
                </h1>
            </div>

            <HoverCard>
                <div className="hero-image-parent-container">
                    <AnimPlayer data={animationData} width="40vw" height="40vw" />
                </div>
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

const heroImageContainerAnim = {
    rotate: [180, 0],
    x: [500, 0]
};

const heroImageFlip = {
    rotateY: [0, 180]
}

const heroImageVariants = {
    hidden: {
        rotate: [180, 0],
        x: [500, 0]
    },
    visible: {
        rotateY: [0, 180]
    }
}

const onChevronClick = (e) => {
    scroll.scrollTo(1000);
};

/*
<div className="hero-image-parent-container">
                <motion.div animate={heroImageContainerAnim} initial="hidden" variants={heroImageVariants} whileTap={heroImageFlip} className="hero-image-container" onClick={onHeroImageClick}>
                    {images[imageIndex]}
                </motion.div>
            </div


*/

export default HeroSection
