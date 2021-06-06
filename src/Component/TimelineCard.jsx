import React from 'react'

// Images
import timelineImage from "../Img/Photo/timelineImage.jpg";

import { ReactComponent as Profile } from "../Img/Icon/Profile.svg";
import { ReactComponent as Calendar } from "../Img/Icon/Calendar.svg";

// CSS
import "../Style/Component/TimelineCard.css";

const TimelineCard = ({ first, last }) => {
    return (
        <div className={last ? "last" : "timelineCard"}>
            <div className={first ? "first" : "TimelineCard"}>
                {!first && <div className="timeline"></div>}
                <div className="circle"></div>
                {!last && <div className="timeline">
                </div >}
            </div>
            <div className="timeline-content-container">
                <img src={timelineImage} alt="" loading="lazy" />
                <div className="text-content">
                    <h2>Title</h2>
                    <p><span><Profile /></span>Speaker</p>
                    <p><span><Calendar /></span>Date</p>
                </div>
            </div>
        </div>
    )
}

export default TimelineCard
