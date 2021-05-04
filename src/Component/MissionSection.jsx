import React from 'react'

// Library Components
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

// CSS
import "../Style/Component/MissionSection.css";
import "../Style/Component/PointerAnim.css";
import "../Style/Component/BulbAnimation.css";
import "../Style/Component/CityAnimation.css";

// Components
import WaveSection from "./WaveSection";

// Images paths
import { ReactComponent as OnlineSchool } from "../Img/online_school.svg";
import { ReactComponent as CreativeProcess } from "../Img/creative_process.svg";
import { ReactComponent as City } from "../Img/city.svg";


const MissionSection = () => {

    return (
        <InView as="div" threshhold={0.2} rootMargin={"80%"}>
            {({ ref, inView }) =>
                <motion.section id="MISSION" className="mission-section">
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

                            <motion.div
                                ref={ref}
                                initial={imgAnimInitial}
                                animate={inView ? imgAnimRot : imgAnimInitial}
                            >
                                <OnlineSchool className="mission-vector" />
                            </motion.div>


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

                            <motion.div
                                ref={ref}
                                initial={imgAnimInitial}
                                animate={inView ? imgAnimRot : imgAnimInitial}>
                                <CreativeProcess className="mission-vector" />
                            </motion.div>

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

                            <motion.div
                                ref={ref}
                                initial={imgAnimInitial}
                                animate={inView ? imgAnimRot : imgAnimInitial}>
                                <City className="mission-vector" />
                            </motion.div>

                        </div>

                    </div>
                </motion.section>
            }
        </InView >
    );
}

// Helper objects

// Animation objects
const subheadingAnimInitial = {
    opacity: 0
}

const textAnimInitial = {
    opacity: 0
}

const imgAnimInitial = {
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

const imgAnimRot = {
    opacity: 1,
    rotateY: [360, 0],
}


export default MissionSection;
