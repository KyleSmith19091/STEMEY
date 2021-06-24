import { useState, useEffect } from 'react';

export const useScrollSection = (sectionClass) => {
	const [scroll, setScroll] = useState(0);
	const [sectionHeight, setSectionHeight] = useState(0);

	const handleScroll = () => {
		const totalScroll = window.pageYOffset || document.documentElement.scrollTop;
		const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const s = `${totalScroll / windowHeight}`;
		setScroll(s * 100);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		document.documentElement.style.setProperty('--card-height', document.querySelector(".timeline-card-expanded").clientHeight);
		setSectionHeight(document.querySelector(".stemworld").clientHeight / document.documentElement.scrollHeight * 100);
		return () => window.removeEventListener("scroll", handleScroll); // Same as component did unmount
	}, []);

	return {
		scroll: scroll, sectionHeight: sectionHeight
	}
}