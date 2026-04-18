import React from 'react';

function renderAstroNode(node) {
  if (Array.isArray(node)) return node.map((child, index) => <React.Fragment key={index}>{renderAstroNode(child)}</React.Fragment>);
  if (!node || typeof node !== 'object' || !('astro:jsx' in node)) return node;

  const { type, props = {} } = node;
  const { children, ...rest } = props;
  const elementType = typeof type === 'symbol' ? React.Fragment : type;
  return React.createElement(elementType, rest, renderAstroNode(children));
}

export default function AddressCandidatesComparison({ messyAddress, candidates = [] }) {
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
    <div className="address-candidates-comparison">
      <div>
        <span className="address-label">Messy address</span>
        <pre style={{ ...preStyle, marginTop: '0.25rem' }}>{renderAstroNode(messyAddress)}</pre>
      </div>
      <div>
        <span className="address-label">
          {candidates.length === 1 ? 'Candidate address' : 'Candidate addresses'}
        </span>
        <div className="address-candidate-list">
          {candidates.map(({ address, isMatch }, index) => (
            <div className="address-candidate-row" key={index}>
              <span className="address-candidate-number">{index + 1}.</span>
              <pre
                className={isMatch === true ? 'is-match' : isMatch === false ? 'is-non-match' : ''}
                style={preStyle}
              >
                {renderAstroNode(address)}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
