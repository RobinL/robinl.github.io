import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function PostList({ children }) {
  const data = useStaticQuery(
    graphql`
      {
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                post_date
                code_url
                error
              }
              node {
                relativePath {
                  name
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <p>List of posts:</p>
      {data.allJavascriptFrontmatter.edges.map(function(edge){
         return (
           <>
             <p>--</p>
             <p>{edge.node.node.relativePath.name}</p>
             <p>{edge.node.frontmatter.code_url}</p>
             <p>{edge.node.frontmatter.post_date}</p>

           </>
         )
      }
    )}
    </div>
    )

}

export default PostList
