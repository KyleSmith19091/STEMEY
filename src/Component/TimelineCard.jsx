import React from 'react'
import PropTypes from 'prop-types';

// Images
import timelineImage from "../Img/Photo/timelineImage.jpg";

import { ReactComponent as Profile } from "../Img/Icon/Profile.svg";
import { ReactComponent as Calendar } from "../Img/Icon/Calendar.svg";

// CSS
import "../Style/Component/TimelineCard.css";

const TimelineCard = ({ first, last, title, speaker, date }) => {
    return (
        <div className={last ? "last" : "timelineCard"}>
            <div className={first ? "first" : "TimelineCard"}>
                {!first && <div className="timeline"></div>}
                <div className="circle"></div>
                {!last && <div className="timeline">
                </div >}
            </div>
            <div className="timeline-content-container">
                <img src={timelineImage} alt="Speaker" loading="lazy" />
                <div className="text-content">
                    <h2>{title}</h2>
                    <p><span><Profile /></span>{speaker}</p>
                    <p><span><Calendar /></span>{date}</p>
                </div>
            </div>
        </div>
    )
}

TimelineCard.propTypes = {
    first: PropTypes.bool,
    last: PropTypes.bool,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default TimelineCard
