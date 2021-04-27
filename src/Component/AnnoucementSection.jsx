import React from 'react'

import WaveSection from "./WaveSection";

import sample1 from "../Img/announcement_sample_1.png";
import sample2 from "../Img/announcement_sample_2.png";
import sample3 from "../Img/announcement_sample_3.png";

import "../Style/Component/AnnoucementSection.css";

const AnnoucementSection = () => {
    return (
        <section className="announcement-section">
            <WaveSection isLeft={true} isPurple={true} />
            <div className="content">
                <h1>Announcements</h1>
                <div className="announcement-container">
                    <div className="announcement">
                        <h3>Title</h3>
                        <p>Elit veniam ex eu id labore esse aliquip nostrud proident deserunt culpa.</p>
                        <img src={sample1} alt="Announcement" />
                    </div>
                    <div className="announcement">
                        <h3>Title</h3>
                        <p>Elit veniam ex eu id labore esse aliquip nostrud proident deserunt culpa.</p>
                        <img src={sample2} alt="Announcement" />
                    </div>
                    <div className="announcement">
                        <h3>Title</h3>
                        <p>Elit veniam ex eu id labore esse aliquip nostrud proident deserunt culpa.</p>
                        <img src={sample3} alt="Announcement" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnnoucementSection
