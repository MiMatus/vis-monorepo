import React from "react"
import {
  StyledTextArea,
  TextAreaTitle,
  TextAreaWrapper,
} from "./TextArea.style"

interface TextAreaProps {
  title: string
  className?: string
  onChange?: (value: any) => void
  required?: boolean
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  title,
  onChange,
  required,
}) => {
  const handleChange = (event) => onChange && onChange(event.target.value)

  return (
    <TextAreaWrapper className={className}>
      <TextAreaTitle>{title}</TextAreaTitle>
      <StyledTextArea
        onChange={handleChange}
        error={false}
        required={required}
      ></StyledTextArea>
    </TextAreaWrapper>
  )
}
