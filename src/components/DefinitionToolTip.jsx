import React, { useState, useEffect, useRef } from 'react';
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
    const tooltipRef = useRef(null);

    useEffect(() => {
        if (showDefinition && tooltipRef.current) {
            const rect = tooltipRef.current.getBoundingClientRect();
            const style = tooltipRef.current.style;
            let transformX = '-50%';
            let transformY = '';

            // Check right overflow
            if (rect.right > window.innerWidth) {
                const overflow = rect.right - window.innerWidth;
                transformX = `calc(-50% - ${overflow}px)`;
            }
            // Check left overflow
            else if (rect.left < 0) {
                transformX = `-calc(50% + ${Math.abs(rect.left)}px)`;
            }

            // Check top overflow
            if (rect.top < 0) {
                style.top = '100%';
                style.bottom = 'auto';
                transformY = '10px';
            }
            // Check bottom overflow
            else if (rect.bottom > window.innerHeight) {
                style.bottom = '100%';
                style.top = 'auto';
                transformY = '-10px';
            }

            // Apply transformations
            style.transform = `translate(${transformX}, ${transformY})`;
        }
    }, [showDefinition]);

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
                <div
                    ref={tooltipRef}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-blue-50 border border-gray-300 p-2 w-64 text-left text-xs z-10 definition-tooltip-content"
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: filteredHtml }}
                    ></div>
                </div>
            )}
        </span>
    );
};

export default DefinitionToolTip;
