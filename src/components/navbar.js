import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
  `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div
    css={css`
      background-color: lavenderblush;
    `}
  >
    <header
      css={css`
        margin-bottom: 1.5rem;
      `}
    >
      <Link
        to="/"
        css={css`
          text-shadow: none;
          background-image: none;
        `}
      >
        <h3
          css={css`
            display: inline;
          `}
        >
          Just a Gatsby Site.
        </h3>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
        `}
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
