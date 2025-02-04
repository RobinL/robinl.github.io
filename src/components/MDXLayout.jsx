import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from './Layout';
import PostInfo from './PostCodeLink';
import CodeBlock from './CodeBlock';
import AnchorHeader from './AnchorHeader';


const components = {
    pre: props => <div {...props}></div>,
    code: CodeBlock,
    h1: props => <AnchorHeader tag="h1" {...props} />,
    h2: props => <AnchorHeader tag="h2" {...props} />,
    h3: props => <AnchorHeader tag="h3" {...props} />,

};

export function MDXLayout({ children, pageContext }) {
    const { frontmatter } = pageContext;

    return (
        <Layout>
            <MDXProvider components={components}>
                <PostInfo frontmatter={frontmatter} />
                <div
                    key={typeof window === 'undefined' ? 'server' : 'client'}
                    id="mdx-container-div"
                    className="mdx-content space-y-4"
                >
                    {children}
                </div>
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
                <div id="mdx-container-div" className="mdx-content space-y-4">
                    {children}
                </div>
            </MDXProvider>
        </Layout>
    );
}

export default MDXLayout;
