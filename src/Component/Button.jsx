// React
import React from 'react'
import PropTypes from 'prop-types';

// CSS
import "../Style/Component/Button.css";

const Button = ({ text, size, onClick, onHover }) => {
    return (
        <div>
            <button onClick={onClick} onHover={onHover} className={"button " + size}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func,
};

Button.defaultProps = {

}

export default Button
