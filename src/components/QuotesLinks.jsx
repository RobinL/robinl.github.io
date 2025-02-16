import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const QuotesLinks = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/links_quotes_markdown/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          html
          frontmatter {
            type
            title
            author
            description
            url
            date
            tags
          }
        }
      }
    }
  `);

    return (
        <div>
            {data.allMarkdownRemark.nodes.map((node, index) => (
                <div key={index} className="mb-8 p-4 border rounded">
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
                    <pre className="mt-4 p-2 bg-gray-100 rounded">
                        {JSON.stringify(node.frontmatter, null, 2)}
                    </pre>
                </div>
            ))}
        </div>
    );
};

export default QuotesLinks;