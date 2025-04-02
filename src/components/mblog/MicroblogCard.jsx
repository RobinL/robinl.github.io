import React, { useEffect, useState, useRef } from 'react';
import { FaCalendar, FaTags } from 'react-icons/fa6';
import CodeBlock from '../CodeBlock';
import { createRoot } from 'react-dom/client'; // Add this import

// Helper function to generate slugs
const slugify = (str) => {
    if (!str) return '';
    return String(str)
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};

const formatDate = (isoDate) => {
    if (!isoDate) return null;
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return isoDate;

    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    }).format(date);
};

// Function to process HTML and extract code blocks
const processHtmlWithCodeBlocks = (html) => {
    if (typeof window === 'undefined' || !html) return { processedHtml: html, codeBlocks: [] };

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const codeBlocks = [];

    // Find all pre > code elements (standard markdown code block format)
    const preCodeElements = doc.querySelectorAll('pre > code');

    preCodeElements.forEach((codeElement, index) => {
        // Get language class from code element
        const languageClass = Array.from(codeElement.classList).find(cls =>
            cls.startsWith('language-')
        );

        // Extract the code content
        const code = codeElement.textContent;

        // Add a placeholder where the code block should be rendered
        const placeholder = document.createElement('div');
        placeholder.setAttribute('data-code-block-id', index);
        codeElement.parentElement.replaceWith(placeholder);

        // Store code block data for later rendering
        codeBlocks.push({
            id: index,
            code,
            language: languageClass || 'language-text'
        });
    });

    return {
        processedHtml: doc.body.innerHTML,
        codeBlocks
    };
};

const MicroblogCard = ({ frontmatter, html }) => {
    const formattedDate = formatDate(frontmatter.date);
    const [processedContent, setProcessedContent] = useState({ processedHtml: html, codeBlocks: [] });
    const contentRef = useRef(null);

    // Generate slug from title or date as fallback
    const postSlug = slugify(frontmatter.title || frontmatter.date || '');

    useEffect(() => {
        const result = processHtmlWithCodeBlocks(html);
        setProcessedContent(result);
    }, [html]);

    useEffect(() => {
        if (!contentRef.current) return;

        const placeholders = contentRef.current.querySelectorAll('[data-code-block-id]');

        placeholders.forEach(placeholder => {
            const blockId = parseInt(placeholder.getAttribute('data-code-block-id'), 10);
            const codeBlock = processedContent.codeBlocks.find(block => block.id === blockId);

            if (codeBlock) {
                const wrapper = document.createElement('div');
                wrapper.className = 'my-4';

                const root = createRoot(wrapper);
                root.render(
                    <CodeBlock className={codeBlock.language}>
                        {codeBlock.code}
                    </CodeBlock>
                );

                placeholder.replaceWith(wrapper);
            }
        });
    }, [processedContent, contentRef.current]);

    return (
        <div className="my-8" id={postSlug}>
            <article className="py-4 px-6 bg-gray-50 rounded shadow-sm">
                {frontmatter.title && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        <a href={`#${postSlug}`} className="text-inherit hover:underline focus:underline focus:outline-none">
                            {frontmatter.title}
                        </a>
                    </h3>
                )}
                <div className="text-gray-700 mb-4">
                    <div
                        ref={contentRef}
                        className="space-y-4 prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: processedContent.processedHtml }}
                    />
                </div>
                <footer className="text-sm flex items-center flex-wrap gap-4 text-gray-600">
                    {formattedDate && (
                        <div className="flex items-center">
                            <FaCalendar className="w-3 h-3 mr-2" />
                            <span>{formattedDate}</span>
                        </div>
                    )}
                    {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex items-center">
                            <FaTags className="w-3 h-3 mr-2" />
                            <div className="flex gap-2">
                                {frontmatter.tags.map((tag) => (
                                    <span key={tag} className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </footer>
            </article>
        </div>
    );
};

export default MicroblogCard;