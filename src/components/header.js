import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { colors, fonts } from "gatsby-design-tokens"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { FaMedium, FaTwitter, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';

// https://news.ycombinator.com/item?id=21050501
// https://codeburst.io/flexbox-building-a-navigation-part-2-2-6cc58b9d4173
import { header, robin, middlespace } from "./header.module.css"


const NavLiItem = styled(`li`)`
  color: black;
  margin-bottom:  ${rhythm(1 / 2)};
  margin-top:  ${rhythm(1 / 2)};
  font-family: ${fonts.monospace.join(", ")};
`

const BlackA = styled(`a`)`
  color: black;
`

const mono = css`
  font-family: ${fonts.monospace.join(", ")};
`

const Header = () => (
  <header className={header}>

    <nav>
      <ul>
        <NavLiItem css={mono} className={robin}><Link to="/">>robinlinacre</Link></NavLiItem>
        <NavLiItem className={middlespace}></NavLiItem>
        <NavLiItem >
          <BlackA href="https://twitter.com/RobinLinacre"><FaTwitter /></BlackA>
        </NavLiItem>
        <NavLiItem >
          <BlackA href="https://github.com/robinl/"><FaGithub /></BlackA>
        </NavLiItem>
        <NavLiItem ><Link to="/"><BlackA href=""><FaHome /></BlackA></Link></NavLiItem>

      </ul>
    </nav>
    <hr />
  </header>
)

export default Header