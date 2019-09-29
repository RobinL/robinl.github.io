import React from "react"
import { StaticQuery, graphql } from "gatsby"

// https://news.ycombinator.com/item?id=21050501
// https://codeburst.io/flexbox-building-a-navigation-part-2-2-6cc58b9d4173
import headerStyles from "./header.module.css"


const Header = () => (
  <header className={headerStyles.header}>

    <nav>
      <ul>
        <li className={headerStyles.robin}>> Robin Linacre</li>
      <li className={headerStyles.middlespace}></li>
      <li >About</li>
      <li >Medium</li>
      <li >Twitter</li>
      </ul>
    </nav>
  </header>
)

export default Header