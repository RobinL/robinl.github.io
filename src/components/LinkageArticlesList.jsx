import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const ProbabilisticLinkageArticles = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: {
                    frontmatter: {
                        post_category: { eq: "probabilistic_linkage" }
                    }
                }
            ) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        prob_linkage_category
                        tutorial_number
                    }
                }
            }
        }
    `);

    const articles = data.allMdx.nodes.map(node => ({
        slug: node.fields.slug,
        ...node.frontmatter,
    }));

    const articlesGroupedByCategory = {};
    const orderedCategories = ['tutorial', 'tools', 'benchmarking', 'archive']; // defined order
    const categoryTitles = {
        tutorial: 'Introductory Interactive Tutorial',
        benchmarking: 'Splink Benchmarking and Performance',
        archive: 'Archived Material',
        tools: 'Useful tools',
    };

    articles.forEach(article => {
        const { prob_linkage_category } = article;
        if (!articlesGroupedByCategory[prob_linkage_category]) {
            articlesGroupedByCategory[prob_linkage_category] = [];
        }
        articlesGroupedByCategory[prob_linkage_category].push(article);
    });

    return (
        <div>
            {orderedCategories.map(category => {
                const articles = articlesGroupedByCategory[category] || [];
                if (category === 'tutorial') {
                    articles.sort(
                        (a, b) => a.tutorial_number - b.tutorial_number
                    );
                }
                const title = categoryTitles[category] || 'Other';
                return (
                    <div key={category || 'Other'}>
                        <h3>{title}</h3>
                        {category === 'tutorial' ? (
                            <ol>
                                {articles.map(article => (
                                    <li key={article.title}>
                                        <Link to={article.slug}>
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <ul>
                                {articles.map(article => (
                                    <li key={article.title}>
                                        <Link to={article.slug}>
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProbabilisticLinkageArticles;
