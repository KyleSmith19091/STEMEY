import React from 'react'

import { motion } from 'framer-motion';

// Sections
import HeroSection from "../Component/HeroSection";
import MissionSection from "../Component/MissionSection";
import OfferSection from "../Component/OfferSection";
import ImpactSection from "../Component/ImpactSection";
import TestimonialSection from "../Component/TestimonialSection";
import AnnoucementSection from "../Component/AnnoucementSection";

// CSS
import '../Style/Route/App.css';

const Home = ({ open }) => {
    // Keep track of the drawer on *Mobile*
    return (
        <motion.div exit={{ opacity: 0 }} className="home">
            <HeroSection open={open} />
            <MissionSection />
            <OfferSection />
            <ImpactSection />
            <TestimonialSection />
            <AnnoucementSection />
        </motion.div>
    )
}

export default Home
