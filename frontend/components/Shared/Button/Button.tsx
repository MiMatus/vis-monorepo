import React from "react"
import { ButtonTag } from "./Button.style"

interface ButtonProps {
  type?: "cancel"
  children?: string
  className?: string
  onClick?: () => void
  htmlType?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  onClick,
  htmlType,
}) => {
  return (
    <ButtonTag
      onClick={onClick}
      className={className}
      styleType={type}
      type={htmlType}
    >
      {children}
    </ButtonTag>
  )
}
