import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import "../Style/Component/HoverCard.css";

import Mouse from "../Model/HoverCardMouse";

var mouse = null;
var containerRef = null;
var innerRef = null;
var counter = 0;
var updateRate = 10
var bgColorV = "";

const HoverCard = ({ bgColor, children }) => {

    mouse = new Mouse();
    containerRef = useRef();
    innerRef = useRef();

    useEffect(() => {
        bgColorV = bgColor;
        mouse.setOrigin(containerRef.current);
    });

    return (
        <div
            ref={containerRef}
            className="__container"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onMouseMove={onMouseMoveHandler}
        >
            <div
                ref={innerRef}
                className="__inner"
                style={{ bgColor }}
            >
                {children}
            </div>
        </div>
    );
};

HoverCard.propTypes = {
    bgColor: PropTypes.string.isRequired,
}

// ----------------------------------------------------------------

const onMouseEnterHandler = function (event) {
    update(event); // Update rotation of the element
};
const onMouseLeaveHandler = function () {
    innerRef.current.style = "";
    innerRef.current.style.backgroundColor = bgColorV;
};

const onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
        update(event);
    }
};

// ----------------------------------------------------------------

var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
        (mouse.y / innerRef.current.offsetHeight / 2).toFixed(2),
        (mouse.x / innerRef.current.offsetWidth / 2).toFixed(2)
    );
};

var updateTransformStyle = function (x, y) {
    var transformVal = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    innerRef.current.style.backgroundColor = bgColorV;
    innerRef.current.style.transform = transformVal;
    innerRef.current.style.webkitTransform = transformVal;
    innerRef.current.style.mozTransform = transformVal;
    innerRef.current.style.msTransform = transformVal;
    innerRef.current.style.oTransform = transformVal;
};

const isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
};

// ----------------------------------------------------------------


export default HoverCard
