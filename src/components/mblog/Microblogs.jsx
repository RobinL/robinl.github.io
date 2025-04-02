import React, { useState, useMemo, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby';
import MicroblogCard from './MicroblogCard';

// Helper function to generate slugs
const slugify = (str) => {
    if (!str) return '';
    return String(str)
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};

const Microblogs = () => {
    const [selectedTags, setSelectedTags] = useState(new Set());

    // Parse URL params on component mount and when URL changes
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);
        const tagsParam = params.get('tags');

        if (tagsParam) {
            setSelectedTags(new Set(tagsParam.split(',')));
        }
    }, []);

    // Update URL when filters change
    const updateURL = (tags) => {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams();

        if (tags.size > 0) {
            params.set('tags', Array.from(tags).join(','));
        }

        const search = params.toString();
        navigate(
            `${window.location.pathname}${search ? '?' + search : ''}`,
            { replace: true }
        );
    };

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/microblog_md/" } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    html
                    frontmatter {
                        title
                        date
                        tags
                    }
                }
            }
        }
    `);

    // Get unique tags from all nodes
    const allTags = useMemo(() => {
        const tags = new Set();
        data.allMarkdownRemark.nodes.forEach(node => {
            if (node.frontmatter.tags) {
                node.frontmatter.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, [data]);

    const toggleTag = (tag) => {
        setSelectedTags(prev => {
            const newSet = new Set(prev);
            if (newSet.has(tag)) {
                newSet.delete(tag);
            } else {
                newSet.add(tag);
            }
            updateURL(newSet);
            return newSet;
        });
    };

    const filteredNodes = data.allMarkdownRemark.nodes.filter(node => {
        return selectedTags.size === 0 ||
            (node.frontmatter.tags && node.frontmatter.tags.some(tag => selectedTags.has(tag)));
    });

    return (
        <div className="max-w-3xl mx-auto">
            {/* Tag filters */}
            <div className="mb-6">
                <div className="flex gap-2 flex-wrap">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 text-sm rounded-full border transition-colors
                                ${selectedTags.has(tag)
                                    ? 'bg-green-500 text-white border-green-500'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-500'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {filteredNodes.map((node, index) => {
                const postSlug = slugify(node.frontmatter.title || node.frontmatter.date || '');
                return (
                    <div key={index} id={postSlug} className="my-8">
                        <MicroblogCard
                            frontmatter={node.frontmatter}
                            html={node.html}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Microblogs;