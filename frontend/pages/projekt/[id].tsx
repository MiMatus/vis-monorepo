import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import { LoggedLayout } from "../../components/LoggedLayout"
import { ProjectDetail } from "../../components/ProjectDetail"

const ProjectDetailPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const projectId = parseInt(id as any)
  return (
    <LoggedLayout title="Detail projektu">
      <ProjectDetail projectId={projectId}></ProjectDetail>
    </LoggedLayout>
  )
}

export default ProjectDetailPage
