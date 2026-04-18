import React from 'react';

export default function Subtitle({ children }) {
  const content = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'p') return child.props.children;
    return child;
  });

  return <p className="post-subtitle">{content}</p>;
}

