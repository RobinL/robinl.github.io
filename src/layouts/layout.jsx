import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from "../components/seo"
import { css } from "@emotion/core"

const post_css = css`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 640px;

`


function Layout(props) {



  return (
    <div>
      <SEO title="robinlinacre.com" description="Robin Linacre's personal homepage" />
      <Header />
      <div css={post_css} className={props.className}>{props.children}</div>
      <Footer />
    </div>
  )
}
export default Layout