import styled, { css } from "styled-components"

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 50px;
`

interface TextAreaProps {
  error: boolean
}

export const StyledTextArea = styled.textarea<TextAreaProps>`
  box-shadow: 0px 4px 4px rgba(205, 205, 205, 0.25);
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.border.color};
  outline: none;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.padding.sm};
  resize: none;

  ${({ error }) =>
    error
      ? css`
          border: 1px solid red;
        `
      : ""}
`

export const StyledOption = styled.option``

export const TextAreaTitle = styled.span`
  background: #fff;
  position: absolute;
  font-weight: 500;
  font-size: 16px;
  top: -8px;
  left: 25px;
`
