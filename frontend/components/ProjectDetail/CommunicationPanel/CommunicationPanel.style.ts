import styled from "styled-components"
import { Toolbar } from "./Toolbar"

export const CommunicationPanelWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const MessageWrapper = styled.div`
  flex: 1 2 auto;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px;
`

export const StyledToolbar = styled(Toolbar)`
  flex: 0 0 auto;
`
