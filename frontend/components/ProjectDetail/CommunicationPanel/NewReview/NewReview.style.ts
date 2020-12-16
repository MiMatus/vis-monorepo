import styled from "styled-components"
import { Button, TextArea } from "../../../Shared"

export const NewReviewWrapper = styled.form`
  background: #ffffff;
  border: 1px solid #c2c2c2;
  box-shadow: 0px 4px 4px rgba(184, 184, 184, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 20px;
  width: 100%;
`

export const NewReviewTitle = styled.h3`
  font-weight: 500;
  font-size: 23px;
  margin: 0px;
`

export const SatisfiedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SatisfiedTitle = styled.h4`
  font-weight: 500;
  font-size: 36px;
`

export const SatisfiedButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SatisfiedButton = styled(Button)`
  && {
    width: 150px;
    height: 40px;
    margin-right: 40px;
  }
`

export const UnsatisfiedButon = styled(Button)`
  && {
    width: 150px;
    height: 40px;
  }
`

export const ReviewWrapper = styled.div``

export const ReviewContentArea = styled(TextArea)`
  && {
    height: 160px;
    margin-top: 25px;
  }
`

export const ReviewButtonsWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`

export const ReviewSaveButton = styled(Button)`
  && {
    height: 40px;
    width: 105px;
    margin-right: 25px;
  }
`

export const ReviewCancelButton = styled(Button)`
  && {
    height: 40px;
    width: 105px;
  }
`
