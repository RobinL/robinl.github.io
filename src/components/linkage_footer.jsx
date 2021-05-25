import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"


const foot = css`
margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 640px;
  `

const cen = css`
  text-align: center;
`

const mar = css`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const flex = css`


    display: flex;
    justify-content: space-between;

`

const order_of_articles = [
  "/intro_to_probabilistic_linkage/",
  "/maths_of_fellegi_sunter/",
  "/visualising_fellegi_sunter/",
  "/understanding_match_weights/",
]

const LinkageFooter = (props) => {

  let path = props.current_path

  let this_index = order_of_articles.indexOf(path)

  let previous_article = order_of_articles[this_index - 1]
  let next_article = order_of_articles[this_index + 1]

  if (previous_article === undefined) {
    previous_article = <div></div>
  } else {
    previous_article = <div><Link to={previous_article}> &lt; Previous article</Link></div>
  }

  if (next_article === undefined) {
    next_article = <div></div>
  } else {
    next_article = <div><Link to={next_article}> Next article &gt;</Link></div>
  }

  return (
    <div>
      <hr css={mar} />
      <div css={flex}>
        {previous_article}
        <div><Link to="/probabilistic_linkage">Probabilistic linkage home</Link></div>
        {next_article}
      </div>

    </div >)
}

export default LinkageFooter