import styled from "styled-components"

interface MessageWrapperProps {
  type: "success" | "warning" | "error"
}

export const MessageWrapper = styled.div<MessageWrapperProps>`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.border.color};
  padding: ${({ theme }) => theme.padding.md};
  position: fixed;
  top: 90px;
  right: 0px;
  cursor: pointer;
  max-width: 90%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint["tablet"]}px) {
    right: 50px;
  }

  background: ${({ type, theme }) => {
    if (type === "success") {
      return theme.success.color
    } else if (type === "error") {
      return theme.error.color
    } else {
      return "#ff9f00"
    }
  }};
`
export const Text = styled.span`
  color: #fff;
  font-size: ${({ theme }) => theme.font.size};
`
