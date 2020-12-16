import Head from "next/head"
import React, { useEffect, useState } from "react"
import {
  AreaInput,
  ButtonsWrapper,
  CancelButton,
  CategorySelect,
  CityInput,
  ConfirmButtonsWrapper,
  CountryInput,
  DescriptionTextArea,
  ExpectedPriceInput,
  FormSectionWrapper,
  FormWrapper,
  InputsWrapper,
  NewProjectWrapper,
  PostalCodeInput,
  ProjectNameInput,
  PublishButton,
  SaveButton,
  SectionTitle,
  StreetInput,
} from "./NewProject.style"
import {
  CreateProjectResult,
  ProjectDataInput,
  useCategoriesQuery,
  useCreateProjectMutation,
  useSuppliersLazyQuery,
} from "../../graphql/generated/graphql"
import { Message } from "../Shared/Message"
import { useRouter } from "next/dist/client/router"

const initialProjectData: ProjectDataInput = {
  name: null,
  categoryId: null,
  description: null,
  expectedPrice: null,
  location: {
    city: null,
    area: null,
    country: null,
    postalCode: null,
    street: null,
  },
}

export const NewProject: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectDataInput>(
    initialProjectData
  )
  const router = useRouter()

  const { data: categoryData } = useCategoriesQuery()

  useEffect(() => {
    if (categoryData?.categories.length >= 1) {
      setProjectData({
        ...projectData,
        categoryId: categoryData.categories[0].id,
      })
    }
  }, [categoryData])

  const [
    createProjectMutation,
    { data, loading, error },
  ] = useCreateProjectMutation({})

  const handleSubmit = (event) => {
    event.preventDefault()

    createProjectMutation({
      variables: {
        projectData: projectData,
      },
    })
  }

  return (
    <>
      {!loading &&
        data &&
        data.createProject === CreateProjectResult.Success && (
          <Message
            onHide={() => router.push("/projekt")}
            type="success"
            content="Projekt bol úspešne vytvorený"
          ></Message>
        )}
      {!loading &&
        data &&
        data.createProject === CreateProjectResult.UnavailableSupplier && (
          <Message
            type="warning"
            content="V zvolenej lokalite nie su dostupný poskytovatelia, upravte lokalitu alebo oblasť"
          ></Message>
        )}
      {!loading &&
        data &&
        data.createProject === CreateProjectResult.Unauthorized && (
          <Message
            type="error"
            content="Na pridanie projektu nemáte oprávnenia"
          ></Message>
        )}
      {!loading && data && data.createProject === CreateProjectResult.Error && (
        <Message type="error" content="Nastala neočakávana chyba"></Message>
      )}
      <Head>
        <title key="title">Nový projekt</title>
      </Head>
      <NewProjectWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <FormSectionWrapper>
            <SectionTitle>Zadajte polohu a oblasť</SectionTitle>
            <InputsWrapper>
              <CityInput
                type="text"
                title="Mesto"
                required
                onChange={(val) =>
                  setProjectData({
                    ...projectData,
                    location: { ...projectData.location, city: val },
                  })
                }
              ></CityInput>
              <StreetInput
                type="text"
                title="Ulica"
                required
                onChange={(val) =>
                  setProjectData({
                    ...projectData,
                    location: { ...projectData.location, street: val },
                  })
                }
              ></StreetInput>
              <PostalCodeInput
                type="text"
                title="PSČ"
                required
                onChange={(val) =>
                  setProjectData({
                    ...projectData,
                    location: { ...projectData.location, postalCode: val },
                  })
                }
              ></PostalCodeInput>
              <CountryInput
                type="text"
                title="Krajina"
                required
                onChange={(val) =>
                  setProjectData({
                    ...projectData,
                    location: { ...projectData.location, country: val },
                  })
                }
              ></CountryInput>
              <AreaInput
                type="number"
                title="Oblasť"
                required
                onChange={(val) =>
                  setProjectData({
                    ...projectData,
                    location: { ...projectData.location, area: val },
                  })
                }
              ></AreaInput>
            </InputsWrapper>
          </FormSectionWrapper>
          <FormSectionWrapper>
            <SectionTitle>Kategória</SectionTitle>
            <InputsWrapper>
              <CategorySelect
                required
                onChange={(value) =>
                  setProjectData({ ...projectData, categoryId: value })
                }
                title={"Vyberte kategóriu"}
                options={
                  categoryData?.categories.map((map) => ({
                    label: map.name,
                    value: map.id,
                  })) ?? []
                }
              ></CategorySelect>
            </InputsWrapper>
          </FormSectionWrapper>
          <FormSectionWrapper>
            <SectionTitle>Detaily</SectionTitle>
            <InputsWrapper>
              <ProjectNameInput
                required
                onChange={(val) =>
                  setProjectData({ ...projectData, name: val })
                }
                type="text"
                title="Názov projektu"
              ></ProjectNameInput>
            </InputsWrapper>
            <DescriptionTextArea
              required
              onChange={(val) =>
                setProjectData({ ...projectData, description: val })
              }
              title={"Podrobný popis"}
            ></DescriptionTextArea>
          </FormSectionWrapper>
          <FormSectionWrapper>
            <SectionTitle>Cenový odhad</SectionTitle>
            <InputsWrapper>
              <ExpectedPriceInput
                required
                onChange={(val) =>
                  setProjectData({ ...projectData, expectedPrice: val })
                }
                type="number"
                title="Zadajte odhad ceny"
              ></ExpectedPriceInput>
            </InputsWrapper>
          </FormSectionWrapper>
          <ButtonsWrapper>
            <ConfirmButtonsWrapper>
              <SaveButton>Uložiť</SaveButton>
            </ConfirmButtonsWrapper>
            <CancelButton
              type="cancel"
              htmlType="button"
              onClick={() => router.push("/projekt")}
            >
              Zrušiť
            </CancelButton>
          </ButtonsWrapper>
        </FormWrapper>
      </NewProjectWrapper>
    </>
  )
}
