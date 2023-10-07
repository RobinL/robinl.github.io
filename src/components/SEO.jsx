import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const SEO = ({ frontmatter }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
        twitterUsername,
    } = useSiteMetadata();

    const seo = {
        title: frontmatter?.title || defaultTitle,
        description: frontmatter?.description || defaultDescription,
        image: `${siteUrl}${frontmatter?.image || image}`,
        url: `${siteUrl}${frontmatter?.pathname || ``}`,
        twitterUsername,
        ...frontmatter,
    };

    const stylesheetLink = frontmatter?.stylesheet;

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {stylesheetLink && (
                <link
                    rel="stylesheet"
                    type="text/css"
                    href={`/styles/${stylesheetLink}`}
                />
            )}
        </>
    );
};
