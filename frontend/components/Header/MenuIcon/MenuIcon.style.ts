import styled, { css } from "styled-components"

export const MenuText = styled.span`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 25px;
`

export const MenuLine = styled.div`
  height: 2px;
  background: #000000;
  width: 100%;
  transition: all 0.2s;
`

interface IconWrapperProps {
  opened: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: column;
  width: 25px;
  height: 35px;
  position: relative;

  ${({ opened }) =>
    opened
      ? css`
          &&& > ${MenuLine} {
            width: 100%;
            position: absolute;
            transform: rotate(45deg);
          }

          &&& > ${MenuLine}:last-child {
            transform: rotate(-45deg);
          }
        `
      : ""}
`

export const MenuIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${MenuText} {
    margin-right: ${({ theme }) => theme.margin.md};
  }
`
