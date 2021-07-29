import React from "react";

import styles from "../Style/Component/MeetOurTeam.module.css";

const MemberCard = ({ para, name, position, image }) => {
  return (
    <div className={styles.meetOurTeamCard}>
      <div className={styles.meetOurTeamCardInner}>
        <div className={styles.meetOurTeamCardFront}>
          <img className={styles.memberPhoto} src={image} alt="member photo" />
          <div className={styles.title}>{name}</div>
        </div>
        <div class={styles.meetOurTeamCardBack}>
          <h1 className={styles.title}>{position}</h1>
          <p>{para}</p>
          <h1 className={styles.title}>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
