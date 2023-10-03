import React from 'react';
import { Tooltip } from 'react-tooltip';

import { graphql, useStaticQuery } from 'gatsby';

const getData = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/definitions_markdown/" }
                }
            ) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            term
                        }
                    }
                }
            }
        }
    `);

    return data.allMarkdownRemark.edges;
};

const DefinitionToolTip = ({ term }) => {
    const data = getData();
    const filteredNode = data.find(edge => edge.node.frontmatter.term === term);
    const filteredHtml = filteredNode
        ? filteredNode.node.html
        : 'Term not found';

    return (
        <span className="relative">
            <span
                className={`underline cursor-pointer tooltip-${term}`}
                data-tip
                data-for={`tooltip-${term}`}
            >
                {term}
            </span>
            <Tooltip
                id={`tooltip-${term}`}
                anchorSelect={`.tooltip-${term}`}
                style={{
                    backgroundColor: '#EEE',
                    color: '#222',
                    fontSize: '0.8rem',
                    zIndex: 1000,
                }}
                clickable
            >
                <div
                    className="w-64 text-xs z-10 definition-tooltip-content"
                    dangerouslySetInnerHTML={{ __html: filteredHtml }}
                ></div>
            </Tooltip>
        </span>
    );
};

export default DefinitionToolTip;
