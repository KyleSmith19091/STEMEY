import React from 'react'

import { RadioGroup as ChakraRadioGroup, Stack } from "@chakra-ui/react"

const RadioGroup = ({ defaultValue, children, direction }) => {
	return (
		<ChakraRadioGroup defaultValue={defaultValue} padding={3}>
			<Stack direction={direction}>
				{children}
			</Stack>
		</ChakraRadioGroup>
	);
}

export default RadioGroup
