import React from 'react';
import { colors, fonts } from "gatsby-design-tokens"
import Header from '../components/header';
import Footer from '../components/footer';

import styled from "@emotion/styled"

const Layout = ({ children, data}) => (
    <div>
    <Header />
    {children}
    <Footer />
    </div>

)

const PostDiv = styled(`div`)`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 1000px;
`
export const LayoutPost =  ({ children, data }) => (

<Layout>

    <PostDiv>
        {children}
    </PostDiv>
</Layout>

)



export default Layout

