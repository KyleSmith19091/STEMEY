import React from 'react'
import PropTypes from 'prop-types';

// Images 
import CloseIcon from "../Img/Icon/close_icon.svg";

// CSS
import "../Style/Component/Input.css";

const Input = ({ id, type, Icon, placeholder }) => {
    return (
        <div className="form-group">
            <input id={id} class="__input" type={type} />
            <span className="form-label">{placeholder}</span>
            <img className="__input-icon" src={Icon} alt="icon" />
            <img className="close-icon" src={CloseIcon} alt="close icon" />
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    Icon: PropTypes.any.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input
