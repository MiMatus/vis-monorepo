import React from "react"
import {
  Icon,
  MainWrapper,
  MenuItem,
  MenuList,
  MenuTitle,
  MenuWrapper,
  SubItem,
  SubItemsWrapper,
  Text,
} from "./Menu.style"
import Link from "next/link"

interface MenuProps {
  onClick: () => void
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ onClick, className }) => {
  return (
    <MenuWrapper className={className}>
      <MenuTitle>Menu</MenuTitle>
      <MenuList>
        <Link href="/novy-projekt">
          <MenuItem onClick={onClick}>
            <MainWrapper>
              <Icon src="/images/new-project-icon-active.svg"></Icon>
              <Text>Nový projekt</Text>
            </MainWrapper>
            {/* <SubItemsWrapper>
              <Link href="/grafy/pocet-testov">
                <SubItem onClick={onClick}>Počet testov</SubItem>
              </Link>
              <Link href="/grafy/nakazeny-podla-krajov">
                <SubItem onClick={onClick}>
                  Počet nakazených podľa krajov
                </SubItem>
              </Link>
              <Link href="/grafy/celkovy">
                <SubItem onClick={onClick}>Celkovy</SubItem>
              </Link>
            </SubItemsWrapper>*/}
          </MenuItem>
        </Link>
      </MenuList>
    </MenuWrapper>
  )
}
