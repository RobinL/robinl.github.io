import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { navigate } from 'gatsby';

const ContentFilter = ({ children }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // Extract all unique tags and determine content types from children
    const { allTags, contentTypes } = useMemo(() => {
        const tags = new Set();
        const types = new Set();

        React.Children.forEach(children, child => {
            if (child.props.tags) {
                child.props.tags.forEach(tag => tags.add(tag));
            }
            if (child.type.contentType) {
                types.add(child.type.contentType);
            }
        });

        return {
            allTags: Array.from(tags).sort(),
            contentTypes: Array.from(types).sort()
        };
    }, [children]);

    // Initialize from URL params
    useEffect(() => {
        // Only run this effect on initial client-side mount
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);
        const tagsParam = params.get('tags');
        const typesParam = params.get('types');

        // Only update if the params are different from current state
        const urlTags = tagsParam ? tagsParam.split(',').filter(tag => allTags.includes(tag)) : [];
        const urlTypes = typesParam ? typesParam.split(',').filter(type => contentTypes.includes(type)) : [];

        if (JSON.stringify(urlTags) !== JSON.stringify(selectedTags)) {
            setSelectedTags(urlTags);
        }
        if (JSON.stringify(urlTypes) !== JSON.stringify(selectedTypes)) {
            setSelectedTypes(urlTypes);
        }

    }, [allTags, contentTypes]); // Remove selectedTags and selectedTypes from deps

    // Update URL when filters change
    useEffect(() => {
        // Debounce the URL update to prevent rapid changes
        const timeoutId = setTimeout(() => {
            const params = new URLSearchParams(window.location.search);

            if (selectedTags.length > 0) {
                params.set('tags', selectedTags.join(','));
            } else {
                params.delete('tags');
            }

            if (selectedTypes.length > 0) {
                params.set('types', selectedTypes.join(','));
            } else {
                params.delete('types');
            }

            const newSearch = params.toString();
            const currentSearch = window.location.search.replace(/^\?/, '');

            // Only navigate if the search params actually changed
            if (newSearch !== currentSearch) {
                navigate(`?${newSearch}`, { replace: true });
            }
        }, 100); // 100ms debounce

        return () => clearTimeout(timeoutId);
    }, [selectedTags, selectedTypes]);

    // Toggle tag selection
    const toggleTag = useCallback((tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    }, []);

    // Toggle type selection
    const toggleType = useCallback((type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    }, []);

    // Memoize the type checking function
    const isTypeMatch = useCallback((child, selectedTypes) => {
        return selectedTypes.length === 0 ||
            (child.type.contentType && selectedTypes.includes(child.type.contentType));
    }, []);

    // Filter and sort content
    const filteredAndSortedChildren = useMemo(() => {
        return React.Children.toArray(children)
            .filter(child => {
                const matchesTags = selectedTags.length === 0 ||
                    child.props.tags?.some(tag => selectedTags.includes(tag));

                const matchesTypes = isTypeMatch(child, selectedTypes);

                return matchesTags && matchesTypes;
            })
            .sort((a, b) => {
                const dateA = new Date(a.props.date);
                const dateB = new Date(b.props.date);
                return dateB - dateA;
            });
    }, [children, selectedTags, selectedTypes, isTypeMatch]);

    // Memoize the filter buttons
    const TypeFilters = useMemo(() => (
        <div>
            <div className="text-sm text-gray-600 mb-2">Filter by type:</div>
            <div className="flex flex-wrap gap-2">
                {contentTypes.map(type => (
                    <button
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTypes.includes(type)
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    ), [contentTypes, selectedTypes, toggleType]);

    const TagFilters = useMemo(() => (
        <div>
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
    ), [allTags, selectedTags, toggleTag]);

    return (
        <div>
            <div className="mb-6 space-y-4">
                {TypeFilters}
                {TagFilters}
            </div>
            <div>
                {filteredAndSortedChildren}
            </div>
        </div>
    );
};

// Add displayName to help with debugging
ContentFilter.displayName = 'ContentFilter';

export default React.memo(ContentFilter);