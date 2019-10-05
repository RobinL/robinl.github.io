import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"


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
    <footer>
            <p css={cen}>This site is built using <a href="https://observablehq.com">Observable HQ</a> and <a href="https://gatsbyjs.org">Gatsby.js</a>. Source code <a href="https://github.com/robinl/robinlinacre">here</a>.</p>
    </footer>
    </div>
)

export default Footer