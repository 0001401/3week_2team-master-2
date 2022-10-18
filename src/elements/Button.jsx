import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text } = props;
  console.log(props.inline);
  return <Btn {...props}>{text}</Btn>;
};

Button.defaultProps = {
  bgColor: "none",
  width: "",
  height: "",
  onClick: () => {},
  text: "",
  inline: "",
  border: "none",
};

const Btn = styled.button`
  background: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  ${(props) => props.inline};
`;

export default Button;
