import React from 'react';
import PropTypes from 'prop-types';

const WaveSection = ({ isLeft }) => {
    if (isLeft) { // Assuming left wave form to be rendered
        return (
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={svgStyling}>
                <path d="M0.00,49.98 C105.80,-39.95 316.87,162.33 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={pathStyling}></path>
            </svg>
        );
    } else { // Assuming right wave form to be rendered
        return (
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={svgStyling}>
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={pathStyling}></path>
            </svg>
        );
    }
};

const svgStyling = {
    marginBottom: "-0.5em", // Prevent weird gap between svg and div container below it
    height: "100%",
    width: "120%"
}

const pathStyling = {
    fill: "#8860d0", // Primary purple color
    stroke: "none"
}

WaveSection.propTypes = {
    isLeft: PropTypes.bool
}

export default WaveSection;