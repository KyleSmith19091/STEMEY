import React from 'react'

import Lottie from 'react-lottie';

const AnimPlayer = ({ options, data, width, height }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Lottie
            options={options === undefined ? defaultOptions : options}
            width={width}
            height={height}
        />
    )
}

export default AnimPlayer
