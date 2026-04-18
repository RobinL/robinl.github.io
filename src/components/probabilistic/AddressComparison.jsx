import React from 'react';

function renderAstroNode(node) {
  if (Array.isArray(node)) return node.map((child, index) => <React.Fragment key={index}>{renderAstroNode(child)}</React.Fragment>);
  if (!node || typeof node !== 'object' || !('astro:jsx' in node)) return node;

  const { type, props = {} } = node;
  const { children, ...rest } = props;
  const elementType = typeof type === 'symbol' ? React.Fragment : type;
  return React.createElement(elementType, rest, renderAstroNode(children));
}

export default function AddressComparison({ addressA, addressB, isMatch }) {
  const colour = isMatch ? '#16a34a' : '#dc2626';
  const word = isMatch ? 'match' : 'non-match';
  const icon = isMatch ? '✅' : '❌';

  const preStyle = {
    margin: 0,
    padding: '0.25rem',
    background: '#f3f4f6',
    borderRadius: '0.25rem',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    whiteSpace: 'pre-wrap',
    lineHeight: 1.3,
  };

  return (
    <div className="address-comparison" style={{ borderColor: colour }}>
      <div style={{ flex: 1 }}>
        <pre style={preStyle}>{renderAstroNode(addressA)}</pre>
        <pre style={{ ...preStyle, marginTop: '0.35rem' }}>{renderAstroNode(addressB)}</pre>
      </div>
      <div className="address-comparison-result" style={{ color: colour }}>
        <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{icon}</span>
        {word}
      </div>
    </div>
  );
}
