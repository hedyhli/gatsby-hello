import React from "react"
import Navbar from "../components/navbar"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
    <Navbar/>
    {children}
  </div>
)