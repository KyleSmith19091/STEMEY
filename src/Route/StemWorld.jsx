import React from 'react'

import "../Style/Route/StemWorld.css";

import TimelineCard from "../Component/TimelineCard";

const StemWorld = () => {
    return (
        <section className="stemworld">
            <div className="timeline-container">
                <TimelineCard first title="How does one make money?" speaker="Bill Gates" date="2020-02-12" />
                <TimelineCard title="How does one make money?" speaker="Bill Gates" date="2020-02-12" />
                <TimelineCard title="How does one make money?" speaker="Bill Gates" date="2020-02-12" />
                <TimelineCard title="How does one make money?" speaker="Bill Gates" date="2020-02-12" />
                <TimelineCard title="How does one make money?" speaker="Bill Gates" date="2020-02-12" />
                <TimelineCard last title="How does one make money?" speaker="Bill Gates" date="2020-02-12" />
            </div>
            <div className="expanded-card-container">

            </div>
        </section>
    )
}

export default StemWorld
