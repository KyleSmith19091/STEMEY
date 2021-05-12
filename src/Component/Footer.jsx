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
//import Email from "../Img/Icon/email_icon.svg";

// CSS
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
                <TextField id="email" style={{ width: "40ch" }} label="Signup for newsletter" margin="dense" variant="outlined" />
                <Button style={{ marginLeft: "1em", width: "20ch", borderRadius: "2em" }} color="primary" variant="contained" >Signup</Button>
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
        </footer >
    )
}

export default Footer
