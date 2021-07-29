import React from "react";

import MemberCard from "../Component/MemberCard";

import Profile from "../Img/Photo/elyssa_wolter.png";

import "../Style/Route/MeetOurTeam.css";

const MeetOurTeam = () => {
  return (
    <div className="grid-container team-grid">
      <MemberCard
        name="John Smith"
        position="CEO"
        para="lorem ipsum, Faster than fast, quicker than quick. I am Lightning. That was the opening line of the movie cars BTW. woah lit lit ⚡️🔥"
        image={Profile}
      />

      <MemberCard
        name="Mary Jane"
        position="CFO"
        para="Navaneet Kadaba is a freshman studying Computer Science at Georgia Institute of Technology. He is orginally from the Bay Area and graduated from Homestead High School. He is the CTO of STEMEY."
        image={Profile}
      />

      <MemberCard
        name="John Smith"
        position="CEO"
        para="lorem ipsum, Faster than fast, quicker than quick. I am Lightning. That was the opening line of the movie cars BTW. woah lit lit ⚡️🔥"
        image={Profile}
      />

      <MemberCard
        name="Mary Jane"
        position="CFO"
        para="Navaneet Kadaba is a freshman studying Computer Science at Georgia Institute of Technology. He is orginally from the Bay Area and graduated from Homestead High School. He is the CTO of STEMEY."
        image={Profile}
      />

      <MemberCard
        name="John Smith"
        position="CEO"
        para="lorem ipsum, Faster than fast, quicker than quick. I am Lightning. That was the opening line of the movie cars BTW. woah lit lit ⚡️🔥"
        image={Profile}
      />

      <MemberCard
        name="Mary Jane"
        position="CFO"
        para="Navaneet Kadaba is a freshman studying Computer Science at Georgia Institute of Technology. He is orginally from the Bay Area and graduated from Homestead High School. He is the CTO of STEMEY."
        image={Profile}
      />

      <MemberCard
        name="John Smith"
        position="CEO"
        para="lorem ipsum, Faster than fast, quicker than quick. I am Lightning. That was the opening line of the movie cars BTW. woah lit lit ⚡️🔥"
        image={Profile}
      />

      <MemberCard
        name="Mary Jane"
        position="CFO"
        para="Navaneet Kadaba is a freshman studying Computer Science at Georgia Institute of Technology. He is orginally from the Bay Area and graduated from Homestead High School. He is the CTO of STEMEY."
        image={Profile}
      />

    </div>
  );
};

export default MeetOurTeam;
