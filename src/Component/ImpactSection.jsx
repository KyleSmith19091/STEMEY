// React
import React from 'react'

// External Components
import { AspectRatio } from "@chakra-ui/react"

// Internal Components
import WaveSection from "./WaveSection";

// CSS
import "../Style/Component/ImpactSection.css";

const videoURLS = [
    "https://www.youtube.com/embed/B-RJqKaOC-A",
    "https://www.youtube.com/embed/18Zl0X_Am0A",
    "https://www.youtube.com/embed/uXI6IM8D4pI",
];

const ImpactSection = () => {
    return (
        <section className="impact-section">
            <WaveSection isPurple={false} isLeft={false} />
            <div className="content">

                <h1 className="impact-header">Our Impact</h1>

                <div className="impact-container">
                    <div className="impact-number">
                        <h2>400 Students</h2>
                    </div>
                    <AspectRatio ratio={16 / 9}>
                        <iframe src={videoURLS[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </AspectRatio>
                </div>

                <div className="impact-container">
                    <div className="impact-number">
                        <h2>300 Lectures</h2>
                    </div>
                    <AspectRatio ratio={16 / 9}>
                        <iframe src={videoURLS[1]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </AspectRatio>
                </div>

                <div className="impact-container">
                    <div className="impact-number">
                        <h2>30K Viewers</h2>
                    </div>
                    <AspectRatio ratio={16 / 9}>
                        <iframe src={videoURLS[2]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </AspectRatio>
                </div>

            </div>
        </section >
    )
}

export default ImpactSection
