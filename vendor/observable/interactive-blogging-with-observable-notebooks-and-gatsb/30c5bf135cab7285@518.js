// https://observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb@518
function _1(md){return(
md`# Interactive blogging with Observable Notebooks and gatsby.js`
)}

async function* _message(Promises,html,d3)
{
  let i = 0;
  const text = "Interactive blogging with Observable Notebooks and gatsby.js";
  let message;

  while (i < text.length) {
    await Promises.delay(40);
    let span = html`<span>${text.substr(i, 1)}</span>`;
    span.style.color = d3.interpolateViridis(i / text.length);

    span.setAttribute("value", i);
    span.setAttribute("ascending", "ascending");
    if (i == 0) {
      message = html`<span>${span}`;
    } else {
      message = html`${message.innerHTML}${span}`;
    }
    i = i + 1;
    yield html`<h1>${message}</h1>`;
  }

  while (i >= text.length) {
    await Promises.delay(100);
    let current_message = html`<h1>${message}</h1>`;

    let current_spans = current_message.firstChild.children;

    for (let span of current_spans) {
      let v = +span.getAttribute("value");

      if ((v == text.length) | (v == -1)) {
        span.toggleAttribute("ascending");
      }

      

      span.hasAttribute("ascending") ? v-- : v++;
      span.setAttribute("value", v);
      span.style.color = d3.interpolateViridis(v / text.length);
      // span.style.fontSize = Math.sin(v / 10) + 20 + "px";
    }
    i = i + 1;
    


    yield current_message;
  }
}


function _md1(md){return(
md`This website contains a variety of interactive content like my [energy usage calculator](https://robinl.github.io/robinlinacre/energy-usage) which I can create easily and host for free.  In this post I explain how the it all works.

## Observable notebooks

I use [Observable Notebooks](https://observablehq.com) as the authoring environment for interactive content.  This is my favourite programming environment because it allows me to [maximise the time I spend on the fun part of programming](https://observablehq.com/@tmcw/why-observable-for-people-who-already-have-a-text-editor).

This allows readers to not only view the code behind each page ([including this one!](https://observablehq.com/@robinl/interactive-blogging-with-observable-notebooks-and-gatsb)), but also to live-edit it and fork it.  On the [Observable Notebooks](https://observablehq.com) homepage, you can see that the ability to reuse, re-mix and iterate leads to an amazing amount of creativity.

I then use [gatsby.js](gatsbyjs.org) to build my notebooks into a website.  

The idea is that you end up with the best of all worlds:  A fun, simple authoring environment with unlimited power for interactivity, which can be hosted for free on a static web host like Github pages.

What follows are a few notes about how I got everything working.  If you'd rather jump straight into the code, you can find a minimal, working template [here](https://github.com/robinl/gasby_observable_blog/), and the code for my blog is [here](https://github.com/robinl/robinlinacre).
`
)}

function _md2(md){return(
md`## Gastby.js as a site generator

Gatsby js is a modern website generator that uses the React framework.  Javascript modules can be installed as dependencies, and used within pages on your website.  

This is a good fit because each Observable notebook can be compiled and downloaded as a JavaScript module - see [here](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks) - and so can be installed and made available as a part of a Gatsby site.`
)}

function _md3(md){return(
md`## Rendering notebooks in gatsby

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

`
)}

function _md4(md){return(
md`## Continuous deployment

I use Github actions for continuous deployment.  Specifically, any commits merged into dev trigger a workflow which builds the site, and pushes it to master, thus making it available as a github page.

You can see the action [here](https://github.com/RobinL/gasby_observable_blog/blob/dev/.github/workflows/main.yml).  Note you will need to generate a secret containing a [Github PAT](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) and add it to your repo's secrets.  The enables the workflow to commit code back to your repo.
`
)}

function _md5(md){return(
md`## Authoring workflow

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

`
)}

function _md6(md){return(
md`## mdx

Another good option within the gatsby ecosystem for authoring interactive pages is mdx.  This is an excellent choice if you want to, for instance, write a blog post in markdown [like this](https://robinl.github.io/robinlinacre/my_mdx_page) but add a vega lite chart.

You can find an example of a component that renders mdx [here](https://github.com/RobinL/robinlinacre/blob/c375c64428bad3021c90594e5d976dc31080de83/src/pages/my_mdx_page.jsx#L1), an \`mdx\` page that includes a vega lite chart [here](https://github.com/RobinL/robinlinacre/blob/c375c64428bad3021c90594e5d976dc31080de83/src/mdx/first_post.mdx) and a pull request that adds code syntax highlighting for these pages [here](https://github.com/RobinL/robinlinacre/pull/18/files).

`
)}

function _d3(require){return(
require("d3")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("message")).define("message", ["Promises","html","d3"], _message);
  main.variable(observer("md1")).define("md1", ["md"], _md1);
  main.variable(observer("md2")).define("md2", ["md"], _md2);
  main.variable(observer("md3")).define("md3", ["md"], _md3);
  main.variable(observer("md4")).define("md4", ["md"], _md4);
  main.variable(observer("md5")).define("md5", ["md"], _md5);
  main.variable(observer("md6")).define("md6", ["md"], _md6);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
