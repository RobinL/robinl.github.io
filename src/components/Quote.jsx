import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Quote = ({ children, author, date, source }) => {
    return (
        <div className="my-8">
            <blockquote className="py-3 px-6 bg-gray-50 rounded not-italic">
                <div className="text-gray-700 mb-4">
                    <MDXProvider>
                        <div className="space-y-4">
                            {children}
                        </div>
                    </MDXProvider>
                </div>
                <footer className="text-sm flex items-center">
                    <span className="font-semibold text-gray-700">{author}</span>
                    {date && (
                        <span className="text-gray-500 ml-2">
                            • {date}
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