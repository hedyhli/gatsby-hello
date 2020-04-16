import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

export default ({ data }) => (
  <Layout>
    <Header>{data.site.siteMetadata.title}</Header>
    <p>{data.site.siteMetadata.description}</p>
    <img
      css={css`
        width: 400px;
      `}
      src="https://source.unsplash.com/1600x900/?web,dev"
      alt="from Unsplash"
    />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
