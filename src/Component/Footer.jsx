// React
import React from 'react'

// External Components
import { Button, TextField } from '@material-ui/core';

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
            <form action="submit" className="newsletter-form">
                <TextField id="email" style={{ width: "25ch" }} label="Signup for newsletter" size="medium" variant="outlined" />
                <Button style={{ marginLeft: "1em", borderRadius: "2em" }} size="large" color="primary" variant="contained">Signup</Button>
            </form>
            <div className="page-links">
                <div className="page-dir">
                    <h4>Academics</h4>
                    <a href="/classes">Classes</a>
                    <a href="/tutoring">Tutoring</a>
                    <a href="/tutoring-summer">Summer Tutoring Program</a>
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
        </footer >
    )
}

export default Footer
