"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[8273],{1026:function(e,t,i){i.r(t),i.d(t,{Head:function(){return Ui},default:function(){return Qi},output_order:function(){return Hi}});var a=i(7294),n=i(7848),o=i(7825);function r(e){return e`| <h3>Friends & Family:</h3>  |   |
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
~~~`}function s(e){return e()}function u(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function d(e){return e({min:0,max:1,step:.01,format:e=>`${Math.round(100*e)} per cent`,description:"Zero to one, formatted with a custom function"})}function c(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function f(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function m(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function p(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function v(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function b(e){return function(t={}){let{min:i=0,max:a=1,value:n=(a+i)/2,step:o="any",precision:r=2,title:l,description:s,getValue:u,format:d,display:c,submit:f}="number"==typeof t?{value:t}:t;return r=Math.pow(10,r),u||(u=e=>Math.round(e.valueAsNumber*r)/r),e({type:"range",title:l,description:s,submit:f,format:d,display:c,attributes:{min:i,max:a,step:o,value:n},getValue:u})}}function h(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function _(e){return e()}function g(e){return!this}function w(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function y(e){return new Date(Date.now()).toUTCString()}function x(e){return function(t={}){const{value:i="Ok",title:a,description:n,disabled:o}="string"==typeof t?{value:t}:t,r=e({type:"button",title:a,description:n,attributes:{disabled:o,value:i}});return r.output.remove(),r}}function k(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function j(e){return e(["Spring","Summer","Fall","Winter"])}function $(e){return e}function A(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function M(e){return e}function G(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function D(e){return e}function C(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function E(e){return e}function T(e,t){return function(i={}){let{value:a,title:n,description:o,submit:r,multiple:l,size:s,options:u}=Array.isArray(i)?{options:i}:i;u=u.map((e=>"object"==typeof e?e:{value:e,label:e}));const d=e({type:"select",title:n,description:o,submit:r,getValue:e=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>e.value));return l?t:t[0]},form:t`
      <form>
        <select name="input" ${l?`multiple size="${s||u.length}"`:""}>
          ${u.map((({value:e,label:i})=>Object.assign(t`<option>`,{value:e,selected:Array.isArray(a)?a.includes(e):a===e,textContent:i})))}
        </select>
      </form>
    `});return d.output.remove(),d}}function S(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function P(e,t){return e({options:t.objects.states.geometries.map((e=>e.properties.name)),placeholder:"Search for a US state . . ."})}function L(e){return e}function z(e,t){return function(i={}){const{value:a,title:n,description:o,autocomplete:r="off",placeholder:l,size:s,options:u,list:d="options"}=Array.isArray(i)?{options:i}:i,c=new Set(u),f=e({type:"text",title:n,description:o,action:e=>{e.value=e.input.value=a||"",e.onsubmit=e=>e.preventDefault(),e.input.oninput=function(t){t.stopPropagation(),e.value=e.input.value,c.has(e.input.value)&&e.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${l}" style="font-size: 1em;" list=${d}>
          <datalist id="${d}">
              ${u.map((e=>Object.assign(t`<option>`,{value:e})))}
          </datalist>
      </form>
      `});return f.output.remove(),f}}function q(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function N(e){return e()}function I(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function O(e){return function(t={}){const{value:i="#000000",title:a,description:n,submit:o,display:r}="string"==typeof t?{value:t}:t,l=e({type:"color",title:a,description:n,submit:o,display:r,attributes:{value:i}});return(a||n)&&(l.input.style.margin="5px 0"),l}}function V(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function B(e){return e()}function W(e){return e}function F(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function R(e){return e}function U(e,t){return function(i={}){const{value:a=[],title:n,description:o,submit:r}=Array.isArray(i)?{value:i}:i;let[l,s]=a;l=null!=l?l:"",s=null!=s?s:"";const u=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${l}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${s}" />`,c=t({type:"coordinates",title:n,description:o,submit:r,getValue:()=>{const e=u.valueAsNumber,t=d.valueAsNumber;return[isNaN(e)?null:e,isNaN(t)?null:t]},form:e`
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
    `});return c.output.remove(),c}}function H(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function Y(e){return e([-122.27,37.87])}function Q(e){return e}function Z(e,t,i,a,n,o,r){return function(l={}){const{value:s=[],title:u,description:d,width:c=400}=Array.isArray(l)?{value:l}:l,f=Math.round(.525*c);let[m,p]=s;m=null!=m?m:null,p=null!=p?p:null;const v=e`<form style="width: ${c}px;"></form>`,b=t.context2d(c,f),h=b.canvas;h.style.margin="10px 0 0";const _=i.geoNaturalEarth1().precision(.1).fitSize([c,f],{type:"Sphere"}),g=i.geoPath(_,b).pointRadius(2.5);function w(){if(b.fillStyle="#fff",b.fillRect(0,0,c,f),b.beginPath(),g(a),b.lineWidth=.35,b.strokeStyle="#ddd",b.stroke(),b.beginPath(),g(n),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),g(o),b.strokeStyle="#aaa",b.stroke(),null!=m&&null!=p){const e={type:"MultiPoint",coordinates:[[m,p]]};b.beginPath(),g(e),b.fillStyle="#f00",b.fill()}}v.append(h),h.onclick=function(e){const{offsetX:t,offsetY:i}=e;var a=_.invert([t,i]);m=+a[0].toFixed(2),p=+a[1].toFixed(2),w(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},w();return r({type:"worldMapCoordinates",title:u,description:d,display:t=>e`<div style="position: absolute; width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=m?m:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=p?p:""} 
          </div>`,getValue:()=>[null!=m?m:null,null!=p?p:null],form:v})}}function J(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function K(e){return e([-122.27,37.87])}function X(e){return e}function ee(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function te(e){return e}function ie(e,t,i,a,n,o){return function(r={}){const{value:l=[],title:s,description:u,width:d=400}=Array.isArray(r)?{value:r}:r,c=d/960,f=600*c;let[m,p]=l;m=null!=m?m:null,p=null!=p?p:null;const v=e`<form style="width: ${d}px;"></form>`,b=t.context2d(d,f),h=b.canvas;h.style.margin="5px 0 0";const _=i.geoAlbersUsa().scale(1280).translate([480,300]),g=i.geoPath().context(b).pointRadius(2.5/c);function w(){if(b.clearRect(0,0,d,f),b.save(),b.scale(c,c),b.lineWidth=.35/c,b.beginPath(),g(a),b.fillStyle="#f4f4f4",b.fill(),b.beginPath(),g(n),b.strokeStyle="#aaa",b.stroke(),null!=m&&null!=p){const e={type:"MultiPoint",coordinates:[_([m,p])]};b.beginPath(),g(e),b.fillStyle="#f00",b.fill()}b.restore()}v.append(h),h.onclick=function(e){const{offsetX:t,offsetY:i}=e;var a=_.invert([t/c,i/c]);m=+a[0].toFixed(2),p=+a[1].toFixed(2),w(),h.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},w();return o({type:"worldMapCoordinates",title:s,description:u,display:t=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${null!=m?m:""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${null!=p?p:""} 
          </div>`,getValue:()=>[null!=m?m:null,null!=p?p:null],form:v})}}function ae(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function ne(e){return e()}function oe(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function re(e){return function(t={}){const{min:i,max:a,value:n,title:o,description:r,display:l}="string"==typeof t?{value:t}:t;return e({type:"date",title:o,description:r,display:l,attributes:{min:i,max:a,value:n}})}}function le(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function se(e){return e()}function ue(e){return e}function de(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function ce(e){return e}function fe(e){return function(t={}){const{min:i,max:a,step:n,value:o,title:r,description:l,display:s}="string"==typeof t?{value:t}:t,u=e({type:"time",title:r,description:l,display:s,getValue:e=>e.value?e.value:void 0,attributes:{min:i,max:a,step:n,value:o}});return u.output.remove(),u}}function me(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function pe(e){return e()}function ve(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function be(e,t,i){const a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let o=e`<img height="125px" style="margin: 2px;" />`;o.src=await i.url(t[n]),a.append(o)}return a}function he(e){return function(t={}){const{multiple:i,accept:a,title:n,description:o}=t,r=e({type:"file",title:n,description:o,attributes:{multiple:i,accept:a},action:e=>{e.input.onchange=()=>{e.value=i?e.input.files:e.input.files[0],e.dispatchEvent(new CustomEvent("input"))}}});return r.output.remove(),r.input.onchange(),r}}function _e(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function ge(e){return e()}function we(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function ye(e){return e}function xe(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function ke(e){return e}function je(e){return function(t={}){const{value:i,title:a,description:n,autocomplete:o="off",maxlength:r,minlength:l,pattern:s,placeholder:u,size:d,submit:c}="string"==typeof t?{value:t}:t,f=e({type:"text",title:a,description:n,submit:c,attributes:{value:i,autocomplete:o,maxlength:r,minlength:l,pattern:s,placeholder:u,size:d}});return f.output.remove(),f.input.style.fontSize="1em",f}}function $e(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function Ae(e){return e()}function Me(e){return e}function Ge(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function De(e){return e}function Ce(e,t){return function(i={}){const{value:a="",title:n,description:o,autocomplete:r,cols:l=45,rows:s=3,width:u,height:d,maxlength:c,placeholder:f,spellcheck:m,wrap:p,submit:v}="string"==typeof i?{value:i}:i,b=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${a}</textarea></form>`,title:n,description:o,submit:v,attributes:{autocomplete:r,cols:l,rows:s,maxlength:c,placeholder:f,spellcheck:m,wrap:p}});return b.output.remove(),null!=u&&(b.input.style.width=u),null!=d&&(b.input.style.height=d),v&&(b.submit.style.margin="0"),(n||o)&&(b.input.style.margin="3px 0"),b}}function Ee(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Te(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Se(e){return e}function Pe(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function Le(e){return e}function ze(e,t){return function(i={}){let{value:a,title:n,description:o,submit:r,options:l}=Array.isArray(i)?{options:i}:i;l=l.map((e=>"string"==typeof e?{value:e,label:e}:e));const s=e({type:"radio",title:n,description:o,submit:r,getValue:e=>{if(e.checked)return e.value;const t=Array.prototype.find.call(e,(e=>e.checked));return t?t.value:void 0},form:t`
      <form>
        ${l.map((({value:e,label:i})=>{const n=t`<input type=radio name=input ${e===a?"checked":""} style="vertical-align: baseline;" />`;n.setAttribute("value",e);return t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${n}
           ${i}
          </label>`}))}
      </form>
    `});return s.output.remove(),s}}function qe(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function Ne(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function Ie(e){return e}function Oe(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function Ve(e){return e}function Be(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function We(e){return e}function Fe(e,t){return function(i={}){let{value:a,title:n,description:o,submit:r,options:l}=Array.isArray(i)?{options:i}:i;l=l.map((e=>"string"==typeof e?{value:e,label:e}:e));const s=e({type:"checkbox",title:n,description:o,submit:r,getValue:e=>e.length?Array.prototype.filter.call(e,(e=>e.checked)).map((e=>e.value)):!!e.checked&&e.value,form:t`
      <form>
        ${l.map((({value:e,label:i})=>{const n=t`<input type=checkbox name=input ${(a||[]).indexOf(e)>-1?"checked":""} style="vertical-align: baseline;" />`;n.setAttribute("value",e);return t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${n}
           ${i}
          </label>`}))}
      </form>
    `});return s.output.remove(),s}}function Re(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function Ue(e){return e()}function He(e){return e}function Ye(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function Qe(e){return e}function Ze(e){return function(t={}){const{value:i,title:a,description:n,placeholder:o,submit:r,step:l="any",min:s,max:u}="number"==typeof t||"string"==typeof t?{value:+t}:t,d=e({type:"number",title:a,description:n,submit:r,attributes:{value:i,placeholder:o,step:l,min:s,max:u,autocomplete:"off"},getValue:e=>e.valueAsNumber});return d.output.remove(),d.input.style.width="auto",d.input.style.fontSize="1em",d}}function Je(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function Ke(e){return e({value:"password"})}function Xe(e){return e}function et(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function tt(e){return e}function it(e){return function(t={}){const{value:i,title:a,description:n,autocomplete:o="off",maxlength:r,minlength:l,pattern:s,placeholder:u,size:d,submit:c}="string"==typeof t?{value:t}:t,f=e({type:"password",title:a,description:n,submit:c,attributes:{value:i,autocomplete:o,maxlength:r,minlength:l,pattern:s,placeholder:u,size:d}});return f.output.remove(),f.input.style.fontSize="1em",f}}function at(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function nt(e,t){return function(i){let{form:a,type:n="text",attributes:o={},action:r,getValue:l,title:s,description:u,format:d,display:c,submit:f,options:m}=i;const p=e`<div></div>`;if(a||(a=e`<form>
	<input name=input type=${n} />
  </form>`),Object.keys(o).forEach((e=>{const t=o[e];null!=t&&a.input.setAttribute(e,t)})),f&&a.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${"string"==typeof f?f:"Submit"}" />`),a.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),s&&a.prepend(e`<div style="font: 700 0.9rem sans-serif;">${s}</div>`),u&&a.append(e`<div style="font-size: 0.85rem; font-style: italic;">${u}</div>`),d&&(d="function"==typeof d?d:t.format(d)),r)r(a);else{const e=f?"onsubmit":"button"==n?"onclick":"checkbox"==n||"radio"==n?"onchange":"oninput";a[e]=t=>{t&&t.preventDefault();const i=l?l(a.input):a.input.value;if(a.output){const e=c?c(i):d?d(i):i;if(e instanceof window.Element){for(;a.output.hasChildNodes();)a.output.removeChild(a.output.lastChild);a.output.append(e)}else a.output.value=e}a.value=i,"oninput"!==e&&a.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},"oninput"!==e&&(p.oninput=e=>e&&e.stopPropagation()&&e.preventDefault()),"onsubmit"!==e&&(a.onsubmit=e=>e&&e.preventDefault()),a[e]()}for(;a.childNodes.length;)p.appendChild(a.childNodes[0]);return a.append(p),a}}function ot(e){return e("d3-geo@1")}function rt(e){return e("d3-format@1")}function lt(e){return e("topojson-client@3")}async function st(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function ut(e,t){return e.feature(t,t.objects.land)}function dt(e,t){return e.feature(t,t.objects.countries)}async function ct(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function ft(e,t){return e.feature(t,t.objects.nation)}function mt(e,t){return e.feature(t,t.objects.states)}function pt(e){return e.geoGraticule10()}function vt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function bt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function ht(e,t){const i=e.module();return i.variable(t()).define(["md"],r),i.variable(t("sliderDemo")).define("sliderDemo",["md"],l),i.variable(t("viewof a")).define("viewof a",["slider"],s),i.variable(t("a")).define("a",["Generators","viewof a"],((e,t)=>e.input(t))),i.variable(t("viewof a1")).define("viewof a1",["slider"],u),i.variable(t("a1")).define("a1",["Generators","viewof a1"],((e,t)=>e.input(t))),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],d),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],((e,t)=>e.input(t))),i.variable(t("viewof a2")).define("viewof a2",["slider"],c),i.variable(t("a2")).define("a2",["Generators","viewof a2"],((e,t)=>e.input(t))),i.variable(t("viewof a3")).define("viewof a3",["slider"],f),i.variable(t("a3")).define("a3",["Generators","viewof a3"],((e,t)=>e.input(t))),i.variable(t("viewof a4")).define("viewof a4",["slider"],m),i.variable(t("a4")).define("a4",["Generators","viewof a4"],((e,t)=>e.input(t))),i.variable(t("viewof a5")).define("viewof a5",["slider"],p),i.variable(t("a5")).define("a5",["Generators","viewof a5"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],v),i.variable(t("slider")).define("slider",["input"],b),i.variable(t("buttonDemo")).define("buttonDemo",["md"],h),i.variable(t("viewof b")).define("viewof b",["button"],_),i.variable(t("b")).define("b",["Generators","viewof b"],((e,t)=>e.input(t))),i.variable(t()).define(["b"],g),i.variable(t("viewof b1")).define("viewof b1",["button"],w),i.variable(t("b1")).define("b1",["Generators","viewof b1"],((e,t)=>e.input(t))),i.variable(t()).define(["b1"],y),i.variable(t("button")).define("button",["input"],x),i.variable(t("selectDemo")).define("selectDemo",["md"],k),i.variable(t("viewof dd")).define("viewof dd",["select"],j),i.variable(t("dd")).define("dd",["Generators","viewof dd"],((e,t)=>e.input(t))),i.variable(t()).define(["dd"],$),i.variable(t("viewof dd1")).define("viewof dd1",["select"],A),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],((e,t)=>e.input(t))),i.variable(t()).define(["dd1"],M),i.variable(t("viewof dd2")).define("viewof dd2",["select"],G),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],((e,t)=>e.input(t))),i.variable(t()).define(["dd2"],D),i.variable(t("viewof dd3")).define("viewof dd3",["select"],C),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],((e,t)=>e.input(t))),i.variable(t()).define(["dd3"],E),i.variable(t("select")).define("select",["input","html"],T),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],S),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],P),i.variable(t("as")).define("as",["Generators","viewof as"],((e,t)=>e.input(t))),i.variable(t()).define(["as"],L),i.variable(t("autoSelect")).define("autoSelect",["input","html"],z),i.variable(t("colorDemo")).define("colorDemo",["md"],q),i.variable(t("viewof c")).define("viewof c",["color"],N),i.variable(t("c")).define("c",["Generators","viewof c"],((e,t)=>e.input(t))),i.variable(t("viewof c1")).define("viewof c1",["color"],I),i.variable(t("c1")).define("c1",["Generators","viewof c1"],((e,t)=>e.input(t))),i.variable(t("color")).define("color",["input"],O),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],V),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],B),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],((e,t)=>e.input(t))),i.variable(t()).define(["coords1"],W),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],F),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],((e,t)=>e.input(t))),i.variable(t()).define(["coords2"],R),i.variable(t("coordinates")).define("coordinates",["html","input"],U),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],H),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],Y),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["worldMap1"],Q),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],Z),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],J),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],K),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap1"],X),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ee),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],((e,t)=>e.input(t))),i.variable(t()).define(["usaMap2"],te),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ie),i.variable(t("dateDemo")).define("dateDemo",["md"],ae),i.variable(t("viewof d")).define("viewof d",["date"],ne),i.variable(t("d")).define("d",["Generators","viewof d"],((e,t)=>e.input(t))),i.variable(t("viewof d1")).define("viewof d1",["date"],oe),i.variable(t("d1")).define("d1",["Generators","viewof d1"],((e,t)=>e.input(t))),i.variable(t("date")).define("date",["input"],re),i.variable(t("timeDemo")).define("timeDemo",["md"],le),i.variable(t("viewof t")).define("viewof t",["time"],se),i.variable(t("t")).define("t",["Generators","viewof t"],((e,t)=>e.input(t))),i.variable(t()).define(["t"],ue),i.variable(t("viewof t1")).define("viewof t1",["time"],de),i.variable(t("t1")).define("t1",["Generators","viewof t1"],((e,t)=>e.input(t))),i.variable(t()).define(["t1"],ce),i.variable(t("time")).define("time",["input"],fe),i.variable(t("fileDemo")).define("fileDemo",["md"],me),i.variable(t("viewof e")).define("viewof e",["file"],pe),i.variable(t("e")).define("e",["Generators","viewof e"],((e,t)=>e.input(t))),i.variable(t("viewof e1")).define("viewof e1",["file"],ve),i.variable(t("e1")).define("e1",["Generators","viewof e1"],((e,t)=>e.input(t))),i.variable(t()).define(["html","e1","Files"],be),i.variable(t("file")).define("file",["input"],he),i.variable(t("textDemo")).define("textDemo",["md"],_e),i.variable(t("viewof f")).define("viewof f",["text"],ge),i.variable(t("f")).define("f",["Generators","viewof f"],((e,t)=>e.input(t))),i.variable(t("viewof f1")).define("viewof f1",["text"],we),i.variable(t("f1")).define("f1",["Generators","viewof f1"],((e,t)=>e.input(t))),i.variable(t()).define(["f1"],ye),i.variable(t("viewof f2")).define("viewof f2",["text"],xe),i.variable(t("f2")).define("f2",["Generators","viewof f2"],((e,t)=>e.input(t))),i.variable(t()).define(["f2"],ke),i.variable(t("text")).define("text",["input"],je),i.variable(t("textareaDemo")).define("textareaDemo",["md"],$e),i.variable(t("viewof g")).define("viewof g",["textarea"],Ae),i.variable(t("g")).define("g",["Generators","viewof g"],((e,t)=>e.input(t))),i.variable(t()).define(["g"],Me),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Ge),i.variable(t("g1")).define("g1",["Generators","viewof g1"],((e,t)=>e.input(t))),i.variable(t()).define(["g1"],De),i.variable(t("textarea")).define("textarea",["input","html"],Ce),i.variable(t("radioDemo")).define("radioDemo",["md"],Ee),i.variable(t("viewof r")).define("viewof r",["radio"],Te),i.variable(t("r")).define("r",["Generators","viewof r"],((e,t)=>e.input(t))),i.variable(t()).define(["r"],Se),i.variable(t("viewof r1")).define("viewof r1",["radio"],Pe),i.variable(t("r1")).define("r1",["Generators","viewof r1"],((e,t)=>e.input(t))),i.variable(t()).define(["r1"],Le),i.variable(t("radio")).define("radio",["input","html"],ze),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],qe),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],Ne),i.variable(t("ch")).define("ch",["Generators","viewof ch"],((e,t)=>e.input(t))),i.variable(t()).define(["ch"],Ie),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],Oe),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],((e,t)=>e.input(t))),i.variable(t()).define(["ch1"],Ve),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],Be),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],((e,t)=>e.input(t))),i.variable(t()).define(["ch3"],We),i.variable(t("checkbox")).define("checkbox",["input","html"],Fe),i.variable(t("numberDemo")).define("numberDemo",["md"],Re),i.variable(t("viewof h")).define("viewof h",["number"],Ue),i.variable(t("h")).define("h",["Generators","viewof h"],((e,t)=>e.input(t))),i.variable(t()).define(["h"],He),i.variable(t("viewof h1")).define("viewof h1",["number"],Ye),i.variable(t("h1")).define("h1",["Generators","viewof h1"],((e,t)=>e.input(t))),i.variable(t()).define(["h1"],Qe),i.variable(t("number")).define("number",["input"],Ze),i.variable(t("passwordDemo")).define("passwordDemo",["md"],Je),i.variable(t("viewof i")).define("viewof i",["password"],Ke),i.variable(t("i")).define("i",["Generators","viewof i"],((e,t)=>e.input(t))),i.variable(t()).define(["i"],Xe),i.variable(t("viewof i1")).define("viewof i1",["password"],et),i.variable(t("i1")).define("i1",["Generators","viewof i1"],((e,t)=>e.input(t))),i.variable(t()).define(["i1"],tt),i.variable(t("password")).define("password",["input"],it),i.variable(t()).define(["md"],at),i.variable(t("input")).define("input",["html","d3format"],nt),i.variable(t("d3geo")).define("d3geo",["require"],ot),i.variable(t("d3format")).define("d3format",["require"],rt),i.variable(t("topojson")).define("topojson",["require"],lt),i.variable(t("world")).define("world",st),i.variable(t("land")).define("land",["topojson","world"],ut),i.variable(t("countries")).define("countries",["topojson","world"],dt),i.variable(t("usa")).define("usa",ct),i.variable(t("nation")).define("nation",["topojson","usa"],ft),i.variable(t("states")).define("states",["topojson","usa"],mt),i.variable(t("graticule")).define("graticule",["d3geo"],pt),i.variable(t("viewof license")).define("viewof license",["md"],vt),i.variable(t("license")).define("license",["Generators","viewof license"],((e,t)=>e.input(t))),i.variable(t()).define(["md"],bt),i}function _t(e){return e`# Vega-Lite API v4`}function gt(e){return e`The [Vega-Lite JavaScript API](https://github.com/vega/vega-lite-api/) provides a convenient way to write [Vega-Lite](https://vega.github.io/vega-lite) specifications in a programmatic fashion. Scroll down for some usage examples, or browse the [Vega-Lite API example collection](https://observablehq.com/collection/@vega/vega-lite-api)!

