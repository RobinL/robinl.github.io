import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const foot = css`
margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 1000px;
  `

const cen = css`
  text-align: center;
`

const mar = css`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const Footer = () => (
    <div>
    <hr css={mar}/>
    <footer css={foot}>
        <p css={cen}><Link to="/">Back to homepage.</Link></p>
            <p css={cen}>  This site is built using <a href="https://observablehq.com">Observable HQ</a> and <a href="https://gatsbyjs.org">Gatsby.js</a>. Source code <a href="https://github.com/robinl/robinlinacre">here</a>.</p>
    </footer>
    </div>
)

export default Footer