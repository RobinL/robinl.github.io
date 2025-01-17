import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { FaCalendar, FaTags } from 'react-icons/fa';

const formatDate = (isoDate) => {
    if (!isoDate) return null;

    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return isoDate;

    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};

const Microblog = ({ children, title, date, tags = [] }) => {
    const formattedDate = formatDate(date);

    return (
        <div className="my-8">
            <article className="py-4 px-6 bg-gray-50 rounded shadow-sm">
                {title && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                )}
                <div className="text-gray-700 mb-4">
                    <MDXProvider>
                        <div className="space-y-4">
                            {children}
                        </div>
                    </MDXProvider>
                </div>
                <footer className="text-sm flex items-center flex-wrap gap-4 text-gray-600">
                    {formattedDate && (
                        <div className="flex items-center">
                            <FaCalendar className="w-3 h-3 mr-2" />
                            <span>{formattedDate}</span>
                        </div>
                    )}
                    {tags && tags.length > 0 && (
                        <div className="flex items-center">
                            <FaTags className="w-3 h-3 mr-2" />
                            <div className="flex gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </footer>
            </article>
        </div>
    );
};

export default Microblog;