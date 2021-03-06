import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/sections/Header/Header"
import Explore from "../components/sections/Explore/Explore"
import Create from "../components/sections/Create/Create"
import Share from "../components/sections/Share/Share"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <main>
      <Explore />
      <Create />
      <Share />
    </main>
  </Layout>
)

export default IndexPage
