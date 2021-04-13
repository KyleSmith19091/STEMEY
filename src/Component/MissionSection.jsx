import React from 'react'

// CSS
import "../Style/Component/MissionSection.css";

// Components
import WaveSection from "./WaveSection";

const MissionSection = () => {
    return (
        <section className="mission-section">
            <WaveSection isLeft={true} />
            <div className="content">
                <h1>Our Mission</h1>
            </div>
        </section>
    )
}

export default MissionSection;
