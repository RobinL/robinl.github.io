"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[3540],{4216:function(e,t,i){i.r(t),i.d(t,{Head:function(){return Kt},default:function(){return ii},output_order:function(){return ei}});var n=i(7294),o=i(7848),a=i(7825);function r(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function s(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function l(e){return e()}function u(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function d(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function p(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function f(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function c(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function h(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function m(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function v(e){return function(t={}){let{min:i=0,max:n=1,value:o=(n+i)/2,step:a="any",precision:r=2,title:s,description:l,getValue:u,format:d,display:p,submit:f}="number"==typeof t?{value:t}:t;return r=Math.pow(10,r),u||(u=e=>Math.round(e.valueAsNumber*r)/r),e({type:"range",title:s,description:l,submit:f,format:d,display:p,attributes:{min:i,max:n,step:a,value:o},getValue:u})}}function b(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function g(e){return e()}function w(e){return!this}function y(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function x(e){return new Date(Date.now()).toUTCString()}function k(e){return function(t={}){const{value:i="Ok",title:n,description:o,disabled:a}="string"==typeof t?{value:t}:t,r=e({type:"button",title:n,description:o,attributes:{disabled:a,value:i}});return r.output.remove(),r}}function S(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function $(e){return e(["Spring","Summer","Fall","Winter"])}function _(e){return e}function j(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function C(e){return e}function T(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function D(e){return e}function A(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function M(e){return e}function E(e,t){return function(i={}){let{value:n,title:o,description:a,submit:r,multiple:s,size:l,options:u}=Array.isArray(i)?{options:i}:i;u=u.map((e=>"object"==typeof e?e:{value:e,label:e}));const d=e({type:"select",title:o,description:a,submit:r,getValue:e=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>e.value));return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${l||u.length}"`:""}>
          ${u.map((({value:e,label:i})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(n)?n.includes(e):n===e,textContent:i})))}
        </select>
      </form>
    `});return d.output.remove(),d}}function G(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function P(e,t){return e({options:t.objects.states.geometries.map((e=>e.properties.name)),placeholder:"Search for a US state . . ."})}function L(e){return e}function I(e,t){return function(i={}){const{value:n,title:o,description:a,autocomplete:r="off",placeholder:s,size:l,options:u,list:d="options"}=Array.isArray(i)?{options:i}:i,p=new Set(u),f=e({type:"text",title:o,description:a,action:e=>{e.value=e.input.value=n||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,p.has(e.input.value)&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s}" style="font-size: 1em;" list=${d}>
          <datalist id="${d}">
              ${u.map((e=>Object.assign(t`<option>`,{value:e})))}
          </datalist>
      </form>
      `});return f.output.remove(),f}}function q(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function z(e){return e()}function H(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function W(e){return function(t={}){const{value:i="#000000",title:n,description:o,submit:a,display:r}="string"==typeof t?{value:t}:t,s=e({type:"color",title:n,description:o,submit:a,display:r,attributes:{value:i}});return(n||o)&&(s.input.style.margin="5px 0"),s}}function N(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function R(e){return e()}function U(e){return e}function F(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function O(e){return e}function B(e,t){return function(i={}){const{value:n=[],title:o,description:a,submit:r}=Array.isArray(i)?{value:i}:i;let[s,l]=n;s=null!=s?s:"",l=null!=l?l:"";const u=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${s}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${l}" />`,p=t({type:"coordinates",title:o,description:a,submit:r,getValue:()=>{const e=u.valueAsNumber,t=d.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${u}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${d}
        </label>
      </form>
    `});return p.output.remove(),p}}function Q(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function Y(e){return e([-122.27,37.87])}function V(e){return e}function J(e,t,i,n,o,a,r){return function(s={}){const{value:l=[],title:u,description:d,width:p=400}=Array.isArray(s)?{value:s}:s,f=Math.round(.525*p);let[c,h]=l;c=null!=c?c:null,h=null!=h?h:null;const m=e`<form style="width: ${p}px;"></form>`,v=t.context2d(p,f),b=v.canvas;b.style.margin="10px 0 0";const g=i.geoNaturalEarth1().precision(.1).fitSize([p,f],{type:"Sphere"}),w=i.geoPath(g,v).pointRadius(2.5);function y(){if(v.fillStyle="#fff",v.fillRect(0,0,p,f),v.beginPath(),w(n),v.lineWidth=.35,v.strokeStyle="#ddd",v.stroke(),v.beginPath(),w(o),v.fillStyle="#f4f4f4",v.fill(),v.beginPath(),w(a),v.strokeStyle="#aaa",v.stroke(),null!=c&&null!=h){const e={type:"MultiPoint",coordinates:[[c,h]]};v.beginPath(),w(e),v.fillStyle="#f00",v.fill()}}m.append(b),b.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t,i]);c=+n[0].toFixed(2),h=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();return r({type:"worldMapCoordinates",title:u,description:d,display:t=>e`<div style="position: absolute; width: ${p}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=c?c:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=h?h:""} 
          </div>`,getValue:()=>[null!=c?c:null,null!=h?h:null],form:m})}}function Z(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function X(e){return e([-122.27,37.87])}function K(e){return e}function ee(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function te(e){return e}function ie(e,t,i,n,o,a){return function(r={}){const{value:s=[],title:l,description:u,width:d=400}=Array.isArray(r)?{value:r}:r,p=d/960,f=600*p;let[c,h]=s;c=null!=c?c:null,h=null!=h?h:null;const m=e`<form style="width: ${d}px;"></form>`,v=t.context2d(d,f),b=v.canvas;b.style.margin="5px 0 0";const g=i.geoAlbersUsa().scale(1280).translate([480,300]),w=i.geoPath().context(v).pointRadius(2.5/p);function y(){if(v.clearRect(0,0,d,f),v.save(),v.scale(p,p),v.lineWidth=.35/p,v.beginPath(),w(n),v.fillStyle="#f4f4f4",v.fill(),v.beginPath(),w(o),v.strokeStyle="#aaa",v.stroke(),null!=c&&null!=h){const e={type:"MultiPoint",coordinates:[g([c,h])]};v.beginPath(),w(e),v.fillStyle="#f00",v.fill()}v.restore()}m.append(b),b.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t/p,i/p]);c=+n[0].toFixed(2),h=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();return a({type:"worldMapCoordinates",title:l,description:u,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=c?c:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=h?h:""} 
          </div>`,getValue:()=>[null!=c?c:null,null!=h?h:null],form:m})}}function ne(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function oe(e){return e()}function ae(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function re(e){return function(t={}){const{min:i,max:n,value:o,title:a,description:r,display:s}="string"==typeof t?{value:t}:t;return e({type:"date",title:a,description:r,display:s,attributes:{min:i,max:n,value:o}})}}function se(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function le(e){return e()}function ue(e){return e}function de(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function pe(e){return e}function fe(e){return function(t={}){const{min:i,max:n,step:o,value:a,title:r,description:s,display:l}="string"==typeof t?{value:t}:t,u=e({type:"time",title:r,description:s,display:l,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:n,step:o,value:a}});return u.output.remove(),u}}function ce(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function he(e){return e()}function me(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function ve(e,t,i){const n=e`<div>`;for(var o=0;o<t.length;o++){t[o];let a=e`<img height="125px" style="margin: 2px;" />`;a.src=await i.url(t[o]),n.append(a)}return n}function be(e){return function(t={}){const{multiple:i,accept:n,title:o,description:a}=t,r=e({type:"file",title:o,description:a,attributes:{multiple:i,accept:n},action:e=>{e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return r.output.remove(),r.input.onchange(),r}}function ge(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function we(e){return e()}function ye(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function xe(e){return e}function ke(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function Se(e){return e}function $e(e){return function(t={}){const{value:i,title:n,description:o,autocomplete:a="off",maxlength:r,minlength:s,pattern:l,placeholder:u,size:d,submit:p}="string"==typeof t?{value:t}:t,f=e({type:"text",title:n,description:o,submit:p,attributes:{value:i,autocomplete:a,maxlength:r,minlength:s,pattern:l,placeholder:u,size:d}});return f.output.remove(),f.input.style.fontSize="1em",f}}function _e(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function je(e){return e()}function Ce(e){return e}function Te(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function De(e){return e}function Ae(e,t){return function(i={}){const{value:n="",title:o,description:a,autocomplete:r,cols:s=45,rows:l=3,width:u,height:d,maxlength:p,placeholder:f,spellcheck:c,wrap:h,submit:m}="string"==typeof i?{value:i}:i,v=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:o,description:a,submit:m,attributes:{autocomplete:r,cols:s,rows:l,maxlength:p,placeholder:f,spellcheck:c,wrap:h}});return v.output.remove(),null!=u&&(v.input.style.width=u),null!=d&&(v.input.style.height=d),m&&(v.submit.style.margin="0"),(o||a)&&(v.input.style.margin="3px 0"),v}}function Me(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Ee(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Ge(e){return e}function Pe(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function Le(e){return e}function Ie(e,t){return function(i={}){let{value:n,title:o,description:a,submit:r,options:s}=Array.isArray(i)?{options:i}:i;s=s.map((e=>"string"==typeof e?{value:e,label:e}:e));const l=e({type:"radio",title:o,description:a,submit:r,getValue:e=>{if(e.checked)return e.value;const t=Array.prototype.find.call(e,(e=>e.checked));return t?t.value:void 0},form:t`
      <form>
        ${s.map((({value:e,label:i})=>{const o=t`<input type=radio name=input ${e===n?"checked":""} style="vertical-align: baseline;" />`;o.setAttribute("value",e);return t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${o}
           ${i}
          </label>`}))}
      </form>
    `});return l.output.remove(),l}}function qe(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function ze(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function He(e){return e}function We(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function Ne(e){return e}function Re(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function Ue(e){return e}function Fe(e,t){return function(i={}){let{value:n,title:o,description:a,submit:r,options:s}=Array.isArray(i)?{options:i}:i;s=s.map((e=>"string"==typeof e?{value:e,label:e}:e));const l=e({type:"checkbox",title:o,description:a,submit:r,getValue:e=>e.length?Array.prototype.filter.call(e,(e=>e.checked)).map((e=>e.value)):!!e.checked&&e.value,form:t`
      <form>
        ${s.map((({value:e,label:i})=>{const o=t`<input type=checkbox name=input ${(n||[]).indexOf(e)>-1?"checked":""} style="vertical-align: baseline;" />`;o.setAttribute("value",e);return t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${o}
           ${i}
          </label>`}))}
      </form>
    `});return l.output.remove(),l}}function Oe(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function Be(e){return e()}function Qe(e){return e}function Ye(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function Ve(e){return e}function Je(e){return function(t={}){const{value:i,title:n,description:o,placeholder:a,submit:r,step:s="any",min:l,max:u}="number"==typeof t||"string"==typeof t?{value:+t}:t,d=e({type:"number",title:n,description:o,submit:r,attributes:{value:i,placeholder:a,step:s,min:l,max:u,autocomplete:"off"},getValue:e=>e.valueAsNumber});return d.output.remove(),d.input.style.width="auto",d.input.style.fontSize="1em",d}}function Ze(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function Xe(e){return e({value:"password"})}function Ke(e){return e}function et(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tt(e){return e}function it(e){return function(t={}){const{value:i,title:n,description:o,autocomplete:a="off",maxlength:r,minlength:s,pattern:l,placeholder:u,size:d,submit:p}="string"==typeof t?{value:t}:t,f=e({type:"password",title:n,description:o,submit:p,attributes:{value:i,autocomplete:a,maxlength:r,minlength:s,pattern:l,placeholder:u,size:d}});return f.output.remove(),f.input.style.fontSize="1em",f}}function nt(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function ot(e,t){return function(i){let{form:n,type:o="text",attributes:a={},action:r,getValue:s,title:l,description:u,format:d,display:p,submit:f,options:c}=i;const h=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(a).forEach((e=>{const t=a[e];null!=t&&n.input.setAttribute(e,t)})),f&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),l&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${l}</div>`),u&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${u}</div>`),d&&(d="function"==typeof d?d:t.format(d)),r)r(n);else{const e=f?"onsubmit":"button"==o?"onclick":"checkbox"==o||"radio"==o?"onchange":"oninput";n[e]=t=>{t&&t.preventDefault();const i=s?s(n.input):n.input.value;if(n.output){const e=p?p(i):d?d(i):i;if(e instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(e)}else n.output.value=e}n.value=i,"oninput"!==e&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==e&&(h.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==e&&(n.onsubmit=e=>e&&e.preventDefault()),n[e]()}for(;n.childNodes.length;)h.appendChild(n.childNodes[0]);return n.append(h),n}}function at(e){return e("d3-geo@1")}function rt(e){return e("d3-format@1")}function st(e){return e("topojson-client@3")}async function lt(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function ut(e,t){return e.feature(t,t.objects.land)}function dt(e,t){return e.feature(t,t.objects.countries)}async function pt(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function ft(e,t){return e.feature(t,t.objects.nation)}function ct(e,t){return e.feature(t,t.objects.states)}function ht(e){return e.geoGraticule10()}function mt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function vt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function bt(e,t){const i=e.module();return i.variable(t()).define(["md"],r),i.variable(t("sliderDemo")).define("sliderDemo",["md"],s),i.variable(t("viewof a")).define("viewof a",["slider"],l),i.variable(t("a")).define("a",["Generators","viewof a"],((e,t)=>e.input(t))),i.variable(t("viewof a1")).define("viewof a1",["slider"],u),i.variable(t("a1")).define("a1",["Generators","viewof a1"],((e,t)=>e.input(t))),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],d),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],((e,t)=>e.input(t))),i.variable(t("viewof a2")).define("viewof a2",["slider"],p),i.variable(t("a2")).define("a2",["Generators","viewof a2"],((e,t)=>e.input(t))),i.variable(t("viewof a3")).define("viewof a3",["slider"],f),i.variable(t("a3")).define("a3",["Generators","viewof a3"],((e,t)=>e.input(t))),i.variable(t("viewof a4")).define("viewof a4",["slider"],c),i.variable(t("a4")).define("a4",["Generators","viewof a4"],((e,t)=>e.input(t))),i.variable(t("viewof a5")).define("viewof a5",["slider"],h),i.variable(t("a5")).define("a5",["Generators","viewof a5"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],m),i.variable(t("slider")).define("slider",["input"],v),i.variable(t("buttonDemo")).define("buttonDemo",["md"],b),i.variable(t("viewof b")).define("viewof b",["button"],g),i.variable(t("b")).define("b",["Generators","viewof b"],((e,t)=>e.input(t))),i.variable(t()).define(["b"],w),i.variable(t("viewof b1")).define("viewof b1",["button"],y),i.variable(t("b1")).define("b1",["Generators","viewof b1"],((e,t)=>e.input(t))),i.variable(t()).define(["b1"],x),i.variable(t("button")).define("button",["input"],k),i.variable(t("selectDemo")).define("selectDemo",["md"],S),i.variable(t("viewof dd")).define("viewof dd",["select"],$),i.variable(t("dd")).define("dd",["Generators","viewof dd"],((e,t)=>e.input(t))),i.variable(t()).define(["dd"],_),i.variable(t("viewof dd1")).define("viewof dd1",["select"],j),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],((e,t)=>e.input(t))),i.variable(t()).define(["dd1"],C),i.variable(t("viewof dd2")).define("viewof dd2",["select"],T),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],((e,t)=>e.input(t))),i.variable(t()).define(["dd2"],D),i.variable(t("viewof dd3")).define("viewof dd3",["select"],A),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],((e,t)=>e.input(t))),i.variable(t()).define(["dd3"],M),i.variable(t("select")).define("select",["input","html"],E),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],G),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],P),i.variable(t("as")).define("as",["Generators","viewof as"],((e,t)=>e.input(t))),i.variable(t()).define(["as"],L),i.variable(t("autoSelect")).define("autoSelect",["input","html"],I),i.variable(t("colorDemo")).define("colorDemo",["md"],q),i.variable(t("viewof c")).define("viewof c",["color"],z),i.variable(t("c")).define("c",["Generators","viewof c"],((e,t)=>e.input(t))),i.variable(t("viewof c1")).define("viewof c1",["color"],H),i.variable(t("c1")).define("c1",["Generators","viewof c1"],((e,t)=>e.input(t))),i.variable(t("color")).define("color",["input"],W),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],N),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],R),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],((e,t)=>e.input(t))),i.variable(t()).define(["coords1"],U),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],F),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],((e,t)=>e.input(t))),i.variable(t()).define(["coords2"],O),i.variable(t("coordinates")).define("coordinates",["html","input"],B),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],Q),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],Y),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["worldMap1"],V),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],J),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],Z),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],X),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap1"],K),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ee),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap2"],te),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ie),i.variable(t("dateDemo")).define("dateDemo",["md"],ne),i.variable(t("viewof d")).define("viewof d",["date"],oe),i.variable(t("d")).define("d",["Generators","viewof d"],((e,t)=>e.input(t))),i.variable(t("viewof d1")).define("viewof d1",["date"],ae),i.variable(t("d1")).define("d1",["Generators","viewof d1"],((e,t)=>e.input(t))),i.variable(t("date")).define("date",["input"],re),i.variable(t("timeDemo")).define("timeDemo",["md"],se),i.variable(t("viewof t")).define("viewof t",["time"],le),i.variable(t("t")).define("t",["Generators","viewof t"],((e,t)=>e.input(t))),i.variable(t()).define(["t"],ue),i.variable(t("viewof t1")).define("viewof t1",["time"],de),i.variable(t("t1")).define("t1",["Generators","viewof t1"],((e,t)=>e.input(t))),i.variable(t()).define(["t1"],pe),i.variable(t("time")).define("time",["input"],fe),i.variable(t("fileDemo")).define("fileDemo",["md"],ce),i.variable(t("viewof e")).define("viewof e",["file"],he),i.variable(t("e")).define("e",["Generators","viewof e"],((e,t)=>e.input(t))),i.variable(t("viewof e1")).define("viewof e1",["file"],me),i.variable(t("e1")).define("e1",["Generators","viewof e1"],((e,t)=>e.input(t))),i.variable(t()).define(["html","e1","Files"],ve),i.variable(t("file")).define("file",["input"],be),i.variable(t("textDemo")).define("textDemo",["md"],ge),i.variable(t("viewof f")).define("viewof f",["text"],we),i.variable(t("f")).define("f",["Generators","viewof f"],((e,t)=>e.input(t))),i.variable(t("viewof f1")).define("viewof f1",["text"],ye),i.variable(t("f1")).define("f1",["Generators","viewof f1"],((e,t)=>e.input(t))),i.variable(t()).define(["f1"],xe),i.variable(t("viewof f2")).define("viewof f2",["text"],ke),i.variable(t("f2")).define("f2",["Generators","viewof f2"],((e,t)=>e.input(t))),i.variable(t()).define(["f2"],Se),i.variable(t("text")).define("text",["input"],$e),i.variable(t("textareaDemo")).define("textareaDemo",["md"],_e),i.variable(t("viewof g")).define("viewof g",["textarea"],je),i.variable(t("g")).define("g",["Generators","viewof g"],((e,t)=>e.input(t))),i.variable(t()).define(["g"],Ce),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Te),i.variable(t("g1")).define("g1",["Generators","viewof g1"],((e,t)=>e.input(t))),i.variable(t()).define(["g1"],De),i.variable(t("textarea")).define("textarea",["input","html"],Ae),i.variable(t("radioDemo")).define("radioDemo",["md"],Me),i.variable(t("viewof r")).define("viewof r",["radio"],Ee),i.variable(t("r")).define("r",["Generators","viewof r"],((e,t)=>e.input(t))),i.variable(t()).define(["r"],Ge),i.variable(t("viewof r1")).define("viewof r1",["radio"],Pe),i.variable(t("r1")).define("r1",["Generators","viewof r1"],((e,t)=>e.input(t))),i.variable(t()).define(["r1"],Le),i.variable(t("radio")).define("radio",["input","html"],Ie),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],qe),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],ze),i.variable(t("ch")).define("ch",["Generators","viewof ch"],((e,t)=>e.input(t))),i.variable(t()).define(["ch"],He),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],We),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],((e,t)=>e.input(t))),i.variable(t()).define(["ch1"],Ne),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],Re),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],((e,t)=>e.input(t))),i.variable(t()).define(["ch3"],Ue),i.variable(t("checkbox")).define("checkbox",["input","html"],Fe),i.variable(t("numberDemo")).define("numberDemo",["md"],Oe),i.variable(t("viewof h")).define("viewof h",["number"],Be),i.variable(t("h")).define("h",["Generators","viewof h"],((e,t)=>e.input(t))),i.variable(t()).define(["h"],Qe),i.variable(t("viewof h1")).define("viewof h1",["number"],Ye),i.variable(t("h1")).define("h1",["Generators","viewof h1"],((e,t)=>e.input(t))),i.variable(t()).define(["h1"],Ve),i.variable(t("number")).define("number",["input"],Je),i.variable(t("passwordDemo")).define("passwordDemo",["md"],Ze),i.variable(t("viewof i")).define("viewof i",["password"],Xe),i.variable(t("i")).define("i",["Generators","viewof i"],((e,t)=>e.input(t))),i.variable(t()).define(["i"],Ke),i.variable(t("viewof i1")).define("viewof i1",["password"],et),i.variable(t("i1")).define("i1",["Generators","viewof i1"],((e,t)=>e.input(t))),i.variable(t()).define(["i1"],tt),i.variable(t("password")).define("password",["input"],it),i.variable(t()).define(["md"],nt),i.variable(t("input")).define("input",["html","d3format"],ot),i.variable(t("d3geo")).define("d3geo",["require"],at),i.variable(t("d3format")).define("d3format",["require"],rt),i.variable(t("topojson")).define("topojson",["require"],st),i.variable(t("world")).define("world",lt),i.variable(t("land")).define("land",["topojson","world"],ut),i.variable(t("countries")).define("countries",["topojson","world"],dt),i.variable(t("usa")).define("usa",pt),i.variable(t("nation")).define("nation",["topojson","usa"],ft),i.variable(t("states")).define("states",["topojson","usa"],ct),i.variable(t("graticule")).define("graticule",["d3geo"],ht),i.variable(t("viewof license")).define("viewof license",["md"],mt),i.variable(t("license")).define("license",["Generators","viewof license"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],vt),i}function gt(e){return e`# Spark UI SQL customise annotations`}function wt(e){return e`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`}function yt(e,t){return e({value:t,rows:6,width:"100%"})}function xt(e,t,i){return e(t,i)}function kt(){return{cluster_11:"hello",node_13:"Read in the data"}}function St(e,t,i,n){return e`
  
  ## Glossary

  ${t.map((t=>i`<h3 class="title_case">${t}</h3><p>${e`${n[t].definition}`}</p>`))}
`}function $t(e,t,i){let n=e.select(t`${i}`).select("#plan-viz-metadata");return n=n.node().outerHTML,t`${n}`}function _t(e,t){return function(i){let n=e.select(t`${i}`).select("#plan-viz-metadata");return n=n.node().outerHTML,t`${n}`}}function jt(e,t){return function(i){let n=e.select(t`${i}`).select("#plan-viz-graph svg");return n=n.attr("class","sparkui"),n=n.node().outerHTML,n}}function Ct(e,t,i,n,o,a,r,s){return function(l,u,d=!1){let p=e(l),f=t`${p}`,c=i.select(f);return c=c.attr("class","sparkui"),c.selectAll(".node").on("mouseover",(function(){let e=[...this.classList].find((e=>e.includes("node_"))),t=+e.match(/\d+/)[0],l="";e in u&&(l=n`${u[e]}`);let p,f=o(this);try{p=i.select("#plan-meta-data-"+t).text()}catch(v){p=""}let c=a(f+" "+p),h=r`${l} ${c} <p><strong>Original tooltip: </strong>${p}</p>`;d&&(h=r`${e} ${h}`);var m=i.select(this).node();s(m).tooltip({title:h,trigger:"manual",container:"body",placement:"right",html:!0}),s(m).tooltip("show")})).on("mouseout",(function(e){var t=i.select(this).node();s(t).tooltip("destroy")})),c.selectAll(".cluster").on("mouseover",(function(){let e=[...this.classList].find((e=>e.includes("cluster_"))),t=(e.match(/\d+/)[0],"");e in u&&(t=n`${u[e]}`);let l=o(this),p=r`${t} ${a(l)}`;d&&(p=r`${e} ${p}`);var f=i.select(this).node();s(f).tooltip({title:p,trigger:"manual",container:"body",placement:"right",html:!0}),s(f).tooltip("show")})).on("mouseout",(function(e){var t=i.select(this).node();s(t).tooltip("destroy")})),f}}function Tt(){return function(e){let t="";return function e(i){for(var n=0;n<i.childNodes.length;n++){var o=i.childNodes[n];e(o),o.firstChild||(t+=o.textContent+" ")}}(e),t}}function Dt(e,t,i){return function(n){let o=[];return e.forEach((e=>{(n.toLowerCase().includes(`${e} `)||n.toLowerCase().includes(`${e}(`))&&o.push(e)})),o.map((e=>{let n=t[e].short_definition,o=t[e].key;return i`<p><strong class="title_case">${o}</strong>: ${n}</p>`}))}}function At(e){return e.json("https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json")}function Mt(e){return Object.keys(e)}function Et(e){return e("d3")}function Gt(e){return e.text("https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html")}function Pt(e){return e("jquery")}function Lt(e){return function(e){var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,i,n){var o,a,r,s,l;for(this.type=t,this.$element=e(i),this.options=this.getOptions(n),this.enabled=!0,l=(r=this.options.trigger.split(" ")).length;l--;)"click"==(s=r[l])?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=s&&(o="hover"==s?"mouseenter":"focus",a="hover"==s?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var i,n=e.fn[this.type].defaults,o={};if(this._options&&e.each(this._options,(function(e,t){n[e]!=t&&(o[e]=t)}),this),!(i=e(t.currentTarget)[this.type](o).data(this.type)).options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)},leave:function(t){var i=e(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)},show:function(){var t,i,n,o,a,r,s=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),a="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),i=this.getPosition(),n=t[0].offsetWidth,o=t[0].offsetHeight,a){case"bottom":r={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":r={top:i.top-o,left:i.left+i.width/2-n/2};break;case"left":r={top:i.top+i.height/2-o/2,left:i.left-n};break;case"right":r={top:i.top+i.height/2-o/2,left:i.left+i.width}}this.applyPlacement(r,a),this.$element.trigger("shown")}},applyPlacement:function(e,t){var i,n,o,a,r=this.tip(),s=r[0].offsetWidth,l=r[0].offsetHeight;r.offset(e).addClass(t).addClass("in"),i=r[0].offsetWidth,n=r[0].offsetHeight,"top"==t&&n!=l&&(e.top=e.top+l-n,a=!0),"bottom"==t||"top"==t?(o=0,e.left<0&&(o=-2*e.left,e.left=0,r.offset(e),i=r[0].offsetWidth,n=r[0].offsetHeight),this.replaceArrow(o-s+i,i,"left")):this.replaceArrow(n-l,n,"top"),a&&r.offset(e)},replaceArrow:function(e,t,i){this.arrow().css(i,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){var t,i=this.tip(),n=e.Event("hide");if(this.$element.trigger(n),!n.isDefaultPrevented())return i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?(t=setTimeout((function(){i.off(e.support.transition.end).detach()}),500),i.one(e.support.transition.end,(function(){clearTimeout(t),i.detach()}))):i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e=this.$element,t=this.options;return e.attr("data-original-title")||("function"==typeof t.title?t.title.call(e[0]):t.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var i=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=e.fn.tooltip;e.fn.tooltip=function(i){return this.each((function(){var n=e(this),o=n.data("tooltip"),a="object"==typeof i&&i;o||n.data("tooltip",o=new t(this,a)),"string"==typeof i&&o[i]()}))},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(window.jQuery)}function It(e){return e`<style> 
        .sparkui {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 11.844px;
    font-weight: bold;
    line-height: 14px;
        }
 .sparkui {
  font-weight: normal;
  text-shadow: none;
}

svg.sparkui  g.cluster rect {
  fill: #A0DFFF;
  stroke: #3EC0FF;
  stroke-width: 1px;
}

 svg.sparkui g.node rect {
  fill: #C3EBFF;
  stroke: #3EC0FF;
  stroke-width: 1px;
}

/* Highlight the SparkPlan node name */
svg.sparkui text :first-child {
  font-weight: bold;
}

svg.sparkui path {
  stroke: #444;
  stroke-width: 1.5px;
}

/* Breaks the long string like file path when showing tooltips */
.tooltip-inner {
  word-wrap:break-word;
} 



.tooltip {font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}

.tooltip code {
font-size:11px
}

.tooltip{position:absolute;z-index:1030;display:block;visibility:visible;font-size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0);}.tooltip.in{opacity:0.8;filter:alpha(opacity=80);}
.tooltip.top{margin-top:-3px;padding:5px 0;}
.tooltip.right{margin-left:3px;padding:0 5px;}
.tooltip.bottom{margin-top:3px;padding:5px 0;}
.tooltip.left{margin-left:-3px;padding:0 5px;}
.tooltip-inner{max-width:400px;padding:8px;color:#ffffff;text-align:left;text-decoration:none;background-color:#000000;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;}
.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;}
.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000000;}
.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000000;}
.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000000;}
.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000000;}




.title_case {
text-transform: capitalize
}



</style>`}function qt(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],gt),i.variable(t("md_1")).define("md_1",["md"],wt),i.variable(t("viewof raw_html")).define("viewof raw_html",["textarea","sample_html"],yt),i.variable(t("raw_html")).define("raw_html",["Generators","viewof raw_html"],((e,t)=>e.input(t))),i.variable(t("output_svg")).define("output_svg",["plot_plan","raw_html","additional_annotations"],xt),i.variable(t("additional_annotations")).define("additional_annotations",kt),i.variable(t("md_glossary")).define("md_glossary",["md","glossary_keys","html","glossary"],St),i.variable(t("metadata")).define("metadata",["d3","html","raw_html"],$t),i.variable(t("get_metadata")).define("get_metadata",["d3","html"],_t),i.variable(t("get_svg")).define("get_svg",["d3","html"],jt),i.variable(t("plot_plan")).define("plot_plan",["get_svg","svg","d3","md","get_text_content_spaces","get_definitions_from_text","html","$"],Ct),i.variable(t("get_text_content_spaces")).define("get_text_content_spaces",Tt),i.variable(t("get_definitions_from_text")).define("get_definitions_from_text",["glossary_keys","glossary","html"],Dt),i.variable(t("glossary")).define("glossary",["d3"],At),i.variable(t("glossary_keys")).define("glossary_keys",["glossary"],Mt),i.variable(t("d3")).define("d3",["require"],Et),i.variable(t("sample_html")).define("sample_html",["d3"],Gt),i.variable(t("$")).define("$",["require"],Pt),i.variable(t("bstt")).define("bstt",["$"],Lt),i.variable(t("styles1")).define("styles1",["html"],It);const n=e.module(bt);return i.import("slider",n),i.import("textarea",n),i}function zt(e){return e`# Understanding the Spark UI by example: the Left Join`}function Ht(e){return e`

### Introduction 

The Spark UI is an invaluable tool to help understand and improve the performance of Spark jobs. This post uses the example of a left join to help build an understanding of what it can offer.

Note: This post is best viewed on a desktop computer. 

### Accessing the UI

If you are running Spark locally, the Spark UI is available at http://localhost:4040/. Further information about where to find it are [here](https://spark.apache.org/docs/latest/monitoring.html).  

In this post, I reproduce the contents of the SQL tab of the UI, but I've added additional details and explanations in the hover-over tooltips to help interpret what's going on.

### Setup

We will use the airlines dataset (downloaded from [here](https://blog.cloudera.com/analyzing-us-flight-data-on-amazon-s3-with-sparklyr-and-apache-spark-2-0/)) as an example. See [here](https://github.com/RobinL/understanding_spark_ui/blob/master/02_process_airlines.ipynb) for how I pre-processed the data.

This is composed of a large fact table of 123,534,969 flights, and a smaller dimension table of the details of 3,376 airports.

We will join these two tables together in Spark using the following SQL (see [here](https://github.com/RobinL/understanding_spark_ui/blob/master/03_left_join.ipynb) for full code):

\`\`\`sql
SELECT flights.carrier, airports.iata, airports.airport as destination
FROM flights 
LEFT JOIN airports
on flights.dest = airports.iata
WHERE flights.origin = 'LAX'
\`\`\`


### Interactive Spark UI

The SQL tab in the Spark UI gives the highest-level overview of how Spark has converted the SQL query into a physical execution plan.  This is a graphical equivalent to the physical plan you can see if you type: \`spark.sql(sql_statement).explain()\`.  The SQL tab appears once you've run at least one query.

For this query, you will see the following diagram.  You can hover over the various nodes in the below diagram for a detailed explanation.

Technical note: To make this post more informative, I've asked Spark to use a [sort merge join](https://stackoverflow.com/questions/50019457/why-does-spark-planner-prefer-sort-merge-join-over-shuffled-hash-join). In reality, the airports table is small enough to use a [broadcast hash join](https://jaceklaskowski.gitbooks.io/mastering-spark-sql/spark-sql-joins-broadcast.html).



`}function Wt(e,t,i){return e(t,i,!1)}function Nt(){let e="Spark has seen the left join on `dest`.  In order to perform this join, data needs to be sorted by the `dest` column.  Spark uses a hash partition using the default 200 shuffle partitions (see original tooltip) to split the data between executors.  The data from both the `parquet` and the `csv` file will  be hashpartitioned on the `dest` field.   This means data from the same `dest` ends up on the same executor node (computer), meaning that this part of data can be joined without further shuffles.\n\nThis process will work well if the data is evenly distributed across `dest` values.  We can get an indication of whether this is the case from the timings - if the max timing is much greater than the median, we probably have a problem. \n";return{cluster_7:"Spark has generated optimised Java code that combines three operations:  read the data, filter it, and select the requested columns (project).  Since the incoming data is in multiple files, Spark will be able to perform these operations in parallel.\n    \nThe timings are  `28.9 s (302 ms, 1.2 s, 2.3 s)`.  These numbers are total (min, median, max).  They give us basic information about how effectively parallelisation has worked.  A large disparity between median and max may be indicative of data skew (i.e. one part of the data taking a lot longer to process than others, and thereby holding up the whole operation)\n    ",node_10:"Spark has used predicate pushdown on the `WHERE flights.origin = 'LAX` part of the query to optimise the file read.  This allows Spark to filter data out as it is read in.  In this case Spark is able to exploit  the metadata headers of the Parquet files that contain information about the data contents of the file.  This allows Spark to skip reading large parts of the Parquet files.  ",node_9:"In addition to filtering on the `WHERE` condition, Spark filters out any data which is NULL in the field which we are joining on.",cluster_14:"Note the timings are all the same.  This is a pretty big clue that Spark has not parallelised this step.  This is because there's a small csv file on disk, which is below Spark's size threshold for parallelisation.",node_6:e,node_13:e,node_3:"Where one 'side' of the join is small, like the `airports` table, Spark would usually use a broadcast hash join, whereby the whole of the airports table is broadcast to each compute node.  This avoids the need to shuffle the larger `flights` table.  To make this example more interesting, I forced it not to use the broadcast join by setting the config option `spark.sql.autoBroadcastJoinThreshold` to `0`.   The `SortMergeJoin` is the standard join that Spark 2.0+ uses when both sides of the join are large.   See https://stackoverflow.com/questions/50019457/why-does-spark-planner-prefer-sort-merge-join-over-shuffled-hash-join for more information."}}function Rt(e){return e`## Parallelisation

We already know that Spark is able to execute much of its work in parallel, within the nodes of the DAG.  However, the speedup that parallelism gives us for these individual operations such as sorts or aggregates is often limited by the need to partition and shuffle data.  

The diagram helps us understand a higher level of parallelism that can happening between parts of the workflow, which often does not suffer from this 'speed limit', and which we should often seek to maximise.

In this case, the two leaf nodes at the top of the diagram show that the two input tables can be processed in parallel, right up until the join.  The data is read, filtered, and then sorted, and this can happen completely independently.  It's only at the 'SortMergeJoin' node that these two processes need to wait for each other to complete.


In more complex jobs, there may be 10s of these leaf nodes, and it may be possible to adjust your code to make them stay independent for longer.




`}function Ut(e){return e`## Other parts of the Spark UI

The SQL tab of the Spark UI provides the highest-level overview of the execution of your Spark program.  

The rest of the UI provides more details at different levesl.  

- A given Spark SQL query may be broken into one or more jobs.  Each job corresponds to a single RDD action.  For example, if your query contains a scalar subquery, your query will produce [multiple jobs](https://youtu.be/ywPuZ_WrHT0?t=416) because that subquery will be executed independently and the results will be sent across the cluster.

 The query in this example corresponds to a single job, because it corredponds to a single RDD action - the write back to the file system.

- Jobs are divided into "stages" based on the shuffle boundary. A stage is a collection of tasks that run the same code, each on a different subset of the data. 

- Each stage is further divided into tasks based on the number of partitions in the RDD. So tasks are the smallest units of work for Spark. Every task inside a stage does the exact same thing, only on a different segment of the data. 

To delve further into the functioning of this left join, I would usually do the following:

- Navigate to the jobs tab, to see more information about the stages of the job
- Click through to the stages of the job, to better understand the amount of parallelism being used (as represented by the number of tasks), and to get further information about data skew (e.g. by looking at the percentiles in the in 'stages' tab.

`}function Ft(e){return e.json("https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/b98ceb36c7af3a6a78871f83221abd8cffa032f1/annotations.json")}function Ot(e){return e`## Questions

Why does the flights dataset read in 20 partitions despite scanning 258 files on disk?

We can change this by setting e.g.\`conf.set("spark.sql.files.maxPartitionBytes", 1024*1024*10)\` but I don't understand why we don't get one partition per file. 
`}function Bt(e,t){return e(t)}function Qt(e){return e`## References and useful resources:

[Youtube: Apache Spark Core—Deep Dive—Proper Optimization Daniel Tomes](https://www.youtube.com/watch?v=daXEp4HmS-E&t=3868s)

[Youtube: A Deep Dive into Query Execution Engine of Spark SQL - Maryann Xue](https://www.youtube.com/watch?v=ywPuZ_WrHT0)

[Youtube: A Deep Dive into Query Execution Engine of Spark SQL - continued](https://www.youtube.com/watch?v=BqCW5OxMP4I&t=2s)

[Youtube: A Deep Dive into Spark SQL's Catalyst Optimizer with Yin Huai](https://www.youtube.com/watch?v=RmUn5vHlevc)


[Spark Shuffle and Spill Explained - Chendi Xue](https://xuechendi.github.io/2019/04/15/Spark-Shuffle-and-Spill-Explained)

[Visual API](https://training.databricks.com/visualapi.pdf)
`}function Yt(e){return e}function Vt(e){return e.text("https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/eb9fdc6fe0b850c3de162b85579c7e0c764c461d/SQL_tab.html")}function Jt(e){return function(e){var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,i,n){var o,a,r,s,l;for(this.type=t,this.$element=e(i),this.options=this.getOptions(n),this.enabled=!0,l=(r=this.options.trigger.split(" ")).length;l--;)"click"==(s=r[l])?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=s&&(o="hover"==s?"mouseenter":"focus",a="hover"==s?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var i,n=e.fn[this.type].defaults,o={};if(this._options&&e.each(this._options,(function(e,t){n[e]!=t&&(o[e]=t)}),this),!(i=e(t.currentTarget)[this.type](o).data(this.type)).options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)},leave:function(t){var i=e(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)},show:function(){var t,i,n,o,a,r,s=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),a="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),i=this.getPosition(),n=t[0].offsetWidth,o=t[0].offsetHeight,a){case"bottom":r={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":r={top:i.top-o,left:i.left+i.width/2-n/2};break;case"left":r={top:i.top+i.height/2-o/2,left:i.left-n};break;case"right":r={top:i.top+i.height/2-o/2,left:i.left+i.width}}this.applyPlacement(r,a),this.$element.trigger("shown")}},applyPlacement:function(e,t){var i,n,o,a,r=this.tip(),s=r[0].offsetWidth,l=r[0].offsetHeight;r.offset(e).addClass(t).addClass("in"),i=r[0].offsetWidth,n=r[0].offsetHeight,"top"==t&&n!=l&&(e.top=e.top+l-n,a=!0),"bottom"==t||"top"==t?(o=0,e.left<0&&(o=-2*e.left,e.left=0,r.offset(e),i=r[0].offsetWidth,n=r[0].offsetHeight),this.replaceArrow(o-s+i,i,"left")):this.replaceArrow(n-l,n,"top"),a&&r.offset(e)},replaceArrow:function(e,t,i){this.arrow().css(i,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){var t,i=this.tip(),n=e.Event("hide");if(this.$element.trigger(n),!n.isDefaultPrevented())return i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?(t=setTimeout((function(){i.off(e.support.transition.end).detach()}),500),i.one(e.support.transition.end,(function(){clearTimeout(t),i.detach()}))):i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e=this.$element,t=this.options;return e.attr("data-original-title")||("function"==typeof t.title?t.title.call(e[0]):t.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var i=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=e.fn.tooltip;e.fn.tooltip=function(i){return this.each((function(){var n=e(this),o=n.data("tooltip"),a="object"==typeof i&&i;o||n.data("tooltip",o=new t(this,a)),"string"==typeof i&&o[i]()}))},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(window.jQuery)}function Zt(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],zt),i.variable(t("intro")).define("intro",["md"],Ht),i.variable(t("plan")).define("plan",["plot_plan","raw_html","annotations"],Wt),i.variable(t("annotations")).define("annotations",Nt),i.variable(t("parallelisation")).define("parallelisation",["md"],Rt),i.variable(t("other_parts")).define("other_parts",["md"],Ut),i.variable(t("annotations2")).define("annotations2",["d3"],Ft),i.variable(t()).define(["md"],Ot),i.variable(t("metadata")).define("metadata",["get_metadata","raw_html"],Bt),i.variable(t("references")).define("references",["md"],Qt);const n=e.module(qt);return i.import("plot_plan",n),i.import("styles1",n),i.import("$",n),i.import("get_svg",n),i.import("d3",n),i.import("get_metadata",n),i.variable(t("mystyles")).define("mystyles",["styles1"],Yt),i.variable(t("raw_html")).define("raw_html",["d3"],Vt),i.variable(t("bstt")).define("bstt",["$"],Jt),i}var Xt=i(5860);const Kt=e=>n.createElement(a.H,{frontmatter:e.pageContext.frontmatter}),ei=["title","intro","plan","parallelisation","other_parts","references","mystyles","metadata"];function ti(e){return n.createElement(Xt.Z,{notebook:Zt,cells:ei})}var ii=function(e){return void 0===e&&(e={}),n.createElement(o.fE,e,n.createElement(ti,e))}},5860:function(e,t,i){var n=i(7294),o=i(6493);const a="mdx-container-div",r=new o.Zu,s=Object.assign({},r,{width:function(){return r.Generators.observe((e=>{let t=e(document.getElementById(a).clientWidth);function i(){let i=document.getElementById(a).clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}))}});t.Z=function(e){let{notebook:t,cells:i,customClassName:a}=e;const r=(0,n.useRef)(i.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new o.r_(s);return e.module(t,(e=>{const t=i.indexOf(e);if(-1!==t)return new o.lj(r.current[t].current)})),()=>e.dispose()}),[t,i]),n.createElement("div",{className:a},r.current.map(((e,t)=>n.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,i){i.d(t,{H:function(){return a}});var n=i(7294),o=i(4160);const a=e=>{let{frontmatter:t}=e;const{title:i,description:a,image:r,siteUrl:s,twitterUsername:l}=(0,o.K2)("1865044719").site.siteMetadata,u={title:(null==t?void 0:t.title)||i,description:(null==t?void 0:t.description)||a,image:`${s}${(null==t?void 0:t.image)||r}`,url:`${s}${(null==t?void 0:t.pathname)||""}`,twitterUsername:l,...t},d=null==t?void 0:t.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}),d&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${d}`}))}}}]);
//# sourceMappingURL=component---src-mdx-left-join-mdx-3cd75103b35f3e82454e.js.map