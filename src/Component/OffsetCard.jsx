import React from "react";

//Component
import Button from './Button';

//Styles
import styles from '../Style/Component/OffsetCard.module.css'

const OffsetCard = (props) => {
  return (
    <div key={props.idx} className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={props.cl.imgPath} alt="Class" className={styles.cardImg} />
      </div>
      <div className={styles.cardTextContainer}>
        <h3 className={styles.cardHeader}>
          <span role="img" aria-label="mountain">
            {props.cl.emoji}{" "}
          </span>
          {props.cl.name}
        </h3>
        <p className={styles.cardDescription}>{props.cl.description}</p>
        <Button title="Register" />
      </div>
    </div>
  );
};

export default OffsetCard;
