// React
import React, { useState } from 'react'

// External Components
import Slider from "react-slick";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

// Images 
import classBlob from "../Img/Photo/classes_blob.png";
import tutoringBlob from "../Img/Photo/tutoring_blob.png";
import eventsAndNetworksBlob from "../Img/Photo/events_blob.png";

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
            <div className={idx === cardIndex ? "activeSlide" : "slide"} key={idx}>
                <div className="slider-wrapper">
                    <div className="offer-card-header">
                        <h3>{card.heading}</h3>
                        <img src={card.blob} alt={card.heading} />
                    </div>
                    <div className="offer-card-description">
                        <p>{card.description[0]}</p>
                        <p>{card.description[1]}</p>
                    </div>
                    <h4 className="action-statement">{card.actionStatement}</h4>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="card-btn">{card.buttonText}</motion.button>
                </div>
            </div >
        )
    });


    return (
        <InView threshhold={1} intoViewMargin={0.2}>
            {({ ref, inView }) =>
                <section className="offer-section">
                    <motion.h1 initial={{ opacity: 0 }} animate={inView ? { x: [-100, 0], opacity: 1 } : { opacity: 0 }} className="section-header">What We Offer</motion.h1>
                    <h3 className="offer-header">Virtual and Open to All</h3>
                    <h3 className="offer-header"><motion.span ref={ref}>{
                        100
                    }</motion.span>% Free</h3>

                    <div className="slider-container">
                        <Slider {...settings}>{cards}</Slider>
                    </div>
                </section >
            }
        </InView>
    )
}

export default OfferSection