"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[5533],{4733:function(e,t,r){var n=r(7294),a=r(5589);t.Z=e=>{let{children:t,className:r}=e;if(!r)return n.createElement("code",null,t);const o=r.replace(/language-/,"");return n.createElement("div",{className:"mb-8 mt-8"},n.createElement(a.y$,{code:t.trim(),language:o,theme:a.np.vsDark},(e=>{let{className:t,style:r,tokens:a,getLineProps:o,getTokenProps:l}=e;return n.createElement("pre",{className:t,style:{...r,padding:"20px",fontSize:"0.8em"}},a.map(((e,t)=>n.createElement("div",Object.assign({key:t},o({line:e,key:t})),e.map(((e,t)=>n.createElement("span",Object.assign({key:t},l({token:e,key:t})))))))))})))}},137:function(e,t,r){r.d(t,{A:function(){return u},Z:function(){return f}});var n=r(7294),a=r(4160),o=r(2091),l=r(7696),c=r(6977);var s=e=>{let{text:t,IconComponent:r,route:o}=e;const{0:l,1:c}=(0,n.useState)(null);return(0,n.useEffect)((()=>{if("undefined"!=typeof window){c(window.innerWidth);const e=()=>c(window.innerWidth);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[]),null===l?null:n.createElement("div",null,n.createElement(a.rU,{to:o,className:"text-gray-600 hover:text-blue-700 transition ease-in duration-200"},l>500?t:n.createElement(r,{className:"w-4.5 h-4.5"})))};var i=()=>n.createElement("div",null,n.createElement("div",{className:"flex justify-between items-center py-4"},n.createElement("div",{className:"flex items-center space-x-4"},n.createElement("div",{className:"text-base font-mono font-semibold shimmer-text"},n.createElement(a.rU,{to:"/",className:"text-base font-mono font-bold shimmer-text"},">robinlinacre"))),n.createElement("div",{className:"flex items-center space-x-3"},n.createElement(s,{text:"Home",IconComponent:o.xng,route:"/"}),n.createElement(s,{text:"About",IconComponent:o.DAO,route:"/about"}),n.createElement(a.rU,{to:"/probabilistic_linkage",className:"text-gray-600 hover:text-blue-700 transition ease-in duration-200 "},n.createElement(c.UdS,{style:{transform:"scaleY(-1)"},className:"w-4.5 h-4.5 "})),n.createElement("a",{href:"https://twitter.com/robinlinacre",className:"text-gray-600 hover:text-blue-700 transition ease-in duration-200",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.fWC,{className:"w-4.5 h-4.5"})),n.createElement("a",{href:"https://github.com/robinl",className:"text-gray-600 hover:text-blue-700 transition ease-in duration-200",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.hJX,{className:"w-4.5 h-4.5"})),n.createElement("a",{href:"https://www.linkedin.com/in/robinlinacre/",className:"text-gray-600 hover:text-blue-700 transition ease-in duration-200",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.ltd,{className:"w-4.5 h-4.5"})),n.createElement("a",{href:"https://bsky.app/profile/robinlinacre.bsky.social",className:"text-gray-600 hover:text-blue-700 transition ease-in duration-200",target:"_blank",rel:"noopener noreferrer"},n.createElement(l.tdu,{className:"w-4.5 h-4.5"})))),n.createElement("hr",{className:"border-gray-300 mb-4"}));var m=()=>n.createElement("div",{className:"text-center"},n.createElement("hr",{className:"border-gray-300"}),n.createElement("footer",{className:"mt-4"},n.createElement("p",{className:"text-sm text-gray-500"},n.createElement("a",{href:"/"},"Back home")),n.createElement("p",{className:"text-sm text-gray-500"},"This site is built using"," ",n.createElement("a",{href:"https://observablehq.com"},"Observable HQ")," and"," ",n.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby.js"),". Source code"," ",n.createElement("a",{href:"https://github.com/RobinL/robinl.github.io/"},"here"),". Say ",n.createElement("a",{href:"/thanks/"},"thanks!"))));function u(e){let{children:t,pageContext:r,className:a}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:a||"text-base mx-auto w-full max-w-prose px-4"},n.createElement(i,null),n.createElement("div",null,t),n.createElement(m,null)))}var f=u},7848:function(e,t,r){r.d(t,{fE:function(){return m},pY:function(){return u},ZP:function(){return f}});var n=r(7294),a=r(1151),o=r(137);var l=e=>{let{frontmatter:t}=e;const{post_date:r,code_url:a,post_latest_update:o}=t;let l="View source code for this page";return a.includes("observablehq.com")&&(l="Live edit this notebook"),n.createElement("p",{className:"text-gray-400 text-sm"},"Originally posted: ",r,"."," ",o&&` Last updated: ${o}.`," ",l," ",n.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 text-sm"},"here."))},c=r(4733);var s=e=>{let{children:t,tag:r}=e;const a="string"!=typeof(o=t)?(console.error("generateId received non-string argument:",o),""):o.toLowerCase().replace(/\s+/g,"-");var o;return n.createElement("div",{className:"relative group"},n.createElement(r,{id:a},n.createElement("a",{href:`#${a}`,className:"flex items-start text-current"},n.createElement("span",{className:"invisible group-hover:visible pr-1 absolute",style:{left:"-1em"}},"#"),t)))};const i={pre:e=>n.createElement("div",e),code:c.Z,h1:e=>n.createElement(s,Object.assign({tag:"h1"},e)),h2:e=>n.createElement(s,Object.assign({tag:"h2"},e)),h3:e=>n.createElement(s,Object.assign({tag:"h3"},e))};function m(e){let{children:t,pageContext:r}=e;const{frontmatter:c}=r;return n.createElement(o.Z,null,n.createElement(a.Zo,{components:i},n.createElement(l,{frontmatter:c}),n.createElement("div",{key:"undefined"==typeof window?"server":"client",id:"mdx-container-div",className:"mdx-content space-y-4"},t)))}function u(e){let{children:t,pageContext:r}=e;const{frontmatter:c}=r;return n.createElement(o.Z,{className:"text-base mx-auto w-full max-w-screen-lg px-4"},n.createElement(a.Zo,{components:i},n.createElement(l,{frontmatter:c}),n.createElement("div",{id:"mdx-container-div",className:"mdx-content space-y-4"},t)))}var f=m},1151:function(e,t,r){r.d(t,{Zo:function(){return c},ah:function(){return o}});var n=r(7294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||l:o(e),n.createElement(a.Provider,{value:c},t)}},3621:function(e,t,r){r.d(t,{w_:function(){return p}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),f(e.child))))}function p(e){return t=>n.createElement(d,s({attr:m({},e.attr)},t),f(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:i}=e,u=c(e,l),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=8fbf014e3a3fe04b263bfed83ca98fc1d62947c1-b5bd8e4263fe590f2aee.js.map