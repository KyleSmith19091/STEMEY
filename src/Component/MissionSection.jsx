import React from 'react'

// Library Components
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

// CSS
import "../Style/Component/MissionSection.css";

// Components
import WaveSection from "./WaveSection";

// Images paths
import diamond from "../Img/diamond.png";
import checkpad from "../Img/checkpad.png";


const MissionSection = () => {

    return (
        <InView threshhold={0.10} intoViewMargin={0}>
            {({ ref, inView }) =>
                <motion.section className="mission-section">
                    <WaveSection isLeft={true} isPurple={true} />
                    <div className="content">
                        <h1 className="mission-header">Our Mission</h1>

                        <motion.h2
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? subheadingAnim : subheadingAnimInitial}
                            className="subheading">
                            STEM Enrichment Youth is a...</motion.h2>

                        <div className="mission-description">
                            <motion.p
                                ref={ref}
                                initial={subheadingAnimInitial}
                                animate={inView ? textAnim : textAnimInitial}
                                className="left-text">
                                Nonprofit, student-run organization that empowers K-12 students
                                to engage in STEM through personalized academic instruction.
                            </motion.p>

                            <motion.img
                                ref={ref}
                                initial={diamondAnimationInital}
                                animate={inView ? diamondAnimation : diamondAnimationInital}
                                id="diamond"
                                src={diamond}
                            >
                            </motion.img>

                        </div>

                        <motion.h2
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? subheadingAnim : subheadingAnimInitial}
                            className="subheading">
                            We are committed to...</motion.h2>

                        <div className="mission-description">
                            <motion.p
                                ref={ref}
                                initial={textAnimInitial}
                                animate={inView ? textAnim : textAnimInitial}
                                className="right-text">
                                Democratizing STEM education through academic support
                                and mentorship for underprivileged youth.
                            </motion.p>

                            <motion.img
                                ref={ref}
                                initial={checkpadAnimationInital}
                                animate={inView ? checkpadAnimation : checkpadAnimationInital}
                                id="checkpad"
                                src={checkpad}>
                            </motion.img>

                        </div>


                        <motion.h2
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? subheadingAnim : subheadingAnimInitial}
                            className="subheading">
                            Building...</motion.h2>

                        <div className="mission-description">
                            <motion.p
                                ref={ref}
                                initial={textAnimInitial}
                                animate={inView ? textAnim : textAnimInitial}
                                className="left-text">
                                Supportive, tight-knit communities and ______ opportunities
                            </motion.p>

                        </div>

                    </div>
                </motion.section>
            }
        </InView >
    )
}

// Helper objects

// Animation objects
const subheadingAnimInitial = {
    opacity: 0
}

const textAnimInitial = {
    opacity: 0
}

const subheadingAnim = {
    x: [-100, 0],
    opacity: 1
}

const textAnim = {
    x: [100, 0],
    opacity: 1
}

const diamondAnimationInital = {
    opacity: 0
}

const diamondAnimation = {
    scale: [0, 1],
    rotate: [0, 360],
    opacity: 1,

}

const checkpadAnimationInital = {
    opacity: 0
}

const checkpadAnimation = {
    scale: [0, 2, 1],
    opacity: 1
}

export default MissionSection;
