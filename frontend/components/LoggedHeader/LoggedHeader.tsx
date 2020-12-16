import React from "react"
import {
  CurrentPageTitle,
  CurrentPageWrapper,
  LoggedHeaderWrapper,
  UserAvatar,
  UserAvatarWrapper,
  UserName,
} from "./LoggedHeader.style"

interface LoggedHeaderProps {
  title: string
}

export const LoggedHeader: React.FC<LoggedHeaderProps> = ({ title }) => {
  return (
    <LoggedHeaderWrapper>
      <CurrentPageWrapper>
        <CurrentPageTitle>{title}</CurrentPageTitle>
      </CurrentPageWrapper>
      <UserAvatarWrapper>
        <UserName>Michal Matus</UserName>
        <UserAvatar src="/images/user-image-sample.png"></UserAvatar>
      </UserAvatarWrapper>
    </LoggedHeaderWrapper>
  )
}
