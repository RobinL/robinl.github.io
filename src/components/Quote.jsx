import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

const formatDate = (isoDate) => {
    if (!isoDate) return null;

    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return isoDate; // Return original if invalid

    // Add ordinal suffix to day
    const day = date.getDate();
    const suffix = ['th', 'st', 'nd', 'rd'][
        day % 10 > 3 ? 0 : day % 100 - 20 >= 0 && day % 100 - 20 <= 3 ? 0 : day % 10
    ];

    const month = date.toLocaleString('en-GB', { month: 'short' });
    const year = date.getFullYear();

    return `${day}${suffix} ${month} ${year}`;
};

const Quote = ({ children, author, date, source }) => {
    const formattedDate = formatDate(date);

    return (
        <div className="my-8">
            <blockquote className="py-3 px-6 bg-gray-50 rounded not-italic relative">
                <FaQuoteLeft className="absolute top-2 left-2 text-gray-200 w-4 h-4" />
                <div className="text-gray-700 mb-4 relative z-10 pl-4">
                    <MDXProvider>
                        <div className="space-y-4">
                            {children}
                        </div>
                    </MDXProvider>
                </div>
                <footer className="text-sm flex items-center pl-4">
                    <span className="font-semibold text-gray-700">{author}</span>
                    {formattedDate && (
                        <span className="text-gray-500 ml-2">
                            • {formattedDate}
                        </span>
                    )}
                    {source && (
                        <>
                            <span className="text-gray-500 ml-2">•</span>
                            <a
                                href={source}
                                className="ml-2 text-blue-600 hover:text-blue-800 inline-flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>source</span>
                                <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                            </a>
                        </>
                    )}
                </footer>
            </blockquote>
        </div>
    );
};

export default Quote;