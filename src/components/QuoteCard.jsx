import React from 'react';
import { FaCalendar, FaQuoteLeft, FaTags } from 'react-icons/fa6';
import { FaUpRightFromSquare } from 'react-icons/fa6';

const formatDate = (isoDate) => {
    if (!isoDate) return null;
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return isoDate;

    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    }).format(date);
};

const QuoteCard = ({ frontmatter, html }) => {
    const formattedDate = formatDate(frontmatter.date);

    // Split the HTML into quote and non-quote parts
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Get blockquote content
    const blockquote = tempDiv.querySelector('blockquote');
    const quoteContent = blockquote ? blockquote.innerHTML : '';

    // Get remaining content (excluding the blockquote)
    blockquote?.remove();
    const additionalContent = tempDiv.innerHTML.trim();

    return (
        <div className="my-8">
            <div className="py-3 px-6 bg-gray-50 rounded">
                <div className="relative">
                    <FaQuoteLeft className="absolute -top-1 -left-1 text-gray-200 w-4 h-4" />
                    <blockquote className="not-italic pl-4">
                        <div className="text-gray-700 relative z-10">
                            <div className="space-y-4" dangerouslySetInnerHTML={{ __html: quoteContent }} />
                            <div className="mt-3 font-semibold text-gray-700">
                                — {frontmatter.author}
                            </div>
                        </div>
                    </blockquote>

                    {additionalContent && (
                        <div
                            className="mt-4 text-gray-700 prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: additionalContent }}
                        />
                    )}
                </div>

                <footer className="mt-4 text-sm flex items-center flex-wrap gap-4 text-gray-600  border-gray-200 pt-3">
                    {formattedDate && (
                        <div className="flex items-center">
                            <FaCalendar className="w-3 h-3 mr-2" />
                            <span>{formattedDate}</span>
                        </div>
                    )}
                    {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex items-center">
                            <FaTags className="w-3 h-3 mr-2" />
                            <div className="flex gap-2">
                                {frontmatter.tags.map((tag) => (
                                    <span key={tag} className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {frontmatter.url && (
                        <a
                            href={frontmatter.url}
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>source</span>
                            <FaUpRightFromSquare className="ml-1 w-3 h-3" />
                        </a>
                    )}
                </footer>
            </div>
        </div>
    );
};

export default QuoteCard;