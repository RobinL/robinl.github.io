import React, { useState, useMemo, useEffect } from 'react';
import { navigate } from 'gatsby';

const TagFilter = ({ children }) => {
    const [selectedTags, setSelectedTags] = useState([]);

    // Extract all unique tags from children
    const allTags = useMemo(() => {
        const tags = new Set();
        React.Children.forEach(children, child => {
            if (child.props.tags) {
                child.props.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, [children]);

    // Initialize from URL params and set up URL sync
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const tagsParam = params.get('tags');
            if (tagsParam) {
                const urlTags = tagsParam.split(',').filter(tag => allTags.includes(tag));
                setSelectedTags(urlTags);
            }
        }
    }, [allTags]);

    // Toggle tag selection and update URL
    const toggleTag = (tag) => {
        setSelectedTags(prev => {
            const newTags = prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag];

            // Update URL
            const params = new URLSearchParams(window.location.search);
            if (newTags.length > 0) {
                params.set('tags', newTags.join(','));
            } else {
                params.delete('tags');
            }

            // Use replace to avoid adding to browser history
            navigate(`?${params.toString()}`, { replace: true });

            return newTags;
        });
    };

    // Filter and sort microblogs
    const filteredAndSortedChildren = React.Children.toArray(children)
        .filter(child => {
            if (selectedTags.length === 0) return true;
            return child.props.tags?.some(tag => selectedTags.includes(tag));
        })
        .sort((a, b) => {
            // Sort by date in descending order (newest first)
            const dateA = new Date(a.props.date);
            const dateB = new Date(b.props.date);
            return dateB - dateA;
        });

    return (
        <div>
            <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">Filter by tags:</div>
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag)
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                {filteredAndSortedChildren}
            </div>
        </div>
    );
};

export default TagFilter;