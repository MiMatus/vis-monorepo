import React from "react"
import {
  AttachmentIcon,
  OfferIcon,
  StyledInput,
  ToolbarWrapper,
} from "./Toolbar.style"

interface ToolbarProps {
  onOfferClick: () => void
  onReviewClick: () => void
  className?: string
}

export const Toolbar: React.FC<ToolbarProps> = ({
  className,
  onOfferClick,
  onReviewClick,
}) => {
  return (
    <ToolbarWrapper className={className}>
      <OfferIcon
        onClick={onOfferClick}
        src="/images/offer-icon.svg"
      ></OfferIcon>
      <AttachmentIcon
        onClick={onReviewClick}
        src="/images/attachment-icon.svg"
      ></AttachmentIcon>
      <StyledInput placeholder="Napíšte správu"></StyledInput>
    </ToolbarWrapper>
  )
}
