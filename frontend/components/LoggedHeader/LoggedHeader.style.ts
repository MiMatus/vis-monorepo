import styled from "styled-components"

export const LoggedHeaderWrapper = styled.div`
  display: flex;
  height: 45px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid #c2c2c2;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
`

export const CurrentPageWrapper = styled.div`
  display: flex;
  align-items: center;

  &::before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    background: #ff9f00;
    border-radius: 50%;
    margin-right: 15px;
  }
`

export const CurrentPageTitle = styled.h1`
  font-weight: 900;
  font-size: 20px;
  margin: 0px;
`

export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const UserName = styled.span`
  font-weight: 900;
  font-size: 16px;
`

export const UserAvatar = styled.img`
  margin-left: 15px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`
