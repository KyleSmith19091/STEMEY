import React, { useState } from 'react'

// External components
import Slider from "react-slick";

// Images 
import elyssa from "../Img/elyssa_wolter.png";
import { ReactComponent as Quote } from "../Img/testimonial_quote.svg";

// CSS
import "../Style/Component/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialMessages = [
    {
        name: "Yulia Anashkina",
        message: "Quis cillum nostrud reprehenderit quis culpa qui exercitation est voluptate. Et et id cupidatat ipsum amet nostrud eiusmod pariatur. Nisi esse Lorem amet pariatur culpa sunt minim culpa nostrud. Laboris aliquip velit proident incididunt irure occaecat amet cillum et aute culpa adipisicing.",
        imgSource: elyssa
    },
    {
        name: "Kyle Smith",
        message: "Lorem voluptate eu tempor laborum proident. Cillum quis sunt ea nulla cupidatat magna adipisicing commodo ipsum incididunt. Exercitation anim dolor dolor veniam excepteur excepteur irure cupidatat officia elit et laboris. Est do voluptate ad duis quis cillum culpa nostrud fugiat labore velit.",
        imgSource: elyssa
    },
    {
        name: "Ben Bobbins",
        message: "Lorem voluptate eu tempor laborum proident. Cillum quis sunt ea nulla cupidatat magna adipisicing commodo ipsum incididunt. Exercitation anim dolor dolor veniam excepteur excepteur irure cupidatat officia elit et laboris. Est do voluptate ad duis quis cillum culpa nostrud fugiat labore velit.",
        imgSource: elyssa
    }
];

const Testimonials = () => {

    const [cardIndex, setCardIndex] = useState(0);

    const cards = testimonialMessages.map((testimonial, idx) => {
        return (
            <div className={idx === cardIndex ? "activeSlide" : "slide"} key={idx}>
                <div className="testimonial-img"><img src={testimonial.imgSource} alt="Testimonial User" /></div>
                <p className="testimonial-msg">{testimonial.message}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <Quote className="quote-icon"></Quote>
            </div>
        );
    });

    const settings = {
        centerMode: true,
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        centerPadding: "0",
        swipeToSlide: true,
        focusOnSelect: true,
        autoplay: true, // Remove this to remove autoplay
        autoplaySpeed: 2000,
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

    return (
        <section className="testimonials-section">
            <h1>Why Us?</h1>

            <div className="slider-container">
                <Slider {...settings}>{cards}</Slider>
            </div>
        </section>
    );
}

export default Testimonials
