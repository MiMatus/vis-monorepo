import React from "react"
import { InputTag, InputTitle, InputWrapper } from "./Input.style"

interface InputProps {
  type: "text" | "number" | "date"
  title: string
  onChange?: (value: any) => void
  className?: string
  required?: boolean
}

export const Input: React.FC<InputProps> = ({
  title,
  type,
  className,
  onChange,
  required,
}) => {
  const handleChange = (event) => {
    onChange && onChange(event.target.value)
  }

  return (
    <InputWrapper className={className}>
      <InputTitle>{title}</InputTitle>
      <InputTag
        onChange={handleChange}
        type={type}
        error={false}
        required={required}
      ></InputTag>
    </InputWrapper>
  )
}
