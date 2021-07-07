// React
import React, { useState } from "react";

// Internal Components
import TimelineCard from "../Component/TimelineCard";
import ExpandedTimelineCard from "../Component/ExpandedTimelineCard";

// Hooks
import { useScrollSection } from "../Hooks/useScrollSection";

// Data
import { EventData } from "../Data/StemWorldData.js";

// CSS => Just reuse styles from StemWorld
import "../Style/Route/StemWorld.css";

const StemWorld = () => {
	const [open, setOpen] = useState(false);
	const [expandedCardContent, setExpandedCardContent] = useState(EventData[0]);
	const { scroll, sectionHeight } = useScrollSection(".stemworld");

	return (
		<section className="stemworld">
			<div className="timeline-container">
				{
					EventData.map((event, i) => {
						if (i === 0) {
						} else if (i === EventData.length - 1) {
						} else {
						}
					})
				}
			</div>
			<div className="expanded-card-container">
			</div>
		</section>
	);
};

export default StemWorld;
