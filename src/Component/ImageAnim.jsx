import React from 'react'
import PropTypes from 'prop-types';

const ImageAnim = ({ width, height, src }) => {
	return (
		<div className="image-container">

		</div>
	)
}

ImageAnim.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired
}

export default ImageAnim