This notebook uses **version 4** of Vega-Lite and the corresponding Vega-Lite API 4.0. _To use the more recent Vega-Lite version 5, see the [Vega-Lite API v5 notebook](https://observablehq.com/@vega/vega-lite-api-v5) instead._

Want to learn more about data visualization and how to use the Vega-Lite API? Read the [introduction to Vega-Lite](https://observablehq.com/@uwdata/introduction-to-vega-lite) and the [data visualization curriculum](https://observablehq.com/@uwdata/data-visualization-curriculum?collection=@uwdata/visualization-curriculum).`}function wt(e){return e`
The cell below imports the Vega-Lite API and registers the desired versions of Vega and Vega-Lite, along with default [Vega View options](https://vega.github.io/vega/docs/api/view/#view) and [Vega-Lite configuration](https://vega.github.io/vega-lite/docs/config.html):
`}async function yt(e){const[t,i,a,n]=await Promise.all(["vega@5.23.0","vega-lite@4.17.0","vega-lite-api@4.0.0","vega-tooltip@0.25.1"].map((t=>e(t)))),o={config:{config:{view:{continuousWidth:400,continuousHeight:300},mark:{tooltip:null}}},init:e=>{e.tooltip((new n.Handler).call),e.container()&&(e.container().style["overflow-x"]="auto")},view:{loader:t.loader({baseURL:"https://cdn.jsdelivr.net/npm/vega-datasets@2/"}),renderer:"canvas"}};return a.register(t,i,o)}function xt(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import {vl} from '@vega/vega-lite-api'
~~~
To use the API outside of Observable, see the [stand-alone usage instructions](#standalone_use) below.
`}function kt(e){return e`## Zip Codes

A dot for each zip code in the United States, colored by the first digit.
`}function jt(e,t){return e.markSquare({size:2,opacity:1}).data("data/zipcodes.csv").transform(e.calculate("substring(datum.zip_code, 0, 1)").as("digit")).project(e.projection("albersUsa")).encode(e.longitude().fieldQ("longitude"),e.latitude().fieldQ("latitude"),e.color().fieldN("digit")).width(t).height(Math.floor(t/1.75)).autosize({type:"fit-x",contains:"padding"}).config({view:{stroke:null}}).render()}function $t(e){return e`## Interactive Seattle Weather 2012-2015

A scatter plot and summary histogram with linked \`selections\` between plots to perform cross-filtering and configure conditional color encodings.
`}function At(e,t){const i=e.selectInterval().encodings("x"),a=e.selectMulti().encodings("color"),n={domain:["sun","fog","drizzle","rain","snow"],range:["#e7ba52","#a7a7a7","#aec7e8","#1f77b4","#9467bd"]},o=e.markPoint({filled:!0}).encode(e.color().value("lightgray").if(i,e.color().fieldN("weather").scale(n).title("Weather")),e.size().fieldQ("precipitation").scale({domain:[-1,50],range:[10,500]}).title("Precipitation"),e.order().fieldQ("precipitation").sort("descending"),e.x().timeMD("date").axis({title:"Date",format:"%b"}),e.y().fieldQ("temp_max").scale({domain:[-5,40]}).axis({title:"Maximum Daily Temperature (°C)"})).width(t).height(300).select(i).transform(e.filter(a)),r=e.markBar().encode(e.color().value("lightgray").if(a,e.color().fieldN("weather").scale(n).title("Weather")),e.x().count(),e.y().fieldN("weather").scale({domain:n.domain}).title("Weather")).width(t).select(a).transform(e.filter(i));return e.vconcat(o,r).data("data/seattle-weather.csv").autosize({type:"fit-x",contains:"padding"}).render()}function Mt(e){return e`## Parallel Coordinates

A [parallel coordinates plot](https://en.wikipedia.org/wiki/Parallel_coordinates) that uses \`window\` and \`fold\` transforms to convert the four dimensions of penguin measurements into normalized coordinates that can be visualized as \`line\` marks. The graphic includes an additional layer with custom \`text\` mark labels for the parallel axis grid lines. We render the plot as SVG by passing \`{renderer:'svg'}\` to the \`render\` method.
`}function Gt(e,t){const i=e.markLine({strokeWidth:1.5,opacity:.5}).encode(e.color().fieldN("Species").sort("descending"),e.detail().fieldN("index"),e.x().fieldO("key").scale({type:"point",padding:0}).axis({domain:!1,ticks:!1,title:!1,grid:!0,gridColor:"#888",labelAngle:0,labelPadding:8,labelFontWeight:"bold"}),e.y().fieldQ("fraction").axis(null)),a=e.markText({dx:-2,align:"right",baseline:"middle"}).transform(e.groupby("key").aggregate(e.min("value").as("min"),e.max("value").as("max")),e.fold("min","max").as("op","value"),e.groupby("key").window(e.percent_rank("value").as("fraction"))).encode(e.x().fieldN("key"),e.y().fieldQ("fraction").axis(null),e.text().field("value").format(","));return e.layer(i,a).data("data/penguins.json").transform(e.filter('datum["Beak Length (mm)"] != null'),e.window(e.row_number().as("index")),e.fold(["Beak Length (mm)","Beak Depth (mm)","Flipper Length (mm)","Body Mass (g)"]).as("key","value"),e.groupby("key").join(e.min("value").as("min"),e.max("value").as("max")),e.calculate("(datum.value - datum.min) / (datum.max - datum.min)").as("fraction")).width(t).height(300).autosize({type:"fit-x",contains:"padding"}).render({renderer:"svg"})}function Dt(e){return e`<hr/>
## Stand-Alone Usage in a Web Browser

To use the Vega-Lite API in the browser outside of Observable, you need to include all the dependencies, set the default configuration, and then register the Vega libraries. Here is some starting code to build from:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite-api@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-tooltip"></script>
  </head>
  <body>
    <div id="view"></div>

    <script>
      // setup API options
      const options = {
        config: {
          // Vega-Lite default configuration
        },
        init: (view) => {
          // initialize tooltip handler
          view.tooltip(new vegaTooltip.Handler().call);
        },
        view: {
          // view constructor options
          // remove the loader if you don't want to default to vega-datasets!
          loader: vega.loader({
            baseURL: "https://cdn.jsdelivr.net/npm/vega-datasets@2/",
          }),
          renderer: "canvas",
        },
      };

      // register vega and vega-lite with the API
      vl.register(vega, vegaLite, options);

      // now you can use the API!
      vl.markBar({ tooltip: true })
        .data([
          { a: "A", b: 28 }, { a: "B", b: 55 }, { a: "C", b: 43 },
          { a: "D", b: 91 }, { a: "E", b: 81 }, { a: "F", b: 53 },
          { a: "G", b: 19 }, { a: "H", b: 87 }, { a: "I", b: 52 },
        ])
        .encode(
          vl.x().fieldQ("b"),
          vl.y().fieldN("a"),
          vl.tooltip([vl.fieldQ("b"), vl.fieldN("a")])
        )
        .render()
        .then(viewElement => {
          // render returns a promise to a DOM element containing the chart
          // viewElement.value contains the Vega View object instance
          document.getElementById('view').appendChild(viewElement);
        });
    </script>
  </body>
</html>

~~~`}function Ct(e,t){const i=e.module();return i.variable(t()).define(["md"],_t),i.variable(t()).define(["md"],gt),i.variable(t()).define(["md"],wt),i.variable(t("vl")).define("vl",["require"],yt),i.variable(t()).define(["md"],xt),i.variable(t("zip_codes")).define("zip_codes",["md"],kt),i.variable(t()).define(["vl","width"],jt),i.variable(t("interactive_weather")).define("interactive_weather",["md"],$t),i.variable(t()).define(["vl","width"],At),i.variable(t("parallel_coordinats")).define("parallel_coordinats",["md"],Mt),i.variable(t()).define(["vl","width"],Gt),i.variable(t("standalone_use")).define("standalone_use",["md"],Dt),i}function Et(e){return e`# Unsupervised probabalistic data matching using the Expectation Maximisation algorithm`}function Tt(e){return e`This notebook is an interactive implementation of the Fellegi-Sunter model of record linkage, with record linkage probabilities estimated using the Expectation Maximisation (EM) algorithm.  

This is an unsupervised approach to finding matching records, which seems like magic to me - so hopefully this notebook helps demystify how this is possible.
`}function St(e){return e`## Input data

Consider two tables, which we are trying to match to one another.   \`mob\` stands for month of birth.
**Note**: You can edit this data so long as you keep the column names the same.

`}function Pt(e){return e`**Left table:**`}function Lt(e,t){return e({value:t,rows:6,width:"100%"})}function zt(e,t,i){return e`${t(i)}`}function qt(e){return e`**Right table:**`}function Nt(e,t){return e({value:t,rows:6,width:"100%"})}function It(e,t,i){return e`

${t(i)}


`}function Ot(e){return e`**Real matches**

These are the records which match in reality. You only need to include records which match, i.e. where label = 1.  These are the unknowns the model is trying to estimate 
`}function Vt(e,t){return e({value:t,rows:6,width:"100%"})}function Bt(e,t,i,a,n){return e`${t`<br>`}

${i(a)}



Finally, here are all the possible record comparisons:

${i(n)}`}function Wt(e,t,i,a){return e`To set this up as a maximum likelihood estimation problem, we need to make some assumptions about the structure of the problem, and choose some parameters to estimate.

First, we will designate λ the proportion of comparisons which are matches.  This is an unknown parameter to be estimated.  In the case of this data, the true λ is ${t(i)}.

Next, we will create the concept of a _comparison vector_, which is a way of encoding record comparisons into a vector.  

In this simple example our comparison vector, ${a`\gamma`} will be of length ${a`k=2`} , i.e. ${a`\gamma = [\gamma_1, \gamma_2]`} and will encode the following two rules:

- If \`mob\` matches,  ${a`\gamma_1 = 1`} else ${a`\gamma_1 = 0`}
- If \`surname\` matches exactly  ${a`\gamma_2 = 1`}. If it is similar ${a`\gamma_2 = 0.5`}.  Otherwise ${a`\gamma_2 = 0`}


We will then assume that element ${a`i`} of the comparison vector is a draw from one of two discrete distributions:

${a`\pi_{i,m=1}`}, the discrete distribution of ${a`\gamma_i`} when the records match

and 


${a`\pi_{i,m=0}`}, the discrete distribution of ${a`\gamma_i`} when the records do not match

`}function Ft(e,t,i){return e` Here are the comparison vectors for this data:

${t(i)}

Each row represents the comparison vector, which has two elements [𝛾1, 𝛾2].  

`}function Rt(e,t){return e`These assumptions are all we need to define the equation for the likelihood.  The equation looks quite complicated (see page 356 [here](https://imai.fas.harvard.edu/research/files/linkage.pdf)):

${t`\prod_{i=1}^{N_{\mathcal{A}}} \prod_{j=1}^{N_{\mathcal{B}}}\left\{\sum_{m=0}^{1} \lambda^{m}(1-\lambda)^{1-m} \prod_{k=1}^{K}\left(\prod_{\ell=0}^{L_{k}-1} \pi_{k m \ell}^{1\left\{\gamma_{k}(i, j)=\ell\right\}}\right)^{1-\delta_{k}(i, j)}\right\}`}

But expressed in words it's quite simple - approximately:

- For each element of the comparison vector, the probability of the observed outcome is ${t`\lambda (\pi_{i,m=1}|\gamma_i)  + (1-\lambda) (\pi_{i,m=0}|\gamma_i)`}
- Compute this probability for each of the ${t`k`} elements of the comparison vector in the row, and multiply together.  This represents the likelihood of the row
- Compute this for each row, and multiply together

`}function Ut(e,t){return e`To estimate which record comparisons are matches, we need to estimate the unknown parameters, which are ${t`\lambda`} and the parameters of the four discrete distributions ${t`\pi_{i,m}`}.

There's an algorithm called the Expectation Maximisation algorithm which can solve this problem iteratively.

In this notebook, rather than implement this algorithm, we will simply let you choose the parameters to try and maximise the log likelihood manually.  

## Estimating matches`}function Ht(e){return e({title:"Choose λ, the proportion of combinations which are matches",min:0,max:1,step:.01,value:.5})}function Yt(e){return e({title:"Month of birth comparison, probability month of birth matches given m=1",min:0,max:1,step:.01,value:.5})}function Qt(e){return e({title:"Month of birth comparison, probability month of birth matches given records DO NOT match",min:0,max:1,step:.01,value:.5})}function Zt(e){return e({title:"Surname comparison, probability field exactly matches given records match",min:0,max:1,step:.01,value:.3})}function Jt(e){return e({title:"Surname comparison, probability fields similar given records match",min:0,max:1,step:.01,value:.3})}function Kt(e){return e({title:"Surname comparison, probability field exactly matches given records DO NOT match",min:0,max:1,step:.01,value:.3})}function Xt(e){return e({title:"Surname comparison, probability fields similar given records DO NOT match",min:0,max:1,step:.01,value:.3})}function ei(e,t,i){return e`The log likelihood given these parameters is ${t(i)}`}function ti(e){return e`Here's a history of the values of log likelihood as you've been adjusting the sliders:`}function ii(e,t,i){let a=t.map(((e,t)=>({log_likelihood:e.log_likelihood,i:t})));return a=a.filter((e=>e.log_likelihood>-1e6)),i.markLine().data(a).encode(i.y().field("log_likelihood").type("quantitative").scale({zero:!1}),i.x().field("i").type("quantitative")).height(200).render()}function ai(e,t){return e`This chart shows ${t`\pi_{1,m=0}`} and ${t`\pi_{1,m=1}`}, the discrete distributions that you've chosen for ${t`\gamma_1`}, the \`mob\` comparison vector.`}function ni(e,t,i){let a=[{"𝛾_val":"1",probability:e,m:1,rule:"mob"},{"𝛾_val":"0",probability:1-e,m:1,rule:"mob"},{"𝛾_val":"1",probability:t,m:0,rule:"mob"},{"𝛾_val":"0",probability:1-t,m:0,rule:"mob"}];return i.markBar().data(a).encode(i.y().field("𝛾_val").type("nominal"),i.x().field("probability").type("quantitative"),i.column().fieldN("m").title(null),i.color().fieldN("m")).height(30).width(100).render()}function oi(e,t){return e`This chart shows ${t`\pi_{2,m=0}`} and ${t`\pi_{2,m=1}`}, the discrete distributions you've chosen for ${t`\gamma_2`}, the \`surname\` comparison vector.`}function ri(e,t,i,a,n){let o=[{"𝛾_val":"1",probability:e,m:1,rule:"surname"},{"𝛾_val":"0.5",probability:t,m:1,rule:"surname"},{"𝛾_val":"0",probability:1-e-t,m:1,rule:"surname"},{"𝛾_val":"1",probability:i,m:0,rule:"surname"},{"𝛾_val":"0.5",probability:a,m:0,rule:"surname"},{"𝛾_val":"0",probability:1-i-a,m:0,rule:"surname"}];return n.markBar().data(o).encode(n.y().field("𝛾_val").type("nominal"),n.x().field("probability").type("quantitative"),n.column().fieldN("m").title(null),n.color().fieldN("m")).height(30).width(100).render()}function li(e,t,i){return e`Given the parameter values you've selected, we can now compute the probability that we have a match for each record comparison, ${t`P(m)`}.

We can write the probabilities of observing ${t`\gamma_i`} given our parameters, and whether the record is a match:

${t`p1 = \lambda P(\gamma_1|\pi_{1,m=1})`}

${i`<br>`}

${t`p2 = \lambda P(\gamma_2|\pi_{2,m=1}) `}

${i`<br>`}

${t`n1 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}

${i`<br>`}

${t`n2 = (1-\lambda) P(\gamma_2|\pi_{2,m=0}) `}


The probability of a given record being a match is then:

${t`\frac{p1 p2}{p1 p2 + n1 n2} = \frac{1}{1 + \frac{n1 n2}{p1 p2}}`}.
`}function si(e,t,i,a,n,o){let r=e.map((function(e){let o=t(e);return(e=i(e))["𝛾1"]=o["𝛾1"],e["𝛾2"]=o["𝛾2"],e.prob_match=a(n(e)),e}));return r.columns=Object.keys(r[0]),o(r)}function ui(e){return e`## Annex: Code

This is the code I used to compute the log likelihood:

\`\`\`javascript
{
 function log_probability_of_element_of_gamma(elem, pi) {
    let prob =  lambda * pi["1"][elem] + (1-lambda) * pi["0"][elem]
    return Math.log(prob)
  }
  
  function log_probability_of_comparison(comparison_vector) {
    let elem = comparison_vector["𝛾1"]
    let ln_prob_1 = log_probability_of_element_of_gamma(elem, pi_mob)
    
    elem = comparison_vector["𝛾2"]
    let ln_prob_2 = log_probability_of_element_of_gamma(elem, pi_surname)
    
    return ln_prob_1 + ln_prob_2
  }
  
  let log_probs_of_rows = comparison_vectors.map(cv => log_probability_of_comparison(cv))
  
  return log_probs_of_rows.reduce((a,b) => a + b)
}
\`\`\`

and the code to compute the probability of a match:


\`\`\`javascript 
get_estimated_match_probability = function(comparison_vector) {
  let gamma1 = comparison_vector["𝛾1"]
  let gamma2 = comparison_vector["𝛾2"]
  
  let prob_match_1 = lambda * pi_mob["1"][gamma1]
  let prob_no_match_1 = (1-lambda) * pi_mob["0"][gamma1]
  let sum_1 = prob_match_1 + prob_no_match_1

  
  let prob_match_2 = lambda * pi_surname["1"][gamma1] 
  let prob_no_match_2 = (1-lambda) * pi_surname["0"][gamma1]
  let sum_2 = prob_match_2 + prob_no_match_2
  
  // Is the following calculation correct?
  let lr = (prob_match_1 * prob_match_2) / (prob_match_1*prob_match_2 + prob_no_match_1*prob_no_match_2)  
  
  return lr
 
}
\`\`\`

`}function di(){return"row_id_l,mob_l,surname_l\n1,10,Linacre\n2,7,Smith\n"}function ci(){return"row_id_r,mob_r,surname_r\n1,10,Linacer\n2,8,Jones\n3,7,Smith\n"}function fi(e,t,i){return e.value=[],t.csvParse(i)}function mi(e,t,i){return e.value=[],t.csvParse(i)}function pi(){return"row_id_l,row_id_r,label\n1,1,1\n2,3,1\n"}function vi(e,t,i){return e.value=[],t.csvParse(i)}function bi(e,t,i){t("DROP TABLE if exists combinations");let a=t("select * from df_l\n  cross join df_r\n  left join matches as m\n  on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r\n  ");return a=a.map((function(e){return e.label||(e.label="0"),e})),t("CREATE TABLE combinations"),t.tables.combinations.data=a,i("\n  select * from combinations\n\n")}function hi(e){return e`### Annex 2:  Computation of comparison vectors`}function _i(e,t){return function(i){return{"𝛾1":e(i),"𝛾2":t(i)}}}function gi(){return function(e){return+(e.mob_l==e.mob_r)}}function wi(e){return function(t){return t.surname_l==t.surname_r?1:e.get(t.surname_l,t.surname_r)<3?.5:0}}function yi(e,t){let i=e.map((e=>t(e)));return i.columns=Object.keys(i[0]),i}function xi(e,t){return t("\n\nselect df_l.row_id_l, df_r.row_id_r \nfrom df_l\n  cross join df_r\n  left join matches as m\non df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r\nwhere m.label = '1'\n\n")}function ki(e){return e.filter((e=>1==e.match)).map((e=>(delete e.match,e)))}function ji(e){return e`### Annex 3:  Likelihood and probability calculations`}function $i(e,t){return t("\n select count(*) as count_match\nfrom combinations\n where label = '1' \n")/t("\nselect count(*) from combinations\n")}function Ai(e,t,i,a){return{1:{1:e,.5:t,0:1-e-t},0:{1:i,.5:a,0:1-i-a}}}function Mi(e,t){return{1:{1:e,0:1-e},0:{1:t,0:1-t}}}function Gi(e,t,i){return function(a){let n=a["𝛾1"],o=(a["𝛾2"],e*t[1][n]),r=(1-e)*t[0][n],l=e*i[1][n],s=(1-e)*i[0][n];return o*l/(o*l+r*s)}}function Di(e,t,i,a){function n(t,i){let a=e*i[1][t]+(1-e)*i[0][t];return Math.log(a)}return a.map((e=>function(e){let a=e["𝛾1"],o=n(a,t);return a=e["𝛾2"],o+n(a,i)}(e))).reduce(((e,t)=>e+t))}function Ci(e){return e`### Annex 4: Other functions`}function Ei(){return[]}function Ti(e,t){e.push({log_likelihood:t})}function Si(e,t,i,a){let n=e("DROP TABLE if exists df_l");return e("CREATE TABLE df_l"),e("DROP TABLE if exists df_r"),e("CREATE TABLE df_r"),e("DROP TABLE if exists matches"),e("CREATE TABLE matches"),e.tables.df_l.data=t,e.tables.df_r.data=i,e.tables.matches.data=a,n}function Pi(e){return e`### Generic utility libraries and functions`}function Li(e){return function(t){let i=e(t);return i.columns=Object.keys(i[0]),i}}function zi(e){return function(t){return e`
<table>
<thead>
<tr>
${t.columns.map((t=>e`<th>${t}`))}
<tbody>
${t.map((t=>e`<tr>
  ${Object.keys(t).map((i=>e`<td>${t[i]}`))}
`))}
`}}function qi(e){return e("alasql")}function Ni(e){return function(t){let i=e(t);return i=i[0],i[Object.keys(i)[0]]}}function Ii(e){return e("d3")}function Oi(e){return e.format(",.3f")}function Vi(e){return e("fast-levenshtein@2.0.6")}function Bi(e){return e("@observablehq/vega-lite@0.2")}function Wi(){return function(e){return JSON.parse(JSON.stringify(e))}}function Fi(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],Et),i.variable(t("out_1")).define("out_1",["md"],Tt),i.variable(t("out_2")).define("out_2",["md"],St),i.variable(t("out_3")).define("out_3",["md"],Pt),i.variable(t("viewof left_table_csv")).define("viewof left_table_csv",["textarea","data_left_template"],Lt),i.variable(t("left_table_csv")).define("left_table_csv",["Generators","viewof left_table_csv"],((e,t)=>e.input(t))),i.variable(t("out_4")).define("out_4",["md","table","data_left"],zt),i.variable(t("out_5")).define("out_5",["md"],qt),i.variable(t("viewof right_table_csv")).define("viewof right_table_csv",["textarea","data_right_template"],Nt),i.variable(t("right_table_csv")).define("right_table_csv",["Generators","viewof right_table_csv"],((e,t)=>e.input(t))),i.variable(t("out_6")).define("out_6",["md","table","data_right"],It),i.variable(t("out_7")).define("out_7",["md"],Ot),i.variable(t("viewof match_pairs_csv")).define("viewof match_pairs_csv",["textarea","match_pairs_template"],Vt),i.variable(t("match_pairs_csv")).define("match_pairs_csv",["Generators","viewof match_pairs_csv"],((e,t)=>e.input(t))),i.variable(t("out_8")).define("out_8",["md","html","table","match_pairs","combinations"],Bt),i.variable(t("out_9")).define("out_9",["md","num_fmt","true_lambda","tex"],Wt),i.variable(t("out_10")).define("out_10",["md","table","comparison_vectors"],Ft),i.variable(t("out_11")).define("out_11",["md","tex"],Rt),i.variable(t("out_12")).define("out_12",["md","tex"],Ut),i.variable(t("viewof lambda")).define("viewof lambda",["slider"],Ht),i.variable(t("lambda")).define("lambda",["Generators","viewof lambda"],((e,t)=>e.input(t))),i.variable(t("viewof pi1_1_m1")).define("viewof pi1_1_m1",["slider"],Yt),i.variable(t("pi1_1_m1")).define("pi1_1_m1",["Generators","viewof pi1_1_m1"],((e,t)=>e.input(t))),i.variable(t("viewof pi1_1_m0")).define("viewof pi1_1_m0",["slider"],Qt),i.variable(t("pi1_1_m0")).define("pi1_1_m0",["Generators","viewof pi1_1_m0"],((e,t)=>e.input(t))),i.variable(t("viewof pi2_1_m1")).define("viewof pi2_1_m1",["slider"],Zt),i.variable(t("pi2_1_m1")).define("pi2_1_m1",["Generators","viewof pi2_1_m1"],((e,t)=>e.input(t))),i.variable(t("viewof pi2_05_m1")).define("viewof pi2_05_m1",["slider"],Jt),i.variable(t("pi2_05_m1")).define("pi2_05_m1",["Generators","viewof pi2_05_m1"],((e,t)=>e.input(t))),i.variable(t("viewof pi2_1_m0")).define("viewof pi2_1_m0",["slider"],Kt),i.variable(t("pi2_1_m0")).define("pi2_1_m0",["Generators","viewof pi2_1_m0"],((e,t)=>e.input(t))),i.variable(t("viewof pi2_05_m0")).define("viewof pi2_05_m0",["slider"],Xt),i.variable(t("pi2_05_m0")).define("pi2_05_m0",["Generators","viewof pi2_05_m0"],((e,t)=>e.input(t))),i.variable(t("out_13")).define("out_13",["md","num_fmt","log_likelihood"],ei),i.variable(t("out_14")).define("out_14",["md"],ti),i.variable(t("ll_chart")).define("ll_chart",["log_likelihood","history_ll","vl"],ii),i.variable(t("out_15")).define("out_15",["md","tex"],ai),i.variable(t("pi_chart_1")).define("pi_chart_1",["pi1_1_m1","pi1_1_m0","vl"],ni),i.variable(t("out_16")).define("out_16",["md","tex"],oi),i.variable(t("pi_chart_2")).define("pi_chart_2",["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0","vl"],ri),i.variable(t("out_17")).define("out_17",["md","tex","html"],li),i.variable(t("out_18")).define("out_18",["combinations","get_comparison_vector","deepcopy","num_fmt","get_estimated_match_probability","table"],si),i.variable(t("out_19")).define("out_19",["md"],ui),i.variable(t("data_left_template")).define("data_left_template",di),i.variable(t("data_right_template")).define("data_right_template",ci),i.variable(t("data_left")).define("data_left",["mutable history_ll","d3","left_table_csv"],fi),i.variable(t("data_right")).define("data_right",["mutable history_ll","d3","right_table_csv"],mi),i.variable(t("match_pairs_template")).define("match_pairs_template",pi),i.variable(t("matches")).define("matches",["mutable history_ll","d3","match_pairs_csv"],vi),i.variable(t("combinations")).define("combinations",["db","alasql","sql_with_cols"],bi),i.variable(t()).define(["md"],hi),i.variable(t("get_comparison_vector")).define("get_comparison_vector",["month_of_birth","surname"],_i),i.variable(t("month_of_birth")).define("month_of_birth",gi),i.variable(t("surname")).define("surname",["levenshtein"],wi),i.variable(t("comparison_vectors")).define("comparison_vectors",["combinations","get_comparison_vector"],yi),i.variable(t("match_pairs")).define("match_pairs",["db","sql_with_cols"],xi),i.variable(t("real_matches")).define("real_matches",["matches"],ki),i.variable(t()).define(["md"],ji),i.variable(t("true_lambda")).define("true_lambda",["combinations","sql_return_scalar"],$i),i.variable(t("pi_surname")).define("pi_surname",["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0"],Ai),i.variable(t("pi_mob")).define("pi_mob",["pi1_1_m1","pi1_1_m0"],Mi),i.variable(t("get_estimated_match_probability")).define("get_estimated_match_probability",["lambda","pi_mob","pi_surname"],Gi),i.variable(t("log_likelihood")).define("log_likelihood",["lambda","pi_mob","pi_surname","comparison_vectors"],Di),i.variable(t()).define(["md"],Ci),i.define("initial history_ll",Ei),i.variable(t("mutable history_ll")).define("mutable history_ll",["Mutable","initial history_ll"],((e,t)=>new e(t))),i.variable(t("history_ll")).define("history_ll",["mutable history_ll"],(e=>e.generator)),i.variable(t()).define(["history_ll","log_likelihood"],Ti),i.variable(t("db")).define("db",["alasql","data_left","data_right","matches"],Si),i.variable(t()).define(["md"],Pi),i.variable(t("sql_with_cols")).define("sql_with_cols",["alasql"],Li),i.variable(t("table")).define("table",["html"],zi),i.variable(t("alasql")).define("alasql",["require"],qi),i.variable(t("sql_return_scalar")).define("sql_return_scalar",["alasql"],Ni),i.variable(t("d3")).define("d3",["require"],Ii),i.variable(t("num_fmt")).define("num_fmt",["d3"],Oi),i.variable(t("levenshtein")).define("levenshtein",["require"],Vi);const a=e.module(ht);i.import("slider",a),i.import("textarea",a);const n=e.module(Ct);return i.import("vl",n),i.variable(t("vegalite")).define("vegalite",["require"],Bi),i.variable(t("deepcopy")).define("deepcopy",Wi),i}var Ri=i(5860);const Ui=e=>a.createElement(o.H,{frontmatter:e.pageContext.frontmatter}),Hi=["title","out_1","out_2","out_3","viewof left_table_csv","out_4","out_5","viewof right_table_csv","out_6","out_7","viewof match_pairs_csv","out_8","out_9","out_10","out_11","out_12","viewof lambda","viewof pi1_1_m1","viewof pi1_1_m0","viewof pi2_1_m1","viewof pi2_05_m1","viewof pi2_1_m0","viewof pi2_05_m0","out_13","out_14","ll_chart","out_15","pi_chart_1","out_16","pi_chart_2","out_17","out_18","out_19"];function Yi(e){return a.createElement(Ri.Z,{notebook:Fi,cells:Hi})}var Qi=function(e){return void 0===e&&(e={}),a.createElement(n.fE,e,a.createElement(Yi,e))}},5860:function(e,t,i){var a=i(7294),n=i(6493);const o="mdx-container-div",r=new n.Zu,l=Object.assign({},r,{width:function(){return r.Generators.observe((e=>{let t=e(document.getElementById(o).clientWidth);function i(){let i=document.getElementById(o).clientWidth;i!==t&&e(t=i)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}))}});t.Z=function(e){let{notebook:t,cells:i,customClassName:o}=e;const r=(0,a.useRef)(i.map((()=>a.createRef())));return(0,a.useEffect)((()=>{const e=new n.r_(l);return e.module(t,(e=>{const t=i.indexOf(e);if(-1!==t)return new n.lj(r.current[t].current)})),()=>e.dispose()}),[t,i]),a.createElement("div",{className:o},r.current.map(((e,t)=>a.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,i){i.d(t,{H:function(){return o}});var a=i(7294),n=i(4160);const o=e=>{let{frontmatter:t}=e;const{title:i,description:o,image:r,siteUrl:l,twitterUsername:s}=(0,n.K2)("1865044719").site.siteMetadata,u={title:(null==t?void 0:t.title)||i,description:(null==t?void 0:t.description)||o,image:`${l}${(null==t?void 0:t.image)||r}`,url:`${l}${(null==t?void 0:t.pathname)||""}`,twitterUsername:s,...t},d=null==t?void 0:t.stylesheet;return a.createElement(a.Fragment,null,a.createElement("title",null,u.title),a.createElement("meta",{name:"description",content:u.description}),a.createElement("meta",{name:"image",content:u.image}),d&&a.createElement("link",{rel:"stylesheet",type:"text/css",href:`/styles/${d}`}))}}}]);
//# sourceMappingURL=component---src-mdx-em-algorithm-interactive-mdx-28f005748c23a77cd37a.js.map