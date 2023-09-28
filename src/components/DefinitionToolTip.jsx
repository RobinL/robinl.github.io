import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const getData = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/definitions_mdx/" } }
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
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-100 border border-gray-300 p-2 w-48 text-left text-sm z-10">
                    <div dangerouslySetInnerHTML={{ __html: filteredHtml }} />;
                </span>
            )}
        </span>
    );
};

export default DefinitionToolTip;
