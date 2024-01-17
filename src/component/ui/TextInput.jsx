import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => props.height && `height: ${props.height}px`}
  padding: 16px;
  font-sioze: 16px;
  line-height: 20px;
`;

const TextInput = ({height, value, onChange}) => {
  return (
    <StyledTextarea
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;