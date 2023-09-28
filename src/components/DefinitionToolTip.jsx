import React, { useState } from 'react';
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
    const [showDefinition, setShowDefinition] = useState(false);

    const toggleDefinition = () => {
        setShowDefinition(!showDefinition);
    };

    const data = getData();

    const filteredNode = data.find(edge => edge.node.frontmatter.term === term);

    const filteredHtml = filteredNode
        ? filteredNode.node.html
        : 'Term not found';

    return (
        <span className="relative">
            <span
                className="underline cursor-pointer"
                onMouseEnter={toggleDefinition}
                onMouseLeave={toggleDefinition}
                onClick={toggleDefinition}
            >
                {term}
            </span>
            {showDefinition && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-blue-50 border border-gray-300 p-2 w-64 text-left text-xs z-10 definition-tooltip-content">
                    <div
                        dangerouslySetInnerHTML={{ __html: filteredHtml }}
                    ></div>
                </div>
            )}
        </span>
    );
};

export default DefinitionToolTip;
