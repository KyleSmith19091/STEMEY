// React
import React, { useRef, useEffect, useState } from "react";

// External Components
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

// CSS
import styles from "../Style/Route/Test.module.css";

const Test = () => {
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".imgContainer::after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut, delay: 0.8 }).from(image, 1.4, {
      scale: 1.4,
      ease: Power2.easeOut,
    });
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img ref={(el) => (image = el)} src={require("../Img/Photo/timelineImage.jpg")} alt="Test" />
        </div>
      </div>
    </main>
  );
};

export default Test;

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
