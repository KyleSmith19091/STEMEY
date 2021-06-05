import React from 'react'

import "../Style/Route/StemWorld.css";

import TimelineCard from "../Component/TimelineCard";

const StemWorld = () => {
    return (
        <section className="stemworld">
            <TimelineCard first />
            <TimelineCard />
            <TimelineCard />
            <TimelineCard last />
        </section>
    )
}

export default StemWorld
