import Head from "next/head"
import React from "react"
import { LoggedHeader } from "../LoggedHeader"
import { Sidebar } from "../Sidebar"
import { Column, LayoutWrapper, MainContent } from "./LoggedLayout.style"

interface LoggedLayoutProps {
  title: string
}

export const LoggedLayout: React.FC<LoggedLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title key="title">SkillShare</title>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutWrapper>
        <Column>
          <MainContent>{children}</MainContent>
          <LoggedHeader title={title}></LoggedHeader>
        </Column>
        <Sidebar></Sidebar>
      </LayoutWrapper>
    </>
  )
}
