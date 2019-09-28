import React from "react"
import Layout from "../layouts/"
export default ({data}) => {

    return (
        <Layout>
            <div>
                <p>The id for this page is: {data.mydataJson.myid}</p>
                <p>The content for this page is: {data.mydataJson.p}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
query nbdsf($myid: String!) {
  mydataJson(myid: {eq: $myid}) {
    myid
    p
  }
}
`