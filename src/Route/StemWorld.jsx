// React
import React, { useState } from "react";

// External Component
import { animateScroll as scroll, Element, Link } from "react-scroll";

// Internal Components
import EventTimeline from "../Component/EventTimeline";
import ExpandedTimelineCard from "../Component/ExpandedTimelineCard";

// Hooks
import { useScrollSection } from "../Hooks/useScrollSection";

// Data
import { EventData } from "../Data/StemWorldData.js";

// CSS
import "../Style/Route/StemWorld.css";

const StemWorld = () => {
  const [open, setOpen] = useState(true);
  const [expandedCardContent, setExpandedCardContent] = useState(EventData[0][0]);
  const { scroll, sectionHeight } = useScrollSection(".stemworld");

  // REMOVE THIS => Just experimenting with some colors //
  const colors = ["#F64C72", "#2F2FA2", "#FC4445"];

  return (
    <section className="stemworld">
      <h1 className="page-header"><span role="img" aria-labelledby="panda1">🌍</span> STEM World</h1>
      <div className="days-container">
        {EventData.map((day, i) => {
          return (
            <Link to={i} smooth={true}>
              <h2 style={{ color: colors[i % colors.length] }}>{"Day " + (i + 1)}</h2>
            </Link>
          )
        })}
      </div>
      <div className="event-container">
        {EventData.map((day, idx) => {
          return (
            <Element name={idx}>
              <EventTimeline
                key={idx}
                day={idx + 1}
                dayData={day}
                setOpen={setOpen}
                setExpandedCardContent={setExpandedCardContent}
                headerColor={colors[idx % colors.length]}
              />
            </Element>
            )
          })}
        </div>
      <div className="expanded-card-container">
        <ExpandedTimelineCard
          open={open}
          setOpen={setOpen}
          absolute={scroll >= sectionHeight ? true : false}
          content={expandedCardContent}
        />
      </div>
    </section>
  );
};

export default StemWorld;
