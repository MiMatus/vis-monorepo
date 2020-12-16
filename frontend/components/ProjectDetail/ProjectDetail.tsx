import Head from "next/head"
import React from "react"
import {
  useProjectQuery,
  useProjectsQuery,
} from "../../graphql/generated/graphql"
import {
  AttachedFileIcon,
  AttachedFilesTitle,
  AttachedFilesWrapper,
  CommunicationPanel,
  DetailWrapper,
  ExpectedPrice,
  ExpectedPriceTitle,
  ExpectedPriceWrapper,
  FileIconsWrapper,
  MainDetailsWrapper,
  ProjectCategory,
  ProjectDescription,
  ProjectDetailsWrapper,
  ProjectTitle,
  StyledCommunicationPanel,
} from "./ProjectDetail.style"

interface ProjectDetailProps {
  projectId: number
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
  const { data, loading, error } = useProjectQuery({
    variables: {
      id: projectId,
    },
  })

  return (
    <>
      <Head>
        <title key="title">Detail projektu</title>
      </Head>
      <DetailWrapper>
        <ProjectDetailsWrapper>
          <MainDetailsWrapper>
            <ProjectTitle>{data?.project.name}</ProjectTitle>
            <ProjectCategory>{data?.project.category.name}</ProjectCategory>
            <ProjectDescription>{data?.project.description}</ProjectDescription>
          </MainDetailsWrapper>
          <AttachedFilesWrapper>
            <AttachedFilesTitle>Priložené súbory</AttachedFilesTitle>
            <FileIconsWrapper>
              <AttachedFileIcon src="/images/doc-file.svg"></AttachedFileIcon>
              <AttachedFileIcon src="/images/doc-file.svg"></AttachedFileIcon>
              <AttachedFileIcon src="/images/doc-file.svg"></AttachedFileIcon>
            </FileIconsWrapper>
          </AttachedFilesWrapper>
          <ExpectedPriceWrapper>
            <ExpectedPriceTitle>Odhadovaná cena</ExpectedPriceTitle>
            <ExpectedPrice>{data?.project.expectedPrice}€</ExpectedPrice>
          </ExpectedPriceWrapper>
        </ProjectDetailsWrapper>
        <StyledCommunicationPanel
          projectId={projectId}
        ></StyledCommunicationPanel>
      </DetailWrapper>
    </>
  )
}
