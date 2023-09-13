import React, { useState } from 'react';

const DefinitionTooltip = ({ term, definition }) => {
    const [showDefinition, setShowDefinition] = useState(false);

    const toggleDefinition = () => {
        console.log('Toggled');
        setShowDefinition(!showDefinition);
    };

    return (
        <span className="relative">
            <span
                className="underline cursor-pointer"
                onMouseEnter={toggleDefinition}
                onMouseLeave={toggleDefinition}
                onClick={toggleDefinition}
            >
                {term}
            </span>
            {showDefinition && (
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-200 border border-gray-300 p-2 w-48 text-left text-sm z-10">
                    {definition}
                </span>
            )}
        </span>
    );
};

export default DefinitionTooltip;
