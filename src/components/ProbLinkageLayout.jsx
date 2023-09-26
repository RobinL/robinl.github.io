import React from 'react';
import MDXLayout from './MDXLayout';
import TutorialNav from '../components/TutorialNav';
import CompactTutorialNav from '../components/CompactTutorialNav';

export function ProbLinkageLayout({ children, pageContext }) {
    const { frontmatter } = pageContext;

    const InnerContent = () => (
        <div>
            <CompactTutorialNav frontmatter={frontmatter} />
            {children}
            <TutorialNav frontmatter={frontmatter} />
        </div>
    );

    return (
        <MDXLayout pageContext={pageContext}>
            <InnerContent />
        </MDXLayout>
    );
}

export default ProbLinkageLayout;
