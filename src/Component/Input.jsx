import React, { useState } from 'react'
import PropTypes from 'prop-types';

import "../Style/Component/Input.css";

const Input = (props) => {

    const onInputChange = (event) => {
        setError(''); // Reset the error message once the user changes input
    };

    return (
        <div className={fieldClassName}>
            <input
                id={props.id}
                type="text"
                value={props.value}
                placeholder={props.label}
                onChange={onInputChange}
                onFocus={() => !locked && setFocused(true)}
                onBlur={() => !locked && setFocused(false)}
            />
            <label htmlFor={props.id} className={error && 'error'}>
                {error || props.label}
            </label>
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    focussed: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    locked: false,
    focussed: false,
    value: '',
    error: '',
    label: '',
    onChange: () => '',
};

export default Input
