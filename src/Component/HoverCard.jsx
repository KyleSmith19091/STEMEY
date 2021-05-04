import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Mouse from "../Model/HoverCardMouse";

const HoverCard = ({ bgColor, children }) => {

    var mouse = new Mouse();

    const containerRef = useRef();

    useEffect(() => {
        mouse.setOrigin(containerRef.current);
    });

    return (
        <div ref={containerRef} className="__container">
            <div className="__inner">
            </div>
        </div>
    );
};

HoverCard.propTypes = {
    bgColor: PropTypes.string.isRequired,
}

export default HoverCard
