import React from 'react';

const Footer = () => {
    return (
        <div className="text-center">
            <hr className="border-gray-300" />
            <footer className="mt-4">
                <p className="text-sm text-gray-500">
                    <a href="/">Back home</a>
                </p>
                <p className="text-sm text-gray-500">
                    This site is built using{' '}
                    <a href="https://observablehq.com">Observable HQ</a> and{' '}
                    <a href="https://gatsbyjs.org">Gatsby.js</a>. Source code{' '}
                    <a href="https://github.com/robinl/robinlinacre">here</a>.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
