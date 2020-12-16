import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row-reverse;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1 0 auto;
  height: 100%;
  width: calc(100% - 60px);
`

export const MainContent = styled.main`
  flex: 1 1 auto;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px;
  overflow-y: auto;
`
