import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ children, className }) => {
    if (!className) {
        return <code>{children}</code>;
    }
    const language = className.replace(/language-/, '');

    return (
        <div className="mb-8 mt-8">
            <Highlight
                code={children.trim()}
                language={language}
                theme={themes.vsDark}
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <pre
                        className={className}
                        style={{ ...style, padding: '20px', fontSize: '0.8em' }}
                    >
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
};

export default CodeBlock;
