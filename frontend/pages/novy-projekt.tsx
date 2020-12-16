import { NextPage } from "next"
import { LoggedLayout } from "../components/LoggedLayout"
import { NewProject } from "../components/NewProject"

const NewProjectPage: NextPage = () => {
  return (
    <LoggedLayout title="Nový projekt">
      <NewProject> </NewProject>
    </LoggedLayout>
  )
}

export default NewProjectPage
