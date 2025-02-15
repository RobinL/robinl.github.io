import React from 'react';
import { FaCalendar, FaLink, FaTags } from 'react-icons/fa6';
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

const LinkCard = ({ title, description, url, date, tags = [] }) => {
    const formattedDate = formatDate(date);

    return (
        <div className="my-8">
            <div className="py-3 px-6 bg-gray-50 rounded relative">
                <FaLink className="absolute top-2 left-2 text-gray-200 w-4 h-4" />
                <div className="text-gray-700 mb-4 relative z-10 pl-4">
                    <a
                        href={url}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-lg inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title}
                        <FaUpRightFromSquare className="ml-2 w-3 h-3" />
                    </a>
                    {description && (
                        <p className="mt-2 text-gray-600">{description}</p>
                    )}
                </div>
                <footer className="text-sm flex items-center flex-wrap gap-4 pl-4 text-gray-600">
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
                                {tags.map((tag) => (
                                    <span key={tag} className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </footer>
            </div>
        </div>
    );
};

export default LinkCard;