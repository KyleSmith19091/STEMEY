// React
import React, { useState } from 'react'

// External Libraries
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { InView } from "react-intersection-observer";

// Images 
import classBlob from "../Img/Photo/classesBlob.png";
import tutoringBlob from "../Img/Photo/tutoringBlob.png";
import eventsAndNetworksBlob from "../Img/Photo/eventsAndNetworkingBlob.png";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../Style/Component/OfferSection.css";

const cardContents = [
    {
        heading: "Tutoring",
        blob: classBlob,
        description: [
            "📚 Need help with homework?",
            "📝 Looking to review for a test"
        ],
        actionStatement: "Ready to explore STEM outside of school?",
        buttonText: "Register"
    },
    {
        heading: "Classes",
        blob: tutoringBlob,
        description: [
            "💻 Comprehensive online courses in 14+ STEM disciplines.",
            "⭐️ Taught by high achieving high scool and college students internationally."
        ],
        actionStatement: "Diversify your STEM knowledge?",
        buttonText: "Learn More"
    },
    {
        heading: "Events & Networking",
        blob: eventsAndNetworksBlob,
        description: [
            "🤝 Tight-knit, international communities of STEM enthusiasts.",
            "🏆 Prize-winning competitions and professional speaker workshops"
        ],
        actionStatement: "Join our Harry Potter-styled Housing System on Discord!",
        buttonText: "Join Today"
    }
];

const OfferSection = () => {

    const [cardIndex, setCardIndex] = useState(0);
    const [props, set] = useSpring(() => ({ number: 100, from: { number: 0 }, config: { duration: 2000, delay: 1000, reset: false } }));

    const settings = {
        centerMode: true,
        infinite: true,
        dots: false,
        speed: 300,
        slidesToShow: 1,
        centerPadding: "0",
        swipeToSlide: true,
        focusOnSelect: true,
        autoplay: true, // Remove this to remove autoplay
        autoplaySpeed: 4000,
        cssEase: "linear",
        beforeChange: (current, next) => setCardIndex(next),
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 820, // 820px breakpoint <==> Media query
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = cardContents.map((card, idx) => {
        return (
            <animated.div className={idx === cardIndex ? "activeSlide" : "slide"} key={idx}>
                <animated.div className="slider-wrapper">
                    <animated.div className="card-header">
                        <h3>{card.heading}</h3>
                        <img src={card.blob} alt={card.heading} />
                    </animated.div>
                    <div className="card-description">
                        <p>{card.description[0]}</p>
                        <p>{card.description[1]}</p>
                    </div>
                    <h4 className="action-statement">{card.actionStatement}</h4>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="card-btn">{card.buttonText}</motion.button>
                </animated.div>
            </animated.div >
        )
    });


    return (
        <InView threshhold={1} intoViewMargin={0.2}>
            {({ ref, inView }) =>
                <section className="offer-section">
                    <motion.h1 initial={{ opacity: 0 }} animate={inView ? { x: [-100, 0], opacity: 1 } : { opacity: 0 }} className="section-header">What We Offer</motion.h1>
                    <h3 className="offer-header">Virtual and Open to All</h3>
                    <h3 className="offer-header"><animated.span ref={ref}>{
                        inView ? props.number.interpolate(n => n.toFixed(0)) : set({ number: 100, from: { number: 0 } })
                    }</animated.span>% Free</h3>

                    <div className="slider-container">
                        <Slider {...settings}>{cards}</Slider>
                    </div>
                </section >
            }
        </InView>
    )
}

export default OfferSection
