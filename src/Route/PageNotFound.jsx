// React
import React from "react";

// Internal Components
import HoverCard from "../Component/HoverCard";
import AnimPlayer from "../Component/AnimPlayer";

// Images
import animationData from "../Img/animation/astronaout.json";

// CSS
import styles from "../Style/Route/PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <main className={styles.pageNotFound}>
      <section className={styles.pageNotFoundContent}>
        <h1>Woops Page Not Found!</h1>
        <h3>
          Might as well check this guy out{" "}
          <span role="img" aria-label="hand-down">
            👇
          </span>
        </h3>
        <div className={styles.animError}>
          <HoverCard>
            <AnimPlayer data={animationData} width="40vw" height="40vw" />
          </HoverCard>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
