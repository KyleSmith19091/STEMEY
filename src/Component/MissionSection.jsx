import React from 'react'

// Library Components
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
// CSS
import "../Style/Component/MissionSection.css";

// Components
import WaveSection from "./WaveSection";

const MissionSection = () => {

    return (
        <InView threshhold={0.30}>
            {({ ref, inView }) =>
                <motion.section className="mission-section">
                    <WaveSection isLeft={true} isPurple={true} />
                    <div className="content">
                        <h1>Our Mission</h1>

                        <motion.h2
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? subheadingAnim : subheadingAnimInitial}
                            className="subheading">
                            STEM Enrichment Youth is a...</motion.h2>
                        <motion.p
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? textAnim : textAnimInitial}
                            className="left-text">
                            Nonprofit, student-run organization that empowers K-12 students
                            to engage in STEM through personalized academic instruction.
                        </motion.p>

                        <motion.h2
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? subheadingAnim : subheadingAnimInitial}
                            className="subheading">
                            We are committed to...</motion.h2>
                        <motion.p
                            ref={ref}
                            initial={textAnimInitial}
                            animate={inView ? textAnim : textAnimInitial}
                            className="right-text">
                            Democratizing STEM education through academic support
                            and mentorship for underprivileged youth.
                        </motion.p>

                        <motion.h2
                            ref={ref}
                            initial={subheadingAnimInitial}
                            animate={inView ? subheadingAnim : subheadingAnimInitial}
                            className="subheading">
                            Buidling...</motion.h2>
                        <motion.p
                            ref={ref}
                            initial={textAnimInitial}
                            animate={inView ? textAnim : textAnimInitial}
                            className="left-text">
                            Supportive, tight-knit communities and ______ opportunities
                        </motion.p>

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
    x: [150, 0],
    opacity: 1
}

const textAnim = {
    x: [-150, 0],
    opacity: 1
}

export default MissionSection;
