import React from "react"
import Navbar from "../components/navbar"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div
    style={{ margin: `3rem auto`, maxWidth: 880 }}
    css={css`
      margin: 3rem auto;
      max-width: 800;
      padding: 0 1rem;
    `}
  >
    <Navbar />
    {children}
  </div>
)
