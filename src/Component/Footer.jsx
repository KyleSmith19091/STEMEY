import React from 'react'

import { ReactComponent as Youtube } from "../Img/youtubeIcon.svg";
import { ReactComponent as Instagram } from "../Img/instagramIcon.svg";
import { ReactComponent as Linkedin } from "../Img/linkedin.svg";
import { ReactComponent as Classroom } from "../Img/googleClassroomIcon.svg";
import { ReactComponent as Discord } from "../Img/discordIcon.svg";

import "../Style/Component/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="icon-container">
                <Youtube />
                <Linkedin />
                <Discord />
                <Instagram />
                <Classroom />
            </div>
            <form action="submit" className="newsletter-form">
                <input type="email" name="email" id="email" placeholder="Enter email for latest news and updates!" />
                <input type="button" value="Subscribe" id="submit" />
            </form>
            <div className="page-links">
                <div className="page-dir">
                    <h4>Academics</h4>
                    <a href="/">Classes</a>
                    <a href="/">Tutoring</a>
                    <a href="/">See Our Team</a>
                </div>
                <div className="page-dir">
                    <h4>Get Involved</h4>
                    <a href="/">Volunteer</a>
                    <a href="/">Join Our Community</a>
                    <a href="/">Partner with Us</a>
                </div>
                <div className="page-dir">
                    <h4>Events</h4>
                    <a href="/">STEM World I</a>
                    <a href="/">STEM World II</a>
                    <a href="/">STEM-Tober</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
