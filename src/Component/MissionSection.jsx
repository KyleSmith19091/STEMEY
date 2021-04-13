import React from 'react'

import "../Style/Component/MissionSection.css";

import { ReactComponent as WaveSection } from "../Img/WaveSection.svg";

const MissionSection = () => {
    return (
        <section className="mission-section">
            <WaveSection className="wave-section" />
            <div className="content">

            </div>
        </section>
    )
}

export default MissionSection;
