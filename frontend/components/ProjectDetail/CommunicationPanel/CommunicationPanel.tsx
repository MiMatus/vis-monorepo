import React, { Component, useState } from "react"
import {
  CommunicationPanelWrapper,
  MessageWrapper,
  StyledToolbar,
} from "./CommunicationPanel.style"
import { NewOffer } from "./NewOffer"
import { NewReview } from "./NewReview"

interface CommunicationPanelProps {
  projectId: number
  className?: string
}

export const CommunicationPanel: React.FC<CommunicationPanelProps> = ({
  className,
  projectId,
}) => {
  const [currentAction, setCurrentAction] = useState<number | null>(null)

  const Actions = [
    <NewOffer
      projectId={projectId}
      key="0"
      onClose={() => setCurrentAction(null)}
    ></NewOffer>,
    <NewReview
      projectId={projectId}
      key="1"
      onClose={() => setCurrentAction(null)}
    ></NewReview>,
  ]

  return (
    <CommunicationPanelWrapper className={className}>
      <MessageWrapper>
        {currentAction !== null && Actions[currentAction]}
      </MessageWrapper>
      <StyledToolbar
        onOfferClick={() =>
          currentAction === 0 ? setCurrentAction(null) : setCurrentAction(0)
        }
        onReviewClick={() =>
          currentAction === 1 ? setCurrentAction(null) : setCurrentAction(1)
        }
      ></StyledToolbar>
    </CommunicationPanelWrapper>
  )
}
