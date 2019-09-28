const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(`
    query nbds {
    allMydataJson {
        nodes {
            p
            myid
            path
        }
    }
    }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMydataJson.nodes.forEach((mynode) => {
        const pagepath = mynode.path
        const myid = mynode.myid
        createPage({
            path: pagepath,
            component: path.resolve(`./src/templates/mypages.js`),
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
                myid: myid
            },
        })
    })
}


