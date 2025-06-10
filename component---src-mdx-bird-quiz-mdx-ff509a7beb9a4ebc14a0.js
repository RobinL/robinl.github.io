"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[8694],{2830:function(e,t,i){i.r(t),i.d(t,{Head:function(){return Di},default:function(){return Ei},output_order:function(){return Ai}});var n=i(7294),r=i(7848),a=i(7825);function o(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function l(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function u(e){return e()}function s(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function d(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function c(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function f(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function p(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function m(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function v(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function b(e){return function(t={}){let{min:i=0,max:n=1,value:r=(n+i)/2,step:a="any",precision:o=2,title:l,description:u,getValue:s,format:d,display:c,submit:f}="number"==typeof t?{value:t}:t;return o=Math.pow(10,o),s||(s=e=>Math.round(e.valueAsNumber*o)/o),e({type:"range",title:l,description:u,submit:f,format:d,display:c,attributes:{min:i,max:n,step:a,value:r},getValue:s})}}function h(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function g(e){return e()}function y(e){return!this}function _(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function w(e){return new Date(Date.now()).toUTCString()}function x(e){return function(t={}){const{value:i="Ok",title:n,description:r,disabled:a}="string"==typeof t?{value:t}:t,o=e({type:"button",title:n,description:r,attributes:{disabled:a,value:i}});return o.output.remove(),o}}function k(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function $(e){return e(["Spring","Summer","Fall","Winter"])}function M(e){return e}function j(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function q(e){return e}function C(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function D(e){return e}function A(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function z(e){return e}function E(e,t){return function(i={}){let{value:n,title:r,description:a,submit:o,multiple:l,size:u,options:s}=Array.isArray(i)?{options:i}:i;s=s.map((e=>"object"==typeof e?e:{value:e,label:e}));const d=e({type:"select",title:r,description:a,submit:o,getValue:e=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>e.value));return l?t:t[0]},form:t`
      <form>
        <select name="input" ${l?`multiple size="${u||s.length}"`:""}>
          ${s.map((({value:e,label:i})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(n)?n.includes(e):n===e,textContent:i})))}
        </select>
      </form>
    `});return d.output.remove(),d}}function G(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function S(e,t){return e({options:t.objects.states.geometries.map((e=>e.properties.name)),placeholder:"Search for a US state . . ."})}function P(e){return e}function T(e,t){return function(i={}){const{value:n,title:r,description:a,autocomplete:o="off",placeholder:l,size:u,options:s,list:d="options"}=Array.isArray(i)?{options:i}:i,c=new Set(s),f=e({type:"text",title:r,description:a,action:e=>{e.value=e.input.value=n||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,c.has(e.input.value)&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${l}" style="font-size: 1em;" list=${d}>
          <datalist id="${d}">
              ${s.map((e=>Object.assign(t`<option>`,{value:e})))}
          </datalist>
      </form>
      `});return f.output.remove(),f}}function I(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function N(e){return e()}function L(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function R(e){return function(t={}){const{value:i="#000000",title:n,description:r,submit:a,display:o}="string"==typeof t?{value:t}:t,l=e({type:"color",title:n,description:r,submit:a,display:o,attributes:{value:i}});return(n||r)&&(l.input.style.margin="5px 0"),l}}function B(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function U(e){return e()}function O(e){return e}function F(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function Y(e){return e}function V(e,t){return function(i={}){const{value:n=[],title:r,description:a,submit:o}=Array.isArray(i)?{value:i}:i;let[l,u]=n;l=null!=l?l:"",u=null!=u?u:"";const s=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${u}" />`,c=t({type:"coordinates",title:r,description:a,submit:o,getValue:()=>{const e=s.valueAsNumber,t=d.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${s}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${d}
        </label>
      </form>
    `});return c.output.remove(),c}}function W(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function H(e){return e([-122.27,37.87])}function K(e){return e}function Z(e,t,i,n,r,a,o){return function(l={}){const{value:u=[],title:s,description:d,width:c=400}=Array.isArray(l)?{value:l}:l,f=Math.round(.525*c);let[p,m]=u;p=null!=p?p:null,m=null!=m?m:null;const v=e`<form style="width: ${c}px;"></form>`,b=t.context2d(c,f),h=b.canvas;h.style.margin="10px 0 0";const g=i.geoNaturalEarth1().precision(.1).fitSize([c,f],{type:"Sphere"}),y=i.geoPath(g,b).pointRadius(2.5);function _(){if(b.fillStyle="#fff",b.fillRect(0,0,c,f),b.beginPath(),y(n),b.lineWidth=.35,b.strokeStyle="#ddd",b.stroke(),b.beginPath(),y(r),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),y(a),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){const e={type:"MultiPoint",coordinates:[[p,m]]};b.beginPath(),y(e),b.fillStyle="#f00",b.fill()}}v.append(h),h.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t,i]);p=+n[0].toFixed(2),m=+n[1].toFixed(2),_(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},_();return o({type:"worldMapCoordinates",title:s,description:d,display:t=>e`<div style="position: absolute; width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v})}}function Q(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function J(e){return e([-122.27,37.87])}function X(e){return e}function ee(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function te(e){return e}function ie(e,t,i,n,r,a){return function(o={}){const{value:l=[],title:u,description:s,width:d=400}=Array.isArray(o)?{value:o}:o,c=d/960,f=600*c;let[p,m]=l;p=null!=p?p:null,m=null!=m?m:null;const v=e`<form style="width: ${d}px;"></form>`,b=t.context2d(d,f),h=b.canvas;h.style.margin="5px 0 0";const g=i.geoAlbersUsa().scale(1280).translate([480,300]),y=i.geoPath().context(b).pointRadius(2.5/c);function _(){if(b.clearRect(0,0,d,f),b.save(),b.scale(c,c),b.lineWidth=.35/c,b.beginPath(),y(n),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),y(r),b.strokeStyle="#aaa",b.stroke(),null!=p&&null!=m){const e={type:"MultiPoint",coordinates:[g([p,m])]};b.beginPath(),y(e),b.fillStyle="#f00",b.fill()}b.restore()}v.append(h),h.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t/c,i/c]);p=+n[0].toFixed(2),m=+n[1].toFixed(2),_(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},_();return a({type:"worldMapCoordinates",title:u,description:s,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=p?p:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=p?p:null,null!=m?m:null],form:v})}}function ne(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function re(e){return e()}function ae(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function oe(e){return function(t={}){const{min:i,max:n,value:r,title:a,description:o,display:l}="string"==typeof t?{value:t}:t;return e({type:"date",title:a,description:o,display:l,attributes:{min:i,max:n,value:r}})}}function le(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function ue(e){return e()}function se(e){return e}function de(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function ce(e){return e}function fe(e){return function(t={}){const{min:i,max:n,step:r,value:a,title:o,description:l,display:u}="string"==typeof t?{value:t}:t,s=e({type:"time",title:o,description:l,display:u,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:n,step:r,value:a}});return s.output.remove(),s}}function pe(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function me(e){return e()}function ve(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function be(e,t,i){const n=e`<div>`;for(var r=0;r<t.length;r++){t[r];let a=e`<img height="125px" style="margin: 2px;" />`;a.src=await i.url(t[r]),n.append(a)}return n}function he(e){return function(t={}){const{multiple:i,accept:n,title:r,description:a}=t,o=e({type:"file",title:r,description:a,attributes:{multiple:i,accept:n},action:e=>{e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return o.output.remove(),o.input.onchange(),o}}function ge(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function ye(e){return e()}function _e(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function we(e){return e}function xe(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function ke(e){return e}function $e(e){return function(t={}){const{value:i,title:n,description:r,autocomplete:a="off",maxlength:o,minlength:l,pattern:u,placeholder:s,size:d,submit:c}="string"==typeof t?{value:t}:t,f=e({type:"text",title:n,description:r,submit:c,attributes:{value:i,autocomplete:a,maxlength:o,minlength:l,pattern:u,placeholder:s,size:d}});return f.output.remove(),f.input.style.fontSize="1em",f}}function Me(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function je(e){return e()}function qe(e){return e}function Ce(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function De(e){return e}function Ae(e,t){return function(i={}){const{value:n="",title:r,description:a,autocomplete:o,cols:l=45,rows:u=3,width:s,height:d,maxlength:c,placeholder:f,spellcheck:p,wrap:m,submit:v}="string"==typeof i?{value:i}:i,b=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:r,description:a,submit:v,attributes:{autocomplete:o,cols:l,rows:u,maxlength:c,placeholder:f,spellcheck:p,wrap:m}});return b.output.remove(),null!=s&&(b.input.style.width=s),null!=d&&(b.input.style.height=d),v&&(b.submit.style.margin="0"),(r||a)&&(b.input.style.margin="3px 0"),b}}function ze(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Ee(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Ge(e){return e}function Se(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function Pe(e){return e}function Te(e,t){return function(i={}){let{value:n,title:r,description:a,submit:o,options:l}=Array.isArray(i)?{options:i}:i;l=l.map((e=>"string"==typeof e?{value:e,label:e}:e));const u=e({type:"radio",title:r,description:a,submit:o,getValue:e=>{if(e.checked)return e.value;const t=Array.prototype.find.call(e,(e=>e.checked));return t?t.value:void 0},form:t`
      <form>
        ${l.map((({value:e,label:i})=>{const r=t`<input type=radio name=input ${e===n?"checked":""} style="vertical-align: baseline;" />`;r.setAttribute("value",e);return t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`}))}
      </form>
    `});return u.output.remove(),u}}function Ie(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function Ne(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Le(e){return e}function Re(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function Be(e){return e}function Ue(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function Oe(e){return e}function Fe(e,t){return function(i={}){let{value:n,title:r,description:a,submit:o,options:l}=Array.isArray(i)?{options:i}:i;l=l.map((e=>"string"==typeof e?{value:e,label:e}:e));const u=e({type:"checkbox",title:r,description:a,submit:o,getValue:e=>e.length?Array.prototype.filter.call(e,(e=>e.checked)).map((e=>e.value)):!!e.checked&&e.value,form:t`
      <form>
        ${l.map((({value:e,label:i})=>{const r=t`<input type=checkbox name=input ${(n||[]).indexOf(e)>-1?"checked":""} style="vertical-align: baseline;" />`;r.setAttribute("value",e);return t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${r}
           ${i}
          </label>`}))}
      </form>
    `});return u.output.remove(),u}}function Ye(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function Ve(e){return e()}function We(e){return e}function He(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function Ke(e){return e}function Ze(e){return function(t={}){const{value:i,title:n,description:r,placeholder:a,submit:o,step:l="any",min:u,max:s}="number"==typeof t||"string"==typeof t?{value:+t}:t,d=e({type:"number",title:n,description:r,submit:o,attributes:{value:i,placeholder:a,step:l,min:u,max:s,autocomplete:"off"},getValue:e=>e.valueAsNumber});return d.output.remove(),d.input.style.width="auto",d.input.style.fontSize="1em",d}}function Qe(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function Je(e){return e({value:"password"})}function Xe(e){return e}function et(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tt(e){return e}function it(e){return function(t={}){const{value:i,title:n,description:r,autocomplete:a="off",maxlength:o,minlength:l,pattern:u,placeholder:s,size:d,submit:c}="string"==typeof t?{value:t}:t,f=e({type:"password",title:n,description:r,submit:c,attributes:{value:i,autocomplete:a,maxlength:o,minlength:l,pattern:u,placeholder:s,size:d}});return f.output.remove(),f.input.style.fontSize="1em",f}}function nt(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function rt(e,t){return function(i){let{form:n,type:r="text",attributes:a={},action:o,getValue:l,title:u,description:s,format:d,display:c,submit:f,options:p}=i;const m=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${r} />
  </form>`),Object.keys(a).forEach((e=>{const t=a[e];null!=t&&n.input.setAttribute(e,t)})),f&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),u&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${u}</div>`),s&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${s}</div>`),d&&(d="function"==typeof d?d:t.format(d)),o)o(n);else{const e=f?"onsubmit":"button"==r?"onclick":"checkbox"==r||"radio"==r?"onchange":"oninput";n[e]=t=>{t&&t.preventDefault();const i=l?l(n.input):n.input.value;if(n.output){const e=c?c(i):d?d(i):i;if(e instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(e)}else n.output.value=e}n.value=i,"oninput"!==e&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==e&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==e&&(n.onsubmit=e=>e&&e.preventDefault()),n[e]()}for(;n.childNodes.length;)m.appendChild(n.childNodes[0]);return n.append(m),n}}function at(e){return e("d3-geo@1")}function ot(e){return e("d3-format@1")}function lt(e){return e("topojson-client@3")}async function ut(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function st(e,t){return e.feature(t,t.objects.land)}function dt(e,t){return e.feature(t,t.objects.countries)}async function ct(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function ft(e,t){return e.feature(t,t.objects.nation)}function pt(e,t){return e.feature(t,t.objects.states)}function mt(e){return e.geoGraticule10()}function vt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function bt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function ht(e,t){const i=e.module();return i.variable(t()).define(["md"],o),i.variable(t("sliderDemo")).define("sliderDemo",["md"],l),i.variable(t("viewof a")).define("viewof a",["slider"],u),i.variable(t("a")).define("a",["Generators","viewof a"],((e,t)=>e.input(t))),i.variable(t("viewof a1")).define("viewof a1",["slider"],s),i.variable(t("a1")).define("a1",["Generators","viewof a1"],((e,t)=>e.input(t))),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],d),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],((e,t)=>e.input(t))),i.variable(t("viewof a2")).define("viewof a2",["slider"],c),i.variable(t("a2")).define("a2",["Generators","viewof a2"],((e,t)=>e.input(t))),i.variable(t("viewof a3")).define("viewof a3",["slider"],f),i.variable(t("a3")).define("a3",["Generators","viewof a3"],((e,t)=>e.input(t))),i.variable(t("viewof a4")).define("viewof a4",["slider"],p),i.variable(t("a4")).define("a4",["Generators","viewof a4"],((e,t)=>e.input(t))),i.variable(t("viewof a5")).define("viewof a5",["slider"],m),i.variable(t("a5")).define("a5",["Generators","viewof a5"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],v),i.variable(t("slider")).define("slider",["input"],b),i.variable(t("buttonDemo")).define("buttonDemo",["md"],h),i.variable(t("viewof b")).define("viewof b",["button"],g),i.variable(t("b")).define("b",["Generators","viewof b"],((e,t)=>e.input(t))),i.variable(t()).define(["b"],y),i.variable(t("viewof b1")).define("viewof b1",["button"],_),i.variable(t("b1")).define("b1",["Generators","viewof b1"],((e,t)=>e.input(t))),i.variable(t()).define(["b1"],w),i.variable(t("button")).define("button",["input"],x),i.variable(t("selectDemo")).define("selectDemo",["md"],k),i.variable(t("viewof dd")).define("viewof dd",["select"],$),i.variable(t("dd")).define("dd",["Generators","viewof dd"],((e,t)=>e.input(t))),i.variable(t()).define(["dd"],M),i.variable(t("viewof dd1")).define("viewof dd1",["select"],j),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],((e,t)=>e.input(t))),i.variable(t()).define(["dd1"],q),i.variable(t("viewof dd2")).define("viewof dd2",["select"],C),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],((e,t)=>e.input(t))),i.variable(t()).define(["dd2"],D),i.variable(t("viewof dd3")).define("viewof dd3",["select"],A),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],((e,t)=>e.input(t))),i.variable(t()).define(["dd3"],z),i.variable(t("select")).define("select",["input","html"],E),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],G),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],S),i.variable(t("as")).define("as",["Generators","viewof as"],((e,t)=>e.input(t))),i.variable(t()).define(["as"],P),i.variable(t("autoSelect")).define("autoSelect",["input","html"],T),i.variable(t("colorDemo")).define("colorDemo",["md"],I),i.variable(t("viewof c")).define("viewof c",["color"],N),i.variable(t("c")).define("c",["Generators","viewof c"],((e,t)=>e.input(t))),i.variable(t("viewof c1")).define("viewof c1",["color"],L),i.variable(t("c1")).define("c1",["Generators","viewof c1"],((e,t)=>e.input(t))),i.variable(t("color")).define("color",["input"],R),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],B),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],U),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],((e,t)=>e.input(t))),i.variable(t()).define(["coords1"],O),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],F),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],((e,t)=>e.input(t))),i.variable(t()).define(["coords2"],Y),i.variable(t("coordinates")).define("coordinates",["html","input"],V),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],W),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],H),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["worldMap1"],K),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],Z),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],Q),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],J),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap1"],X),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ee),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap2"],te),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ie),i.variable(t("dateDemo")).define("dateDemo",["md"],ne),i.variable(t("viewof d")).define("viewof d",["date"],re),i.variable(t("d")).define("d",["Generators","viewof d"],((e,t)=>e.input(t))),i.variable(t("viewof d1")).define("viewof d1",["date"],ae),i.variable(t("d1")).define("d1",["Generators","viewof d1"],((e,t)=>e.input(t))),i.variable(t("date")).define("date",["input"],oe),i.variable(t("timeDemo")).define("timeDemo",["md"],le),i.variable(t("viewof t")).define("viewof t",["time"],ue),i.variable(t("t")).define("t",["Generators","viewof t"],((e,t)=>e.input(t))),i.variable(t()).define(["t"],se),i.variable(t("viewof t1")).define("viewof t1",["time"],de),i.variable(t("t1")).define("t1",["Generators","viewof t1"],((e,t)=>e.input(t))),i.variable(t()).define(["t1"],ce),i.variable(t("time")).define("time",["input"],fe),i.variable(t("fileDemo")).define("fileDemo",["md"],pe),i.variable(t("viewof e")).define("viewof e",["file"],me),i.variable(t("e")).define("e",["Generators","viewof e"],((e,t)=>e.input(t))),i.variable(t("viewof e1")).define("viewof e1",["file"],ve),i.variable(t("e1")).define("e1",["Generators","viewof e1"],((e,t)=>e.input(t))),i.variable(t()).define(["html","e1","Files"],be),i.variable(t("file")).define("file",["input"],he),i.variable(t("textDemo")).define("textDemo",["md"],ge),i.variable(t("viewof f")).define("viewof f",["text"],ye),i.variable(t("f")).define("f",["Generators","viewof f"],((e,t)=>e.input(t))),i.variable(t("viewof f1")).define("viewof f1",["text"],_e),i.variable(t("f1")).define("f1",["Generators","viewof f1"],((e,t)=>e.input(t))),i.variable(t()).define(["f1"],we),i.variable(t("viewof f2")).define("viewof f2",["text"],xe),i.variable(t("f2")).define("f2",["Generators","viewof f2"],((e,t)=>e.input(t))),i.variable(t()).define(["f2"],ke),i.variable(t("text")).define("text",["input"],$e),i.variable(t("textareaDemo")).define("textareaDemo",["md"],Me),i.variable(t("viewof g")).define("viewof g",["textarea"],je),i.variable(t("g")).define("g",["Generators","viewof g"],((e,t)=>e.input(t))),i.variable(t()).define(["g"],qe),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Ce),i.variable(t("g1")).define("g1",["Generators","viewof g1"],((e,t)=>e.input(t))),i.variable(t()).define(["g1"],De),i.variable(t("textarea")).define("textarea",["input","html"],Ae),i.variable(t("radioDemo")).define("radioDemo",["md"],ze),i.variable(t("viewof r")).define("viewof r",["radio"],Ee),i.variable(t("r")).define("r",["Generators","viewof r"],((e,t)=>e.input(t))),i.variable(t()).define(["r"],Ge),i.variable(t("viewof r1")).define("viewof r1",["radio"],Se),i.variable(t("r1")).define("r1",["Generators","viewof r1"],((e,t)=>e.input(t))),i.variable(t()).define(["r1"],Pe),i.variable(t("radio")).define("radio",["input","html"],Te),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],Ie),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],Ne),i.variable(t("ch")).define("ch",["Generators","viewof ch"],((e,t)=>e.input(t))),i.variable(t()).define(["ch"],Le),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],Re),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],((e,t)=>e.input(t))),i.variable(t()).define(["ch1"],Be),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],Ue),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],((e,t)=>e.input(t))),i.variable(t()).define(["ch3"],Oe),i.variable(t("checkbox")).define("checkbox",["input","html"],Fe),i.variable(t("numberDemo")).define("numberDemo",["md"],Ye),i.variable(t("viewof h")).define("viewof h",["number"],Ve),i.variable(t("h")).define("h",["Generators","viewof h"],((e,t)=>e.input(t))),i.variable(t()).define(["h"],We),i.variable(t("viewof h1")).define("viewof h1",["number"],He),i.variable(t("h1")).define("h1",["Generators","viewof h1"],((e,t)=>e.input(t))),i.variable(t()).define(["h1"],Ke),i.variable(t("number")).define("number",["input"],Ze),i.variable(t("passwordDemo")).define("passwordDemo",["md"],Qe),i.variable(t("viewof i")).define("viewof i",["password"],Je),i.variable(t("i")).define("i",["Generators","viewof i"],((e,t)=>e.input(t))),i.variable(t()).define(["i"],Xe),i.variable(t("viewof i1")).define("viewof i1",["password"],et),i.variable(t("i1")).define("i1",["Generators","viewof i1"],((e,t)=>e.input(t))),i.variable(t()).define(["i1"],tt),i.variable(t("password")).define("password",["input"],it),i.variable(t()).define(["md"],nt),i.variable(t("input")).define("input",["html","d3format"],rt),i.variable(t("d3geo")).define("d3geo",["require"],at),i.variable(t("d3format")).define("d3format",["require"],ot),i.variable(t("topojson")).define("topojson",["require"],lt),i.variable(t("world")).define("world",ut),i.variable(t("land")).define("land",["topojson","world"],st),i.variable(t("countries")).define("countries",["topojson","world"],dt),i.variable(t("usa")).define("usa",ct),i.variable(t("nation")).define("nation",["topojson","usa"],ft),i.variable(t("states")).define("states",["topojson","usa"],pt),i.variable(t("graticule")).define("graticule",["d3geo"],mt),i.variable(t("viewof license")).define("viewof license",["md"],vt),i.variable(t("license")).define("license",["Generators","viewof license"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],bt),i}function gt(e){return e`# iNaturalist utils`}function yt(){return function(e="",t=null){let i={photos:!0,verifiable:!0,order_by:"votes",lat:53.807321,lng:-1.387255,radius:1400};return null!==t?i.taxon_id=t:i.taxon_name=e,i=Object.entries(i).map((([e,t])=>`${encodeURIComponent(e)}=${encodeURIComponent(t)}`)).join("&"),"https://api.inaturalist.org/v1/observations?"+i}}function _t(e){return function*(t){if(yield[],""==t.raw)yield[];else{let i;i="inaturalist_id"in t?e(t.raw,t.inaturalist_id):e(t.raw),yield fetch(i).then((e=>e.json())).then((e=>{e.results.forEach((e=>e.photos.forEach((e=>{e.url_medium=e.url.replace("square","medium"),e.url_large=e.url.replace("square","original")}))));let t=e.results;return t.sort(((e,t)=>{e.faves_count,t.faves_count})),t}))}}}function wt(){return function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}function xt(e){return function(t){let i=t.results.length;if(0==i)return;let n=e(0,i);return t.results[n]}}function kt(e){return e`## Presentational functions`}function $t(e,t){return function(i){if(0==i.length)return e`Please wait, loading pictures...`;let n=i,r=n[0].taxon.default_photo.medium_url,a=r.replace("medium","original");return e`
<style> 
.collection {width: ${t}px}
.collection .species { display: inline-block; }
.collection img { display: block; width: 12em; height: 12em; object-fit: cover}

</style>

<h2>

<div class="collection">
<div class="species">
 <a href="${a}"  target="_blank"><img src="${r}"></div>


${n.map((e=>`<div class="species">\n  <a href="${e.photos[0].url_large}"  target="_blank"><img src="${e.photos[0].url_medium}"></div>\n`))}
</div>
`}}function Mt(e){return e`## Demo of functions`}function jt(e){return e({raw:"Lagopus lagopus scotica",inaturalist_id:362643})}function qt(e){return e({raw:"Lagopus lagopus"})}function Ct(e,t){return e(t)}function Dt(e){return e`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)`}function At(e,t){const i=e.module();return i.variable(t()).define(["md"],gt),i.variable(t("call_api")).define("call_api",yt),i.variable(t("inaturalist_query")).define("inaturalist_query",["call_api"],_t),i.variable(t("getRandomInt")).define("getRandomInt",wt),i.variable(t("get_random_inat_from_results")).define("get_random_inat_from_results",["getRandomInt"],xt),i.variable(t()).define(["md"],kt),i.variable(t("picture_gallery")).define("picture_gallery",["html","width"],$t),i.variable(t()).define(["md"],Mt),i.variable(t("results2")).define("results2",["inaturalist_query"],jt),i.variable(t("results")).define("results",["inaturalist_query"],qt),i.variable(t()).define(["picture_gallery","results2"],Ct),i.variable(t()).define(["md"],Dt),i}function zt(e){return e`# xeno-canto utils`}function Et(){return"https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl="}function Gt(e,t,i){return function(n="",r="",a="",o=""){let l=e+t+"query=",u=[];u.push(n),""!=r&&u.push(`type:"${r}"`),""!=a&&u.push(`q:"${a}"`),""!=o&&u.push(`cnt:"${i(o)}"`);let s=u.join(" ");return s=encodeURIComponent(s),l+s}}function St(){return"https://xeno-canto.org/api/2/recordings?"}function Pt(){return function(e){return fetch(e).then((e=>e.json())).catch((e=>({recordings:[],status:"query_failed",message:"Query failed"})))}}function Tt(e,t){return async function*(i="",n="",r="",a="",o=3){if(yield{recordings:[],status:"query_incomplete",message:"Please wait, querying recordings..."},""==i)yield{recordings:[],status:"no_query",message:"No search terms entered"};else{let l=e(i,n,r,a),u=e(i,"","",""),s=await t(l);s.status="query_successful",s.message="Query Successful",s.recordings.length<o&&(console.log(`Fewer than ${o} found, using backup query`),s=await t(u),s.status="backup_query_successful",s.message="Query Successful, but only using backup URL"),yield s}}}function It(){return function(e){let t=e.file;return t=t.split("/"),t=t.filter((e=>""!=e)),t=t.filter((e=>"http:"!=e)),t=t.filter((e=>"https:"!=e)),"https://"+t.join("/")}}function Nt(e,t,i){return e`<audio controls><source src='${t(i.recordings[0])}' type='audio/mpeg'></audio>`}function Lt(){return function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}}function Rt(e){return function(t){let i=t.recordings.length;if(0==i)return;let n=e(0,i);return t.recordings[n]}}function Bt(){return function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}function Ut(){return function(e,t,i=!0){var n=new Array(t),r=e.length,a=new Array(r);if(t>r){if(!i)throw new RangeError("getRandom: more elements taken than available");t=r}for(;t--;){var o=Math.floor(Math.random()*r);n[t]=e[o in a?a[o]:o],a[o]=--r in a?a[r]:r}return n}}function Ot(e){return e`## Presentational functions`}function Ft(e){return e("troglodytes troglodytes","song","A","United Kingdom")}function Yt(e){return e`## Demos of functions`}function Vt(e){return e("htl@0.2")}function Wt(e){return e.html}function Ht(e,t){return e(t.recordings,3)}function Kt(e,t){return function(i,n){let r,a=`player_${i.id}`;return r=null==n?"player_null":`player_${n.id}`,e`<div>
 <audio id='${a}' 
        class = 'birdaudio'
        src="${t(i)}"
        onended=${()=>function(){let e=document.getElementsByClassName(`${a}_play_button`)[0];e.innerText="Played",e.setAttribute("play_status","played"),document.getElementById(`${r}`).play();let t=document.getElementsByClassName(`${r}_play_button`)[0];t.setAttribute("play_status","playing"),t.innerText="Playing"}()}>
 </audio>
 <div> 
  <button class="audioplayer ${a}_play_button" 
          onclick=${()=>function(){let e=document.getElementsByClassName("birdaudio");for(var t of e)t.id==a||t.paused||(t.pause(),console.log("paused"),document.getElementsByClassName(`${t.id}_play_button`)[0].innerText="Paused");let i=document.getElementsByClassName(`${a}_play_button`)[0],n=document.getElementById(`${a}`);n.paused?(n.play(),i.innerText="Pause",i.setAttribute("play_status","playing")):(n.pause(),i.innerText="Paused",i.setAttribute("play_status","paused"))}()}
          play_status = "unplayed"
          >Play</button> 

  
`}}function Zt(e,t,i){return function(n,r=20,a=!0){if(0==n.length)return e`Please wait, fetching audio recordings...`;let o,l=n.length,u=Math.min(r,l);return o=a?t(n,u):n.slice(0,u),e`<table><tr>
<th>Species</th>
<th>Type</th>
<th>Length</th>
<th>Audio</th>

</tr>

${o.map(((t,n)=>{let r=o.slice(n+1,n+2);return r=0==r.length?null:r[0],e`<tr>

<td>${t.en} (<i>${t.gen} ${t.sp})

<td>${t.type}
<td>${t.length}
<td>${i(t,r)}`}))}

</table>
 `}}function Qt(e,t){return e(t.recordings)}function Jt(e){return e`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)

[Docs for xeno-canto api](https://www.xeno-canto.org/article/153)

[Docs for quering xeno-canto](https://www.xeno-canto.org/help/search)
`}function Xt(e,t){const i=e.module();return i.variable(t()).define(["md"],zt),i.variable(t("cors_anywhere")).define("cors_anywhere",Et),i.variable(t("generate_get_request_url")).define("generate_get_request_url",["cors_anywhere","xeno_endpoint","toTitleCase"],Gt),i.variable(t("xeno_endpoint")).define("xeno_endpoint",St),i.variable(t("get_results_async")).define("get_results_async",Pt),i.variable(t("xeno_canto_query")).define("xeno_canto_query",["generate_get_request_url","get_results_async"],Tt),i.variable(t("recording_to_mp3_url")).define("recording_to_mp3_url",It),i.variable(t("player")).define("player",["html","recording_to_mp3_url","results"],Nt),i.variable(t("toTitleCase")).define("toTitleCase",Lt),i.variable(t("get_random_recording_from_results")).define("get_random_recording_from_results",["getRandomInt"],Rt),i.variable(t("getRandomInt")).define("getRandomInt",Bt),i.variable(t("get_n_from_array_at_random")).define("get_n_from_array_at_random",Ut),i.variable(t()).define(["md"],Ot),i.variable(t("results")).define("results",["xeno_canto_query"],Ft),i.variable(t()).define(["md"],Yt),i.variable(t("htl")).define("htl",["require"],Vt),i.variable(t("html")).define("html",["htl"],Wt),i.variable(t("rec")).define("rec",["get_n_from_array_at_random","results"],Ht),i.variable(t("audio_player_and_buttons")).define("audio_player_and_buttons",["html","recording_to_mp3_url"],Kt),i.variable(t("table_of_audio")).define("table_of_audio",["html","get_n_from_array_at_random","audio_player_and_buttons"],Zt),i.variable(t()).define(["table_of_audio","results"],Qt),i.variable(t()).define(["md"],Jt),i}function ei(e){return e`# UK Birdsong quiz`}function ti(e){return e`Are you able to identify common UK birds from their song?`}function ii(e){return e`**Settings:** 

Please select which birds you'd like to include in your quiz:`}function ni(e,t){let i=e`<input id='select-quiz' 
                     type='text'
                     autocomplete='off'
                     inputmode='' 
                     value='20 most common birds'    
                     placeholder="Select which birds to include in quiz..." 
                     style="font-size: 1em; width: 320px" 
                     list=options2>

          <datalist id="options2">
              ${t.map((t=>Object.assign(e`<option>`,{value:t.name})))}
          </datalist>`,n=e`<input name="file_input" class="inputfile" type="file">`,r=e`<br><span>or upload custom bird list .csv created <a href='https://observablehq.com/@robinl/birdsong-quiz-list-creator'>here:`,a=e`<style>
    .inputfile {padding-left: 10px}`,o=e`${i}${r}${a}${n}`;return o.value=i.children[0].value,i.onchange=()=>{n.value=null,o.value=i.children[0].value,o.dispatchEvent(new CustomEvent("input"))},i.children[0].onfocus=function(){i.children[0].value=""},i.children[0].onclick=function(){i.children[0].value=""},n.onchange=()=>{let e=n.files[0].text();o.value=e,i.children[0].value="Custom upload...",o.dispatchEvent(new CustomEvent("input"))},o}function ri(e){return e`**Quiz**`}function ai(e,t,i,n,r,a,o,l,u,s,d,c,f,p,m,v,b){let h=e`
  Play the audio clips below, enter your answer and hit submit.
  `,g=t(),y=i`<input id='birdinputbox' 
                     name="dep" 
                     type="text"  
                     inputmode='' 
                     value=''    
                     placeholder="Choose your answer from this list..." 
                     style="font-size: 1em; width:${n}px" 
                     list=options>

          <datalist id="options">
              ${r.map((e=>Object.assign(i`<option>`,{label:e.common_name,value:e.scientific_name})))}
          </datalist>`,_=i`<input type="button" value="Display clue">`,w=a(),x=i`<input type="button" value="Submit answer">`,k="",$="";if(_.onclick=()=>{document.getElementById("bird_gallery").style.display="inline-block"},y.onchange=()=>{document.getElementById("birdinputbox").setAttribute("inputmode","none")},x.onclick=()=>{o.value+=1;let e=y.children[0].value,t=l.scientific_name,i=e==t;u.value=e,s.value=t,i&&(d.value+=1),c.value+=1,document.getElementById("birdinputbox").setAttribute("inputmode",""),document.getElementById("bird_gallery").style.display="none"},""!=f){let t="👎";f==p&&(t="✔"),k=e`${t} The answer to the previous question was ${m[f].common_name} (*${f.toLowerCase()}*).  You chose ${m[p].common_name}  (*${p.toLowerCase()}*).`}return $=e`You currently have ${v} points out of ${b}`,i`${h}
             ${g}
             ${w}
             ${y}
             ${x}
             ${_}
              ${k}
             ${$}`}function oi(e){return e`You can find a more comprehensive list of audio recordings for each bird, and photos of them [here](https://robinlinacre.com/birdsong/).`}function li(e,t,i,n,r,a){return function(){return 0==e.recordings.length?t`Please wait, loading recordings`:i`<style>
  .audio_container {display: inline-block;}
  .audio_container div {display: block;  text-align: center}
  </style>
<div>
  ${n.map((e=>i`<div class='audio_container'><div><a href='${e.url}'>${r(e.type)}<div><audio controls><source src='${a(e)}' type='audio/mpeg'>   </audio>`))}`}}function ui(e,t,i,n){return function(){let r=e(t,6);return i`<style> 
.collection {width: ${n}px; }
.collection .species { display: inline-block }
.collection img { display: inline-block; width: 6; height: 6em; object-fit: cover}

</style>

<h2>

<div class="collection" id="bird_gallery" style="display: none" >

${r.map((e=>`<div class="species">\n  <img src="${e.photos[0].url_medium}">\n`))}
</div>
`}}function si(e,t){return t({raw:e.scientific_name})}function di(){return 0}function ci(){return 0}function fi(){return 0}function pi(){return""}function mi(){return""}function vi(){return!1}function bi(e){return e`
- Present user with sound clips from a random bird
- Use can see whether song or call
- User can select how common
`}function hi(e,t){return e.csv("https://raw.githubusercontent.com/RobinL/birds_list/master/the_british_list.csv",e.autoType).then((e=>e.sort(t)))}function gi(e){let t={};return e.forEach((e=>t[e.scientific_name]=e)),t}function yi(e,t,i){if(e in t){let n=t[e].url;return i.csv(n)}return i.csvParse(e)}function _i(){return function(e,t){return e.common_name>t.common_name?1:-1}}function wi(e){return e("d3")}function xi(e,t){return e(t.scientific_name,"","A","United Kingdom")}function ki(e,t){let i=e.recordings.length;if(0==i)return[];let n=Math.min(i,6);return t(e.recordings,n)}function $i(e,t,i){return t(i,1)[0]}function Mi(){return[{name:"10 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_10.csv"},{name:"20 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_20.csv"},{name:"30 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_30.csv"},{name:"40 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_40.csv"}]}function ji(e){let t={};return e.forEach((e=>t[e.name]=e)),t}function qi(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],ei),i.variable(t("tag")).define("tag",["md"],ti),i.variable(t("settings")).define("settings",["md"],ii),i.variable(t("viewof select_your_quiz")).define("viewof select_your_quiz",["html","quiz_list_urls"],ni),i.variable(t("select_your_quiz")).define("select_your_quiz",["Generators","viewof select_your_quiz"],((e,t)=>e.input(t))),i.variable(t("quiz")).define("quiz",["md"],ri),i.variable(t("my_interface")).define("my_interface",["md","get_audio_controls","html","width","quiz_birds","get_inaturalist_photos","mutable total","random_bird","mutable previous_selection","mutable previous_answer","mutable score","mutable trigger","previous_answer","previous_selection","scientific_name_lookup","score","total"],ai),i.variable(t("other_link")).define("other_link",["md"],oi);const n=e.module(ht);i.import("file",n),i.variable(t("get_audio_controls")).define("get_audio_controls",["results","md","html","random_recordings","toTitleCase","recording_to_mp3_url"],li),i.variable(t("get_inaturalist_photos")).define("get_inaturalist_photos",["get_n_from_array_at_random","inaturalist_pics","html","width"],ui);const r=e.module(At);i.import("inaturalist_query",r),i.variable(t("inaturalist_pics")).define("inaturalist_pics",["random_bird","inaturalist_query"],si),i.define("initial trigger",di),i.variable(t("mutable trigger")).define("mutable trigger",["Mutable","initial trigger"],((e,t)=>new e(t))),i.variable(t("trigger")).define("trigger",["mutable trigger"],(e=>e.generator)),i.define("initial score",ci),i.variable(t("mutable score")).define("mutable score",["Mutable","initial score"],((e,t)=>new e(t))),i.variable(t("score")).define("score",["mutable score"],(e=>e.generator)),i.define("initial total",fi),i.variable(t("mutable total")).define("mutable total",["Mutable","initial total"],((e,t)=>new e(t))),i.variable(t("total")).define("total",["mutable total"],(e=>e.generator)),i.define("initial previous_answer",pi),i.variable(t("mutable previous_answer")).define("mutable previous_answer",["Mutable","initial previous_answer"],((e,t)=>new e(t))),i.variable(t("previous_answer")).define("previous_answer",["mutable previous_answer"],(e=>e.generator)),i.define("initial previous_selection",mi),i.variable(t("mutable previous_selection")).define("mutable previous_selection",["Mutable","initial previous_selection"],((e,t)=>new e(t))),i.variable(t("previous_selection")).define("previous_selection",["mutable previous_selection"],(e=>e.generator)),i.define("initial pictures_visibile",vi),i.variable(t("mutable pictures_visibile")).define("mutable pictures_visibile",["Mutable","initial pictures_visibile"],((e,t)=>new e(t))),i.variable(t("pictures_visibile")).define("pictures_visibile",["mutable pictures_visibile"],(e=>e.generator)),i.variable(t()).define(["md"],bi),i.variable(t("bird_list")).define("bird_list",["d3","compare_birds_sort"],hi),i.variable(t("scientific_name_lookup")).define("scientific_name_lookup",["bird_list"],gi),i.variable(t("quiz_birds")).define("quiz_birds",["select_your_quiz","quiz_name_to_url_lookup","d3"],yi),i.variable(t("compare_birds_sort")).define("compare_birds_sort",_i),i.variable(t("d3")).define("d3",["require"],wi);const a=e.module(Xt);return i.import("xeno_canto_query",a),i.import("get_n_from_array_at_random",a),i.import("recording_to_mp3_url",a),i.import("toTitleCase",a),i.variable(t("results")).define("results",["xeno_canto_query","random_bird"],xi),i.variable(t("random_recordings")).define("random_recordings",["results","get_n_from_array_at_random"],ki),i.variable(t("random_bird")).define("random_bird",["trigger","get_n_from_array_at_random","quiz_birds"],$i),i.variable(t("quiz_list_urls")).define("quiz_list_urls",Mi),i.variable(t("quiz_name_to_url_lookup")).define("quiz_name_to_url_lookup",["quiz_list_urls"],ji),i}var Ci=i(5860);const Di=e=>n.createElement(a.H,{frontmatter:e.pageContext.frontmatter}),Ai=["title","tag","settings","viewof select_your_quiz","quiz","my_interface","other_link"];function zi(e){return n.createElement(Ci.Z,{notebook:qi,cells:Ai})}var Ei=function(e){return void 0===e&&(e={}),n.createElement(r.fE,e,n.createElement(zi,e))}},5860:function(e,t,i){var n=i(7294),r=i(6493);const a="mdx-container-div",o=new r.Zu,l=Object.assign({},o,{width:function(){return o.Generators.observe((e=>{let t=e(document.getElementById(a).clientWidth);function i(){let i=document.getElementById(a).clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}))}});t.Z=function(e){let{notebook:t,cells:i,customClassName:a}=e;const o=(0,n.useRef)(i.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new r.r_(l);return e.module(t,(e=>{const t=i.indexOf(e);if(-1!==t)return new r.lj(o.current[t].current)})),()=>e.dispose()}),[t,i]),n.createElement("div",{className:a},o.current.map(((e,t)=>n.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,i){i.d(t,{H:function(){return a}});var n=i(7294),r=i(4160);const a=e=>{let{frontmatter:t}=e;const{title:i,description:a,image:o,siteUrl:l,twitterUsername:u}=(0,r.K2)("1865044719").site.siteMetadata,s={title:(null==t?void 0:t.title)||i,description:(null==t?void 0:t.description)||a,image:`${l}${(null==t?void 0:t.image)||o}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:u,...t},d=null==t?void 0:t.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,s.title),n.createElement("meta",{name:"description",content:s.description}),n.createElement("meta",{name:"image",content:s.image}),d&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${d}`}))}}}]);
//# sourceMappingURL=component---src-mdx-bird-quiz-mdx-ff509a7beb9a4ebc14a0.js.map