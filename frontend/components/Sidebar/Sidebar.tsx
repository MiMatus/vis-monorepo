import React from "react"
import {
  AllProjectsIcon,
  LogoSmall,
  LogoWrapper,
  MainIconsWrapper,
  MenuOptionsWrapper,
  MyProjectsIcon,
  NewProjectIcon,
  NewProjectWrapper,
  ReviewsIcon,
  SettingsIcon,
  SettingsWrapper,
  TransactionsIcon,
  Wrapper,
} from "./Sidebar.style"
import NextLink from "next/link"

export const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <MainIconsWrapper>
        <NextLink href="/">
          <LogoWrapper>
            <LogoSmall src="/images/logo-small.png"></LogoSmall>
          </LogoWrapper>
        </NextLink>
        <NewProjectWrapper>
          <NextLink href="/novy-projekt">
            <NewProjectIcon src="/images/new-project-icon-active.svg"></NewProjectIcon>
          </NextLink>
        </NewProjectWrapper>
        <MenuOptionsWrapper>
          <NextLink href="/projekt">
            <MyProjectsIcon src="/images/my-project-icon.svg"></MyProjectsIcon>
          </NextLink>
          <TransactionsIcon src="/images/money-icon.svg"></TransactionsIcon>
          <AllProjectsIcon src="/images/projects-icon.svg"></AllProjectsIcon>
          <ReviewsIcon src="/images/reviews-icon.svg"></ReviewsIcon>
        </MenuOptionsWrapper>
      </MainIconsWrapper>
      <SettingsWrapper>
        <SettingsIcon src="/images/settings-icon.svg"></SettingsIcon>
      </SettingsWrapper>
    </Wrapper>
  )
}
