// Reeact
import React from 'react'

// Internal Components
import WaveSection from "./WaveSection";

// Images
import sample1 from "../Img/Photo/announcement_sample_1.png";
import sample2 from "../Img/Photo/announcement_sample_2.png";
import sample3 from "../Img/Photo/announcement_sample_3.png";

// CSS
import "../Style/Component/AnnoucementSection.css";

const AnnoucementSection = () => {
    return (
        <section className="announcement-section">
            <WaveSection isLeft={true} isPurple={true} />
            <div className="content">
                <h1 className="header">Announcements</h1>
                <article className="announcement">
                    <h1>Title</h1>
                    <img src={sample1} alt="Sample" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </article>
                <article className="announcement">
                    <h1>Title</h1>
                    <img src={sample2} alt="Sample" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </article>
                <article className="announcement">
                    <h1>Title</h1>
                    <img src={sample3} alt="Sample" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </article>
            </div>
        </section>
    )
}

export default AnnoucementSection
