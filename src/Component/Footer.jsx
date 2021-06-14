// React
import React, { useState } from 'react'

// External Components
import { Link } from "react-router-dom";
import { Input, InputLeftElement, InputGroup, Button, useToast } from "@chakra-ui/react";

// Internal Components
import { validateEmail } from "../Controller/ValidateForm";

// Images
import { ReactComponent as Youtube } from "../Img/Icon/youtubeIcon.svg";
import { ReactComponent as Instagram } from "../Img/Icon/instagramIcon.svg";
import { ReactComponent as Linkedin } from "../Img/Icon/linkedin.svg";
import { ReactComponent as Classroom } from "../Img/Icon/googleClassroomIcon.svg";
import { ReactComponent as Discord } from "../Img/Icon/discordIcon.svg";
import { ReactComponent as EmailIcon } from "../Img/Icon/email_icon.svg";

// CSS
import "../Style/Component/Footer.css";

const Footer = () => {

    const toast = useToast();
    const [email, setEmail] = useState("");
    const handleChange = (event) => setEmail(event.target.value);

    const onSubmitHandler = () => {
        if (validateEmail(email)) {
            if (sessionStorage.getItem("email") !== null) {
                toast({
                    title: "Already joined",
                    description: "You've already joined the newsletter",
                    status: "warning",
                    duration: 9000,
                    isClosable: true,
                })
            } else {
                sessionStorage.setItem("email", email);
                toast({
                    title: "Joined Newsletter",
                    description: "Thank you for registering!",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
        } else {
            toast({
                title: "Invalid Email",
                description: "Please enter a valid email",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    };

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
            <form action="submit">
                <InputGroup sx={{ margin: "0 1em" }}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<EmailIcon />}
                    />
                    <Input sx={{ borderWidth: "2px", borderColor: "black" }} colorScheme="blackAlpha" variant="outline" placeholder="Enter email for latest news and updates!" type="email" onChange={handleChange} />
                </InputGroup>
                <Button colorScheme="purple" variant="solid" onClick={onSubmitHandler}>
                    Register
                </Button>
            </form>
            <div className="page-links">
                <div className="page-dir">
                    <h4>Academics</h4>
                    <Link className="link link--metis" to="/classes">Classes</Link>
                    <Link className="link link--metis" to="/tutoring">Tutoring</Link>
                    <Link className="link link--metis" to="/tutoring-summer">Summer Tutoring Program</Link>
                </div>
                <div className="page-dir">
                    <h4>Get Involved</h4>
                    <Link className="link link--metis" to="/">Volunteer</Link>
                    <Link className="link link--metis" to="/">Join Our Community</Link>
                    <Link className="link link--metis" to="/">Partner with Us</Link>
                </div>
                <div className="page-dir">
                    <h4>Events</h4>
                    <Link className="link link--metis" to="/">STEM World I</Link>
                    <Link className="link link--metis" to="/">STEM World II</Link>
                    <Link className="link link--metis" to="/">STEM-Tober</Link>
                </div>
            </div>
        </footer >
    )
}



export default Footer
