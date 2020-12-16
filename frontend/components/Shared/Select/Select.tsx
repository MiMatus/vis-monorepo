import React from "react"
import {
  SelectTitle,
  SelectWrapper,
  StyledOption,
  StyledSelect,
} from "./Select.style"

interface SelectProps {
  title: string
  options: {
    label: string
    value: any
  }[]
  className?: string
  onChange?: (value: any) => void
  required?: boolean
}

export const Select: React.FC<SelectProps> = ({
  title,
  className,
  options,
  onChange,
  required,
}) => {
  const handleChange = (event) => onChange && onChange(event.target.value)
  return (
    <SelectWrapper className={className}>
      <SelectTitle>{title}</SelectTitle>
      <StyledSelect error={false} onChange={handleChange} required={required}>
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </SelectWrapper>
  )
}
