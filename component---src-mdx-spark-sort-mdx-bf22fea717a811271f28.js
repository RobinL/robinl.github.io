"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[8914],{5985:function(e,t,i){i.r(t),i.d(t,{Head:function(){return Kt},default:function(){return ti},output_order:function(){return Xt}});var n=i(7294),o=i(7848),a=i(7825);function r(e){return e`| <h3>Friends & Family:</h3>  |   |
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
~~~`}function l(e){return e()}function u(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function d(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function f(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function p(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function c(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function h(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function m(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function v(e){return function(t={}){let{min:i=0,max:n=1,value:o=(n+i)/2,step:a="any",precision:r=2,title:s,description:l,getValue:u,format:d,display:f,submit:p}="number"==typeof t?{value:t}:t;return r=Math.pow(10,r),u||(u=e=>Math.round(e.valueAsNumber*r)/r),e({type:"range",title:s,description:l,submit:p,format:d,display:f,attributes:{min:i,max:n,step:a,value:o},getValue:u})}}function b(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function g(e){return e()}function w(e){return!this}function y(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function x(e){return new Date(Date.now()).toUTCString()}function k(e){return function(t={}){const{value:i="Ok",title:n,description:o,disabled:a}="string"==typeof t?{value:t}:t,r=e({type:"button",title:n,description:o,attributes:{disabled:a,value:i}});return r.output.remove(),r}}function $(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function _(e){return e(["Spring","Summer","Fall","Winter"])}function C(e){return e}function j(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function S(e){return e}function M(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function T(e){return e}function D(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function A(e){return e}function G(e,t){return function(i={}){let{value:n,title:o,description:a,submit:r,multiple:s,size:l,options:u}=Array.isArray(i)?{options:i}:i;u=u.map((e=>"object"==typeof e?e:{value:e,label:e}));const d=e({type:"select",title:o,description:a,submit:r,getValue:e=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>e.value));return s?t:t[0]},form:t`
      <form>
        <select name="input" ${s?`multiple size="${l||u.length}"`:""}>
          ${u.map((({value:e,label:i})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(n)?n.includes(e):n===e,textContent:i})))}
        </select>
      </form>
    `});return d.output.remove(),d}}function E(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function P(e,t){return e({options:t.objects.states.geometries.map((e=>e.properties.name)),placeholder:"Search for a US state . . ."})}function L(e){return e}function z(e,t){return function(i={}){const{value:n,title:o,description:a,autocomplete:r="off",placeholder:s,size:l,options:u,list:d="options"}=Array.isArray(i)?{options:i}:i,f=new Set(u),p=e({type:"text",title:o,description:a,action:e=>{e.value=e.input.value=n||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,f.has(e.input.value)&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${s}" style="font-size: 1em;" list=${d}>
          <datalist id="${d}">
              ${u.map((e=>Object.assign(t`<option>`,{value:e})))}
          </datalist>
      </form>
      `});return p.output.remove(),p}}function H(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function I(e){return e()}function N(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function R(e){return function(t={}){const{value:i="#000000",title:n,description:o,submit:a,display:r}="string"==typeof t?{value:t}:t,s=e({type:"color",title:n,description:o,submit:a,display:r,attributes:{value:i}});return(n||o)&&(s.input.style.margin="5px 0"),s}}function F(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function O(e){return e()}function U(e){return e}function W(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function q(e){return e}function B(e,t){return function(i={}){const{value:n=[],title:o,description:a,submit:r}=Array.isArray(i)?{value:i}:i;let[s,l]=n;s=null!=s?s:"",l=null!=l?l:"";const u=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${s}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${l}" />`,f=t({type:"coordinates",title:o,description:a,submit:r,getValue:()=>{const e=u.valueAsNumber,t=d.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
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
    `});return f.output.remove(),f}}function Y(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function V(e){return e([-122.27,37.87])}function Q(e){return e}function Z(e,t,i,n,o,a,r){return function(s={}){const{value:l=[],title:u,description:d,width:f=400}=Array.isArray(s)?{value:s}:s,p=Math.round(.525*f);let[c,h]=l;c=null!=c?c:null,h=null!=h?h:null;const m=e`<form style="width: ${f}px;"></form>`,v=t.context2d(f,p),b=v.canvas;b.style.margin="10px 0 0";const g=i.geoNaturalEarth1().precision(.1).fitSize([f,p],{type:"Sphere"}),w=i.geoPath(g,v).pointRadius(2.5);function y(){if(v.fillStyle="#fff",v.fillRect(0,0,f,p),v.beginPath(),w(n),v.lineWidth=.35,v.strokeStyle="#ddd",v.stroke(),v.beginPath(),w(o),v.fillStyle="#f4f4f4",v.fill(),v.beginPath(),w(a),v.strokeStyle="#aaa",v.stroke(),null!=c&&null!=h){const e={type:"MultiPoint",coordinates:[[c,h]]};v.beginPath(),w(e),v.fillStyle="#f00",v.fill()}}m.append(b),b.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t,i]);c=+n[0].toFixed(2),h=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();return r({type:"worldMapCoordinates",title:u,description:d,display:t=>e`<div style="position: absolute; width: ${f}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=c?c:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=h?h:""} 
          </div>`,getValue:()=>[null!=c?c:null,null!=h?h:null],form:m})}}function J(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function K(e){return e([-122.27,37.87])}function X(e){return e}function ee(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function te(e){return e}function ie(e,t,i,n,o,a){return function(r={}){const{value:s=[],title:l,description:u,width:d=400}=Array.isArray(r)?{value:r}:r,f=d/960,p=600*f;let[c,h]=s;c=null!=c?c:null,h=null!=h?h:null;const m=e`<form style="width: ${d}px;"></form>`,v=t.context2d(d,p),b=v.canvas;b.style.margin="5px 0 0";const g=i.geoAlbersUsa().scale(1280).translate([480,300]),w=i.geoPath().context(v).pointRadius(2.5/f);function y(){if(v.clearRect(0,0,d,p),v.save(),v.scale(f,f),v.lineWidth=.35/f,v.beginPath(),w(n),v.fillStyle="#f4f4f4",v.fill(),v.beginPath(),w(o),v.strokeStyle="#aaa",v.stroke(),null!=c&&null!=h){const e={type:"MultiPoint",coordinates:[g([c,h])]};v.beginPath(),w(e),v.fillStyle="#f00",v.fill()}v.restore()}m.append(b),b.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t/f,i/f]);c=+n[0].toFixed(2),h=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();return a({type:"worldMapCoordinates",title:l,description:u,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
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
~~~`}function le(e){return e()}function ue(e){return e}function de(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function fe(e){return e}function pe(e){return function(t={}){const{min:i,max:n,step:o,value:a,title:r,description:s,display:l}="string"==typeof t?{value:t}:t,u=e({type:"time",title:r,description:s,display:l,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:n,step:o,value:a}});return u.output.remove(),u}}function ce(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function he(e){return e()}function me(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function ve(e,t,i){const n=e`<div>`;for(var o=0;o<t.length;o++){t[o];let a=e`<img height="125px" style="margin: 2px;" />`;a.src=await i.url(t[o]),n.append(a)}return n}function be(e){return function(t={}){const{multiple:i,accept:n,title:o,description:a}=t,r=e({type:"file",title:o,description:a,attributes:{multiple:i,accept:n},action:e=>{e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return r.output.remove(),r.input.onchange(),r}}function ge(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function we(e){return e()}function ye(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function xe(e){return e}function ke(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function $e(e){return e}function _e(e){return function(t={}){const{value:i,title:n,description:o,autocomplete:a="off",maxlength:r,minlength:s,pattern:l,placeholder:u,size:d,submit:f}="string"==typeof t?{value:t}:t,p=e({type:"text",title:n,description:o,submit:f,attributes:{value:i,autocomplete:a,maxlength:r,minlength:s,pattern:l,placeholder:u,size:d}});return p.output.remove(),p.input.style.fontSize="1em",p}}function Ce(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function je(e){return e()}function Se(e){return e}function Me(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Te(e){return e}function De(e,t){return function(i={}){const{value:n="",title:o,description:a,autocomplete:r,cols:s=45,rows:l=3,width:u,height:d,maxlength:f,placeholder:p,spellcheck:c,wrap:h,submit:m}="string"==typeof i?{value:i}:i,v=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:o,description:a,submit:m,attributes:{autocomplete:r,cols:s,rows:l,maxlength:f,placeholder:p,spellcheck:c,wrap:h}});return v.output.remove(),null!=u&&(v.input.style.width=u),null!=d&&(v.input.style.height=d),m&&(v.submit.style.margin="0"),(o||a)&&(v.input.style.margin="3px 0"),v}}function Ae(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Ge(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Ee(e){return e}function Pe(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function Le(e){return e}function ze(e,t){return function(i={}){let{value:n,title:o,description:a,submit:r,options:s}=Array.isArray(i)?{options:i}:i;s=s.map((e=>"string"==typeof e?{value:e,label:e}:e));const l=e({type:"radio",title:o,description:a,submit:r,getValue:e=>{if(e.checked)return e.value;const t=Array.prototype.find.call(e,(e=>e.checked));return t?t.value:void 0},form:t`
      <form>
        ${s.map((({value:e,label:i})=>{const o=t`<input type=radio name=input ${e===n?"checked":""} style="vertical-align: baseline;" />`;o.setAttribute("value",e);return t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${o}
           ${i}
          </label>`}))}
      </form>
    `});return l.output.remove(),l}}function He(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function Ie(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Ne(e){return e}function Re(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function Fe(e){return e}function Oe(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function Ue(e){return e}function We(e,t){return function(i={}){let{value:n,title:o,description:a,submit:r,options:s}=Array.isArray(i)?{options:i}:i;s=s.map((e=>"string"==typeof e?{value:e,label:e}:e));const l=e({type:"checkbox",title:o,description:a,submit:r,getValue:e=>e.length?Array.prototype.filter.call(e,(e=>e.checked)).map((e=>e.value)):!!e.checked&&e.value,form:t`
      <form>
        ${s.map((({value:e,label:i})=>{const o=t`<input type=checkbox name=input ${(n||[]).indexOf(e)>-1?"checked":""} style="vertical-align: baseline;" />`;o.setAttribute("value",e);return t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${o}
           ${i}
          </label>`}))}
      </form>
    `});return l.output.remove(),l}}function qe(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function Be(e){return e()}function Ye(e){return e}function Ve(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function Qe(e){return e}function Ze(e){return function(t={}){const{value:i,title:n,description:o,placeholder:a,submit:r,step:s="any",min:l,max:u}="number"==typeof t||"string"==typeof t?{value:+t}:t,d=e({type:"number",title:n,description:o,submit:r,attributes:{value:i,placeholder:a,step:s,min:l,max:u,autocomplete:"off"},getValue:e=>e.valueAsNumber});return d.output.remove(),d.input.style.width="auto",d.input.style.fontSize="1em",d}}function Je(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function Ke(e){return e({value:"password"})}function Xe(e){return e}function et(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tt(e){return e}function it(e){return function(t={}){const{value:i,title:n,description:o,autocomplete:a="off",maxlength:r,minlength:s,pattern:l,placeholder:u,size:d,submit:f}="string"==typeof t?{value:t}:t,p=e({type:"password",title:n,description:o,submit:f,attributes:{value:i,autocomplete:a,maxlength:r,minlength:s,pattern:l,placeholder:u,size:d}});return p.output.remove(),p.input.style.fontSize="1em",p}}function nt(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function ot(e,t){return function(i){let{form:n,type:o="text",attributes:a={},action:r,getValue:s,title:l,description:u,format:d,display:f,submit:p,options:c}=i;const h=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(a).forEach((e=>{const t=a[e];null!=t&&n.input.setAttribute(e,t)})),p&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof p?p:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),l&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${l}</div>`),u&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${u}</div>`),d&&(d="function"==typeof d?d:t.format(d)),r)r(n);else{const e=p?"onsubmit":"button"==o?"onclick":"checkbox"==o||"radio"==o?"onchange":"oninput";n[e]=t=>{t&&t.preventDefault();const i=s?s(n.input):n.input.value;if(n.output){const e=f?f(i):d?d(i):i;if(e instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(e)}else n.output.value=e}n.value=i,"oninput"!==e&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==e&&(h.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==e&&(n.onsubmit=e=>e&&e.preventDefault()),n[e]()}for(;n.childNodes.length;)h.appendChild(n.childNodes[0]);return n.append(h),n}}function at(e){return e("d3-geo@1")}function rt(e){return e("d3-format@1")}function st(e){return e("topojson-client@3")}async function lt(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function ut(e,t){return e.feature(t,t.objects.land)}function dt(e,t){return e.feature(t,t.objects.countries)}async function ft(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function pt(e,t){return e.feature(t,t.objects.nation)}function ct(e,t){return e.feature(t,t.objects.states)}function ht(e){return e.geoGraticule10()}function mt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function vt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function bt(e,t){const i=e.module();return i.variable(t()).define(["md"],r),i.variable(t("sliderDemo")).define("sliderDemo",["md"],s),i.variable(t("viewof a")).define("viewof a",["slider"],l),i.variable(t("a")).define("a",["Generators","viewof a"],((e,t)=>e.input(t))),i.variable(t("viewof a1")).define("viewof a1",["slider"],u),i.variable(t("a1")).define("a1",["Generators","viewof a1"],((e,t)=>e.input(t))),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],d),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],((e,t)=>e.input(t))),i.variable(t("viewof a2")).define("viewof a2",["slider"],f),i.variable(t("a2")).define("a2",["Generators","viewof a2"],((e,t)=>e.input(t))),i.variable(t("viewof a3")).define("viewof a3",["slider"],p),i.variable(t("a3")).define("a3",["Generators","viewof a3"],((e,t)=>e.input(t))),i.variable(t("viewof a4")).define("viewof a4",["slider"],c),i.variable(t("a4")).define("a4",["Generators","viewof a4"],((e,t)=>e.input(t))),i.variable(t("viewof a5")).define("viewof a5",["slider"],h),i.variable(t("a5")).define("a5",["Generators","viewof a5"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],m),i.variable(t("slider")).define("slider",["input"],v),i.variable(t("buttonDemo")).define("buttonDemo",["md"],b),i.variable(t("viewof b")).define("viewof b",["button"],g),i.variable(t("b")).define("b",["Generators","viewof b"],((e,t)=>e.input(t))),i.variable(t()).define(["b"],w),i.variable(t("viewof b1")).define("viewof b1",["button"],y),i.variable(t("b1")).define("b1",["Generators","viewof b1"],((e,t)=>e.input(t))),i.variable(t()).define(["b1"],x),i.variable(t("button")).define("button",["input"],k),i.variable(t("selectDemo")).define("selectDemo",["md"],$),i.variable(t("viewof dd")).define("viewof dd",["select"],_),i.variable(t("dd")).define("dd",["Generators","viewof dd"],((e,t)=>e.input(t))),i.variable(t()).define(["dd"],C),i.variable(t("viewof dd1")).define("viewof dd1",["select"],j),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],((e,t)=>e.input(t))),i.variable(t()).define(["dd1"],S),i.variable(t("viewof dd2")).define("viewof dd2",["select"],M),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],((e,t)=>e.input(t))),i.variable(t()).define(["dd2"],T),i.variable(t("viewof dd3")).define("viewof dd3",["select"],D),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],((e,t)=>e.input(t))),i.variable(t()).define(["dd3"],A),i.variable(t("select")).define("select",["input","html"],G),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],E),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],P),i.variable(t("as")).define("as",["Generators","viewof as"],((e,t)=>e.input(t))),i.variable(t()).define(["as"],L),i.variable(t("autoSelect")).define("autoSelect",["input","html"],z),i.variable(t("colorDemo")).define("colorDemo",["md"],H),i.variable(t("viewof c")).define("viewof c",["color"],I),i.variable(t("c")).define("c",["Generators","viewof c"],((e,t)=>e.input(t))),i.variable(t("viewof c1")).define("viewof c1",["color"],N),i.variable(t("c1")).define("c1",["Generators","viewof c1"],((e,t)=>e.input(t))),i.variable(t("color")).define("color",["input"],R),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],F),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],O),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],((e,t)=>e.input(t))),i.variable(t()).define(["coords1"],U),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],W),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],((e,t)=>e.input(t))),i.variable(t()).define(["coords2"],q),i.variable(t("coordinates")).define("coordinates",["html","input"],B),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],Y),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],V),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["worldMap1"],Q),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],Z),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],J),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],K),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap1"],X),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ee),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap2"],te),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ie),i.variable(t("dateDemo")).define("dateDemo",["md"],ne),i.variable(t("viewof d")).define("viewof d",["date"],oe),i.variable(t("d")).define("d",["Generators","viewof d"],((e,t)=>e.input(t))),i.variable(t("viewof d1")).define("viewof d1",["date"],ae),i.variable(t("d1")).define("d1",["Generators","viewof d1"],((e,t)=>e.input(t))),i.variable(t("date")).define("date",["input"],re),i.variable(t("timeDemo")).define("timeDemo",["md"],se),i.variable(t("viewof t")).define("viewof t",["time"],le),i.variable(t("t")).define("t",["Generators","viewof t"],((e,t)=>e.input(t))),i.variable(t()).define(["t"],ue),i.variable(t("viewof t1")).define("viewof t1",["time"],de),i.variable(t("t1")).define("t1",["Generators","viewof t1"],((e,t)=>e.input(t))),i.variable(t()).define(["t1"],fe),i.variable(t("time")).define("time",["input"],pe),i.variable(t("fileDemo")).define("fileDemo",["md"],ce),i.variable(t("viewof e")).define("viewof e",["file"],he),i.variable(t("e")).define("e",["Generators","viewof e"],((e,t)=>e.input(t))),i.variable(t("viewof e1")).define("viewof e1",["file"],me),i.variable(t("e1")).define("e1",["Generators","viewof e1"],((e,t)=>e.input(t))),i.variable(t()).define(["html","e1","Files"],ve),i.variable(t("file")).define("file",["input"],be),i.variable(t("textDemo")).define("textDemo",["md"],ge),i.variable(t("viewof f")).define("viewof f",["text"],we),i.variable(t("f")).define("f",["Generators","viewof f"],((e,t)=>e.input(t))),i.variable(t("viewof f1")).define("viewof f1",["text"],ye),i.variable(t("f1")).define("f1",["Generators","viewof f1"],((e,t)=>e.input(t))),i.variable(t()).define(["f1"],xe),i.variable(t("viewof f2")).define("viewof f2",["text"],ke),i.variable(t("f2")).define("f2",["Generators","viewof f2"],((e,t)=>e.input(t))),i.variable(t()).define(["f2"],$e),i.variable(t("text")).define("text",["input"],_e),i.variable(t("textareaDemo")).define("textareaDemo",["md"],Ce),i.variable(t("viewof g")).define("viewof g",["textarea"],je),i.variable(t("g")).define("g",["Generators","viewof g"],((e,t)=>e.input(t))),i.variable(t()).define(["g"],Se),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Me),i.variable(t("g1")).define("g1",["Generators","viewof g1"],((e,t)=>e.input(t))),i.variable(t()).define(["g1"],Te),i.variable(t("textarea")).define("textarea",["input","html"],De),i.variable(t("radioDemo")).define("radioDemo",["md"],Ae),i.variable(t("viewof r")).define("viewof r",["radio"],Ge),i.variable(t("r")).define("r",["Generators","viewof r"],((e,t)=>e.input(t))),i.variable(t()).define(["r"],Ee),i.variable(t("viewof r1")).define("viewof r1",["radio"],Pe),i.variable(t("r1")).define("r1",["Generators","viewof r1"],((e,t)=>e.input(t))),i.variable(t()).define(["r1"],Le),i.variable(t("radio")).define("radio",["input","html"],ze),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],He),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],Ie),i.variable(t("ch")).define("ch",["Generators","viewof ch"],((e,t)=>e.input(t))),i.variable(t()).define(["ch"],Ne),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],Re),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],((e,t)=>e.input(t))),i.variable(t()).define(["ch1"],Fe),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],Oe),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],((e,t)=>e.input(t))),i.variable(t()).define(["ch3"],Ue),i.variable(t("checkbox")).define("checkbox",["input","html"],We),i.variable(t("numberDemo")).define("numberDemo",["md"],qe),i.variable(t("viewof h")).define("viewof h",["number"],Be),i.variable(t("h")).define("h",["Generators","viewof h"],((e,t)=>e.input(t))),i.variable(t()).define(["h"],Ye),i.variable(t("viewof h1")).define("viewof h1",["number"],Ve),i.variable(t("h1")).define("h1",["Generators","viewof h1"],((e,t)=>e.input(t))),i.variable(t()).define(["h1"],Qe),i.variable(t("number")).define("number",["input"],Ze),i.variable(t("passwordDemo")).define("passwordDemo",["md"],Je),i.variable(t("viewof i")).define("viewof i",["password"],Ke),i.variable(t("i")).define("i",["Generators","viewof i"],((e,t)=>e.input(t))),i.variable(t()).define(["i"],Xe),i.variable(t("viewof i1")).define("viewof i1",["password"],et),i.variable(t("i1")).define("i1",["Generators","viewof i1"],((e,t)=>e.input(t))),i.variable(t()).define(["i1"],tt),i.variable(t("password")).define("password",["input"],it),i.variable(t()).define(["md"],nt),i.variable(t("input")).define("input",["html","d3format"],ot),i.variable(t("d3geo")).define("d3geo",["require"],at),i.variable(t("d3format")).define("d3format",["require"],rt),i.variable(t("topojson")).define("topojson",["require"],st),i.variable(t("world")).define("world",lt),i.variable(t("land")).define("land",["topojson","world"],ut),i.variable(t("countries")).define("countries",["topojson","world"],dt),i.variable(t("usa")).define("usa",ft),i.variable(t("nation")).define("nation",["topojson","usa"],pt),i.variable(t("states")).define("states",["topojson","usa"],ct),i.variable(t("graticule")).define("graticule",["d3geo"],ht),i.variable(t("viewof license")).define("viewof license",["md"],mt),i.variable(t("license")).define("license",["Generators","viewof license"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],vt),i}function gt(e){return e`# Spark UI SQL customise annotations`}function wt(e){return e`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`}function yt(e,t){return e({value:t,rows:6,width:"100%"})}function xt(e,t,i){return e(t,i)}function kt(){return{cluster_11:"hello",node_13:"Read in the data"}}function $t(e,t,i,n){return e`
  
  ## Glossary

  ${t.map((t=>i`<h3 class="title_case">${t}</h3><p>${e`${n[t].definition}`}</p>`))}
`}function _t(e,t,i){let n=e.select(t`${i}`).select("#plan-viz-metadata");return n=n.node().outerHTML,t`${n}`}function Ct(e,t){return function(i){let n=e.select(t`${i}`).select("#plan-viz-metadata");return n=n.node().outerHTML,t`${n}`}}function jt(e,t){return function(i){let n=e.select(t`${i}`).select("#plan-viz-graph svg");return n=n.attr("class","sparkui"),n=n.node().outerHTML,n}}function St(e,t,i,n,o,a,r,s){return function(l,u,d=!1){let f=e(l),p=t`${f}`,c=i.select(p);return c=c.attr("class","sparkui"),c.selectAll(".node").on("mouseover",(function(){let e=[...this.classList].find((e=>e.includes("node_"))),t=+e.match(/\d+/)[0],l="";e in u&&(l=n`${u[e]}`);let f,p=o(this);try{f=i.select("#plan-meta-data-"+t).text()}catch(v){f=""}let c=a(p+" "+f),h=r`${l} ${c} <p><strong>Original tooltip: </strong>${f}</p>`;d&&(h=r`${e} ${h}`);var m=i.select(this).node();s(m).tooltip({title:h,trigger:"manual",container:"body",placement:"right",html:!0}),s(m).tooltip("show")})).on("mouseout",(function(e){var t=i.select(this).node();s(t).tooltip("destroy")})),c.selectAll(".cluster").on("mouseover",(function(){let e=[...this.classList].find((e=>e.includes("cluster_"))),t=(e.match(/\d+/)[0],"");e in u&&(t=n`${u[e]}`);let l=o(this),f=r`${t} ${a(l)}`;d&&(f=r`${e} ${f}`);var p=i.select(this).node();s(p).tooltip({title:f,trigger:"manual",container:"body",placement:"right",html:!0}),s(p).tooltip("show")})).on("mouseout",(function(e){var t=i.select(this).node();s(t).tooltip("destroy")})),p}}function Mt(){return function(e){let t="";return function e(i){for(var n=0;n<i.childNodes.length;n++){var o=i.childNodes[n];e(o),o.firstChild||(t+=o.textContent+" ")}}(e),t}}function Tt(e,t,i){return function(n){let o=[];return e.forEach((e=>{(n.toLowerCase().includes(`${e} `)||n.toLowerCase().includes(`${e}(`))&&o.push(e)})),o.map((e=>{let n=t[e].short_definition,o=t[e].key;return i`<p><strong class="title_case">${o}</strong>: ${n}</p>`}))}}function Dt(e){return e.json("https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json")}function At(e){return Object.keys(e)}function Gt(e){return e("d3")}function Et(e){return e.text("https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html")}function Pt(e){return e("jquery")}function Lt(e){return function(e){var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,i,n){var o,a,r,s,l;for(this.type=t,this.$element=e(i),this.options=this.getOptions(n),this.enabled=!0,l=(r=this.options.trigger.split(" ")).length;l--;)"click"==(s=r[l])?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=s&&(o="hover"==s?"mouseenter":"focus",a="hover"==s?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var i,n=e.fn[this.type].defaults,o={};if(this._options&&e.each(this._options,(function(e,t){n[e]!=t&&(o[e]=t)}),this),!(i=e(t.currentTarget)[this.type](o).data(this.type)).options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)},leave:function(t){var i=e(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)},show:function(){var t,i,n,o,a,r,s=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),a="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),i=this.getPosition(),n=t[0].offsetWidth,o=t[0].offsetHeight,a){case"bottom":r={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":r={top:i.top-o,left:i.left+i.width/2-n/2};break;case"left":r={top:i.top+i.height/2-o/2,left:i.left-n};break;case"right":r={top:i.top+i.height/2-o/2,left:i.left+i.width}}this.applyPlacement(r,a),this.$element.trigger("shown")}},applyPlacement:function(e,t){var i,n,o,a,r=this.tip(),s=r[0].offsetWidth,l=r[0].offsetHeight;r.offset(e).addClass(t).addClass("in"),i=r[0].offsetWidth,n=r[0].offsetHeight,"top"==t&&n!=l&&(e.top=e.top+l-n,a=!0),"bottom"==t||"top"==t?(o=0,e.left<0&&(o=-2*e.left,e.left=0,r.offset(e),i=r[0].offsetWidth,n=r[0].offsetHeight),this.replaceArrow(o-s+i,i,"left")):this.replaceArrow(n-l,n,"top"),a&&r.offset(e)},replaceArrow:function(e,t,i){this.arrow().css(i,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){var t,i=this.tip(),n=e.Event("hide");if(this.$element.trigger(n),!n.isDefaultPrevented())return i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?(t=setTimeout((function(){i.off(e.support.transition.end).detach()}),500),i.one(e.support.transition.end,(function(){clearTimeout(t),i.detach()}))):i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e=this.$element,t=this.options;return e.attr("data-original-title")||("function"==typeof t.title?t.title.call(e[0]):t.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var i=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=e.fn.tooltip;e.fn.tooltip=function(i){return this.each((function(){var n=e(this),o=n.data("tooltip"),a="object"==typeof i&&i;o||n.data("tooltip",o=new t(this,a)),"string"==typeof i&&o[i]()}))},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(window.jQuery)}function zt(e){return e`<style> 
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



</style>`}function Ht(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],gt),i.variable(t("md_1")).define("md_1",["md"],wt),i.variable(t("viewof raw_html")).define("viewof raw_html",["textarea","sample_html"],yt),i.variable(t("raw_html")).define("raw_html",["Generators","viewof raw_html"],((e,t)=>e.input(t))),i.variable(t("output_svg")).define("output_svg",["plot_plan","raw_html","additional_annotations"],xt),i.variable(t("additional_annotations")).define("additional_annotations",kt),i.variable(t("md_glossary")).define("md_glossary",["md","glossary_keys","html","glossary"],$t),i.variable(t("metadata")).define("metadata",["d3","html","raw_html"],_t),i.variable(t("get_metadata")).define("get_metadata",["d3","html"],Ct),i.variable(t("get_svg")).define("get_svg",["d3","html"],jt),i.variable(t("plot_plan")).define("plot_plan",["get_svg","svg","d3","md","get_text_content_spaces","get_definitions_from_text","html","$"],St),i.variable(t("get_text_content_spaces")).define("get_text_content_spaces",Mt),i.variable(t("get_definitions_from_text")).define("get_definitions_from_text",["glossary_keys","glossary","html"],Tt),i.variable(t("glossary")).define("glossary",["d3"],Dt),i.variable(t("glossary_keys")).define("glossary_keys",["glossary"],At),i.variable(t("d3")).define("d3",["require"],Gt),i.variable(t("sample_html")).define("sample_html",["d3"],Et),i.variable(t("$")).define("$",["require"],Pt),i.variable(t("bstt")).define("bstt",["$"],Lt),i.variable(t("styles1")).define("styles1",["html"],zt);const n=e.module(bt);return i.import("slider",n),i.import("textarea",n),i}function It(e){return e`# Understanding the Spark UI by example: sorting data`}function Nt(e){return e`

### Introduction 

This post uses the output of the Spark UI to explain what happens when you ask Spark to sort a large(ish) dataset. 

For more information about the Spark UI and the dataset we're using, see the [first post](https://robinl.github.io/robinlinacre/left_join/) in this series.  

We're going to execute the following 

\`\`\`sql
SELECT distance, origin, dest
FROM flights
ORDER BY distance DESC
\`\`\`

against the \`flights\` table, which has 123,534,969 records.

You can see the script [here](https://github.com/RobinL/understanding_spark_ui/blob/master/04-sort.ipynb)

### Interactive Spark UI

The following is the contents of the SQL tab in the Spark UI.  I've added additional details to the tooltips to help explain what's going on:



`}function Rt(e,t,i){return t`${e.select(t`${i}`).select(".unstyled").node().outerHTML}`}function Ft(e,t,i){return e(t,i,!1)}function Ot(){return{node_3:"Shuffle the data using rangepartitioning.  To sort a large dataset in parallel across `n` worker nodes, it wouldn't be particularly useful to randomly assign data to different worker nodes.   Instead, we need a strategy where each worker node can sort the data, and this results in a globally sorted dataset. This is what a range partitioner does: it tries to partition your dataset into `spark.sql.shuffle.partition` partitions of roughly equal ranges.\n\nEach partition will have a min and max row, relative to the given ordering. All rows that are in between min and max in this ordering will reside in the partition. \n\nThis explains why two scans of data are needed, and this SQL plan consists of two jobs (remember each job corresponds to an RDD action).  The first scan is needed to determine the min and max of each partition.  Spark samples (using reservoir sampling, see [here](https://github.com/eBay/Spark/blob/master/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)) the whole dataset to determine min and max values for each partition that should roughly equally split the data.  In the second job, these values are used to shuffle the data.\n\nThe actual number of partitions created by the RangePartitioner might not be the same as the partitions parameter, in the case where the number of sampled records is less than the value of partitions.\n",node_6:"Read in the original data.  Note that the 'number of output rows' is 247m, twice the input data size of 123.5m rows.  This gives us a clue that the data has been scanned twice. See the tooltip for the 'exchange' node for more details. "}}function Ut(e){return e`## Observations

The most interesting performance-related clues we see from the UI are:

- There are two jobs, despite the job appearing to correspond to a single action.  See the notes on the 'exchange' node to see why there are in fact two actions, and therefore two jobs.
- We can see from the 'scan parquet' node that the data is scanned twice.  See the notes on the 'exchange' node for an explanation.
`}function Wt(e){return e.json("https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/b98ceb36c7af3a6a78871f83221abd8cffa032f1/annotations.json")}function qt(e,t){return e(t)}function Bt(e){return e`## References and useful resources:

[Stackoverflow: How does Spark achieve sort order](https://stackoverflow.com/questions/32887595/how-does-spark-achieve-sort-order/32888236#32888236)

[Stackoverflow: Number of dataframe partitions after sorting?](https://stackoverflow.com/questions/53786188/number-of-dataframe-partitions-after-sorting)

[The determineBounds method that the range partitioner uses](https://github.com/apache/spark/blob/3da71f2da192276af041024b73e85e0acaac66a4/core/src/main/scala/org/apache/spark/Partitioner.scala#L322)

[The sampling method that the range partitioner uses](https://github.com/apache/spark/blob/16f1b23d75c0b44aac61111bfb2ae9bb0f3fab68/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)

`}function Yt(e){return e}function Vt(e){return e.text("https://gist.githubusercontent.com/RobinL/866932e428eb0d7edafdf44263f738d5/raw/dcecbc0bbbc5a28b06e4eb9f28c866550b6c7241/sql_tab.html")}function Qt(e){return function(e){var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,i,n){var o,a,r,s,l;for(this.type=t,this.$element=e(i),this.options=this.getOptions(n),this.enabled=!0,l=(r=this.options.trigger.split(" ")).length;l--;)"click"==(s=r[l])?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=s&&(o="hover"==s?"mouseenter":"focus",a="hover"==s?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var i,n=e.fn[this.type].defaults,o={};if(this._options&&e.each(this._options,(function(e,t){n[e]!=t&&(o[e]=t)}),this),!(i=e(t.currentTarget)[this.type](o).data(this.type)).options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)},leave:function(t){var i=e(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)},show:function(){var t,i,n,o,a,r,s=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),a="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),i=this.getPosition(),n=t[0].offsetWidth,o=t[0].offsetHeight,a){case"bottom":r={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":r={top:i.top-o,left:i.left+i.width/2-n/2};break;case"left":r={top:i.top+i.height/2-o/2,left:i.left-n};break;case"right":r={top:i.top+i.height/2-o/2,left:i.left+i.width}}this.applyPlacement(r,a),this.$element.trigger("shown")}},applyPlacement:function(e,t){var i,n,o,a,r=this.tip(),s=r[0].offsetWidth,l=r[0].offsetHeight;r.offset(e).addClass(t).addClass("in"),i=r[0].offsetWidth,n=r[0].offsetHeight,"top"==t&&n!=l&&(e.top=e.top+l-n,a=!0),"bottom"==t||"top"==t?(o=0,e.left<0&&(o=-2*e.left,e.left=0,r.offset(e),i=r[0].offsetWidth,n=r[0].offsetHeight),this.replaceArrow(o-s+i,i,"left")):this.replaceArrow(n-l,n,"top"),a&&r.offset(e)},replaceArrow:function(e,t,i){this.arrow().css(i,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){var t,i=this.tip(),n=e.Event("hide");if(this.$element.trigger(n),!n.isDefaultPrevented())return i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?(t=setTimeout((function(){i.off(e.support.transition.end).detach()}),500),i.one(e.support.transition.end,(function(){clearTimeout(t),i.detach()}))):i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e=this.$element,t=this.options;return e.attr("data-original-title")||("function"==typeof t.title?t.title.call(e[0]):t.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var i=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=e.fn.tooltip;e.fn.tooltip=function(i){return this.each((function(){var n=e(this),o=n.data("tooltip"),a="object"==typeof i&&i;o||n.data("tooltip",o=new t(this,a)),"string"==typeof i&&o[i]()}))},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(window.jQuery)}function Zt(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],It),i.variable(t("intro")).define("intro",["md"],Nt),i.variable(t("jobs")).define("jobs",["d3","html","raw_html"],Rt),i.variable(t("plan")).define("plan",["plot_plan","raw_html","annotations"],Ft),i.variable(t("annotations")).define("annotations",Ot),i.variable(t("observations")).define("observations",["md"],Ut),i.variable(t("annotations2")).define("annotations2",["d3"],Wt),i.variable(t("metadata")).define("metadata",["get_metadata","raw_html"],qt),i.variable(t("references")).define("references",["md"],Bt);const n=e.module(Ht);return i.import("plot_plan",n),i.import("styles1",n),i.import("$",n),i.import("get_svg",n),i.import("d3",n),i.import("get_metadata",n),i.variable(t("mystyles")).define("mystyles",["styles1"],Yt),i.variable(t("raw_html")).define("raw_html",["d3"],Vt),i.variable(t("bstt")).define("bstt",["$"],Qt),i}var Jt=i(5860);const Kt=e=>n.createElement(a.H,{frontmatter:e.pageContext.frontmatter}),Xt=["title","intro","jobs","plan","observations","references","mystyles","metadata"];function ei(e){return n.createElement(Jt.Z,{notebook:Zt,cells:Xt})}var ti=function(e){return void 0===e&&(e={}),n.createElement(o.fE,e,n.createElement(ei,e))}},5860:function(e,t,i){var n=i(7294),o=i(6493);const a="mdx-container-div",r=new o.Zu,s=Object.assign({},r,{width:function(){return r.Generators.observe((e=>{let t=e(document.getElementById(a).clientWidth);function i(){let i=document.getElementById(a).clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}))}});t.Z=function(e){let{notebook:t,cells:i,customClassName:a}=e;const r=(0,n.useRef)(i.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new o.r_(s);return e.module(t,(e=>{const t=i.indexOf(e);if(-1!==t)return new o.lj(r.current[t].current)})),()=>e.dispose()}),[t,i]),n.createElement("div",{className:a},r.current.map(((e,t)=>n.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,i){i.d(t,{H:function(){return a}});var n=i(7294),o=i(4160);const a=e=>{let{frontmatter:t}=e;const{title:i,description:a,image:r,siteUrl:s,twitterUsername:l}=(0,o.K2)("1865044719").site.siteMetadata,u={title:(null==t?void 0:t.title)||i,description:(null==t?void 0:t.description)||a,image:`${s}${(null==t?void 0:t.image)||r}`,url:`${s}${(null==t?void 0:t.pathname)||""}`,twitterUsername:l,...t},d=null==t?void 0:t.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}),d&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${d}`}))}}}]);
//# sourceMappingURL=component---src-mdx-spark-sort-mdx-bf22fea717a811271f28.js.map