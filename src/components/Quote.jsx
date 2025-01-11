import React from 'react';

const Quote = ({ text, author, date }) => {
    return (
        <div className="my-6 border-l-4 border-blue-500">
            <blockquote className="pl-6 py-3 bg-gray-50 rounded-r">
                <p className="text-gray-700 italic mb-3">{text}</p>
                <footer className="text-sm">
                    <span className="font-semibold text-blue-600">{author}</span>
                    {date && (
                        <span className="text-gray-500 ml-2">
                            • {date}
                        </span>
                    )}
                </footer>
            </blockquote>
        </div>
    );
};

export default Quote;