import React from "react";

import styles from "../Style/Route/Tutoring.module.css";

const Tutoring = () => {
  return (
    <main>
      <h1 className={styles.centerText}>Tutoring</h1>
      <iframe
        className="form"
        title="Tutoring Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScqG5-L8qjwcM_JkKjC7N2VpzNuzQ1pBw_fpY2bjq2P1zfg3Q/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </main>
  );
};

export default Tutoring;
