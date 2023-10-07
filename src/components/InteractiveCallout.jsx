import React from 'react';
import { FaMagic } from 'react-icons/fa';

const InteractiveCallout = ({ children }) => (
    <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 py-2 px-4 mb-4"
        role="alert"
    >
        <div className="flex">
            <div>
                <FaMagic className="text-yellow-400 mr-4" />
            </div>
            <div>
                <p className="mb-0">{children}</p>
            </div>
        </div>
    </div>
);

export default InteractiveCallout;
