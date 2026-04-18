import React from 'react';

export default function ObservableCell({ cellName, className = '', style }) {
  return (
    <div
      className={`observable-cell ${className}`.trim()}
      data-observable-cell={cellName}
      style={style}
    />
  );
}

