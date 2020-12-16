import Head from "next/head"
import React from "react"
import { useProjectsQuery } from "../../graphql/generated/graphql"
import {
  ListItem,
  ListItemTitle,
  ListWrapper,
  ProjectIcon,
} from "./ProjectList.style"
import NextLink from "next/link"

export const ProjectList: React.FC = () => {
  const { data, loading, error } = useProjectsQuery()

  return (
    <>
      <Head>
        <title key="title">Zoznam projektov</title>
      </Head>
      <ListWrapper>
        {data &&
          data.projects.map((project) => (
            <NextLink href={`/projekt/${project.id}`} key={project.id}>
              <ListItem>
                <ListItemTitle>{project.name}</ListItemTitle>
                <ProjectIcon src="/images/project-item.svg"></ProjectIcon>
              </ListItem>
            </NextLink>
          ))}
      </ListWrapper>
    </>
  )
}
