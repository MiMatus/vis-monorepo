import React, { useState } from "react"
import {
  AddOfferResult,
  useAddOfferMutation,
} from "../../../../graphql/generated/graphql"
import { Message } from "../../../Shared/Message"
import {
  CompletionDateInput,
  NewOfferInputsWrapper,
  NewOfferTitle,
  NewOfferWrapper,
  PriceInput,
  SendButton,
} from "./NewOffer.style"

interface NewOfferProps {
  projectId: number
  onClose: () => void
  className?: string
}

export const NewOffer: React.FC<NewOfferProps> = ({
  className,
  projectId,
  onClose,
}) => {
  const [price, setPrice] = useState<number | null>(null)
  const [completionDate, setCompletionDate] = useState<Date>(null)

  const [
    addOfferMutation,
    { data, loading, error, called },
  ] = useAddOfferMutation({})

  const handleSubmit = (event) => {
    event.preventDefault()
    if (called) {
      return
    }
    addOfferMutation({
      variables: {
        price: price,
        completionDate: completionDate.toUTCString(),
        projectId,
      },
    })
  }

  return (
    <NewOfferWrapper className={className} onSubmit={handleSubmit}>
      <NewOfferTitle>Pošlite novú ponuku</NewOfferTitle>
      <NewOfferInputsWrapper>
        <PriceInput
          onChange={(val) => setPrice(val)}
          title="Cena"
          type="number"
          required
        ></PriceInput>
        <CompletionDateInput
          onChange={(val) => setCompletionDate(new Date(val))}
          title="Čas dokončenia"
          type="date"
          required
        ></CompletionDateInput>
      </NewOfferInputsWrapper>
      <SendButton>Poslať</SendButton>
      {!loading && data?.addOffer === AddOfferResult.Success && (
        <Message
          type="success"
          content="Ponuka bola úspešne odoslaná"
          onHide={onClose}
        ></Message>
      )}
      {!loading && data?.addOffer === AddOfferResult.Unauthorized && (
        <Message
          type="error"
          content="Na pridanie ponuky nemáte oprávnenia"
          onHide={onClose}
        ></Message>
      )}
      {!loading && data?.addOffer === AddOfferResult.HasAcceptedOffer && (
        <Message
          type="error"
          content="Tento projekt už má prijatu ponuku"
          onHide={onClose}
        ></Message>
      )}
      {!loading &&
        called &&
        (data?.addOffer === AddOfferResult.Error || error) && (
          <Message type="error" content="Ponuku nebolo možné odoslať"></Message>
        )}
    </NewOfferWrapper>
  )
}
