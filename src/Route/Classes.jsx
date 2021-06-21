// React
import React, { useEffect, useRef, useState } from "react";

// External Components
import { TimelineLite, Power3 } from "gsap";

// Images
import molbio from "../Img/Photo/MolBio.png";

// CSS
import styles from "../Style/Route/Classes.module.css";
import "../Style/Route/Classes.module.css";

const classesContent = [
  {
    name: "Molecular Biology",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
    imgPath: molbio,
    emoji: "🧪",
  },
  {
    name: "Molecular Biology",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
    imgPath: molbio,
    emoji: "🧪",
  },
  {
    name: "Molecular Biology",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
    imgPath: molbio,
    emoji: "🧪",
  },
  {
    name: "Molecular Biology",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
    imgPath: molbio,
    emoji: "🧪",
  },
];

const Classes = () => {

  const [mounted, setMounted] = useState(false);

  let cardRef = useRef(null);
  const tl = new TimelineLite();

  useEffect(() => {
    setMounted(true);
    tl.staggerTo([cardRef.children], 0.9, {
      opacity: 1,
      scale: 1,
      ease: Power3.easeIn,
      delay: 0.2
    }, 0.3);
  }, []);


  return (
    <main className={styles.classes} style={{ visibility: mounted ? 'visible' : 'hidden' }}>
      <div className={styles.classesContainer} ref={el => cardRef = el}>
        {classesContent.map((cl, idx) => {
          return (
            <div key={idx} className={styles.card}>
              <div className={styles.cardImgContainer}>
                <img src={cl.imgPath} alt="Class" className={styles.cardImg} />
              </div>
              <div className={styles.cardTextContainer}>
                <h3 className={styles.cardHeader}>
                  <span role="img" aria-label="mountain">
                    {cl.emoji}{" "}
                  </span>
                  {cl.name}
                </h3>
                <p className={styles.cardDescription}>{cl.description}</p>
                <button>
                  <span>
                    <span>Register</span>
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Classes;
