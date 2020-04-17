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
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
