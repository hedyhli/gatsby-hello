import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div>
      <Header>About: {data.site.siteMetadata.title}</Header>
      <p>Hello, this is my about page! </p>
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
