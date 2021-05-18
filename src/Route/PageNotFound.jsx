// React
import React from 'react';

// External Libraries
import Lottie from 'react-lottie';


// Internal Components
import HoverCard from "../Component/HoverCard";

// Images
import animationData from "../Img/animation/astronaout.json";

// CSS
import "../Style/Route/PageNotFound.css";

const PageNotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <main className="page-not-found">
            <section className="page-not-found-content">
                <h1>Woops Page Not Found!</h1>
                <h3>Might as well check this guy out <span role="img" aria-label="hand-down">👇</span></h3>
                <HoverCard>
                    <Lottie
                        options={defaultOptions}
                        width="50vw"
                        height="50vw"
                    />
                </HoverCard>
            </section>
        </main >
    )
}

export default PageNotFound
