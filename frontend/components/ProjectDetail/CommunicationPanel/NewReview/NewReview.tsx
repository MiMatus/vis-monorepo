import React, { useState } from "react"
import {
  AddReviewResult,
  useAddReviewMutation,
} from "../../../../graphql/generated/graphql"
import { Message } from "../../../Shared/Message"
import {
  NewReviewTitle,
  NewReviewWrapper,
  ReviewButtonsWrapper,
  ReviewCancelButton,
  ReviewContentArea,
  ReviewSaveButton,
  ReviewWrapper,
  SatisfiedButton,
  SatisfiedButtons,
  SatisfiedTitle,
  SatisfiedWrapper,
  UnsatisfiedButon,
} from "./NewReview.style"

interface NewReviewProps {
  projectId: number
  onClose: () => void
  className?: string
}

export const NewReview: React.FC<NewReviewProps> = ({
  className,
  projectId,
  onClose,
}) => {
  const [positive, setPositive] = useState<boolean | null>(null)
  const [content, setContent] = useState<string>("")

  const [
    addReviewMutation,
    { data, loading, error, called },
  ] = useAddReviewMutation({})

  const handleSubmit = (event) => {
    event.preventDefault()
    if (called || positive === null || content === "") {
      return
    }

    addReviewMutation({
      variables: {
        positive,
        content,
        projectId,
      },
    })
  }

  return (
    <NewReviewWrapper className={className} onSubmit={handleSubmit}>
      <NewReviewTitle>Pridajte hodnotenie</NewReviewTitle>
      {positive === null && (
        <SatisfiedWrapper>
          <SatisfiedTitle>Boli ste spokojný ?</SatisfiedTitle>
          <SatisfiedButtons>
            <SatisfiedButton
              onClick={() => setPositive(true)}
              htmlType="button"
            >
              Ano
            </SatisfiedButton>
            <UnsatisfiedButon
              onClick={() => setPositive(false)}
              htmlType="button"
              type="cancel"
            >
              Nie
            </UnsatisfiedButon>
          </SatisfiedButtons>
        </SatisfiedWrapper>
      )}
      {positive !== null && (
        <ReviewWrapper>
          <ReviewContentArea
            required
            title={positive ? "Pozitívne hodnotenie" : "Negatívne hodnotenie"}
            onChange={(val) => setContent(val)}
          ></ReviewContentArea>
          <ReviewButtonsWrapper>
            <ReviewSaveButton>Uložiť</ReviewSaveButton>
            <ReviewCancelButton
              type="cancel"
              htmlType="button"
              onClick={onClose}
            >
              Zrušiť
            </ReviewCancelButton>
          </ReviewButtonsWrapper>
        </ReviewWrapper>
      )}

      {!loading && data?.addReview === AddReviewResult.Success && (
        <Message
          type="success"
          content="Hodnotenie bolo úspešne pridané"
          onHide={onClose}
        ></Message>
      )}
      {!loading &&
        called &&
        (data?.addReview === AddReviewResult.Duplicate || error) && (
          <Message
            type="warning"
            content="Tento projekt ste už hodnitil"
            onHide={onClose}
          ></Message>
        )}
      {!loading &&
        called &&
        (data?.addReview === AddReviewResult.Unauthorized || error) && (
          <Message
            type="warning"
            content="Na pridanie hodnotenia nemáte oprávnenie"
            onHide={onClose}
          ></Message>
        )}
      {!loading &&
        called &&
        (data?.addReview === AddReviewResult.Error || error) && (
          <Message
            type="error"
            content="Hodnotenie nebolo možné pridať"
            onHide={onClose}
          ></Message>
        )}
    </NewReviewWrapper>
  )
}
