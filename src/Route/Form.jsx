import React, { useState } from 'react'

import { Input, Stack, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react"

import { ReactComponent as Close } from "../Img/Icon/close_icon.svg";
import { ReactComponent as Email } from "../Img/Icon/email_icon.svg";

import "../Style/Route/Form.css";

const Form = () => {
	const [inputVariant, setInputVariant] = useState("filled");

	const onInputFocus = () => {
		setInputVariant("outline");
	};

	const onInputBlur = () => {
		setInputVariant("filled");
	};

	return (
		<div>
			<Stack spacing={3} padding="1em">
				<FormControl id="first-name" isRequired>
					<FormLabel sx={{ paddingLeft: "1em" }}>First name</FormLabel>
					<InputGroup>
						<InputLeftElement sx={{ margin: "0.4em" }} children={<Email />} />
						<Input
							className="input"
							type="email"
							placeholder="Enter your email"
							variant={inputVariant}
							onFocus={onInputFocus}
							onBlur={onInputBlur}
							sx={{
								padding: "1.5em 2.5em",
								borderRadius: "1em"
							}}
							_focus={{
								border: "2px solid black"
							}}
						/>
						<InputRightElement sx={{ margin: "0.4em" }} children={<Close />} />
					</InputGroup>
				</FormControl>
			</Stack>
		</div>
	)
}

export default Form
