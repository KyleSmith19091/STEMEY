// React
import React from 'react'

// External Components
import { Link } from "react-router-dom";

// Images
import { ReactComponent as Youtube } from "../Img/Icon/youtubeIcon.svg";
import { ReactComponent as Instagram } from "../Img/Icon/instagramIcon.svg";
import { ReactComponent as Linkedin } from "../Img/Icon/linkedin.svg";
import { ReactComponent as Classroom } from "../Img/Icon/googleClassroomIcon.svg";
import { ReactComponent as Discord } from "../Img/Icon/discordIcon.svg";

// CSS
import "../Style/Component/Footer.css";

const Footer = () => {

    return (
        <footer>
            <div className="icon-container">
                <a href="https://www.youtube.com/channel/UC9d1d74gAklaCvM9cItwQ0w" target="_blank" rel="noopener noreferrer">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/company/stem-enrichment-youth" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
                <a href="https://discord.com/invite/NWuv89e" target="_blank" rel="noopener noreferrer">
                    <Discord />
                </a>
                <a href="https://www.instagram.com/stemenrichmentyouth/" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a href="/classes">
                    <Classroom />
                </a>
            </div>
            <form action="submit" className="col s12">

            </form>
            <div className="page-links">
                <div className="page-dir">
                    <h4>Academics</h4>
                    <Link to="/classes">Classes</Link>
                    <Link to="/tutoring">Tutoring</Link>
                    <Link to="/tutoring-summer">Summer Tutoring Program</Link>
                </div>
                <div className="page-dir">
                    <h4>Get Involved</h4>
                    <Link to="/">Volunteer</Link>
                    <Link to="/">Join Our Community</Link>
                    <Link to="/">Partner with Us</Link>
                </div>
                <div className="page-dir">
                    <h4>Events</h4>
                    <Link to="/">STEM World I</Link>
                    <Link to="/">STEM World II</Link>
                    <Link to="/">STEM-Tober</Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer
