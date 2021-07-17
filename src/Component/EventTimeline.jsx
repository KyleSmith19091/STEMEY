import React from "react";

import TimelineCard from "../Component/TimelineCard";

import "../Style/Component/EventTimeline.css";

const EventTimeline = ({
  day,
  dayData,
  setOpen,
  setExpandedCardContent,
  headerColor,
}) => {
  const handleCardClick = (e) => {
    setOpen(true);
    setExpandedCardContent(dayData[e.currentTarget.id]);
  };

  return (
    <div className="timeline-container">
      <h1 className="timeline-header" style={{ color: headerColor }}>
        <span>► </span>
        {"Day " + day}
      </h1>
      {dayData.map((event, i) => {
        if (i === 0) {
          // First card in timeline
          return (
            <TimelineCard
              first
              onClick={handleCardClick}
              title={event.title}
              speaker={event.speaker}
              date={event.date}
              id={i}
              key={i}
            />
          );
        } else if (i === dayData.length - 1) {
          // Last card in timeline
          return (
            <TimelineCard
              last
              onClick={handleCardClick}
              title={event.title}
              speaker={event.speaker}
              date={event.date}
              id={i}
              key={i}
            />
          );
        } else {
          // Other cards
          return (
            <TimelineCard
              onClick={handleCardClick}
              title={event.title}
              speaker={event.speaker}
              date={event.date}
              id={i}
              key={i}
            />
          );
        }
      })}
    </div>
  );
};

export default EventTimeline;
