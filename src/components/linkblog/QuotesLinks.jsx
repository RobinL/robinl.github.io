import React, { useState, useMemo, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby';
import QuoteCard from './QuoteCard';
import LinkCard from './LinkCard';

const getIsoDateOnly = (dateString) => {
  if (!dateString) return null;
  try {
    return dateString.substring(0, 10);
  } catch (e) {
    console.error("Error parsing date:", dateString, e);
    return null;
  }
};

const QuotesLinks = () => {
  const [selectedTypes, setSelectedTypes] = useState(new Set(['Quote', 'Link']));
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const typesParam = params.get('types');
    const tagsParam = params.get('tags');
    const dateParam = params.get('date');

    if (typesParam) {
      setSelectedTypes(new Set(typesParam.split(',')));
    } else {
      setSelectedTypes(new Set(['Quote', 'Link']));
    }

    if (tagsParam) {
      setSelectedTags(new Set(tagsParam.split(',')));
    } else {
      setSelectedTags(new Set());
    }

    if (dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
      setSelectedDate(dateParam);
    } else {
      setSelectedDate(null);
    }
  }, []);

  const updateURL = (types, tags, date) => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams();

    if (!(types.has('Quote') && types.has('Link'))) {
      if (types.size > 0) {
        params.set('types', Array.from(types).join(','));
      }
    }

    if (tags.size > 0) {
      params.set('tags', Array.from(tags).join(','));
    }

    if (date) {
      params.set('date', date);
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
      if (newSet.size === 0) {
        newSet.add(type);
      }
      updateURL(newSet, selectedTags, selectedDate);
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
      updateURL(selectedTypes, newSet, selectedDate);
      return newSet;
    });
  };

  const selectDate = (date) => {
    const newDate = date ? getIsoDateOnly(date) : null;
    setSelectedDate(newDate);
    updateURL(selectedTypes, selectedTags, newDate);
  };

  const renderContent = (node) => {
    const cardProps = {
      frontmatter: node.frontmatter,
      html: node.html,
      onDateClick: selectDate
    };

    switch (node.frontmatter.type) {
      case 'quote':
        return <QuoteCard {...cardProps} />;
      case 'link':
        return <LinkCard {...cardProps} />;
      default:
        return null;
    }
  };

  const filteredNodes = data.allMarkdownRemark.nodes.filter(node => {
    if (!node.frontmatter || !node.frontmatter.type) return false;

    const typeMatches = selectedTypes.has(node.frontmatter.type.charAt(0).toUpperCase() + node.frontmatter.type.slice(1));

    const tagMatches = selectedTags.size === 0 ||
      (node.frontmatter.tags && node.frontmatter.tags.some(tag => selectedTags.has(tag)));

    const nodeDateOnly = getIsoDateOnly(node.frontmatter.date);
    const dateMatches = !selectedDate || (nodeDateOnly === selectedDate);

    return typeMatches && tagMatches && dateMatches;
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 space-y-4">
        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium text-gray-600 mr-2">Type:</span>
          {['Quote', 'Link'].map(type => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors duration-150 ease-in-out
                ${selectedTypes.has(type)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600'
                }`}
            >
              {type}s
            </button>
          ))}
        </div>

        {allTags.length > 0 && (
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm font-medium text-gray-600 mr-2">Tags:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors duration-150 ease-in-out
                  ${selectedTags.has(tag)
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-400 hover:text-green-600'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {selectedDate && (
          <div className="flex gap-2 items-center p-2 bg-yellow-100 border border-yellow-300 rounded">
            <span className="text-sm font-medium text-yellow-800">
              Filtering by date: {selectedDate}
            </span>
            <button
              onClick={() => selectDate(null)}
              className="ml-auto px-2 py-0.5 text-xs rounded border bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            >
              Clear Date
            </button>
          </div>
        )}
      </div>

      {filteredNodes.length > 0 ? (
        filteredNodes.map((node, index) => (
          <div key={index}>
            {renderContent(node)}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-8">No items match the current filters.</p>
      )}
    </div>
  );
};

export default QuotesLinks;