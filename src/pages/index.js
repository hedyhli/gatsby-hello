import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

export default ({ data }) => (
  <Layout>
    <Header>{data.site.siteMetadata.title}</Header>
    <p>{data.site.siteMetadata.description}</p>
    <img
      css={css`
        width: 300px;
      `}
      src="https://source.unsplash.com/1600x900/?web,dev"
      alt="from Unsplash"
    />
    <h5>{data.allMarkdownRemark.totalCount} Posts</h5>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h3
            css={css`
              text-decoration: underline;
            `}
          >
            {node.frontmatter.title}{" "}
          </h3>
          <h5
            css={css`
              color: #bbb;
            `}
          >
            — {node.frontmatter.date}
          </h5>

          <p
            css={css`
              margin-bottom: 20px;
            `}
          >
            {node.excerpt}
          </p>
        </Link>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
