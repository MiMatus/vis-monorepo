import styled from "styled-components"
import { CommunicationPanel } from "./CommunicationPanel"

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ProjectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`

export const MainDetailsWrapper = styled.div``

export const ProjectTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin: 0px;
`

export const ProjectCategory = styled.span`
  font-weight: 200;
  font-size: 18px;
`

export const ProjectDescription = styled.p`
  font-weight: normal;
  font-size: 18px;
`

export const AttachedFilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const AttachedFilesTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin: 0px;
`

export const FileIconsWrapper = styled.div``

export const AttachedFileIcon = styled.img`
  width: 47px;
  height: 50px;
`

export const ExpectedPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const ExpectedPriceTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin: 0px;
`

export const ExpectedPrice = styled.span`
  font-weight: 500;
  font-size: 25px;
`

export const StyledCommunicationPanel = styled(CommunicationPanel)`
  && {
    width: 45%;
  }
`
