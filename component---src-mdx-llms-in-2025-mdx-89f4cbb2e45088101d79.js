"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[9862],{5331:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return d}});var n=a(1151),l=a(7294),o=a(6038),r=a(7825),i=a(6760),s=a(4160),c=a(2394),h=JSON.parse('{"$schema":"https://vega.github.io/schema/vega/v5.json","description":"A radar chart example, showing multiple dimensions in a radial layout.","width":200,"height":200,"padding":{"top":60,"left":40,"right":100,"bottom":40},"autosize":"pad","signals":[{"name":"radius","update":"min(width, height) / 2"}],"data":[{"name":"table","values":[{"key":"skill 1","value":8,"category":"human"},{"key":"skill 2","value":5,"category":"human"},{"key":"skill 3","value":6,"category":"human"},{"key":"skill 4","value":6,"category":"human"},{"key":"skill 5","value":9,"category":"human"},{"key":"skill 6","value":7,"category":"human"},{"key":"skill 7","value":6,"category":"human"},{"key":"skill 1","value":2,"category":"llm"},{"key":"skill 2","value":10,"category":"llm"},{"key":"skill 3","value":2,"category":"llm"},{"key":"skill 4","value":2,"category":"llm"},{"key":"skill 5","value":8,"category":"llm"},{"key":"skill 6","value":9,"category":"llm"},{"key":"skill 7","value":10,"category":"llm"}]},{"name":"keys","source":"table","transform":[{"type":"aggregate","groupby":["key"]}]}],"scales":[{"name":"angular","type":"point","range":{"signal":"[-PI, PI]"},"padding":0.5,"domain":{"data":"table","field":"key"}},{"name":"radial","type":"linear","range":{"signal":"[0, radius]"},"zero":true,"nice":false,"domain":{"data":"table","field":"value"},"domainMin":0},{"name":"color","type":"ordinal","domain":["human","llm"],"range":{"scheme":"category10"}}],"legends":[{"fill":"color","title":"Category","orient":"right","offset":100,"encode":{"symbols":{"enter":{"shape":{"value":"circle"},"size":{"value":100}}},"labels":{"update":{"fontSize":{"value":18}}},"title":{"update":{"fontSize":{"value":18}}}}}],"marks":[{"type":"group","name":"categories","zindex":1,"from":{"facet":{"data":"table","name":"facet","groupby":["category"]}},"encode":{"enter":{"x":{"signal":"width / 2"},"y":{"signal":"height / 2"}}},"marks":[{"type":"line","name":"category-line","from":{"data":"facet"},"encode":{"enter":{"interpolate":{"value":"linear-closed"},"x":{"signal":"scale(\'radial\', datum.value) * cos(scale(\'angular\', datum.key))"},"y":{"signal":"scale(\'radial\', datum.value) * sin(scale(\'angular\', datum.key))"},"stroke":{"scale":"color","field":"category"},"strokeWidth":{"value":1},"fill":{"scale":"color","field":"category"},"fillOpacity":{"value":0.1}}}}]},{"type":"rule","name":"radial-grid","from":{"data":"keys"},"zindex":0,"encode":{"enter":{"x":{"signal":"width / 2"},"y":{"signal":"height / 2"},"x2":{"signal":"width / 2 + radius * cos(scale(\'angular\', datum.key))"},"y2":{"signal":"height / 2 + radius * sin(scale(\'angular\', datum.key))"},"stroke":{"value":"lightgray"},"strokeWidth":{"value":1}}}},{"type":"text","name":"key-label","from":{"data":"keys"},"zindex":1,"encode":{"enter":{"x":{"signal":"width / 2 + (radius + 5) * cos(scale(\'angular\', datum.key))"},"y":{"signal":"height / 2 + (radius + 5) * sin(scale(\'angular\', datum.key))"},"text":{"field":"key"},"align":[{"test":"abs(scale(\'angular\', datum.key)) > PI / 2","value":"right"},{"value":"left"}],"baseline":[{"test":"scale(\'angular\', datum.key) > 0","value":"top"},{"test":"scale(\'angular\', datum.key) == 0","value":"middle"},{"value":"bottom"}],"fill":{"value":"black"},"fontSize":{"value":18}}}},{"type":"line","name":"outer-line","from":{"data":"radial-grid"},"encode":{"enter":{"interpolate":{"value":"linear-closed"},"x":{"field":"x2"},"y":{"field":"y2"},"stroke":{"value":"lightgray"},"strokeWidth":{"value":1}}}}]}');const m=e=>l.createElement(r.H,{frontmatter:e.pageContext.frontmatter});function u(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",sup:"sup",ul:"ul",li:"li",h2:"h2",section:"section",ol:"ol"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"AI probably won't replace me in 2025"),"\n",l.createElement(i.Z,null,"My mental model of LLMs, their strengths and shortcomings"),"\n",l.createElement(t.p,null,"The results from LLM benchmarks contain an apparent paradox: How can models show PhD-level performance when in practice, they often fail at seemingly straightforward tasks?"),"\n",l.createElement(t.p,null,"Even as a ",l.createElement(t.a,{href:"https://www.robinlinacre.com/two_years_of_llms/"},"prolific user"),", I often find LLMs frustrating.  It feels like I'm not using them right, and if I could somehow ",l.createElement(t.a,{href:"https://bsky.app/profile/simonwillison.net/post/3leabrc7ygc2c"},"improve my prompts")," I'd be able to solve whole problems in one shot rather than the iterative approach I rely on."),"\n",l.createElement(t.p,null,"The underlying issue is that LLMs have a very different skill profile from humans. Only by understanding their relative strengths and weaknesses can we use them effectively."),"\n",l.createElement(t.p,null,"But there's no simple rule or shortcut to developing this understanding. Benchmarks map out ",l.createElement(t.a,{href:"https://x.com/OfficialLoganK/status/1874903855848362297"},"only a small")," and biased fraction of their capabilities, so it is up to the user to uncover the rest."),"\n",l.createElement(t.p,null,"In this post I set out my mental model of LLMs and the heuristics I use to figure out when and how to use them effectively.   I finish with some conclusions about what this implies about how they may evolve in 2025."),"\n",l.createElement(t.h3,null,"The Mental Model I have of LLMs' skills"),"\n",l.createElement(t.p,null,"In basic conversations LLMs are able to imitate humans, so it's natural to treat them like a human helper. But this is a mistake because LLMs' skills are not human-like at all."),"\n",l.createElement(t.p,null,"Instead, when I think about their skills, I imagine a radar diagram a bit like this:"),"\n",l.createElement(c.Z,{spec:h}),"\n",l.createElement(t.p,null,"The human is an all-rounder",l.createElement(t.sup,null,l.createElement(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"1")),", whereas the AI's skills are very spiky: it's really bad at some things, but vastly superhuman at others.  The upshot is that at the moment, LLMs mostly complement human abilities rather than replace them — at least for the kind of data science and data engineering work I do."),"\n",l.createElement(t.p,null,"To give some examples of the user experience - from my use of frontier models in December 2024:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"LLMs have superhuman knowledge"),"\n",l.createElement(t.li,null,"They create content at superhuman speed"),"\n",l.createElement(t.li,null,"They often 'understand' structure and can accurately (but not infallibly) follow precise instructions"),"\n",l.createElement(t.li,null,"They have highly unpredictable power of reasoning, sometimes superhuman, sometimes almost ",l.createElement(t.a,{href:"https://arcprize.org/"},"non-existent"),l.createElement(t.sup,null,l.createElement(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"2")),". (This is perhaps better understood as powerful pattern matching rather than reasoning)"),"\n",l.createElement(t.li,null,"They frequently make 'obvious' errors (sometimes ",l.createElement(t.a,{href:"https://x.com/karpathy/status/1733299213503787018"},"misleadingly")," called hallucinations)"),"\n",l.createElement(t.li,null,"They don't know what they're capable of"),"\n",l.createElement(t.li,null,"They usually aren't able to quantify their confidence in the answer and won't usually seek clarification if you ask them something improbable"),"\n",l.createElement(t.li,null,"When given new information, they often can't make connections that require logical leaps"),"\n"),"\n",l.createElement(t.p,null,"Overall, the mental model I often come back to is that LLMs interpolate imperfectly over existing knowledge.  They have broad and deep knowledge of a huge range of subjects, and if they've seen a similar problem before they'll likely be useful.  But they're unlikely to combine information from different fields to generate new insights."),"\n",l.createElement(t.h3,null,"Why LLMs don't look set to replace me imminently"),"\n",l.createElement(t.p,null,"Much of the above  is fairly well understood, but I'd like to dig into the implications of this skills profile and why current-generation LLMs fall a long way short of replacing my job (a data scientist and ",l.createElement(t.a,{href:"http://github.com/moj-analytical-services/splink"},"FOSS maintainer"),")."),"\n",l.createElement(t.p,null,"In  a nutshell the answer is that, if LLMs' skills are spiky and some skills remain very underdeveloped, these become bottlenecks.  Furthermore, progress has tended to be most rapid in areas of existing competence, whereas progress in the bottleneck areas seems relatively slow. So the bottlenecks increasingly dominate the sense of overall progress."),"\n",l.createElement(t.p,null,"So what are these bottlenecks, and when should we think for ourselves rather than reaching for a chatbot?"),"\n",l.createElement(t.h3,null,"LLMs lack context"),"\n",l.createElement(t.p,null,"Many professional decisions are heavily constrained and dependent on vast amounts of institutional context that LLMs do not have."),"\n",l.createElement(t.p,null,"For example, whilst a piece of software may be relatively straightforward to implement in an unconstrained environment, in an institutional context it may have to align with architectural principles, conform to a range of existing APIs, and so on."),"\n",l.createElement(t.p,null,"In addition, an LLM's reasoning ability is likely to be greater on pre-training data than on in-context data. In my experience, whilst recall of in-context data can be good, I've had ",l.createElement(t.a,{href:"https://moj-analytical-services.github.io/splink/topic_guides/llms/prompting_llms.html"},"limited success")," in getting truly insightful answers from long-context models, either via automated RAG (like custom GPTs) or just putting the whole knowledgebase into context."),"\n",l.createElement(t.p,null,"At the moment, I find that simply managing the information relevant to a decision is often too burdensome a task for the LLM to add value.  For run-of-the-mill corporate applications I don't foresee progress in this area will be very rapid as information is too disparate, or not written down at all, and human curation is very time consuming.   I don't get the sense we're close to systems that can automatically manage this, and then use it intelligently."),"\n",l.createElement(t.p,null,"Conversely, for very high value applications I can imagine, in the short term, humans will be employed to manage context and fine tune models."),"\n",l.createElement(t.h3,null,"Humans often do not know what they want"),"\n",l.createElement(t.p,null,"Humans often do not know what they want. This may not initially seem like a flaw with the LLM, but on closer thought, the weaknesses of LLMs amplify the problem."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"LLMs do not know what is possible and what is not.  They will often attempt a solution for something that, with careful thought, is impossible, sending the user into an infinite loop of unsatisfactory answers and attempts to refine the prompt.  They probably won't tell you what you're trying to do is the wrong way of approaching the problem, or that the problem cannot be solved."),"\n",l.createElement(t.li,null,"A lot of the process of knowledge work is defining precisely what the problem is. Often you only understand the problem after making several different attempts at solutions. This is a highly iterative process, and requires a human to understand new information. Without agentic LLMs, this process still needs to be driven by a human, and however fast the LLM works, the human has to understand its answers before moving to the next step. LLMs can be verbose and not great at pinpointing the key information the human needs to make a decision"),"\n"),"\n",l.createElement(t.p,null,"That said, I think it's often underappreciated just how much the quality of results can change depending on the quality of the prompt.  A good example of the amount of effort that can be needed to get good results is ",l.createElement(t.a,{href:"https://gist.github.com/dwarkeshsp/65c232298781c86b33f5e32065152f1e"},"here")," and see also ",l.createElement(t.a,{href:"https://www.latent.space/p/learn-prompting"},"here"),"."),"\n",l.createElement(t.h3,null,"Reasoning"),"\n",l.createElement(t.p,null,"In my experience LLMs are unable to make significant logical leaps or explain when you've made logical errors",l.createElement(t.sup,null,l.createElement(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"3")),"."),"\n",l.createElement(t.p,null,"This constraint may be starting to be released with chain-of-thought models like o1 and o3, although these capabilities still seem fairly nascent and require a lot of compute to make ",l.createElement(t.a,{href:"https://arcprize.org/"},"apparently straightforward")," logical leaps."),"\n",l.createElement(t.p,null,"Another aspect to this constraint is that humans take an iterative approach to problem solving - building up context by trying things, seeing if they work, and working towards a solution.  I haven't yet seen much evidence of this ability developing, perhaps because LLMs make too many mistakes, and usually can't verify when they have got things correct.   Functionality similar to ChatGPT's memory function could potentially go some way to addressing this shortcoming, but I've found it very underwhelming."),"\n",l.createElement(t.h2,null,"Undervaluing LLMs"),"\n",l.createElement(t.p,null,"Putting all of this together, I think you end up in a situation where a typical user treats the LLMs too much like a human",l.createElement(t.sup,null,l.createElement(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"4")),". They get unsatisfactory results for some use cases, and therefore place too much empahsis on models' shortcomings without more fully exploring their capabilities."),"\n",l.createElement(t.p,null,"As such, the shortcomings obscure the almost ",l.createElement(t.a,{href:"https://www.youtube.com/watch?v=SKBG1sqdyIU&t=1s"},"unbelievable progress")," at the other end of the spectrum: on things like symbolic maths and competitive programming that few users are chatting to LLMs about."),"\n",l.createElement(t.p,null,"On the other hand, there remain many technical tasks that are way outside LLMs' current capabilities to solve in a single prompt.  Two recent examples that have stuck in my mind are:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://ciechanow.ski/moon/"},"Moon by Bartosz Ciechanowski")," Such an article requires not just immense skill in computer programming, but deep thought about how to connect and present ideas.  In my mind, if a computer could produce such an article from a single prompt, I would consider it to be generally intelligent."),"\n",l.createElement(t.li,null,"John Burn-Murdoch's visualisations for the FT ",l.createElement(t.a,{href:"https://x.com/jburnmurdoch/status/1641799627128143873"},"e.g. here"),". At first glance, he's good at data visualisation.  But on second thoughts, the primary skill is in collecting data and identifying interesting insights, the data visualisation is merely the icing on the cake.  Whilst I've seen LLMs analyse data and produce charts, they currently seem to have no capability of identifying and presenting interesting insights."),"\n"),"\n",l.createElement(t.p,null,"To be clear, LLMs can help with many 'sub tasks' to assist with the above, but they seem incapable of the 'bigger picture' thinking needed to make such work coherent."),"\n",l.createElement(t.h2,null,"What this may mean for LLMs in 2025"),"\n",l.createElement(t.p,null,"It can be difficult to fully exploit LLMs' capabilities because they are not human-like, and I think this is going to ",l.createElement(t.a,{href:"https://x.com/emollick/status/1874432586677895645"},"get even more difficult")," as their performance gets more spiky.  Rapid progress will continue in their areas of strength, but progress will continue to be slow in other areas.  For many users, they will not 'seem' that much better, but their performance will be vastly superhuman in an increasing number of areas."),"\n",l.createElement(t.p,null,"For example, I think it's plausible that LLMs may start making substantive contributions to scientific breakthroughs, whilst remaining seemingly quite stupid to everyday users."),"\n",l.createElement(t.p,null,"In the short term, I don't see an imminent prospect of LLMs replacing knowledge workers wholesale, though I do think they enable increased productivity, and in turn smaller teams."),"\n",l.createElement(t.p,null,"In 2025 I anticipate:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Further progress against benchmarks in areas such as maths and computer programming due to the ",l.createElement(t.a,{href:"https://lexfridman.com/cursor-team-transcript/#chapter17_synthetic_data"},"feedback loop")," that allows synthetic data to be used to improve models as part of larger training runs"),"\n",l.createElement(t.li,null,"Continued progress in how software helps users create and manage prompts, particularly long-context prompts.  For programming, tools like ",l.createElement(t.a,{href:"https://www.cursor.com/"},"Cursor")," will continue to improve and will start to become pervasive and indispensible.   We will see similar progress in tools like Copilot of Microsoft Office. This will make progress in model performance feel rapid because models it will be easier to get the best out of them."),"\n",l.createElement(t.li,null,"No dramatic improvements in models' reasoning abilities - at least, not cheaply and quickly."),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://anthropic.com/research/building-effective-agents"},"Agentic behaviour")," will start to creep in for some tasks with clear feedback (e.g. linting, test failures), but the problem of compounding errors will hamper progress more generally."),"\n"),"\n",l.createElement(t.h2,null,"Annex: Further reading"),"\n",l.createElement(t.p,null,"For further reading, see: ",l.createElement(s.rU,{to:"/thought_provoking_llm_quotes"},"LLM links and quotes")," page."),"\n",l.createElement(t.section,{"data-footnotes":!0,className:"footnotes"},l.createElement(t.h2,{className:"sr-only",id:"footnote-label"},"Footnotes"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,{id:"user-content-fn-1"},"\n",l.createElement(t.p,null,"It's important to distinguish skills from knowledge. For general knowledge, the LLM is clearly a better all-rounder. ",l.createElement(t.a,{href:"#user-content-fnref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n",l.createElement(t.li,{id:"user-content-fn-2"},"\n",l.createElement(t.p,null,"On completely novel problems, its reasoning powers are almost non existent (see the ",l.createElement(t.a,{href:"https://arcprize.org/"},"ARC benchmark"),").  But in real-world usage, you're often asking it to solve problems that are novel to you, but other humans have solved, and so it appears to be good at it.  The problem is that it's difficult to know which problems are novel and which are not. ",l.createElement(t.a,{href:"#user-content-fnref-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n",l.createElement(t.li,{id:"user-content-fn-3"},"\n",l.createElement(t.p,null,"Certainly in the past year, I can think of several 'aha' moments when colleagues have either suggested an idea, or identified a problem - where a previously difficult problem suddenly becomes clear.  I can't think of a real eureka moment I've had from an LLM. ",l.createElement(t.a,{href:"#user-content-fnref-3","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n",l.createElement(t.li,{id:"user-content-fn-4"},"\n",l.createElement(t.p,null,"I fall into this trap all the time; I'm far from some sort of (probably apocryphal) superuser who's able to consistently get great results. ",l.createElement(t.a,{href:"#user-content-fnref-4","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n"),"\n"))}var d=function(e){return void 0===e&&(e={}),l.createElement(o.fE,e,l.createElement(u,e))}},6760:function(e,t,a){var n=a(7294);t.Z=e=>{let{children:t}=e;const a=n.Children.map(t,(e=>n.isValidElement(e)&&"p"===e.type?e.props.children:e));return n.createElement("h2",{className:"text-xl font-sans font-normal text-gray-500 mb-8 mt-0"},a)}}}]);
//# sourceMappingURL=component---src-mdx-llms-in-2025-mdx-89f4cbb2e45088101d79.js.map