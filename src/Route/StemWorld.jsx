// React
import React, { useState, useEffect } from "react";

// External Components
import { AspectRatio } from "@chakra-ui/react";

// Internal Components
import TimelineCard from "../Component/TimelineCard";

// CSS
import "../Style/Route/StemWorld.css";

import { ReactComponent as Profile } from "../Img/Icon/Profile.svg";
import { ReactComponent as Calendar } from "../Img/Icon/Calendar.svg";

// Temp Resources
import elyssa from "../Img/Photo/elyssa_wolter.png";
import timelineImage from "../Img/Photo/timelineImage.jpg";

// TODO: Create expanded timeline card component, Render all expanded cards and make them visible when clicked?

/*

Expanded Card state object
{
    open: false | true,
    title: "",
    speaker-name: "",
    date: "",
    timeline-image: "",
    description: "",
    video-container: "",
}

*/

const StemWorld = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalScroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    setScroll(scroll * 100);
    console.log(scroll * 100);
    console.log(totalScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Same as component did unmount
  }, []);

  return (
    <section className="stemworld" onScroll={handleScroll}>
      <div className="timeline-container">
        <TimelineCard
          first
          onClick={(e) => {
            setOpen(true);
          }}
          title="How does one make money?"
          speaker="Bill Gates"
          date="2020-02-12"
        />
        <TimelineCard
          onClick={(e) => {
            setOpen(true);
          }}
          title="How does one make money?"
          speaker="Bill Gates"
          date="2020-02-12"
        />
        <TimelineCard
          onClick={(e) => {
            setOpen(true);
          }}
          title="How does one make money?"
          speaker="Bill Gates"
          date="2020-02-12"
        />
        <TimelineCard
          onClick={(e) => {
            setOpen(true);
          }}
          title="How does one make money?"
          speaker="Bill Gates"
          date="2020-02-12"
        />
        <TimelineCard
          onClick={(e) => {
            setOpen(true);
          }}
          title="How does one make money?"
          speaker="Bill Gates"
          date="2020-02-12"
        />
        <TimelineCard
          onClick={(e) => {
            setOpen(true);
          }}
          last
          title="How does one make money?"
          speaker="Bill Gates"
          date="2020-02-12"
        />
      </div>
      <div className="expanded-card-container">
        <div
          className={scroll < 58 ? "timeline-card-expanded" : "timeline-card-expanded absolute"}
          style={{ display: open ? "flex" : "none" }}
          onClick={(e) => {
            setOpen(!open);
          }}
        >
          <div className="card-header">
            <div className="overlapped-images">
              <img src={timelineImage} alt="Event" />
              <img src={elyssa} alt="Speaker" />
            </div>
            <div className="text-container">
              <h2>The Origins of the Universe</h2>
            </div>
          </div>
          <div className="info-container">
            <p>
              <span>
                <Profile />
              </span>
              speaker
            </p>
            <p>
              <span>
                <Calendar />
              </span>
              date
            </p>
          </div>
          <div className="description-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rem exercitationem tenetur.
              Consequatur nemo hic aperiam voluptas sequi fugiat omnis repudiandae reiciendis saepe, nobis asperiores
              ipsa laboriosam dolor laudantium dolore.
            </p>
          </div>
          <div className="video-container">
            <AspectRatio ratio={16 / 9}>
              <iframe title="naruto" src="https://www.youtube.com/embed/DlKBSvQfM1c" allowFullScreen />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemWorld;
