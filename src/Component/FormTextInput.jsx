import React from 'react';

import { FormControl, FormLabel } from "@chakra-ui/react";

import TextInput from "./TextInput";

const FormTextInput = ({ id, leftIcon, placeholder, type, label, multiline }) => {
	return (
		<FormControl id={id} isRequired>
			<FormLabel sx={{ paddingLeft: "1em" }}>{label}</FormLabel>
			<TextInput leftIcon={leftIcon} placeholder={placeholder} type={type} multiline={multiline} />
		</FormControl>
	)
}

FormTextInput.defaultProps = {
	multiline: false
}

export default FormTextInput
