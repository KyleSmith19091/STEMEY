// React
import React, { useState, useRef } from 'react'

// External Components
import { Input, InputLeftElement, InputRightElement, InputGroup } from "@chakra-ui/react"

// Internal Hooks
import { useScreenDimensions } from '../Hooks/useScreenDimensions';

// Icons
import { ReactComponent as Close } from "../Img/Icon/close_icon.svg";

// CSS
import "../Style/Component/TextInput.css";

const TextInput = ({ leftIcon, placeholder, type, valid, onChange }) => {
	const [inputVariant, setInputVariant] = useState("filled");
	const [showCloseIcon, setShowCloseIcon] = useState(false);
	const { width } = useScreenDimensions();

	let input = useRef(null);

	const onInputFocus = () => {
		setInputVariant("outline");
		setShowCloseIcon(true);
	};

	const onInputBlur = () => {
		setInputVariant("filled");
		setShowCloseIcon(false);
	};

	const onCloseClick = () => {
		console.log("YES!");
		input.current.value = "";
	}

	// const validStyle = {
	// 	backgroundColor: "#F2FFFB",
	// };

	// const errorStyle = {
	// 	border: "2px solid red",
	// 	backgroundColor: "red"
	// };

	const defaultStyle = {
		padding: "1.5em 2.5em",
		borderRadius: "1em"
	};

	return (
		<InputGroup>
			<InputLeftElement sx={{ margin: width > 768 ? "0.4em" : "0.2em" }} children={leftIcon} />
			<Input
				className="input"
				ref={el => input = el}
				type={type}
				placeholder={placeholder}
				variant={inputVariant}
				onFocus={onInputFocus}
				onBlur={onInputBlur}
				size={width > 768 ? "md" : "sm"}
				onChange={onChange}
				sx={
					defaultStyle
				}
				_focus={{
					border: "2px solid black"
				}}
			/>
			{showCloseIcon && <InputRightElement onFocus={onCloseClick} sx={{ margin: width > 768 ? "0.4em" : "0.2em", cursor: "pointer" }} children={<Close />} />}
		</InputGroup>
	)
}

export default TextInput;
