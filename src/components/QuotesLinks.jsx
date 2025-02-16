import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import QuoteCard from './QuoteCard';
import LinkCard from './LinkCard';

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
            url
            date
            tags
          }
        }
      }
    }
  `);

  const renderContent = (node) => {
    switch (node.frontmatter.type) {
      case 'quote':
        return <QuoteCard frontmatter={node.frontmatter} html={node.html} />;
      case 'link':
        return <LinkCard frontmatter={node.frontmatter} html={node.html} />;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {data.allMarkdownRemark.nodes.map((node, index) => (
        <div key={index}>
          {renderContent(node)}
        </div>
      ))}
    </div>
  );
};

export default QuotesLinks;