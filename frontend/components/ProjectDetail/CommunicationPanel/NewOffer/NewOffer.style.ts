import styled from "styled-components"
import { Button, Input } from "../../../Shared"

export const NewOfferWrapper = styled.form`
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

export const NewOfferTitle = styled.h3`
  font-weight: 500;
  font-size: 23px;
  margin: 0px;
`
export const NewOfferInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 25px;
`

export const PriceInput = styled(Input)``
export const CompletionDateInput = styled(Input)``

export const SendButton = styled(Button)`
  width: 150px;
  height: 40px;
`
