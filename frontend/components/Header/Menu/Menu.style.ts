import styled from "styled-components"

export const MenuWrapper = styled.div`
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 95px;
  left: 0px;
  z-index: -1;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.padding.md};
  color: #fff;
`

export const MenuTitle = styled.div`
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  border-bottom: 1px solid #fff;
  padding-bottom: ${({ theme }) => theme.padding.sm};
  font-size: ${({ theme }) => theme.font.size.md};
`

export const MenuList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.margin.md};
`

export const Icon = styled.img`
  height: 35px;
  width: 35px;
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: bold;
  margin-left: ${({ theme }) => theme.margin.sm};
`

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const SubItemsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.sm};
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`

export const SubItem = styled.div`
  margin-top: ${({ theme }) => theme.margin.sm};
  cursor: pointer;
`
