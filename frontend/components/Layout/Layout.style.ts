import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const MainContent = styled.main`
  flex: 1 0 auto;
  display: flex;

  & > * {
    flex: 1 0 auto;
    max-width: 100%;
  }
`

export const Footer = styled.footer`
  height: 50px;
  background: #ffffff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.25);
  z-index: 100;
  flex: 0 0 auto;
`
