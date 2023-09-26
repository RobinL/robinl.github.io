import React, { useState } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useStaticQuery, graphql } from 'gatsby';

const DefinitionTooltip = ({ term, definition }) => {
    const [showDefinition, setShowDefinition] = useState(false);
    const toggleDefinition = () => setShowDefinition(!showDefinition);

    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: { sourceInstanceName: { eq: "definitions" } }) {
                edges {
                    node {
                        name
                        childMdx {
                            body
                        }
                    }
                }
            }
        }
    `);

    // Create mdxMap
    const mdxMap = {};
    data.allFile.edges.forEach(({ node }) => {
        mdxMap[node.name] = node.childMdx.body;
    });

    const renderDefinition = () => {
        if (mdxMap[term]) {
            return <MDXRenderer>{'hello'}</MDXRenderer>;
        }
        return definition;
    };

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
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-200 border border-gray-300 p-2 w-48 text-left text-sm z-10">
                    {renderDefinition()}
                </span>
            )}
        </span>
    );
};

export default DefinitionTooltip;
