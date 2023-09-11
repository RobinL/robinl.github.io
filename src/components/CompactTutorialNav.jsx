import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const CompactTutorialNav = ({ frontmatter }) => {
    const { tutorial_number } = frontmatter;

    const data = useStaticQuery(graphql`
        query {
            allMdx(filter: { frontmatter: { tutorial_number: { ne: null } } }) {
                edges {
                    node {
                        frontmatter {
                            tutorial_number
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const tutorials = data.allMdx.edges.map(
        edge => edge.node.frontmatter.tutorial_number
    );
    const prevExists = tutorials.includes(tutorial_number - 1);
    const nextExists = tutorials.includes(tutorial_number + 1);

    const prevSlug = data.allMdx.edges.find(
        edge => edge.node.frontmatter.tutorial_number === tutorial_number - 1
    )?.node?.fields?.slug;
    const nextSlug = data.allMdx.edges.find(
        edge => edge.node.frontmatter.tutorial_number === tutorial_number + 1
    )?.node?.fields?.slug;

    return (
        <div className="bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs">
            <div className="flex justify-between">
                <div className="w-1/3 text-left">
                    {prevExists && (
                        <Link
                            to={prevSlug}
                            className="text-blue-500 hover:underline"
                        >
                            &larr; Previous article
                        </Link>
                    )}
                </div>
                <div className="w-1/3 text-center">
                    <span>This is part {tutorial_number} of the tutorial</span>
                </div>
                <div className="w-1/3 text-right">
                    {nextExists && (
                        <Link
                            to={nextSlug}
                            className="text-blue-500 hover:underline"
                        >
                            Next article &rarr;
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompactTutorialNav;
