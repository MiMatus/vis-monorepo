import { NextPage } from "next"
import { LoggedLayout } from "../../components/LoggedLayout"
import { ProjectList } from "../../components/ProjectList"

const ProjectListPage: NextPage = () => {
  return (
    <LoggedLayout title="Zoznam projektov">
      <ProjectList></ProjectList>
    </LoggedLayout>
  )
}

export default ProjectListPage
