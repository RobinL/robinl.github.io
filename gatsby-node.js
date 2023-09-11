const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const slug = createFilePath({ node, getNode });
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};
