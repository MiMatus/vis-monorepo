import styled from "styled-components"

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ListItem = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  flex-direction: column;
  cursor: pointer;
  margin: 10px;
`

export const ProjectIcon = styled.img`
  width: 150px;
  height: 150px;
`

export const ListItemTitle = styled.h2`
  font-weight: 900;
  font-size: 20px;
  margin: 0px;
`
