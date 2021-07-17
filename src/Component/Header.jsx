// React
import React, { useRef, useEffect } from "react";

// External Components
import { motion } from "framer-motion";
import { TweenLite, Power3 } from "gsap";
import { Link } from "react-router-dom";
import { useDisclosure, Button } from "@chakra-ui/react";

// Internal Components
import SlideDrawer from "./SlideDrawer";

// Images
import { ReactComponent as Hamburger } from "../Img/Icon/hamburger.svg";

// CSS
import "../Style/Component/Header.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let hamburgerRef = useRef(null);
  let logoRef = useRef(null);

  useEffect(() => {
    TweenLite.from(logoRef, 1.4, {
      y: -200,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);

  return (
    <header className="header">
      <div className="logo-container" ref={(el) => (logoRef = el)}>
        <Link to="/" className="logo">
          <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            STEMEY.
          </motion.h1>
        </Link>
      </div>

      {/* TODO: Move this to SlideDrawer Component */}
      <div className="menu-icon-container">
        <Button
          ref={(el) => (hamburgerRef = el)}
          colorScheme="transparent"
          onClick={onOpen}
          _focus={{ ringColor: "transparent" }}
        >
          <Hamburger className="hamburger-icon" />
        </Button>
        <SlideDrawer
          isOpen={isOpen}
          onClose={onClose}
          focusRef={hamburgerRef}
        />
      </div>
    </header>
  );
};

export default Header;
