import React from 'react';

const Subtitle = ({ children }) => {
    const newChildren = React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === 'p') {
            // Remove the <p> wrapper that mdx adds by default
            return child.props.children;
        }
        return child;
    });

    return (
        <h2 className="text-xl font-sans font-normal text-gray-500 mb-8">
            {newChildren}
        </h2>
    );
};

export default Subtitle;
