import styled from "styled-components"
import { Button, Input, Select, TextArea } from "../Shared"

export const NewProjectWrapper = styled.div`
  width: 100%;
`

export const FormSectionWrapper = styled.div`
  width: 100%;
`

export const FormWrapper = styled.form`
  ${FormSectionWrapper}:not(:first-child) {
    margin-top: 35px;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 35px;
  margin: 0px;
  margin-bottom: 35px;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const CityInput = styled(Input)`
  width: 250px;
`

export const StreetInput = styled(Input)`
  width: 360px;
  margin-left: 40px;
`

export const PostalCodeInput = styled(Input)`
  width: 150px;
  margin-left: 40px;
`

export const CountryInput = styled(Input)`
  width: 150px;
  margin-left: 40px;
`

export const AreaInput = styled(Input)`
  width: 90px;
  margin-left: 40px;
`

export const CategorySelect = styled(Select)`
  width: 250px;
`

export const ProjectNameInput = styled(Input)`
  width: 540px;
`

export const DescriptionTextArea = styled(TextArea)`
  width: 80%;
  height: 180px;
  margin-top: 35px;
`

export const ExpectedPriceInput = styled(Input)`
  width: 320px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0px;
`

export const ConfirmButtonsWrapper = styled.div`
  display: flex;
`

export const PublishButton = styled(Button)``

export const SaveButton = styled(Button)`
  margin-left: 15px;
`
export const CancelButton = styled(Button)`
  && {
    width: 130px;
  }
`
