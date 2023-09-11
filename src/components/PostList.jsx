import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CategoryPostList from './CategoryPostList';
import CategoryFilter from './CategoryFilter';

const usePosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: {
                    frontmatter: { post_category: { ne: "non_blog_post" } }
                }
                sort: { fields: frontmatter___post_date, order: DESC }
            ) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        post_date(formatString: "YYYY-MM-DD")
                        post_category
                    }
                }
            }
        }
    `);

    return data.allMdx.nodes;
};

const filterPosts = (posts, selectedCategory) => {
    if (selectedCategory === 'all') {
        return posts;
    } else {
        return posts.filter(
            post => post.frontmatter.post_category === selectedCategory
        );
    }
};

const groupPostsByCategory = (posts, includeLatest = false) => {
    let categorizedPosts = posts.reduce((acc, node) => {
        const category = node.frontmatter.post_category || 'other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(node);
        return acc;
    }, {});

    if (includeLatest) {
        categorizedPosts = { latest: posts.slice(0, 3), ...categorizedPosts };
    }

    return categorizedPosts;
};

const PostList = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const allPosts = usePosts();
    const filteredPosts = filterPosts(allPosts, selectedCategory);
    const includeLatest = selectedCategory === 'all';
    const postsByCategory = groupPostsByCategory(filteredPosts, includeLatest);

    const headerOrder = [
        'latest',
        'data',
        'probabilistic_linkage',
        'energy',
        'other',
    ];

    const categoryTitles = {
        latest: 'Latest Posts',
        data: 'Data science and engineering',
        probabilistic_linkage: 'Probabilistic record linkage',
        energy: 'Energy and climate change',
        other: 'Other',
    };

    const allCategories = [
        ...new Set(
            allPosts.map(post => post.frontmatter.post_category || 'other')
        ),
    ];

    const sortedCategories = allCategories.sort((a, b) => {
        const indexA = headerOrder.indexOf(a);
        const indexB = headerOrder.indexOf(b);

        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
    });

    return (
        <div>
            <div>
                <CategoryFilter
                    categories={sortedCategories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>
            {headerOrder.map(
                (categoryKey, index) =>
                    postsByCategory[categoryKey]?.length > 0 && (
                        <CategoryPostList
                            key={index}
                            categoryKey={categoryKey}
                            posts={postsByCategory[categoryKey]}
                            categoryTitles={categoryTitles}
                        />
                    )
            )}
        </div>
    );
};

export default PostList;
