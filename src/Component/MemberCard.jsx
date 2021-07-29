import React from "react";

import "../Style/Component/MeetOurTeam.css";

const MemberCard = ({ para, name, position, image }) => {
  return (
    <div className="meetOurTeamCard">
      <div className="meetOurTeamCardInner">
        <div className="meetOurTeamCardFront">
          <img className="memberPhoto" src={image} alt="member photo" />
          <div className="member-title">{name}</div>
        </div>
        <div class="meetOurTeamCardBack">
          <h1 className="member-title">{position}</h1>
          <p>{para}</p>
          <h1 className="member-title">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
