// React
import React, { useState } from "react";
import PropTypes from "prop-types";

// External Components
import {
  Input,
  InputLeftElement,
  InputGroup,
  Textarea
} from "@chakra-ui/react";

// Internal Hooks
import { useScreenDimensions } from "../Hooks/useScreenDimensions";

// CSS
import "../Style/Component/TextInput.css";

const TextInput = ({ leftIcon, placeholder, type, multiline, value }) => {
  const [inputVariant, setInputVariant] = useState("filled");
  const { width } = useScreenDimensions();

  const onInputFocus = () => {
    setInputVariant("outline");
  };

  const onInputBlur = () => {
    setInputVariant("filled");
  };

  // const validStyle = {
  // 	backgroundColor: "#F2FFFB",
  // };

  // const errorStyle = {
  // 	border: "2px solid red",
  // 	backgroundColor: "red"
  // };

  const defaultTextAreaStyle = {
    padding: "1em",
    borderRadius: "1em",
  };

  const defaultInputStyle = {
    padding: "1.5em 2.5em",
    borderRadius: "1em",
  }

  if (multiline) {
    return (
      <Textarea
        className="input"
        placeholder={placeholder}
        variant={inputVariant}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        size={width > 768 ? "md" : "sm"}
        sx={defaultTextAreaStyle}
        _focus={{
          border: "2px solid black",
        }}
      />
    );
  } else {
    return (
      <InputGroup>
        <InputLeftElement
          sx={{ margin: width > 768 ? "0.4em" : "0.2em" }}
          children={leftIcon}
        />
        <Input
          className="input"
          value={value}
          onChange={(e) => value = e.target.value}
          type={type}
          placeholder={placeholder}
          variant={inputVariant}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          size={width > 768 ? "md" : "sm"}
          sx={defaultInputStyle}
          _focus={{
            border: "2px solid black",
          }}
        />
      </InputGroup>
    );

  }

};

TextInput.propTypes = {
  multiline: PropTypes.bool
}

TextInput.defaultProps = {
  multiline: false
}

export default TextInput;
