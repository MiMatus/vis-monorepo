import React from "react"
import {
  IconWrapper,
  MenuIconWrapper,
  MenuLine,
  MenuText,
} from "./MenuIcon.style"

interface MenuIconProps {
  opened: boolean
  onClick: () => void
  className?: string
}

export const MenuIcon: React.FC<MenuIconProps> = ({
  className,
  onClick,
  opened,
}) => {
  return (
    <MenuIconWrapper className={className} onClick={onClick}>
      <MenuText>Menu</MenuText>
      <IconWrapper opened={opened}>
        <MenuLine />
        {!opened && <MenuLine />}
        <MenuLine />
      </IconWrapper>
    </MenuIconWrapper>
  )
}
