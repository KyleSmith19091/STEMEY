import React from 'react';
import PropTypes from "prop-types";

// External Components
import { AspectRatio } from "@chakra-ui/react";

// Icons
import { ReactComponent as Profile } from "../Img/Icon/Profile.svg";
import { ReactComponent as Calendar } from "../Img/Icon/Calendar.svg";

// CSS
import "../Style/Component/ExpandedTimelineCard.css";

const ExpandedTimelineCard = ({ open, setOpen, absolute, content }) => {
	return (
		<div
			className={!absolute ? "timeline-card-expanded" : "timeline-card-expanded absolute"}
			style={{ display: open ? "flex" : "none" }}
			onClick={(e) => {
				setOpen(!open);
			}}
		>
			<div className="card-header">
				<div className="overlapped-images">
					<img src={content.eventImage} alt="Event" />
					<img src={content.speakerImage} alt="Speaker" />
				</div>
				<div className="text-container">
					<h2>{content.title}</h2>
				</div>
			</div>
			<div className="info-container">
				<p>
					<span>
						<Profile />
					</span>
					{content.speaker}
				</p>
				<p>
					<span>
						<Calendar />
					</span>
					{content.date}
				</p>
			</div>
			<div className="description-container">
				<p>
					{content.description}
				</p>
			</div>
			<div className="video-container">
				<AspectRatio ratio={16 / 9}>
					<iframe title="naruto" src={`https://www.youtube.com/embed/${content.videoID}`} allowFullScreen />
				</AspectRatio>
			</div>
		</div>
	)
}

ExpandedTimelineCard.propTypes = {
	open: PropTypes.bool.isRequired,
	absolute: PropTypes.bool.isRequired
}

export default ExpandedTimelineCard
