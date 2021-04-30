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
                <h1 className="header">Announcements</h1>
                <article className="announcement">
                    <h1>Title</h1>
                    <img src={sample1} alt="Sample Image" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </article>
                <article className="announcement">
                    <h1>Title</h1>
                    <img src={sample1} alt="Sample Image" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </article>
                <article className="announcement">
                    <h1>Title</h1>
                    <img src={sample1} alt="Sample Image" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </article>
            </div>
        </section>
    )
}

export default AnnoucementSection
