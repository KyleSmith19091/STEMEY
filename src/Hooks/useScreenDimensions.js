import { useState, useEffect } from 'react';

export const useScreenDimensions = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const handleResize = (e) => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => { window.removeEventListener('resize', handleResize); };
	}, []);

	return {
		width: width, height: height
	}
};