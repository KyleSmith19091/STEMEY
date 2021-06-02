// React
import React from 'react'

// External Components
import { motion } from "framer-motion";
import ReactFlow from 'react-flow-renderer';
import { install } from "resize-observer";

// CSS
import "../Style/Component/STEMPowermentSection.css";

const STEMPowermentSection = () => {
    // Resize observer error Safari fix
    install();
    const elements = [
        {
            id: '1',
            data: { label: "⚡️ STEMpowerment Summer 2021" },
            position: { x: 300, y: 25 },
            className: "purple-node"
        },
        {
            id: '2',
            data: { label: "Grades K-6" },
            position: { x: 100, y: 125 },
            className: "dark-node"
        },
        {
            id: '3',
            data: { label: 'Grades 6-B' },
            position: { x: 550, y: 125 },
            className: "purple-node"
        },
        {
            id: '4',
            data: { label: 'Math Classes' },
            position: { x: 30, y: 250 },
            className: "blue-node"
        },
        {
            id: '5',
            data: { label: 'Science Classes' },
            position: { x: 200, y: 250 },
            className: "purple-node"
        },
        {
            id: '6',
            data: { label: 'Math Classes (Algebra/Geometry)' },
            position: { x: 450, y: 250 },
            className: "purple-node"
        },
        {
            id: '7',
            data: { label: 'Science Classes (Bio/Chem/Physics)' },
            position: { x: 650, y: 250 },
            className: "blue-node"
        },
        {
            id: '8',
            data: { label: 'Depending on public interest we may host ...' },
            position: { x: 310, y: 350 },
            className: "dark-node"
        },
        {
            id: '9',
            data: { label: 'Computer Science Classes aka the best thing since sliced bread' },
            position: { x: 150, y: 500 },
            className: "dark-node"
        },
        {
            id: '10',
            data: { label: 'Engineering Classes' },
            position: { x: 450, y: 500 },
            className: "dark-node"
        },
        // animated edge
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '1', target: '3' },
        { id: 'e2-4', source: '2', target: '4' },
        { id: 'e3-5', source: '2', target: '5', animated: true },
        { id: 'e3-6', source: '3', target: '6' },
        { id: 'e3-7', source: '3', target: '7', animated: true },
        { id: 'e1-8', source: '1', target: '8' },
        { id: 'e8-9', source: '8', target: '9', animated: true },
        { id: 'e8-10', source: '8', target: '10' },
    ];

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

            <h1 className="center text">Offerings Breakdown (check this out <span role="img" aria-label="lightning-bolt">👇 </span> it's interactive)</h1>

            <div className="flow-container">
                <ReactFlow elements={elements} />
            </div>

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
