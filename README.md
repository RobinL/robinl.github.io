Minimal template of a Gatsby blog hosted on Github pages where pages can be authored on https://observablehq.com.  Click [here](https://robinl.github.io/gasby_observable_blog/) for live demo.

In this template:
- Some pages e.g. [here](https://robinl.github.io/gasby_observable_blog/gatsby-test/) and [here](https://robinl.github.io/gasby_observable_blog/gatsby-test-2/) contain interactive observable notebooks.  The author can select which cells to include in what order using a simple list.
- Other pages e.g. [here](https://robinl.github.io/gasby_observable_blog/page1) are created from a json file [here](https://github.com/RobinL/gatsby_observable_template/blob/master/src/data/mydata.json).

## Workflow

In this example we add [this notebook](https://observablehq.com/@robinl/gatsby-test) to our site.

- Build the notebook on observabehq.com and publish it.
- `yarn add` the notebook to your gatsby site.  In this case `yarn add https://api.observablehq.com/@robinl/gatsby-test.tgz\?v\=3`  (note the version 3 runtime at the end, which is required).
- Run `refresh_notebooks.sh` to update your dependencies.
- Add a new page to [`src/pages`](https://github.com/RobinL/gasby_observable_blog/tree/dev/src/pages) using [this file](https://github.com/RobinL/gasby_observable_blog/blob/dev/src/pages/gatsby-test-2.js) as a template
- Push code back to Github, triggering Github Actions to build site  to master, which is then rendered as a github page.  You need to set up a token in your repo secrets for this to work, described [here](https://github.com/enriikke/gatsby-gh-pages-action#knobs--handles).

Note you can choose which named cells to include in the blog using `output_order` (see [here](https://github.com/RobinL/gasby_observable_blog/blob/dev/src/pages/gatsby-test-2.js) or leave it blank to include everything see [here](https://github.com/RobinL/gasby_observable_blog/blob/dev/src/pages/gatsby-test.js))

Cells which are views need to also include `viewof` e.g.
```
let output_order = [
    "first_cell",
    "viewof myview",
    "third_cell"
    ]
```

To make it work on your Github pages, you'll want to update the `pathPrefix` variable in `gatsby_config.json` to your repo's name.

## Notes/Issues

- For a long time I was trying to generate all notebook pages from a `data.json` file, by trying to dynamically import modules from a variable.  I now do not thing this is possible because of the way webpack works - see [here](https://stackoverflow.com/questions/58011164/dynamic-module-import-in-component-for-gatsby-js-site)

- User must install the notebook from the version 3 runtime e.g. `yarn add https://api.observablehq.com/@robin
l/gatsby-test.tgz\?v\=3`.  This will make sure you can import `define` (rather than `notebook`) from the node package.  Some tangential discussion [here](https://talk.observablehq.com/t/runtime-v3-modules/1767).

- For some reason, the yarn integrity check fails for observable notebook modules when they're installed from the `yarn.lock` file on github actions (`Integrity check failed for "mypackage" (computed integrity doesn't match our records,`).  Current solution is to delete the `resolved` line from `yarn.lock`.  This happens automatically when you run `refresh_notebooks.sh`
