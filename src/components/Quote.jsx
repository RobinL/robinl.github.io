import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';
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

const Quote = ({ children, author, date, source }) => {
    const formattedDate = formatDate(date);

    return (
        <div className="my-8">
            <blockquote className="py-3 px-6 bg-gray-50 rounded not-italic relative">
                <FaQuoteLeft className="absolute top-2 left-2 text-gray-200 w-4 h-4" />
                <div className="text-gray-700 mb-4 relative z-10 pl-4">
                    <div className="space-y-4">
                        {children}
                    </div>
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
                                <FaUpRightFromSquare className="ml-1 w-3 h-3" />
                            </a>
                        </>
                    )}
                </footer>
            </blockquote>
        </div>
    );
};

export default Quote;