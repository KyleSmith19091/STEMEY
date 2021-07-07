import React from "react";

//Component
import Button from './Button';

//Styles
import styles from '../Style/Component/OffsetCard.module.css'

const OffsetCard = ({idx, imgPath, emoji, name, description}) => {
  return (
    <div key={idx} className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={imgPath} alt="Class" className={styles.cardImg} />
      </div>
      <div className={styles.cardTextContainer}>
        <h3 className={styles.cardHeader}>
          <span role="img" aria-label="mountain">
            {emoji}{" "}
          </span>
          {name}
        </h3>
        <p className={styles.cardDescription}>{description}</p>
        <Button title="Register" />
      </div>
    </div>
  );
};

export default OffsetCard;
