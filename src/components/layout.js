import React from "react"
import Navbar from "../components/navbar"
import "./layout.css"

export default ({ children }) => (
  <div className="site-container">
    <Navbar />
    <div className="content">{children}</div>
  </div>
)
