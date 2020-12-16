import styled from "styled-components"

export const ToolbarWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`

export const OfferIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`

export const AttachmentIcon = styled.img`
  height: 35px;
  width: 35px;
  margin-left: 20px;
  cursor: pointer;
`

export const StyledInput = styled.input`
  background: #f2f2f2;
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.border.color};
  outline: none;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.padding.sm};
  margin-left: 20px;
`
