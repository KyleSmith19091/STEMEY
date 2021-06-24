// React
import React, { useState } from "react";

// Internal Components
import TimelineCard from "../Component/TimelineCard";
import ExpandedTimelineCard from "../Component/ExpandedTimelineCard";

// Hooks
import { useScrollSection } from "../Hooks/useScrollSection";

// Data
import { EventData } from "../Data/StemWorldData.js";

// CSS
import "../Style/Route/StemWorld.css";

const StemWorld = () => {
  const [open, setOpen] = useState(true);
  const [expandedCardContent, setExpandedCardContent] = useState(EventData[0]);
  const { scroll, sectionHeight } = useScrollSection(".stemworld");

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
          absolute={scroll >= sectionHeight ? true : false}
          content={expandedCardContent}
        />
      </div>
    </section>
  );
};

export default StemWorld;
