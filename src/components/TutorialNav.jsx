import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const TutorialNav = ({ frontmatter }) => {
    const { tutorial_number, title } = frontmatter;

    const data = useStaticQuery(graphql`
        query {
            allMdx(filter: { frontmatter: { tutorial_number: { ne: null } } }) {
                edges {
                    node {
                        frontmatter {
                            tutorial_number
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const sortedTutorials = data.allMdx.edges.sort(
        (a, b) =>
            a.node.frontmatter.tutorial_number -
            b.node.frontmatter.tutorial_number
    );

    return (
        <div className="bg-blue-100  p-4 mt-8  mb-4 rounded-lg ">
            <div className="container mx-auto">
                <div className="text-blue-800 font-semibold text-base mb-2">
                    Probabilistic Linkage Tutorial Navigation:
                </div>
                <ol className="space-y-2 text-sm">
                    {sortedTutorials.map(edge => (
                        <li
                            key={edge.node.frontmatter.tutorial_number}
                            className="text-blue-600 text-sm"
                        >
                            {tutorial_number ===
                            edge.node.frontmatter.tutorial_number ? (
                                <span className="font-bold text-sm">
                                    {edge.node.frontmatter.title}
                                </span>
                            ) : (
                                <Link
                                    to={edge.node.fields.slug}
                                    className="hover:underline"
                                >
                                    {edge.node.frontmatter.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default TutorialNav;
