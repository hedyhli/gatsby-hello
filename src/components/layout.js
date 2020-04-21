import React from "react"
import Navbar from "../components/navbar"
import "./layout.css"

export default ({ children }) => (
  <div className="site-container">
    <Navbar />
    <div className="content">{children}</div>
    <footer>
      <p>Gatsby Hello World site, made by Hedy Li, 2020. </p>
    </footer>
  </div>
)
