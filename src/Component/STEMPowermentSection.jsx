// React
import React from 'react'

// External Components
import { motion } from "framer-motion";

// CSS
import "../Style/Component/STEMPowermentSection.css";

const STEMPowermentSection = () => {
    return (
        <section className="stempowerment-section">
            <motion.h1 animate={leftHeaderAnim} className="left text">
                <span role="img" aria-label="mountain">⛰ </span>Searching for an affordable way to advance your child’s future in STEM?
            </motion.h1>
            <motion.h1 animate={rightHeaderAnim} className="right text">
                <span role="img" aria-label="video-camera">📹 </span>Tired of traditional Zoom classes with no personalized support or community-building?
            </motion.h1>
            <motion.h1 animate={centerHeaderAnim} className="center text">
                Then <span role="img" aria-label="video-camera">⚡️ </span>STEMPowerment is for you!
            </motion.h1>
            <motion.p animate={descriptionAnim} className="description">
                <span className="hover-text">STEMPowerment</span> is a <span className="hover-text">100% free</span>, virtual, 4-week STEM Summer Camp aimed to. . . empower students in grades K-8 to explore STEM through hands-on, personalized education. We are a low-stress, fun, and engaging camp that seeks to inspire the STEM leaders and innovators of the future.
            </motion.p>
            <motion.p animate={descriptionAnim} className="description">
                <span className="hover-text">STEMEY’s</span> strongest advantage lies in our peer-to-peer teaching model: as high school and college students, we understand the hardships of the traditional schooling system. With limited classroom time and a rigid curriculum, students in school rarely receive personalized support/mentorship and opportunities for community bonding. To combat these challenges and provide a fruitful, enjoyable academic experience for your child.
            </motion.p>
            <h1 className="center text"><span role="img" aria-label="lightning-bolt">⚡️ </span><span>STEM</span>Powerment Includes</h1>
            <dl className="stempowerment-list">
                <dt><span>{'>'}</span> Learning Pod</dt>
                <dd>Tight-knit community consisting of high-school student mentor and 2-4 students who share your child’s academic & personal interests</dd>

                <dt><span>{'>'}</span> Personalized Lessons and Activities</dt>
                <dd>3 classes/week where our high-school mentors can teach through interactive labs, educational games, and more. </dd>

                <dt><span>{'>'}</span> Professional Instruction</dt>
                <dd>Weekly workshops hosted by industry professionals from top-ranking STEM institutions globally</dd>

                <dt><span>{'>'}</span> Devoted Instructors</dt>
                <dd>Outstanding high-school student volunteers involved in competitive research/academic programs and Olympiads, many of whom have been admitted into top-ranking colleges, from MIT and Harvard on the East Coast to the West’s UC Berkeley and UCLA. </dd>

                <dt><span>{'>'}</span> Mock Competitions</dt>
                <dd>Low-stakes competitions to prepare your child for the rigorous, in-demand Olympiads.</dd>
            </dl>
        </section>
    )
}

const leftHeaderAnim = {
    x: [-100, 0]
}
const rightHeaderAnim = {
    x: [100, 0]
}

const centerHeaderAnim = {
    rotate: [-10, 10, 0, -10, 10, 0],
    transition: { duration: 3 }
}

const descriptionAnim = {
    y: [100, 0]
}

export default STEMPowermentSection;
