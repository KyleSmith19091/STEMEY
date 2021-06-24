// React
import React, { useState, useEffect, useRef } from 'react';

// External Components
import { motion } from "framer-motion";
import { TimelineLite, Power3 } from 'gsap/gsap-core';
import { animateScroll as scroll } from "react-scroll";

// Internal Components
import HoverCard from "./HoverCard";
import AnimPlayer from "./AnimPlayer";

// Images
import { ReactComponent as ChevronUp } from "../Img/Icon/chevron_up.svg";

import animationData from "../Img/animation/flying-man.json";

// CSS
import "../Style/Component/HeroSection.css";

const HeroSection = () => {
    const words = ["STEM", "SCIENCE", "TECHNOLOGY", "ENGINEERING", "MATHEMATICS"];

    const [offsetY, setOffsetY] = useState(window.pageYOffset || document.documentElement.scrollTop);
    const [wordIndex, setWordIndex] = useState(0);

    const tl = new TimelineLite();
    let titleContentContainer = useRef(null);
    let heroImage = useRef(null);
    let chevronUp = useRef(null);

    const handleScroll = () => {
        let offset = window.pageYOffset || document.documentElement.scrollTop;
        setOffsetY(offset);
    };

    useEffect(() => {
        setTimeout(() => {
            wordIndex === words.length - 1 ? setWordIndex(0) : setWordIndex(wordIndex + 1);
        }, 3000);
    });

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        tl.from(titleContentContainer.children[0], 1, {
            y: -80,
            ease: Power3.easeOut,
            opacity: 0,
            delay: 0.2
        }).from(heroImage, 1, {
            x: 80,
            opacity: 0,
            ease: Power3.easeOut,
        }).to(chevronUp, 1, {
            y: -80,
            opacity: 1,
            ease: Power3.easeOut,
            delay: 0.2
        });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-title-container" style={{ transform: `translateY(${offsetY * -0.5}px)` }} ref={el => titleContentContainer = el}>
                <h1>Build your future in <span className="stem-anim">{words[wordIndex]}<br /></span> with
                    <span className="hero-text"> STEMEY. </span>
                </h1>
            </div>

            <HoverCard bgColor="transparent">
                <div className="hero-image-parent-container" style={{ transform: `translateY(${offsetY * -0.5}px)` }}>
                    <div ref={el => heroImage = el} className="hero-image-container">
                        <AnimPlayer className="hero-img" data={animationData} />
                    </div>
                </div>
            </HoverCard>

            <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="chevron-container" onClick={onChevronClick}>
                <ChevronUp ref={el => chevronUp = el} />
            </motion.div>

        </section>
    )
}

const onChevronClick = (e) => {
    scroll.scrollTo(1000);
};

export default HeroSection
