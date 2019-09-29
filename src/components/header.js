import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { colors, fonts } from "gatsby-design-tokens"
import { rhythm } from "../utils/typography"


// https://news.ycombinator.com/item?id=21050501
// https://codeburst.io/flexbox-building-a-navigation-part-2-2-6cc58b9d4173
import headerStyles from "./header.module.css"


const NavLiItem = styled(`li`)`
  color: ${colors.black};
  margin-bottom:  ${rhythm(1 / 8)};
  margin-top:  ${rhythm(1 / 8)};
  font-family: ${fonts.monospace.join(", ")};
`

const mono = css`
  font-family: ${fonts.monospace.join(", ")};
`

const Header = () => (
  <header className={headerStyles.header}>

    <nav>
      <ul>
      <NavLiItem css ={mono} className={headerStyles.robin}>~ robinlinacre</NavLiItem>
      <NavLiItem className={headerStyles.middlespace}></NavLiItem>
      <NavLiItem >About</NavLiItem>
      <NavLiItem >Medium</NavLiItem>
      <NavLiItem >Twitter</NavLiItem>
      </ul>
    </nav>
    <hr/>
  </header>
)

export default Header