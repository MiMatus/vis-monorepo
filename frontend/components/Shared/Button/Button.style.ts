import styled from "styled-components"

interface ButtonTagProps {
  styleType?: "cancel"
}

export const ButtonTag = styled.button<ButtonTagProps>`
  width: 250px;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);
  border-radius: 10px;
  outline: none;
  background: ${({ styleType }) =>
    styleType === "cancel" ? "#000" : "#7cb305"};
  color: #fff;
  border: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`
