import React, { useEffect, useState } from "react"
import Link from "next/link"

import {
  HeaderWrapper,
  LargeLogo,
  LogoWrapper,
  SmallLogo,
  StyledMenuIcon,
} from "./Header.style"

import { Menu } from "./Menu"

export const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  /* const handleScroll = () => {
    if (window.scrollY >= 200) {
      return
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])*/

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/">
          <LargeLogo src="/images/logo-large.png"></LargeLogo>
        </Link>
        <Link href="/">
          <SmallLogo src="/images/logo-small.png"></SmallLogo>
        </Link>
      </LogoWrapper>
      <StyledMenuIcon
        onClick={() => setMenuOpened(!menuOpened)}
        opened={menuOpened}
      ></StyledMenuIcon>
      {menuOpened && <Menu onClick={() => setMenuOpened(false)} />}
    </HeaderWrapper>
  )
}
