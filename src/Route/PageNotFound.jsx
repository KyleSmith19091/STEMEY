// React
import React from 'react';

// Internal Components
import HoverCard from "../Component/HoverCard";
import AnimPlayer from "../Component/AnimPlayer";

// Images
import animationData from "../Img/animation/astronaout.json";

// CSS
import "../Style/Route/PageNotFound.css";

const PageNotFound = () => {

    return (
        <main className="page-not-found">
            <section className="page-not-found-content">
                <h1>Woops Page Not Found!</h1>
                <h3>Might as well check this guy out <span role="img" aria-label="hand-down">👇</span></h3>
                <HoverCard>
                    <AnimPlayer data={animationData} width="40vw" height="40vw" />
                </HoverCard>
            </section>
        </main >
    )
}

export default PageNotFound
