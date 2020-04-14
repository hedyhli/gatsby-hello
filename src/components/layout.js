import React from "react"
import Navbar from "../components/navbar"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div
    css={css`
      margin: 3rem auto, 
      maxWidth: 800, 
      padding: 0 1rem
    `}
  >
    <Navbar />
    {children}
  </div>
)
