import React, { useState } from 'react'

import { Stack } from "@chakra-ui/react"

import FormTextInput from "../Component/FormTextInput";
import RadioGroup from "../Component/RadioGroup";
import Radio from "../Component/Radio";

import { ReactComponent as Email } from "../Img/Icon/email_icon.svg";

import "../Style/Route/Form.css";

const Form = () => {
	return (
		<div>
			<Stack spacing={3} padding="1em">
				<FormTextInput id="name" leftIcon={<Email />} placeholder="Enter your name" type="text" label="First Name" />
				<FormTextInput id="surname" leftIcon={<Email />} placeholder="Enter your name" type="text" label="Surname" />
				<FormTextInput id="experience" placeholder="Any Past Experience?" type="text" label="Past Experience" multiline />
				<RadioGroup defaultValue="2" direction="column">
					<Radio value="1">First</Radio>
					<Radio value="2">Second</Radio>
					<Radio value="3">Third</Radio>
				</RadioGroup>
			</Stack>
		</div>
	)
}

export default Form
