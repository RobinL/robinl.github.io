import React from 'react';
import { Link } from 'gatsby';

const CategoryPostList = ({ categoryKey, posts = [], categoryTitles }) => (
    <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">
            {categoryTitles[categoryKey] || categoryKey}
        </h2>
        {categoryKey === 'probabilistic_linkage' && (
            <div className="mb-2 italic">
                <Link to="/probabilistic_linkage/">
                    Click here for probabilistic linkage training materials
                    homepage.
                </Link>
            </div>
        )}
        <div>
            {posts.map(node => (
                <div
                    key={node.frontmatter.title}
                    className="grid grid-cols-[auto,1fr] pb-2 items-start"
                >
                    <div className="text-base text-gray-500 font-source-sans w-24">
                        {node.frontmatter.post_date}
                    </div>
                    <div className="text-base min-w-0">
                        <Link to={`${node.fields.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default CategoryPostList;
