import { NextPage } from "next"

import { Homepage as HomepageComponent } from "../components/Homepage"
import { Layout } from "../components/Layout"

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HomepageComponent></HomepageComponent>
    </Layout>
  )
}

export default HomePage
