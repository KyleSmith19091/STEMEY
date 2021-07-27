import React from 'react';

import { Radio as ChakraRadio } from "@chakra-ui/react";

const RadioDefaultStyle = {
	width: "30px",
	height: "30px"
}

const Radio = ({ value, children }) => {
	return (
		<ChakraRadio value={value} size="lg" sx={RadioDefaultStyle} colorScheme="purple">
			{children}
		</ChakraRadio>
	)
}

export default Radio
