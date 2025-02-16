import React, { useState, useMemo, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby';
import QuoteCard from './QuoteCard';
import LinkCard from './LinkCard';

const QuotesLinks = () => {
  const [selectedTypes, setSelectedTypes] = useState(new Set(['Quote', 'Link']));
  const [selectedTags, setSelectedTags] = useState(new Set());

  // Parse URL params on component mount and when URL changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const typesParam = params.get('types');
    const tagsParam = params.get('tags');

    if (typesParam) {
      setSelectedTypes(new Set(typesParam.split(',')));
    }
    if (tagsParam) {
      setSelectedTags(new Set(tagsParam.split(',')));
    }
  }, []);

  // Update URL when filters change
  const updateURL = (types, tags) => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams();

    if (types.size > 0 && types.size < 2) {
      params.set('types', Array.from(types).join(','));
    }
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
        filter: { fileAbsolutePath: { regex: "/links_quotes_markdown/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          html
          frontmatter {
            type
            title
            author
            url
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

  const toggleType = (type) => {
    setSelectedTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      // Ensure at least one type is selected
      if (newSet.size === 0) {
        newSet.add(type);
      }
      updateURL(newSet, selectedTags);
      return newSet;
    });
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      updateURL(selectedTypes, newSet);
      return newSet;
    });
  };

  const renderContent = (node) => {
    switch (node.frontmatter.type) {
      case 'quote':
        return <QuoteCard frontmatter={node.frontmatter} html={node.html} />;
      case 'link':
        return <LinkCard frontmatter={node.frontmatter} html={node.html} />;
      default:
        return null;
    }
  };

  const filteredNodes = data.allMarkdownRemark.nodes.filter(node => {
    const typeMatches = selectedTypes.has(node.frontmatter.type.charAt(0).toUpperCase() + node.frontmatter.type.slice(1));
    const tagMatches = selectedTags.size === 0 ||
      (node.frontmatter.tags && node.frontmatter.tags.some(tag => selectedTags.has(tag)));
    return typeMatches && tagMatches;
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 space-y-3">
        {/* Type filters */}
        <div className="flex gap-2">
          {['Quote', 'Link'].map(type => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors
                ${selectedTypes.has(type)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-500'
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Tag filters */}
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

      {filteredNodes.map((node, index) => (
        <div key={index}>
          {renderContent(node)}
        </div>
      ))}
    </div>
  );
};

export default QuotesLinks;