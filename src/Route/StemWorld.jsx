// React
import React, { useState, useEffect, useRef } from "react";

// Internal Components
import TimelineCard from "../Component/TimelineCard";
import ExpandedTimelineCard from "../Component/ExpandedTimelineCard";

// CSS
import "../Style/Route/StemWorld.css";

// Data
import { EventData } from "../Data/StemWorldData.js";

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
  const [open, setOpen] = useState(true);
  const [expandedCardContent, setExpandedCardContent] = useState(EventData[0]);
  const [scroll, setScroll] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.documentElement.style.setProperty('--card-height', document.querySelector(".timeline-card-expanded").clientHeight);
    console.log(document.querySelector(".timeline-card-expanded").clientHeight);
    setSectionHeight(document.querySelector(".stemworld").clientHeight / document.documentElement.scrollHeight * 100);
    return () => window.removeEventListener("scroll", handleScroll); // Same as component did unmount
  }, []);

  const handleScroll = () => {
    const totalScroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    setScroll(scroll * 100);
  };

  return (
    <section className="stemworld">
      <div className="timeline-container">
        {
          EventData.map((event, i) => {
            if (i === 0) {
              return (<TimelineCard
                first
                onClick={(e) => {
                  setOpen(true);
                  setExpandedCardContent(EventData[e.currentTarget.id]);
                }}
                title={event.title}
                speaker={event.speaker}
                date={event.date}
                id={i}
                key={i}
              />)
            } else if (i === EventData.length - 1) {
              return (<TimelineCard
                last
                onClick={(e) => {
                  setOpen(true);
                  setExpandedCardContent(EventData[e.currentTarget.id]);
                }}
                title={event.title}
                speaker={event.speaker}
                date={event.date}
                id={i}
                key={i}
              />)
            } else {
              return (<TimelineCard
                onClick={(e) => {
                  setOpen(true);
                  setExpandedCardContent(EventData[e.currentTarget.id]);
                }}
                title={event.title}
                speaker={event.speaker}
                date={event.date}
                id={i}
                key={i}
              />)
            }
          })
        }
      </div>
      <div className="expanded-card-container">
        <ExpandedTimelineCard
          open={open}
          setOpen={setOpen}
          absolute={scroll > sectionHeight ? true : false}
          content={expandedCardContent}
        />
      </div>
    </section>
  );
};

export default StemWorld;
