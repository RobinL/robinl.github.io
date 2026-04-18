function h(e){return e`# Interactive blogging with Observable Notebooks and gatsby.js`}async function*d(e,t,o){let a=0;const i="Interactive blogging with Observable Notebooks and gatsby.js";let r;for(;a<i.length;){await e.delay(40);let n=t`<span>${i.substr(a,1)}</span>`;n.style.color=o.interpolateViridis(a/i.length),n.setAttribute("value",a),n.setAttribute("ascending","ascending"),a==0?r=t`<span>${n}`:r=t`${r.innerHTML}${n}`,a=a+1,yield t`<h1>${r}</h1>`}for(;a>=i.length;){await e.delay(100);let n=t`<h1>${r}</h1>`,l=n.firstChild.children;for(let b of l){let s=+b.getAttribute("value");s==i.length|s==-1&&b.toggleAttribute("ascending"),b.hasAttribute("ascending")?s--:s++,b.setAttribute("value",s),b.style.color=o.interpolateViridis(s/i.length)}a=a+1,yield n}}function c(e){return e`This website contains a variety of interactive content like my [energy usage calculator](https://robinl.github.io/robinlinacre/energy-usage) which I can create easily and host for free.  In this post I explain how the it all works.

## Observable notebooks

I use [Observable Notebooks](https://observablehq.com) as the authoring environment for interactive content.  This is my favourite programming environment because it allows me to [maximise the time I spend on the fun part of programming](https://observablehq.com/@tmcw/why-observable-for-people-who-already-have-a-text-editor).

This allows readers to not only view the code behind each page ([including this one!](https://observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb)), but also to live-edit it and fork it.  On the [Observable Notebooks](https://observablehq.com) homepage, you can see that the ability to reuse, re-mix and iterate leads to an amazing amount of creativity.

I then use [gatsby.js](gatsbyjs.org) to build my notebooks into a website.  

The idea is that you end up with the best of all worlds:  A fun, simple authoring environment with unlimited power for interactivity, which can be hosted for free on a static web host like Github pages.

What follows are a few notes about how I got everything working.  If you'd rather jump straight into the code, you can find a minimal, working template [here](https://github.com/robinl/gasby_observable_blog/), and the code for my blog is [here](https://github.com/robinl/robinlinacre).
`}function g(e){return e`## Gastby.js as a site generator

Gatsby js is a modern website generator that uses the React framework.  Javascript modules can be installed as dependencies, and used within pages on your website.  

This is a good fit because each Observable notebook can be compiled and downloaded as a JavaScript module - see [here](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks) - and so can be installed and made available as a part of a Gatsby site.`}function m(e){return e`## Rendering notebooks in gatsby

I use a React component to display each Observable notebook within a div - see [here](https://github.com/RobinL/gasby_observable_blog/blob/dev/src/components/observable_div.jsx) for the implementation.  

I then have an [page component](https://github.com/RobinL/gasby_observable_blog/blob/dev/src/components/obs_page.js) that serves as a default layout for each page on my website which contains a notebook.  

Each notebook is a standard gatsby page which imports the Observable notebook, and then passes it to the page component.  [Here's](https://github.com/RobinL/gasby_observable_blog/blob/dev/src/pages/gatsby-test-2.js) an example.   \`output_order\` allows the author to control which cells are displayed and in what order.

For a long time I experimented with the idea of loading all notebooks from a json file, and then using createPage (e.g. like  [this](https://github.com/RobinL/gasby_observable_blog/blob/14537c158c2c729cb985a56c5acc5d292c958379/gatsby-node.js#L25) to create the pages,  rather than needing a separate \`jsx\` page for each notebook.  The json would look like this:

\`\`\`json
[
    {   "page_path": "page1",
        "observable_note_name": "gatsby-test"
    },
    {   
        "page_path": "page2",
        "observable_note_name": "gatsby-test-2",
        "output_order": ["cell1", "cell2"]
    }
]
\`\`\`

I now don't think this is possible, because of the way webpack works.  See [here](https://stackoverflow.com/questions/58011164/dynamic-module-import-in-component-for-gatsby-js-site).

`}function u(e){return e`## Continuous deployment

I use Github actions for continuous deployment.  Specifically, any commits merged into dev trigger a workflow which builds the site, and pushes it to master, thus making it available as a github page.

You can see the action [here](https://github.com/RobinL/gasby_observable_blog/blob/dev/.github/workflows/main.yml).  Note you will need to generate a secret containing a [Github PAT](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) and add it to your repo's secrets.  The enables the workflow to commit code back to your repo.
`}function p(e){return e`## Authoring workflow

Once all this is set up, the authoring process is very simple:

**Step 1 - author your notebook and get the link**

Write an observable notebook, and publish it. Click the 'download code' button to get a link to the javascript module.  In the case of [this post](https://observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb), the link to the code is \`https://api.observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb.tgz?v=3\`.  

**Step 2 - yarn add the notebook to gatsby**

In your gatsby website, install the notebook using 

\`\`\`sh
yarn add https://api.observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb.tgz?v=3
\`\`\`

**Step 3 - create a new page**

Create a new page in your gatsby \`src/pages/\` directory called, say \`interactive_blogging.jsx\`.

Add the following boilerplate:

\`\`\`js
import define from "@robinl/interactive-blogging-with-observable-notebooks-and-gatsb"
import ObservablePage from "../components/obs_page"

export default ({ data }) => (
    ObservablePage(define)
)
\`\`\`


That's it!

To update a page is even easier - you just retrieve the version number of the notebook from 'history' page with the Observable notebook, and manually update the \`yarn.lock\` file with the new version number. See [here](https://github.com/RobinL/robinlinacre/commit/ad9255cc57cecfeaf3a93f6b8c9707abad558686) for an example.


You can find an example of all the code you need to add a page [here](https://github.com/RobinL/robinlinacre/pull/19), which is the pull request that created the page you're reading right now!

`}function f(e){return e`## mdx

Another good option within the gatsby ecosystem for authoring interactive pages is mdx.  This is an excellent choice if you want to, for instance, write a blog post in markdown [like this](https://robinl.github.io/robinlinacre/my_mdx_page) but add a vega lite chart.

You can find an example of a component that renders mdx [here](https://github.com/RobinL/robinlinacre/blob/c375c64428bad3021c90594e5d976dc31080de83/src/pages/my_mdx_page.jsx#L1), an \`mdx\` page that includes a vega lite chart [here](https://github.com/RobinL/robinlinacre/blob/c375c64428bad3021c90594e5d976dc31080de83/src/mdx/first_post.mdx) and a pull request that adds code syntax highlighting for these pages [here](https://github.com/RobinL/robinlinacre/pull/18/files).

`}function v(e){return e("d3")}function y(e,t){const o=e.module();return o.variable(t()).define(["md"],h),o.variable(t("message")).define("message",["Promises","html","d3"],d),o.variable(t("md1")).define("md1",["md"],c),o.variable(t("md2")).define("md2",["md"],g),o.variable(t("md3")).define("md3",["md"],m),o.variable(t("md4")).define("md4",["md"],u),o.variable(t("md5")).define("md5",["md"],p),o.variable(t("md6")).define("md6",["md"],f),o.variable(t("d3")).define("d3",["require"],v),o}export{y as default};
