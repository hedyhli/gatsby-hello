import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <div>
      <Header>{data.siteMetadata.title}</Header>
      <p>description description</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
