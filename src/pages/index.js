import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/sections/Header/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
  </Layout>
)

export default IndexPage
