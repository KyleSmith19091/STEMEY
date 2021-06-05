import React from 'react'

import "../Style/Component/TimelineCard.css";

const TimelineCard = ({ first, last }) => {
    return (
        <div className="timelineCard">
            <div className={first ? "first" : "TimelineCard"}>
                {!first && <div className="timeline"></div>}
                <div className="circle"></div>
                {!last && <div className="timeline">
                </div >}
            </div>
            <div className="timeline-content-container">
                <h2>Hello There</h2>
            </div>
        </div>
    )
}

export default TimelineCard
