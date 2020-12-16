import styled from "styled-components"

export const Wrapper = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-right: 1px solid #c2c2c2;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px 30px 0px;
  justify-content: space-between;
`

export const MainIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoWrapper = styled.div``

export const LogoSmall = styled.img`
  height: 47;
  width: 44px;
  cursor: pointer;
`

export const NewProjectWrapper = styled.div`
  margin-top: 40px;
`

export const NewProjectIcon = styled.img`
  height: 45px;
  width: 45px;
  cursor: pointer;
`

const OptionIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`
export const MenuOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  ${OptionIcon} {
    margin-top: 10px;
  }
`

export const MyProjectsIcon = styled(OptionIcon)``
export const TransactionsIcon = styled(OptionIcon)``
export const AllProjectsIcon = styled(OptionIcon)``
export const ReviewsIcon = styled(OptionIcon)``

export const SettingsWrapper = styled.div``
export const SettingsIcon = styled(OptionIcon)``
