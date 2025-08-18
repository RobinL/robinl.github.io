"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[9286],{2828:function(e,t,i){i.r(t),i.d(t,{Head:function(){return Ht},default:function(){return Bt},output_order:function(){return Ot}});var n=i(7294),o=i(7848),r=i(7825);function a(e){return e`| <h3>Friends & Family:</h3>  |   |
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
~~~`}function s(e){return e()}function u(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function f(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function d(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function p(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function c(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function m(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function v(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function h(e){return function(t={}){let{min:i=0,max:n=1,value:o=(n+i)/2,step:r="any",precision:a=2,title:l,description:s,getValue:u,format:f,display:d,submit:p}="number"==typeof t?{value:t}:t;return a=Math.pow(10,a),u||(u=e=>Math.round(e.valueAsNumber*a)/a),e({type:"range",title:l,description:s,submit:p,format:f,display:d,attributes:{min:i,max:n,step:r,value:o},getValue:u})}}function b(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function g(e){return e()}function w(e){return!this}function y(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function x(e){return new Date(Date.now()).toUTCString()}function k(e){return function(t={}){const{value:i="Ok",title:n,description:o,disabled:r}="string"==typeof t?{value:t}:t,a=e({type:"button",title:n,description:o,attributes:{disabled:r,value:i}});return a.output.remove(),a}}function $(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function _(e){return e(["Spring","Summer","Fall","Winter"])}function C(e){return e}function j(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function M(e){return e}function D(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function G(e){return e}function A(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function S(e){return e}function E(e,t){return function(i={}){let{value:n,title:o,description:r,submit:a,multiple:l,size:s,options:u}=Array.isArray(i)?{options:i}:i;u=u.map((e=>"object"==typeof e?e:{value:e,label:e}));const f=e({type:"select",title:o,description:r,submit:a,getValue:e=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>e.value));return l?t:t[0]},form:t`
      <form>
        <select name="input" ${l?`multiple size="${s||u.length}"`:""}>
          ${u.map((({value:e,label:i})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(n)?n.includes(e):n===e,textContent:i})))}
        </select>
      </form>
    `});return f.output.remove(),f}}function P(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function T(e,t){return e({options:t.objects.states.geometries.map((e=>e.properties.name)),placeholder:"Search for a US state . . ."})}function z(e){return e}function L(e,t){return function(i={}){const{value:n,title:o,description:r,autocomplete:a="off",placeholder:l,size:s,options:u,list:f="options"}=Array.isArray(i)?{options:i}:i,d=new Set(u),p=e({type:"text",title:o,description:r,action:e=>{e.value=e.input.value=n||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,d.has(e.input.value)&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${l}" style="font-size: 1em;" list=${f}>
          <datalist id="${f}">
              ${u.map((e=>Object.assign(t`<option>`,{value:e})))}
          </datalist>
      </form>
      `});return p.output.remove(),p}}function N(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function F(e){return e()}function H(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function O(e){return function(t={}){const{value:i="#000000",title:n,description:o,submit:r,display:a}="string"==typeof t?{value:t}:t,l=e({type:"color",title:n,description:o,submit:r,display:a,attributes:{value:i}});return(n||o)&&(l.input.style.margin="5px 0"),l}}function W(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function B(e){return e()}function I(e){return e}function U(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function q(e){return e}function R(e,t){return function(i={}){const{value:n=[],title:o,description:r,submit:a}=Array.isArray(i)?{value:i}:i;let[l,s]=n;l=null!=l?l:"",s=null!=s?s:"";const u=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,f=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,d=t({type:"coordinates",title:o,description:r,submit:a,getValue:()=>{const e=u.valueAsNumber,t=f.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${u}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${f}
        </label>
      </form>
    `});return d.output.remove(),d}}function V(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function Y(e){return e([-122.27,37.87])}function Z(e){return e}function Q(e,t,i,n,o,r,a){return function(l={}){const{value:s=[],title:u,description:f,width:d=400}=Array.isArray(l)?{value:l}:l,p=Math.round(.525*d);let[c,m]=s;c=null!=c?c:null,m=null!=m?m:null;const v=e`<form style="width: ${d}px;"></form>`,h=t.context2d(d,p),b=h.canvas;b.style.margin="10px 0 0";const g=i.geoNaturalEarth1().precision(.1).fitSize([d,p],{type:"Sphere"}),w=i.geoPath(g,h).pointRadius(2.5);function y(){if(h.fillStyle="#fff",h.fillRect(0,0,d,p),h.beginPath(),w(n),h.lineWidth=.35,h.strokeStyle="#ddd",h.stroke(),h.beginPath(),w(o),h.fillStyle="#f4f4f4",h.fill(),h.beginPath(),w(r),h.strokeStyle="#aaa",h.stroke(),null!=c&&null!=m){const e={type:"MultiPoint",coordinates:[[c,m]]};h.beginPath(),w(e),h.fillStyle="#f00",h.fill()}}v.append(b),b.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t,i]);c=+n[0].toFixed(2),m=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();return a({type:"worldMapCoordinates",title:u,description:f,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=c?c:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=c?c:null,null!=m?m:null],form:v})}}function J(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function K(e){return e([-122.27,37.87])}function X(e){return e}function ee(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function te(e){return e}function ie(e,t,i,n,o,r){return function(a={}){const{value:l=[],title:s,description:u,width:f=400}=Array.isArray(a)?{value:a}:a,d=f/960,p=600*d;let[c,m]=l;c=null!=c?c:null,m=null!=m?m:null;const v=e`<form style="width: ${f}px;"></form>`,h=t.context2d(f,p),b=h.canvas;b.style.margin="5px 0 0";const g=i.geoAlbersUsa().scale(1280).translate([480,300]),w=i.geoPath().context(h).pointRadius(2.5/d);function y(){if(h.clearRect(0,0,f,p),h.save(),h.scale(d,d),h.lineWidth=.35/d,h.beginPath(),w(n),h.fillStyle="#f4f4f4",h.fill(),h.beginPath(),w(o),h.strokeStyle="#aaa",h.stroke(),null!=c&&null!=m){const e={type:"MultiPoint",coordinates:[g([c,m])]};h.beginPath(),w(e),h.fillStyle="#f00",h.fill()}h.restore()}v.append(b),b.onclick=function(e){const{offsetX:t,offsetY:i}=e;var n=g.invert([t/d,i/d]);c=+n[0].toFixed(2),m=+n[1].toFixed(2),y(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},y();return r({type:"worldMapCoordinates",title:s,description:u,display:t=>e`<div style="position: absolute; width: ${f}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=c?c:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=m?m:""} 
          </div>`,getValue:()=>[null!=c?c:null,null!=m?m:null],form:v})}}function ne(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function oe(e){return e()}function re(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function ae(e){return function(t={}){const{min:i,max:n,value:o,title:r,description:a,display:l}="string"==typeof t?{value:t}:t;return e({type:"date",title:r,description:a,display:l,attributes:{min:i,max:n,value:o}})}}function le(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function se(e){return e()}function ue(e){return e}function fe(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function de(e){return e}function pe(e){return function(t={}){const{min:i,max:n,step:o,value:r,title:a,description:l,display:s}="string"==typeof t?{value:t}:t,u=e({type:"time",title:a,description:l,display:s,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:n,step:o,value:r}});return u.output.remove(),u}}function ce(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function me(e){return e()}function ve(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function he(e,t,i){const n=e`<div>`;for(var o=0;o<t.length;o++){t[o];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await i.url(t[o]),n.append(r)}return n}function be(e){return function(t={}){const{multiple:i,accept:n,title:o,description:r}=t,a=e({type:"file",title:o,description:r,attributes:{multiple:i,accept:n},action:e=>{e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return a.output.remove(),a.input.onchange(),a}}function ge(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function we(e){return e()}function ye(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function xe(e){return e}function ke(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function $e(e){return e}function _e(e){return function(t={}){const{value:i,title:n,description:o,autocomplete:r="off",maxlength:a,minlength:l,pattern:s,placeholder:u,size:f,submit:d}="string"==typeof t?{value:t}:t,p=e({type:"text",title:n,description:o,submit:d,attributes:{value:i,autocomplete:r,maxlength:a,minlength:l,pattern:s,placeholder:u,size:f}});return p.output.remove(),p.input.style.fontSize="1em",p}}function Ce(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function je(e){return e()}function Me(e){return e}function De(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Ge(e){return e}function Ae(e,t){return function(i={}){const{value:n="",title:o,description:r,autocomplete:a,cols:l=45,rows:s=3,width:u,height:f,maxlength:d,placeholder:p,spellcheck:c,wrap:m,submit:v}="string"==typeof i?{value:i}:i,h=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:o,description:r,submit:v,attributes:{autocomplete:a,cols:l,rows:s,maxlength:d,placeholder:p,spellcheck:c,wrap:m}});return h.output.remove(),null!=u&&(h.input.style.width=u),null!=f&&(h.input.style.height=f),v&&(h.submit.style.margin="0"),(o||r)&&(h.input.style.margin="3px 0"),h}}function Se(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Ee(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Pe(e){return e}function Te(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function ze(e){return e}function Le(e,t){return function(i={}){let{value:n,title:o,description:r,submit:a,options:l}=Array.isArray(i)?{options:i}:i;l=l.map((e=>"string"==typeof e?{value:e,label:e}:e));const s=e({type:"radio",title:o,description:r,submit:a,getValue:e=>{if(e.checked)return e.value;const t=Array.prototype.find.call(e,(e=>e.checked));return t?t.value:void 0},form:t`
      <form>
        ${l.map((({value:e,label:i})=>{const o=t`<input type=radio name=input ${e===n?"checked":""} style="vertical-align: baseline;" />`;o.setAttribute("value",e);return t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${o}
           ${i}
          </label>`}))}
      </form>
    `});return s.output.remove(),s}}function Ne(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function Fe(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function He(e){return e}function Oe(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function We(e){return e}function Be(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function Ie(e){return e}function Ue(e,t){return function(i={}){let{value:n,title:o,description:r,submit:a,options:l}=Array.isArray(i)?{options:i}:i;l=l.map((e=>"string"==typeof e?{value:e,label:e}:e));const s=e({type:"checkbox",title:o,description:r,submit:a,getValue:e=>e.length?Array.prototype.filter.call(e,(e=>e.checked)).map((e=>e.value)):!!e.checked&&e.value,form:t`
      <form>
        ${l.map((({value:e,label:i})=>{const o=t`<input type=checkbox name=input ${(n||[]).indexOf(e)>-1?"checked":""} style="vertical-align: baseline;" />`;o.setAttribute("value",e);return t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${o}
           ${i}
          </label>`}))}
      </form>
    `});return s.output.remove(),s}}function qe(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function Re(e){return e()}function Ve(e){return e}function Ye(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function Ze(e){return e}function Qe(e){return function(t={}){const{value:i,title:n,description:o,placeholder:r,submit:a,step:l="any",min:s,max:u}="number"==typeof t||"string"==typeof t?{value:+t}:t,f=e({type:"number",title:n,description:o,submit:a,attributes:{value:i,placeholder:r,step:l,min:s,max:u,autocomplete:"off"},getValue:e=>e.valueAsNumber});return f.output.remove(),f.input.style.width="auto",f.input.style.fontSize="1em",f}}function Je(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function Ke(e){return e({value:"password"})}function Xe(e){return e}function et(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tt(e){return e}function it(e){return function(t={}){const{value:i,title:n,description:o,autocomplete:r="off",maxlength:a,minlength:l,pattern:s,placeholder:u,size:f,submit:d}="string"==typeof t?{value:t}:t,p=e({type:"password",title:n,description:o,submit:d,attributes:{value:i,autocomplete:r,maxlength:a,minlength:l,pattern:s,placeholder:u,size:f}});return p.output.remove(),p.input.style.fontSize="1em",p}}function nt(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function ot(e,t){return function(i){let{form:n,type:o="text",attributes:r={},action:a,getValue:l,title:s,description:u,format:f,display:d,submit:p,options:c}=i;const m=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(r).forEach((e=>{const t=r[e];null!=t&&n.input.setAttribute(e,t)})),p&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof p?p:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${s}</div>`),u&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${u}</div>`),f&&(f="function"==typeof f?f:t.format(f)),a)a(n);else{const e=p?"onsubmit":"button"==o?"onclick":"checkbox"==o||"radio"==o?"onchange":"oninput";n[e]=t=>{t&&t.preventDefault();const i=l?l(n.input):n.input.value;if(n.output){const e=d?d(i):f?f(i):i;if(e instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(e)}else n.output.value=e}n.value=i,"oninput"!==e&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==e&&(m.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==e&&(n.onsubmit=e=>e&&e.preventDefault()),n[e]()}for(;n.childNodes.length;)m.appendChild(n.childNodes[0]);return n.append(m),n}}function rt(e){return e("d3-geo@1")}function at(e){return e("d3-format@1")}function lt(e){return e("topojson-client@3")}async function st(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function ut(e,t){return e.feature(t,t.objects.land)}function ft(e,t){return e.feature(t,t.objects.countries)}async function dt(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function pt(e,t){return e.feature(t,t.objects.nation)}function ct(e,t){return e.feature(t,t.objects.states)}function mt(e){return e.geoGraticule10()}function vt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function ht(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function bt(e,t){const i=e.module();return i.variable(t()).define(["md"],a),i.variable(t("sliderDemo")).define("sliderDemo",["md"],l),i.variable(t("viewof a")).define("viewof a",["slider"],s),i.variable(t("a")).define("a",["Generators","viewof a"],((e,t)=>e.input(t))),i.variable(t("viewof a1")).define("viewof a1",["slider"],u),i.variable(t("a1")).define("a1",["Generators","viewof a1"],((e,t)=>e.input(t))),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],f),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],((e,t)=>e.input(t))),i.variable(t("viewof a2")).define("viewof a2",["slider"],d),i.variable(t("a2")).define("a2",["Generators","viewof a2"],((e,t)=>e.input(t))),i.variable(t("viewof a3")).define("viewof a3",["slider"],p),i.variable(t("a3")).define("a3",["Generators","viewof a3"],((e,t)=>e.input(t))),i.variable(t("viewof a4")).define("viewof a4",["slider"],c),i.variable(t("a4")).define("a4",["Generators","viewof a4"],((e,t)=>e.input(t))),i.variable(t("viewof a5")).define("viewof a5",["slider"],m),i.variable(t("a5")).define("a5",["Generators","viewof a5"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],v),i.variable(t("slider")).define("slider",["input"],h),i.variable(t("buttonDemo")).define("buttonDemo",["md"],b),i.variable(t("viewof b")).define("viewof b",["button"],g),i.variable(t("b")).define("b",["Generators","viewof b"],((e,t)=>e.input(t))),i.variable(t()).define(["b"],w),i.variable(t("viewof b1")).define("viewof b1",["button"],y),i.variable(t("b1")).define("b1",["Generators","viewof b1"],((e,t)=>e.input(t))),i.variable(t()).define(["b1"],x),i.variable(t("button")).define("button",["input"],k),i.variable(t("selectDemo")).define("selectDemo",["md"],$),i.variable(t("viewof dd")).define("viewof dd",["select"],_),i.variable(t("dd")).define("dd",["Generators","viewof dd"],((e,t)=>e.input(t))),i.variable(t()).define(["dd"],C),i.variable(t("viewof dd1")).define("viewof dd1",["select"],j),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],((e,t)=>e.input(t))),i.variable(t()).define(["dd1"],M),i.variable(t("viewof dd2")).define("viewof dd2",["select"],D),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],((e,t)=>e.input(t))),i.variable(t()).define(["dd2"],G),i.variable(t("viewof dd3")).define("viewof dd3",["select"],A),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],((e,t)=>e.input(t))),i.variable(t()).define(["dd3"],S),i.variable(t("select")).define("select",["input","html"],E),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],P),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],T),i.variable(t("as")).define("as",["Generators","viewof as"],((e,t)=>e.input(t))),i.variable(t()).define(["as"],z),i.variable(t("autoSelect")).define("autoSelect",["input","html"],L),i.variable(t("colorDemo")).define("colorDemo",["md"],N),i.variable(t("viewof c")).define("viewof c",["color"],F),i.variable(t("c")).define("c",["Generators","viewof c"],((e,t)=>e.input(t))),i.variable(t("viewof c1")).define("viewof c1",["color"],H),i.variable(t("c1")).define("c1",["Generators","viewof c1"],((e,t)=>e.input(t))),i.variable(t("color")).define("color",["input"],O),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],W),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],B),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],((e,t)=>e.input(t))),i.variable(t()).define(["coords1"],I),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],U),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],((e,t)=>e.input(t))),i.variable(t()).define(["coords2"],q),i.variable(t("coordinates")).define("coordinates",["html","input"],R),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],V),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],Y),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["worldMap1"],Z),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],Q),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],J),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],K),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap1"],X),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ee),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap2"],te),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ie),i.variable(t("dateDemo")).define("dateDemo",["md"],ne),i.variable(t("viewof d")).define("viewof d",["date"],oe),i.variable(t("d")).define("d",["Generators","viewof d"],((e,t)=>e.input(t))),i.variable(t("viewof d1")).define("viewof d1",["date"],re),i.variable(t("d1")).define("d1",["Generators","viewof d1"],((e,t)=>e.input(t))),i.variable(t("date")).define("date",["input"],ae),i.variable(t("timeDemo")).define("timeDemo",["md"],le),i.variable(t("viewof t")).define("viewof t",["time"],se),i.variable(t("t")).define("t",["Generators","viewof t"],((e,t)=>e.input(t))),i.variable(t()).define(["t"],ue),i.variable(t("viewof t1")).define("viewof t1",["time"],fe),i.variable(t("t1")).define("t1",["Generators","viewof t1"],((e,t)=>e.input(t))),i.variable(t()).define(["t1"],de),i.variable(t("time")).define("time",["input"],pe),i.variable(t("fileDemo")).define("fileDemo",["md"],ce),i.variable(t("viewof e")).define("viewof e",["file"],me),i.variable(t("e")).define("e",["Generators","viewof e"],((e,t)=>e.input(t))),i.variable(t("viewof e1")).define("viewof e1",["file"],ve),i.variable(t("e1")).define("e1",["Generators","viewof e1"],((e,t)=>e.input(t))),i.variable(t()).define(["html","e1","Files"],he),i.variable(t("file")).define("file",["input"],be),i.variable(t("textDemo")).define("textDemo",["md"],ge),i.variable(t("viewof f")).define("viewof f",["text"],we),i.variable(t("f")).define("f",["Generators","viewof f"],((e,t)=>e.input(t))),i.variable(t("viewof f1")).define("viewof f1",["text"],ye),i.variable(t("f1")).define("f1",["Generators","viewof f1"],((e,t)=>e.input(t))),i.variable(t()).define(["f1"],xe),i.variable(t("viewof f2")).define("viewof f2",["text"],ke),i.variable(t("f2")).define("f2",["Generators","viewof f2"],((e,t)=>e.input(t))),i.variable(t()).define(["f2"],$e),i.variable(t("text")).define("text",["input"],_e),i.variable(t("textareaDemo")).define("textareaDemo",["md"],Ce),i.variable(t("viewof g")).define("viewof g",["textarea"],je),i.variable(t("g")).define("g",["Generators","viewof g"],((e,t)=>e.input(t))),i.variable(t()).define(["g"],Me),i.variable(t("viewof g1")).define("viewof g1",["textarea"],De),i.variable(t("g1")).define("g1",["Generators","viewof g1"],((e,t)=>e.input(t))),i.variable(t()).define(["g1"],Ge),i.variable(t("textarea")).define("textarea",["input","html"],Ae),i.variable(t("radioDemo")).define("radioDemo",["md"],Se),i.variable(t("viewof r")).define("viewof r",["radio"],Ee),i.variable(t("r")).define("r",["Generators","viewof r"],((e,t)=>e.input(t))),i.variable(t()).define(["r"],Pe),i.variable(t("viewof r1")).define("viewof r1",["radio"],Te),i.variable(t("r1")).define("r1",["Generators","viewof r1"],((e,t)=>e.input(t))),i.variable(t()).define(["r1"],ze),i.variable(t("radio")).define("radio",["input","html"],Le),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],Ne),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],Fe),i.variable(t("ch")).define("ch",["Generators","viewof ch"],((e,t)=>e.input(t))),i.variable(t()).define(["ch"],He),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],Oe),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],((e,t)=>e.input(t))),i.variable(t()).define(["ch1"],We),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],Be),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],((e,t)=>e.input(t))),i.variable(t()).define(["ch3"],Ie),i.variable(t("checkbox")).define("checkbox",["input","html"],Ue),i.variable(t("numberDemo")).define("numberDemo",["md"],qe),i.variable(t("viewof h")).define("viewof h",["number"],Re),i.variable(t("h")).define("h",["Generators","viewof h"],((e,t)=>e.input(t))),i.variable(t()).define(["h"],Ve),i.variable(t("viewof h1")).define("viewof h1",["number"],Ye),i.variable(t("h1")).define("h1",["Generators","viewof h1"],((e,t)=>e.input(t))),i.variable(t()).define(["h1"],Ze),i.variable(t("number")).define("number",["input"],Qe),i.variable(t("passwordDemo")).define("passwordDemo",["md"],Je),i.variable(t("viewof i")).define("viewof i",["password"],Ke),i.variable(t("i")).define("i",["Generators","viewof i"],((e,t)=>e.input(t))),i.variable(t()).define(["i"],Xe),i.variable(t("viewof i1")).define("viewof i1",["password"],et),i.variable(t("i1")).define("i1",["Generators","viewof i1"],((e,t)=>e.input(t))),i.variable(t()).define(["i1"],tt),i.variable(t("password")).define("password",["input"],it),i.variable(t()).define(["md"],nt),i.variable(t("input")).define("input",["html","d3format"],ot),i.variable(t("d3geo")).define("d3geo",["require"],rt),i.variable(t("d3format")).define("d3format",["require"],at),i.variable(t("topojson")).define("topojson",["require"],lt),i.variable(t("world")).define("world",st),i.variable(t("land")).define("land",["topojson","world"],ut),i.variable(t("countries")).define("countries",["topojson","world"],ft),i.variable(t("usa")).define("usa",dt),i.variable(t("nation")).define("nation",["topojson","usa"],pt),i.variable(t("states")).define("states",["topojson","usa"],ct),i.variable(t("graticule")).define("graticule",["d3geo"],mt),i.variable(t("viewof license")).define("viewof license",["md"],vt),i.variable(t("license")).define("license",["Generators","viewof license"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],ht),i}function gt(e){return e`# Spark UI SQL detailed annotator`}function wt(e){return e`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`}function yt(e,t){return e({value:t,rows:6,width:"100%"})}function xt(e,t){return e(t)}function kt(e,t,i,n){return e`
  
  ## Glossary

  ${t.map((t=>i`<h3 class="title_case">${t}</h3><p>${e`${n[t].definition}`}</p>`))}
`}function $t(e,t,i){let n=e.select(t`${i}`).select("#plan-viz-metadata");return n=n.node().outerHTML,t`${n}`}function _t(e,t,i){let n=e.select(t`${i}`).select("#plan-viz-graph svg");return n=n.attr("class","sparkui"),n=n.node().outerHTML,n}function Ct(e,t,i,n,o,r){return function(a){let l=e`${a}`,s=t.select(l);return s=s.attr("class","sparkui"),s.selectAll(".node").on("mouseover",(function(){let e,a=+[...this.classList].find((e=>e.includes("node_"))).match(/\d+/)[0],l=i(this);try{e=t.select("#plan-meta-data-"+a).text()}catch(d){e=""}let s=n(l+" "+e),u=o` ${s} <p><strong>Original tooltip: </strong>${e}</p>`;var f=t.select(this).node();r(f).tooltip({title:u,trigger:"manual",container:"body",placement:"right",html:!0}),r(f).tooltip("show")})).on("mouseout",(function(e){var i=t.select(this).node();r(i).tooltip("destroy")})),s.selectAll(".cluster").on("mouseover",(function(){[...this.classList].find((e=>e.includes("cluster_"))).match(/\d+/)[0];let e=i(this),a=o`${n(e)}`;var l=t.select(this).node();r(l).tooltip({title:a,trigger:"manual",container:"body",placement:"right",html:!0}),r(l).tooltip("show")})).on("mouseout",(function(e){var i=t.select(this).node();r(i).tooltip("destroy")})),l}}function jt(){return function(e){let t="";return function e(i){for(var n=0;n<i.childNodes.length;n++){var o=i.childNodes[n];e(o),o.firstChild||(t+=o.textContent+" ")}}(e),t}}function Mt(e,t,i){return function(n){let o=[];return e.forEach((e=>{(n.toLowerCase().includes(`${e} `)||n.toLowerCase().includes(`${e}(`))&&o.push(e)})),o.map((e=>{let n=t[e].short_definition,o=t[e].key;return i`<p><strong class="title_case">${o}</strong>: ${n}</p>`}))}}function Dt(e){return e.json("https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json")}function Gt(e){return Object.keys(e)}function At(e){return e("d3")}function St(e){return e.text("https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html")}function Et(e){return e("jquery")}function Pt(e){return function(e){var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,i,n){var o,r,a,l,s;for(this.type=t,this.$element=e(i),this.options=this.getOptions(n),this.enabled=!0,s=(a=this.options.trigger.split(" ")).length;s--;)"click"==(l=a[s])?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=l&&(o="hover"==l?"mouseenter":"focus",r="hover"==l?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var i,n=e.fn[this.type].defaults,o={};if(this._options&&e.each(this._options,(function(e,t){n[e]!=t&&(o[e]=t)}),this),!(i=e(t.currentTarget)[this.type](o).data(this.type)).options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout((function(){"in"==i.hoverState&&i.show()}),i.options.delay.show)},leave:function(t){var i=e(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout((function(){"out"==i.hoverState&&i.hide()}),i.options.delay.hide)},show:function(){var t,i,n,o,r,a,l=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(l),l.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),r="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),i=this.getPosition(),n=t[0].offsetWidth,o=t[0].offsetHeight,r){case"bottom":a={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":a={top:i.top-o,left:i.left+i.width/2-n/2};break;case"left":a={top:i.top+i.height/2-o/2,left:i.left-n};break;case"right":a={top:i.top+i.height/2-o/2,left:i.left+i.width}}this.applyPlacement(a,r),this.$element.trigger("shown")}},applyPlacement:function(e,t){var i,n,o,r,a=this.tip(),l=a[0].offsetWidth,s=a[0].offsetHeight;a.offset(e).addClass(t).addClass("in"),i=a[0].offsetWidth,n=a[0].offsetHeight,"top"==t&&n!=s&&(e.top=e.top+s-n,r=!0),"bottom"==t||"top"==t?(o=0,e.left<0&&(o=-2*e.left,e.left=0,a.offset(e),i=a[0].offsetWidth,n=a[0].offsetHeight),this.replaceArrow(o-l+i,i,"left")):this.replaceArrow(n-s,n,"top"),r&&a.offset(e)},replaceArrow:function(e,t,i){this.arrow().css(i,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){var t,i=this.tip(),n=e.Event("hide");if(this.$element.trigger(n),!n.isDefaultPrevented())return i.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?(t=setTimeout((function(){i.off(e.support.transition.end).detach()}),500),i.one(e.support.transition.end,(function(){clearTimeout(t),i.detach()}))):i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e=this.$element,t=this.options;return e.attr("data-original-title")||("function"==typeof t.title?t.title.call(e[0]):t.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var i=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=e.fn.tooltip;e.fn.tooltip=function(i){return this.each((function(){var n=e(this),o=n.data("tooltip"),r="object"==typeof i&&i;o||n.data("tooltip",o=new t(this,r)),"string"==typeof i&&o[i]()}))},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(window.jQuery)}function Tt(e){return e`<style> 
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
} </style>`}function zt(e){return e`<style>
.tooltip {font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}

.tooltip{position:absolute;z-index:1030;display:block;visibility:visible;font-size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0);}.tooltip.in{opacity:0.8;filter:alpha(opacity=80);}
.tooltip.top{margin-top:-3px;padding:5px 0;}
.tooltip.right{margin-left:3px;padding:0 5px;}
.tooltip.bottom{margin-top:3px;padding:5px 0;}
.tooltip.left{margin-left:-3px;padding:0 5px;}
.tooltip-inner{max-width:200px;padding:8px;color:#ffffff;text-align:left;text-decoration:none;background-color:#000000;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;}
.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;}
.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000000;}
.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000000;}
.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000000;}
.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000000;}


`}function Lt(e){return e`<style>
.title_case {
text-transform: capitalize
}`}function Nt(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],gt),i.variable(t("md_1")).define("md_1",["md"],wt),i.variable(t("viewof raw_html")).define("viewof raw_html",["textarea","sample_html"],yt),i.variable(t("raw_html")).define("raw_html",["Generators","viewof raw_html"],((e,t)=>e.input(t))),i.variable(t("output_svg")).define("output_svg",["plot_plan","raw_svg"],xt),i.variable(t("md_glossary")).define("md_glossary",["md","glossary_keys","html","glossary"],kt),i.variable(t("metadata")).define("metadata",["d3","html","raw_html"],$t),i.variable(t("raw_svg")).define("raw_svg",["d3","html","raw_html"],_t),i.variable(t("plot_plan")).define("plot_plan",["svg","d3","get_text_content_spaces","get_definitions_from_text","html","$"],Ct),i.variable(t("get_text_content_spaces")).define("get_text_content_spaces",jt),i.variable(t("get_definitions_from_text")).define("get_definitions_from_text",["glossary_keys","glossary","html"],Mt),i.variable(t("glossary")).define("glossary",["d3"],Dt),i.variable(t("glossary_keys")).define("glossary_keys",["glossary"],Gt),i.variable(t("d3")).define("d3",["require"],At),i.variable(t("sample_html")).define("sample_html",["d3"],St),i.variable(t("$")).define("$",["require"],Et),i.variable(t("bstt")).define("bstt",["$"],Pt),i.variable(t("styles1")).define("styles1",["html"],Tt),i.variable(t("styles2")).define("styles2",["html"],zt),i.variable(t()).define(["html"],Lt);const n=e.module(bt);return i.import("slider",n),i.import("textarea",n),i}var Ft=i(5860);const Ht=e=>n.createElement(r.H,{frontmatter:e.pageContext.frontmatter}),Ot=["title","md_1","viewof raw_html","output_svg","md_glossary","metadata","styles1","styles2"];function Wt(e){return n.createElement(Ft.Z,{notebook:Nt,cells:Ot})}var Bt=function(e){return void 0===e&&(e={}),n.createElement(o.fE,e,n.createElement(Wt,e))}},5860:function(e,t,i){var n=i(7294),o=i(6493);const r="mdx-container-div",a=new o.Zu,l=Object.assign({},a,{width:function(){return a.Generators.observe((e=>{let t=e(document.getElementById(r).clientWidth);function i(){let i=document.getElementById(r).clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}))}});t.Z=function(e){let{notebook:t,cells:i,customClassName:r}=e;const a=(0,n.useRef)(i.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new o.r_(l);return e.module(t,(e=>{const t=i.indexOf(e);if(-1!==t)return new o.lj(a.current[t].current)})),()=>e.dispose()}),[t,i]),n.createElement("div",{className:r},a.current.map(((e,t)=>n.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,i){i.d(t,{H:function(){return r}});var n=i(7294),o=i(4160);const r=e=>{let{frontmatter:t}=e;const{title:i,description:r,image:a,siteUrl:l,twitterUsername:s}=(0,o.K2)("1865044719").site.siteMetadata,u={title:(null==t?void 0:t.title)||i,description:(null==t?void 0:t.description)||r,image:`${l}${(null==t?void 0:t.image)||a}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:s,...t},f=null==t?void 0:t.stylesheet;return n.createElement(n.Fragment,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}),f&&n.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${f}`}))}}}]);
//# sourceMappingURL=component---src-mdx-spark-explain-mdx-f864dd346f0a7ae111a9.js.map