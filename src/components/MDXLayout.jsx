import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from './Layout';
import PostInfo from './PostCodeLink';
import CodeBlock from './CodeBlock';

const components = {
    pre: props => <div {...props}></div>,
    code: CodeBlock,
};

export function MDXLayout({ children, pageContext }) {
    const { frontmatter } = pageContext;

    return (
        <Layout>
            <MDXProvider components={components}>
                <PostInfo frontmatter={frontmatter} />
                <div id="mdx-container-div">{children}</div>
            </MDXProvider>
        </Layout>
    );
}

export function MDXLayoutWide({ children, pageContext }) {
    const { frontmatter } = pageContext;

    return (
        <Layout className={'text-base mx-auto w-full max-w-screen-lg px-4'}>
            <MDXProvider components={components}>
                <PostInfo frontmatter={frontmatter} />
                <div id="mdx-container-div">{children}</div>
            </MDXProvider>
        </Layout>
    );
}

export default MDXLayout;
