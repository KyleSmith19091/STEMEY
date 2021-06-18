// React
import React, { useRef, useEffect, useState } from 'react'

// External Components
import { TweenMax, Power3 } from 'gsap';

// CSS
import "../Style/Route/Test.css";

const Test = () => {
    return (
        <main>
            <div className="container">
                <div className="anim-img-container">
                    <img src={require("../Img/Photo/timelineImage.jpg")} alt="Test" />
                </div>
            </div>
        </main>
    )
}

export default Test

/*
const [expand, setExpand] = useState(false);

    let circle = useRef(null);
    let circleRed = useRef(null);
    let circleBlue = useRef(null);

    const handleExpand = () => {
        TweenMax.to(circleRed, 0.8, { width: 200, height: 200, x: 40, ease: Power3.easeOut });
        setExpand(!expand);
    }

    const handleShrink = () => {
        TweenMax.to(circleRed, 0.8, { width: 75, height: 75, x: 0, ease: Power3.easeOut });
        setExpand(!expand);
    }

    useEffect(() => {
        // TweenMax.from(circle, 0.8, { opacity: 0, x: 80, ease: Power3.easeOut });
        // TweenMax.from(circleRed, 0.8, { opacity: 0, x: 80, ease: Power3.easeOut, delay: 0.2 });
        // TweenMax.from(circleBlue, 0.8, { opacity: 0, x: 80, ease: Power3.easeOut, delay: 0.4 });
        TweenMax.staggerFrom([circle, circleBlue, circleRed], 0.8, { opacity: 0, x: 80, ease: Power3.easeOut }, 0.2);
    }, []);
*/
