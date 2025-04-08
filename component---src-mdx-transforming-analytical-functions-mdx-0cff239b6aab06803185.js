"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[6732],{1951:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var n=a(1151),i=a(7294),o=a(7848),r=a(7825);const s=e=>i.createElement(r.H,{frontmatter:e.pageContext.frontmatter});function l(e){const t=Object.assign({h1:"h1",p:"p",h3:"h3",a:"a",strong:"strong",h4:"h4",ol:"ol",li:"li",img:"img"},(0,n.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.h1,null,"Transforming analytical functions by mainstreaming data science"),"\n",i.createElement(t.p,null,"In government and beyond, organisations are aiming to become more data driven. The widespread adoption of data science approaches throughout analytical teams is key to achieving these aims. However, the value of data science is often understood too narrowly, and a misplaced focus can cause businesses to miss out on the most significant benefits."),"\n",i.createElement(t.p,null,"This post describes how data science provides a new approach to tackling analytical problems. This approach can be used by all analysts, and results in a sustained increase in efficiency, quality of analysis, impact, and the pace of analytical innovation. I call it post-hype data science."),"\n",i.createElement(t.h3,null,"A new approach to analytical projects"),"\n",i.createElement(t.p,null,"For me, data science boils down to applying the most powerful tools, techniques and ways of working to solve analytical problems. Most of the value comes from applying new ways of working and better tools to traditional problems, rather than through the application of the cutting edge techniques like machine learning and neural networks, which are sometimes seen as synonymous with data science."),"\n",i.createElement(t.p,null,"If data science is really just a new way of working, what explains its ",i.createElement(t.a,{href:"https://trends.google.com/trends/explore?date=all&q=%22data%20science%22"},"dramatic rise")," in recent years? It’s a consequence of a ",i.createElement(t.a,{href:"https://beta.observablehq.com/@robinl/relative-popularity-of-analytical-software-using-google-t"},"rapid and radical improvemen"),"t in the analysts’ toolset, which enable this new workflow. Free and open source tools like ",i.createElement(t.a,{href:"https://stackoverflow.blog/2017/10/10/impressive-growth-r/"},"R")," and ",i.createElement(t.a,{href:"https://stackoverflow.blog/2017/10/10/impressive-growth-r/"},"Python")," are now the ",i.createElement(t.a,{href:"https://www.kaggle.com/surveys/2017#what"},"most popular tools")," used by data scientists, and are some of the world’s fastest growing programming languages. ‘Social Coding’ tools like Github, which greatly facilitate collaboration between analysts who may never have met in person, have become ",i.createElement(t.a,{href:"https://trends.google.com/trends/explore?date=all&q=github"},"enormously more popular in the last decade"),"."),"\n",i.createElement(t.p,null,"Across multiple disciplines, analysts are finding that these tools can lead to radically different ways of working. For instance, in academia, the reproducibility crisis is leading academics to ",i.createElement(t.a,{href:"https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/"},"question the traditional approach to publishing papers"),", and a leading economist has ",i.createElement(t.a,{href:"https://paulromer.net/jupyter-mathematica-and-the-future-of-the-research-paper/"},"recently said")," that open source data science tools are “well on the way to becoming a standard for exchanging research results¹.”"),"\n",i.createElement(t.h3,null,i.createElement(t.strong,null,"What does this mean for the future of analytical work?")),"\n",i.createElement(t.h4,null,"Consequence 1: New ways of working unlock time for analysts to develop more insight, and enable them to respond faster as business questions change"),"\n",i.createElement(t.p,null,"For an analytical result to be useful, we need to know three things:"),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"What is the analytical result and why is it important?"),"\n",i.createElement(t.li,null,"What methodology did we use and how do we know we can trust it?"),"\n",i.createElement(t.li,null,"Why did we choose this methodology versus alternatives?"),"\n"),"\n",i.createElement(t.p,null,"Historically, analysts have solved these problems with a customer-facing write up, a technical write up, and a quality assurance log — standalone documents written mainly in prose. The analysis itself has been conducted separately, most often in Excel and VBA. This package of documents underpins Analytical Quality Assurance (AQA), and is also essential for corporate knowledge retention."),"\n",i.createElement(t.img,{src:"https://cdn-images-1.medium.com/max/800/0*mvbbMCVnCQ3SWwdO",alt:""}),"\n",i.createElement(t.p,null,"This approach works, but it is time consuming, and difficult to iterate. Each element needs to be updated or recreated as things change, and we risk the documents getting out of sync with each other. Since copies of data are often embedded in the same spreadsheet as the main logic, the code cannot be shared widely for data security reasons, resulting in analytical projects being held in silos."),"\n",i.createElement(t.p,null,"The approach taken by data scientists is different. We believe that the most precise and succinct statement of a method is computer code which, when run, transforms the ‘raw materials’ (data and assumptions) into an analytical result."),"\n",i.createElement(t.img,{src:"https://cdn-images-1.medium.com/max/800/1*gk2a9n7T4irY6HIglKfjBw.png",alt:""}),"\n",i.createElement(t.p,null,"This new way of working is an improvement because:"),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"It’s fully reproducible, and therefore easy to subject to peer review because the methodology is fully verifiable. Data provenance and processing logic is clear."),"\n",i.createElement(t.li,null,"Data is read directly from canonical data stores rather than being copied, and results can be updated at the click of a button if a newer dataset becomes available. This simplifies the problem of data management, and brings organisations closer to having a ‘single version of the truth’."),"\n",i.createElement(t.li,null,"It enables automated approaches to quality assurance which can be written incrementally over the lifetime of the project, and which are run every time the project is changed — known as ‘unit tests’. These enable rapid iteration. Because unit tests can be automatically re-run in the future, the quality assurance status of the project is clear, and this opens the door to future re-use of the code."),"\n",i.createElement(t.li,null,"Well written code is succinct and mostly self documenting. The technical write up can no longer fall out of sync with the model because they are not two independent things. Where documentation is required, we can use ",i.createElement(t.a,{href:"http://www.datacarpentry.org/rr-literate-programming/03-explore-knitr/"},"literate programming")," to ensure it keeps in sync with the logic."),"\n",i.createElement(t.li,null,"By using version control tools like Github, we can automatically store large amounts of information about how and why the code was developed. For instance, the project’s ‘to do’ list or roadmap can be directly linked to changes in the code itself, reducing ambiguity about what decision were made, why and when. Version control provides a ",i.createElement(t.a,{href:"https://moj-analytical-services.github.io/platform_user_guidance/annexes.html#what-are-the-benefits-of-github-and-why-do-we-recommend-it"},"host of other benefits"),". Self-documenting, version controlled code helps enormously with corporate knowledge retention."),"\n",i.createElement(t.li,null,"Since code and data are separate, we can share the code widely, including on the open internet, whilst protecting potentially sensitive data. Colleagues can easily search and discover historical projects."),"\n"),"\n",i.createElement(t.p,null,"By enabling much faster iteration with greater confidence of quality, analysts can deliver more relevant evidence faster."),"\n",i.createElement(t.p,null,"This new workflow also enables analysis to be embedded more widely in organisations — into situations where speed is critical. For example, operational decision makers often data to be up-to-date for analysis to be useful to them. This is only possible when the analytical process is fully automated and reproducible."),"\n",i.createElement(t.h4,null,"Consequence 2: Sharing and reuse will be the norm not the exception, reducing the complexity of our work whilst increasing its sophistication."),"\n",i.createElement(t.p,null,"Data scientists’ heavier reliance on high-quality, reproducible code has unlocked an explosion in the sharing and re-use of analytical work. As data scientists, we have a tangible sense of being part of a worldwide community who are empowered to continuously improve our own tools. For example, there are now over ",i.createElement(t.a,{href:"https://cran.r-project.org/web/packages/available_packages_by_name.html"},"10,000 R ‘packages’")," — reusable chunks of code and analysis, which can be downloaded and used for free²."),"\n",i.createElement(t.p,null,"Re-use is great for saving time, but some of the biggest benefits relate to its ability to help us manage complexity, create a better division of labour, and incrementally increase quality. By creating small, high quality code libraries which can be re-used in new analytical projects, analysts can quickly assemble these ‘lego blocks’ into powerful new results using surprisingly little code, which in turn makes new work easier to understand. Since these ‘lego blocks’ are re-used in multiple projects, any improvements can result in widespread benefits."),"\n",i.createElement(t.p,null,"The result is a sustained increase in analytical innovation. We can continuously improve the quality and power of our models, rather than reinventing the wheel in different organisations or teams at different times³."),"\n",i.createElement(t.h3,null,"Making it happen"),"\n",i.createElement(t.p,null,"At an organisational level, the transition to new skills and ways of working is a huge challenge, and I may write about it separately."),"\n",i.createElement(t.p,null,"However, as an individual analyst, one of the the most exciting things about data science is that the tools and high quality training materials are available online for free. Building a data science skillset requires time and dedication, but doesn’t necessarily need the kind of expensive classroom-based courses that are often needed for proprietary tools."),"\n",i.createElement(t.p,null,"You can begin your journey by trying out some of the most powerful data science tools in your web browser by clicking ",i.createElement(t.a,{href:"http://jupyter.org/try"},"this link"),"⁴. You can find the cross government data science community’s list of free, high quality learning resource for Python and R ",i.createElement(t.a,{href:"https://docs.google.com/document/d/1aAeiiXhrAVZPVrbKK3k6ELxbZyeKuTHnr2-pCIyAtfQ/edit#"},"here")," and ",i.createElement(t.a,{href:"https://docs.google.com/document/d/1R4hBMf26T9HEnCdVz56PpZhwiCv5RhberYL3BxOSKsA/edit"},"here"),". What are you waiting for?"),"\n",i.createElement(t.h4,null,"Endnotes"),"\n",i.createElement(t.p,null,"¹ To get a sense of the power of this software, you can run the analysis behind a recent Nobel Prize winning physics paper in a web browser with no special software ",i.createElement(t.a,{href:"https://losc.ligo.org/tutorials"},"here"),"."),"\n",i.createElement(t.p,null,"² We see this — for example — in the outstanding ",i.createElement(t.a,{href:"https://github.com/nacnudus/tidyxl"},"tidyxl")," package, which was written by Duncan Garmonsway at GDS."),"\n",i.createElement(t.p,null,"³ You can read more about the benefits of coding in the open ",i.createElement(t.a,{href:"https://mojdigital.blog.gov.uk/2017/02/21/why-we-code-in-the-open/"},"here"),"."),"\n",i.createElement(t.p,null,"⁴ May be blocked on some corporate IT systems, but will work at home or on your smartphone!"))}t.default=function(e){return void 0===e&&(e={}),i.createElement(o.fE,e,i.createElement(l,e))}},7825:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(7294),i=a(4160);const o=e=>{let{frontmatter:t}=e;const{title:a,description:o,image:r,siteUrl:s,twitterUsername:l}=(0,i.K2)("1865044719").site.siteMetadata,c={title:(null==t?void 0:t.title)||a,description:(null==t?void 0:t.description)||o,image:`${s}${(null==t?void 0:t.image)||r}`,url:`${s}${(null==t?void 0:t.pathname)||""}`,twitterUsername:l,...t},h=null==t?void 0:t.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,c.title),n.createElement("meta",{name:"description",content:c.description}),n.createElement("meta",{name:"image",content:c.image}),h&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${h}`}))}}}]);
//# sourceMappingURL=component---src-mdx-transforming-analytical-functions-mdx-0cff239b6aab06803185.js.map