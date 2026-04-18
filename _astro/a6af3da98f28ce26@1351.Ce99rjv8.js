function G(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function A(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function C(e){return e()}function S(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function $(e){return e({min:0,max:1,step:.01,format:t=>`${Math.round(100*t)} per cent`,description:"Zero to one, formatted with a custom function"})}function P(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function E(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function T(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function q(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function N(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function z(e){return(function(i={}){let{min:a=0,max:n=1,value:s=(n+a)/2,step:p="any",precision:f=2,title:d,description:m,getValue:o,format:r,display:u,submit:_}=typeof i=="number"?{value:i}:i;return f=Math.pow(10,f),o||(o=c=>Math.round(c.valueAsNumber*f)/f),e({type:"range",title:d,description:m,submit:_,format:r,display:u,attributes:{min:a,max:n,step:p,value:s},getValue:o})})}function O(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function L(e){return e()}function I(e){return!this}function B(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function F(e){return new Date(Date.now()).toUTCString()}function U(e){return(function(i={}){const{value:a="Ok",title:n,description:s,disabled:p}=typeof i=="string"?{value:i}:i,f=e({type:"button",title:n,description:s,attributes:{disabled:p,value:a}});return f.output.remove(),f})}function V(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function W(e){return e(["Spring","Summer","Fall","Winter"])}function R(e){return e}function Y(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function H(e){return e}function K(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function X(e){return e}function Z(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function J(e){return e}function Q(e,t){return(function(a={}){let{value:n,title:s,description:p,submit:f,multiple:d,size:m,options:o}=Array.isArray(a)?{options:a}:a;o=o.map(u=>typeof u=="object"?u:{value:u,label:u});const r=e({type:"select",title:s,description:p,submit:f,getValue:u=>{const _=Array.prototype.filter.call(u.options,c=>c.selected).map(c=>c.value);return d?_:_[0]},form:t`
      <form>
        <select name="input" ${d?`multiple size="${m||o.length}"`:""}>
          ${o.map(({value:u,label:_})=>Object.assign(t`<option>`,{value:u,selected:Array.isArray(n)?n.includes(u):n===u,textContent:_}))}
        </select>
      </form>
    `});return r.output.remove(),r})}function ee(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function te(e,t){return e({options:t.objects.states.geometries.map(i=>i.properties.name),placeholder:"Search for a US state . . ."})}function ie(e){return e}function ne(e,t){return(function(a={}){const{value:n,title:s,description:p,autocomplete:f="off",placeholder:d,size:m,options:o,list:r="options"}=Array.isArray(a)?{options:a}:a,u=new Set(o),_=e({type:"text",title:s,description:p,action:c=>{c.value=c.input.value=n||"",c.onsubmit=h=>h.preventDefault(),c.input.oninput=function(h){h.stopPropagation(),c.value=c.input.value,u.has(c.input.value)&&c.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${d}" style="font-size: 1em;" list=${r}>
          <datalist id="${r}">
              ${o.map(c=>Object.assign(t`<option>`,{value:c}))}
          </datalist>
      </form>
      `});return _.output.remove(),_})}function ae(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function oe(e){return e()}function re(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function le(e){return(function(i={}){const{value:a="#000000",title:n,description:s,submit:p,display:f}=typeof i=="string"?{value:i}:i,d=e({type:"color",title:n,description:s,submit:p,display:f,attributes:{value:a}});return(n||s)&&(d.input.style.margin="5px 0"),d})}function ue(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function se(e){return e()}function de(e){return e}function ce(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function fe(e){return e}function pe(e,t){return(function(a={}){const{value:n=[],title:s,description:p,submit:f}=Array.isArray(a)?{value:a}:a;let[d,m]=n;d=d??"",m=m??"";const o=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${d}" />`,r=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${m}" />`,u=t({type:"coordinates",title:s,description:p,submit:f,getValue:()=>{const _=o.valueAsNumber,c=r.valueAsNumber;return[isNaN(_)?null:_,isNaN(c)?null:c]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${o}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${r}
        </label>
      </form>
    `});return u.output.remove(),u})}function me(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function _e(e){return e([-122.27,37.87])}function he(e){return e}function ve(e,t,i,a,n,s,p){return(function(d={}){const{value:m=[],title:o,description:r,width:u=400}=Array.isArray(d)?{value:d}:d,_=Math.round(210/400*u);let[c,h]=m;c=c??null,h=h??null;const v=e`<form style="width: ${u}px;"></form>`,l=t.context2d(u,_),w=l.canvas;w.style.margin="10px 0 0";const b=i.geoNaturalEarth1().precision(.1).fitSize([u,_],{type:"Sphere"}),y=i.geoPath(b,l).pointRadius(2.5);v.append(w);function k(){if(l.fillStyle="#fff",l.fillRect(0,0,u,_),l.beginPath(),y(a),l.lineWidth=.35,l.strokeStyle="#ddd",l.stroke(),l.beginPath(),y(n),l.fillStyle="#f4f4f4",l.fill(),l.beginPath(),y(s),l.strokeStyle="#aaa",l.stroke(),c!=null&&h!=null){const g={type:"MultiPoint",coordinates:[[c,h]]};l.beginPath(),y(g),l.fillStyle="#f00",l.fill()}}return w.onclick=function(g){const{offsetX:j,offsetY:D}=g;var x=b.invert([j,D]);c=+x[0].toFixed(2),h=+x[1].toFixed(2),k(),w.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},k(),p({type:"worldMapCoordinates",title:o,description:r,display:g=>e`<div style="position: absolute; width: ${u}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${c??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[c??null,h??null],form:v})})}function we(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function be(e){return e([-122.27,37.87])}function ge(e){return e}function ye(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function ke(e){return e}function xe(e,t,i,a,n,s){return(function(f={}){const{value:d=[],title:m,description:o,width:r=400}=Array.isArray(f)?{value:f}:f,u=r/960,_=u*600;let[c,h]=d;c=c??null,h=h??null;const v=e`<form style="width: ${r}px;"></form>`,l=t.context2d(r,_),w=l.canvas;w.style.margin="5px 0 0";const b=i.geoAlbersUsa().scale(1280).translate([480,300]),y=i.geoPath().context(l).pointRadius(2.5/u);v.append(w);function k(){if(l.clearRect(0,0,r,_),l.save(),l.scale(u,u),l.lineWidth=.35/u,l.beginPath(),y(a),l.fillStyle="#f4f4f4",l.fill(),l.beginPath(),y(n),l.strokeStyle="#aaa",l.stroke(),c!=null&&h!=null){const g={type:"MultiPoint",coordinates:[b([c,h])]};l.beginPath(),y(g),l.fillStyle="#f00",l.fill()}l.restore()}return w.onclick=function(g){const{offsetX:j,offsetY:D}=g;var x=b.invert([j/u,D/u]);c=+x[0].toFixed(2),h=+x[1].toFixed(2),k(),w.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},k(),s({type:"worldMapCoordinates",title:m,description:o,display:g=>e`<div style="position: absolute; width: ${r}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${c??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[c??null,h??null],form:v})})}function je(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function De(e){return e()}function Me(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function Ge(e){return(function(i={}){const{min:a,max:n,value:s,title:p,description:f,display:d}=typeof i=="string"?{value:i}:i;return e({type:"date",title:p,description:f,display:d,attributes:{min:a,max:n,value:s}})})}function Ae(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function Ce(e){return e()}function Se(e){return e}function $e(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function Pe(e){return e}function Ee(e){return(function(i={}){const{min:a,max:n,step:s,value:p,title:f,description:d,display:m}=typeof i=="string"?{value:i}:i,o=e({type:"time",title:f,description:d,display:m,getValue:r=>r.value?r.value:void 0,attributes:{min:a,max:n,step:s,value:p}});return o.output.remove(),o})}function Te(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function qe(e){return e()}function Ne(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function ze(e,t,i){const a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let s=e`<img height="125px" style="margin: 2px;" />`;s.src=await i.url(t[n]),a.append(s)}return a}function Oe(e){return(function(i={}){const{multiple:a,accept:n,title:s,description:p}=i,f=e({type:"file",title:s,description:p,attributes:{multiple:a,accept:n},action:d=>{d.input.onchange=()=>{d.value=a?d.input.files:d.input.files[0],d.dispatchEvent(new CustomEvent("input"))}}});return f.output.remove(),f.input.onchange(),f})}function Le(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function Ie(e){return e()}function Be(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function Fe(e){return e}function Ue(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function Ve(e){return e}function We(e){return(function(i={}){const{value:a,title:n,description:s,autocomplete:p="off",maxlength:f,minlength:d,pattern:m,placeholder:o,size:r,submit:u}=typeof i=="string"?{value:i}:i,_=e({type:"text",title:n,description:s,submit:u,attributes:{value:a,autocomplete:p,maxlength:f,minlength:d,pattern:m,placeholder:o,size:r}});return _.output.remove(),_.input.style.fontSize="1em",_})}function Re(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function Ye(e){return e()}function He(e){return e}function Ke(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Xe(e){return e}function Ze(e,t){return(function(a={}){const{value:n="",title:s,description:p,autocomplete:f,cols:d=45,rows:m=3,width:o,height:r,maxlength:u,placeholder:_,spellcheck:c,wrap:h,submit:v}=typeof a=="string"?{value:a}:a,l=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:s,description:p,submit:v,attributes:{autocomplete:f,cols:d,rows:m,maxlength:u,placeholder:_,spellcheck:c,wrap:h}});return l.output.remove(),o!=null&&(l.input.style.width=o),r!=null&&(l.input.style.height=r),v&&(l.submit.style.margin="0"),(s||p)&&(l.input.style.margin="3px 0"),l})}function Je(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Qe(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function et(e){return e}function tt(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function it(e){return e}function nt(e,t){return(function(a={}){let{value:n,title:s,description:p,submit:f,options:d}=Array.isArray(a)?{options:a}:a;d=d.map(o=>typeof o=="string"?{value:o,label:o}:o);const m=e({type:"radio",title:s,description:p,submit:f,getValue:o=>{if(o.checked)return o.value;const r=Array.prototype.find.call(o,u=>u.checked);return r?r.value:void 0},form:t`
      <form>
        ${d.map(({value:o,label:r})=>{const u=t`<input type=radio name=input ${o===n?"checked":""} style="vertical-align: baseline;" />`;return u.setAttribute("value",o),t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${u}
           ${r}
          </label>`})}
      </form>
    `});return m.output.remove(),m})}function at(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function ot(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function rt(e){return e}function lt(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function ut(e){return e}function st(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function dt(e){return e}function ct(e,t){return(function(a={}){let{value:n,title:s,description:p,submit:f,options:d}=Array.isArray(a)?{options:a}:a;d=d.map(o=>typeof o=="string"?{value:o,label:o}:o);const m=e({type:"checkbox",title:s,description:p,submit:f,getValue:o=>o.length?Array.prototype.filter.call(o,r=>r.checked).map(r=>r.value):o.checked?o.value:!1,form:t`
      <form>
        ${d.map(({value:o,label:r})=>{const u=t`<input type=checkbox name=input ${(n||[]).indexOf(o)>-1?"checked":""} style="vertical-align: baseline;" />`;return u.setAttribute("value",o),t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${u}
           ${r}
          </label>`})}
      </form>
    `});return m.output.remove(),m})}function ft(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function pt(e){return e()}function mt(e){return e}function _t(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function ht(e){return e}function vt(e){return(function(i={}){const{value:a,title:n,description:s,placeholder:p,submit:f,step:d="any",min:m,max:o}=typeof i=="number"||typeof i=="string"?{value:+i}:i,r=e({type:"number",title:n,description:s,submit:f,attributes:{value:a,placeholder:p,step:d,min:m,max:o,autocomplete:"off"},getValue:u=>u.valueAsNumber});return r.output.remove(),r.input.style.width="auto",r.input.style.fontSize="1em",r})}function wt(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function bt(e){return e({value:"password"})}function gt(e){return e}function yt(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function kt(e){return e}function xt(e){return(function(i={}){const{value:a,title:n,description:s,autocomplete:p="off",maxlength:f,minlength:d,pattern:m,placeholder:o,size:r,submit:u}=typeof i=="string"?{value:i}:i,_=e({type:"password",title:n,description:s,submit:u,attributes:{value:a,autocomplete:p,maxlength:f,minlength:d,pattern:m,placeholder:o,size:r}});return _.output.remove(),_.input.style.fontSize="1em",_})}function jt(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function Dt(e,t){return(function(a){let{form:n,type:s="text",attributes:p={},action:f,getValue:d,title:m,description:o,format:r,display:u,submit:_,options:c}=a;const h=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${s} />
  </form>`),Object.keys(p).forEach(v=>{const l=p[v];l!=null&&n.input.setAttribute(v,l)}),_&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof _=="string"?_:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),m&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${m}</div>`),o&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${o}</div>`),r&&(r=typeof r=="function"?r:t.format(r)),f)f(n);else{const v=_?"onsubmit":s=="button"?"onclick":s=="checkbox"||s=="radio"?"onchange":"oninput";n[v]=l=>{l&&l.preventDefault();const w=d?d(n.input):n.input.value;if(n.output){const b=u?u(w):r?r(w):w;if(b instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(b)}else n.output.value=b}n.value=w,v!=="oninput"&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},v!=="oninput"&&(h.oninput=l=>l&&l.stopPropagation()&&l.preventDefault()),v!=="onsubmit"&&(n.onsubmit=l=>l&&l.preventDefault()),n[v]()}for(;n.childNodes.length;)h.appendChild(n.childNodes[0]);return n.append(h),n})}function Mt(e){return e("d3-geo@1")}function Gt(e){return e("d3-format@1")}function At(e){return e("topojson-client@3")}async function Ct(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function St(e,t){return e.feature(t,t.objects.land)}function $t(e,t){return e.feature(t,t.objects.countries)}async function Pt(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function Et(e,t){return e.feature(t,t.objects.nation)}function Tt(e,t){return e.feature(t,t.objects.states)}function qt(e){return e.geoGraticule10()}function Nt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function zt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function Ot(e,t){const i=e.module();return i.variable(t()).define(["md"],G),i.variable(t("sliderDemo")).define("sliderDemo",["md"],A),i.variable(t("viewof a")).define("viewof a",["slider"],C),i.variable(t("a")).define("a",["Generators","viewof a"],(a,n)=>a.input(n)),i.variable(t("viewof a1")).define("viewof a1",["slider"],S),i.variable(t("a1")).define("a1",["Generators","viewof a1"],(a,n)=>a.input(n)),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],$),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,n)=>a.input(n)),i.variable(t("viewof a2")).define("viewof a2",["slider"],P),i.variable(t("a2")).define("a2",["Generators","viewof a2"],(a,n)=>a.input(n)),i.variable(t("viewof a3")).define("viewof a3",["slider"],E),i.variable(t("a3")).define("a3",["Generators","viewof a3"],(a,n)=>a.input(n)),i.variable(t("viewof a4")).define("viewof a4",["slider"],T),i.variable(t("a4")).define("a4",["Generators","viewof a4"],(a,n)=>a.input(n)),i.variable(t("viewof a5")).define("viewof a5",["slider"],q),i.variable(t("a5")).define("a5",["Generators","viewof a5"],(a,n)=>a.input(n)),i.variable(t()).define(["md"],N),i.variable(t("slider")).define("slider",["input"],z),i.variable(t("buttonDemo")).define("buttonDemo",["md"],O),i.variable(t("viewof b")).define("viewof b",["button"],L),i.variable(t("b")).define("b",["Generators","viewof b"],(a,n)=>a.input(n)),i.variable(t()).define(["b"],I),i.variable(t("viewof b1")).define("viewof b1",["button"],B),i.variable(t("b1")).define("b1",["Generators","viewof b1"],(a,n)=>a.input(n)),i.variable(t()).define(["b1"],F),i.variable(t("button")).define("button",["input"],U),i.variable(t("selectDemo")).define("selectDemo",["md"],V),i.variable(t("viewof dd")).define("viewof dd",["select"],W),i.variable(t("dd")).define("dd",["Generators","viewof dd"],(a,n)=>a.input(n)),i.variable(t()).define(["dd"],R),i.variable(t("viewof dd1")).define("viewof dd1",["select"],Y),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(a,n)=>a.input(n)),i.variable(t()).define(["dd1"],H),i.variable(t("viewof dd2")).define("viewof dd2",["select"],K),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(a,n)=>a.input(n)),i.variable(t()).define(["dd2"],X),i.variable(t("viewof dd3")).define("viewof dd3",["select"],Z),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(a,n)=>a.input(n)),i.variable(t()).define(["dd3"],J),i.variable(t("select")).define("select",["input","html"],Q),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],ee),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],te),i.variable(t("as")).define("as",["Generators","viewof as"],(a,n)=>a.input(n)),i.variable(t()).define(["as"],ie),i.variable(t("autoSelect")).define("autoSelect",["input","html"],ne),i.variable(t("colorDemo")).define("colorDemo",["md"],ae),i.variable(t("viewof c")).define("viewof c",["color"],oe),i.variable(t("c")).define("c",["Generators","viewof c"],(a,n)=>a.input(n)),i.variable(t("viewof c1")).define("viewof c1",["color"],re),i.variable(t("c1")).define("c1",["Generators","viewof c1"],(a,n)=>a.input(n)),i.variable(t("color")).define("color",["input"],le),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],ue),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],se),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(a,n)=>a.input(n)),i.variable(t()).define(["coords1"],de),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ce),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(a,n)=>a.input(n)),i.variable(t()).define(["coords2"],fe),i.variable(t("coordinates")).define("coordinates",["html","input"],pe),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],me),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],_e),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,n)=>a.input(n)),i.variable(t()).define(["worldMap1"],he),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],ve),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],we),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],be),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,n)=>a.input(n)),i.variable(t()).define(["usaMap1"],ge),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],ye),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,n)=>a.input(n)),i.variable(t()).define(["usaMap2"],ke),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],xe),i.variable(t("dateDemo")).define("dateDemo",["md"],je),i.variable(t("viewof d")).define("viewof d",["date"],De),i.variable(t("d")).define("d",["Generators","viewof d"],(a,n)=>a.input(n)),i.variable(t("viewof d1")).define("viewof d1",["date"],Me),i.variable(t("d1")).define("d1",["Generators","viewof d1"],(a,n)=>a.input(n)),i.variable(t("date")).define("date",["input"],Ge),i.variable(t("timeDemo")).define("timeDemo",["md"],Ae),i.variable(t("viewof t")).define("viewof t",["time"],Ce),i.variable(t("t")).define("t",["Generators","viewof t"],(a,n)=>a.input(n)),i.variable(t()).define(["t"],Se),i.variable(t("viewof t1")).define("viewof t1",["time"],$e),i.variable(t("t1")).define("t1",["Generators","viewof t1"],(a,n)=>a.input(n)),i.variable(t()).define(["t1"],Pe),i.variable(t("time")).define("time",["input"],Ee),i.variable(t("fileDemo")).define("fileDemo",["md"],Te),i.variable(t("viewof e")).define("viewof e",["file"],qe),i.variable(t("e")).define("e",["Generators","viewof e"],(a,n)=>a.input(n)),i.variable(t("viewof e1")).define("viewof e1",["file"],Ne),i.variable(t("e1")).define("e1",["Generators","viewof e1"],(a,n)=>a.input(n)),i.variable(t()).define(["html","e1","Files"],ze),i.variable(t("file")).define("file",["input"],Oe),i.variable(t("textDemo")).define("textDemo",["md"],Le),i.variable(t("viewof f")).define("viewof f",["text"],Ie),i.variable(t("f")).define("f",["Generators","viewof f"],(a,n)=>a.input(n)),i.variable(t("viewof f1")).define("viewof f1",["text"],Be),i.variable(t("f1")).define("f1",["Generators","viewof f1"],(a,n)=>a.input(n)),i.variable(t()).define(["f1"],Fe),i.variable(t("viewof f2")).define("viewof f2",["text"],Ue),i.variable(t("f2")).define("f2",["Generators","viewof f2"],(a,n)=>a.input(n)),i.variable(t()).define(["f2"],Ve),i.variable(t("text")).define("text",["input"],We),i.variable(t("textareaDemo")).define("textareaDemo",["md"],Re),i.variable(t("viewof g")).define("viewof g",["textarea"],Ye),i.variable(t("g")).define("g",["Generators","viewof g"],(a,n)=>a.input(n)),i.variable(t()).define(["g"],He),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Ke),i.variable(t("g1")).define("g1",["Generators","viewof g1"],(a,n)=>a.input(n)),i.variable(t()).define(["g1"],Xe),i.variable(t("textarea")).define("textarea",["input","html"],Ze),i.variable(t("radioDemo")).define("radioDemo",["md"],Je),i.variable(t("viewof r")).define("viewof r",["radio"],Qe),i.variable(t("r")).define("r",["Generators","viewof r"],(a,n)=>a.input(n)),i.variable(t()).define(["r"],et),i.variable(t("viewof r1")).define("viewof r1",["radio"],tt),i.variable(t("r1")).define("r1",["Generators","viewof r1"],(a,n)=>a.input(n)),i.variable(t()).define(["r1"],it),i.variable(t("radio")).define("radio",["input","html"],nt),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],at),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],ot),i.variable(t("ch")).define("ch",["Generators","viewof ch"],(a,n)=>a.input(n)),i.variable(t()).define(["ch"],rt),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],lt),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(a,n)=>a.input(n)),i.variable(t()).define(["ch1"],ut),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],st),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(a,n)=>a.input(n)),i.variable(t()).define(["ch3"],dt),i.variable(t("checkbox")).define("checkbox",["input","html"],ct),i.variable(t("numberDemo")).define("numberDemo",["md"],ft),i.variable(t("viewof h")).define("viewof h",["number"],pt),i.variable(t("h")).define("h",["Generators","viewof h"],(a,n)=>a.input(n)),i.variable(t()).define(["h"],mt),i.variable(t("viewof h1")).define("viewof h1",["number"],_t),i.variable(t("h1")).define("h1",["Generators","viewof h1"],(a,n)=>a.input(n)),i.variable(t()).define(["h1"],ht),i.variable(t("number")).define("number",["input"],vt),i.variable(t("passwordDemo")).define("passwordDemo",["md"],wt),i.variable(t("viewof i")).define("viewof i",["password"],bt),i.variable(t("i")).define("i",["Generators","viewof i"],(a,n)=>a.input(n)),i.variable(t()).define(["i"],gt),i.variable(t("viewof i1")).define("viewof i1",["password"],yt),i.variable(t("i1")).define("i1",["Generators","viewof i1"],(a,n)=>a.input(n)),i.variable(t()).define(["i1"],kt),i.variable(t("password")).define("password",["input"],xt),i.variable(t()).define(["md"],jt),i.variable(t("input")).define("input",["html","d3format"],Dt),i.variable(t("d3geo")).define("d3geo",["require"],Mt),i.variable(t("d3format")).define("d3format",["require"],Gt),i.variable(t("topojson")).define("topojson",["require"],At),i.variable(t("world")).define("world",Ct),i.variable(t("land")).define("land",["topojson","world"],St),i.variable(t("countries")).define("countries",["topojson","world"],$t),i.variable(t("usa")).define("usa",Pt),i.variable(t("nation")).define("nation",["topojson","usa"],Et),i.variable(t("states")).define("states",["topojson","usa"],Tt),i.variable(t("graticule")).define("graticule",["d3geo"],qt),i.variable(t("viewof license")).define("viewof license",["md"],Nt),i.variable(t("license")).define("license",["Generators","viewof license"],(a,n)=>a.input(n)),i.variable(t()).define(["md"],zt),i}function Lt(e){return e`# Energy usage and goods imports and exports`}function It(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/country_energy_usage/).*`}function Bt(e,t,i,a,n){return e`The following charts show energy usage per head of the population for different countries, converted into kilowatt hours per day to be consistent with my other notebooks.

The data is queried directly from the [World Bank indicators API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation).

The two metrics of total energy usage which are available are:
- ${t.GBR.indicator.value}
- ${i.GBR.indicator.value}

### [${t.GBR.indicator.value}](https://datacatalog.worldbank.org/energy-use-kg-oil-equivalent-capita-1)

${a[1][0].sourceNote}


### [${i.GBR.indicator.value}](https://datacatalog.worldbank.org/total-final-energy-consumption-tfec)

${n[1][0].sourceNote}


Note that neither definition accounts for the energy embodied in imported goods.  So if a country uses energy to manufacture goods, and then exports those good, this energy is counted in the exporting country's energy usage, not that of the importing country.


`}function Ft(){return{final_energy_consumption_per_capita_kwh:{label:"Final energy consumption, kwh per capita per day ",value:"final_energy_consumption_per_capita_kwh"},primary_energy_per_capita_kwh:{label:"Primary energy consumption, kwh per capita per day",value:"primary_energy_per_capita_kwh"}}}function Ut(e,t){return e({title:"Select metric to plot",options:Object.values(t),value:"final_energy_consumption_per_capita_kwh"})}function Vt(e){return e/1.8}function Wt(e,t,i,a,n,s,p){return e({$schema:"https://vega.github.io/schema/vega-lite/v4.json",title:`${t[i].label}`,width:a,height:n,autosize:"fit",config:{view:{stroke:"transparent"}},data:{values:s,format:{type:"topojson",feature:"countries"}},transform:[{lookup:"id",from:{data:{values:p},key:"country_id",fields:["final_energy_consumption_per_capita_kwh","primary_energy_per_capita_kwh","country_name"]}}],projection:{type:"naturalEarth1",scale:a/4.5,center:[10,10],translate:[a/2,n/2]},mark:{type:"geoshape",stroke:"#757575",strokeWidth:.5},encoding:{color:{field:i,type:"quantitative",legend:null},tooltip:[{field:"primary_energy_per_capita_kwh",type:"quantitative",format:",.1f"},{field:"final_energy_consumption_per_capita_kwh",type:"quantitative",format:",.1f"},{field:"country_name",type:"nominal"}]}})}function Rt(e,t,i,a,n){return e({data:{values:t},transform:[{filter:{field:"population",gt:"20e6"}},{filter:{field:i,gt:0}}],width:a,height:1e3,autosize:"fit",mark:"bar",encoding:{y:{field:"country_name",type:"nominal",sort:{field:i,op:"mean",order:"descending"}},x:{field:i,type:"quantitative"},tooltip:[{field:"primary_energy_per_capita_kwh",type:"quantitative",format:",.1f"},{field:"final_energy_consumption_per_capita_kwh",type:"quantitative",format:",.1f"},{field:"country_name",type:"nominal"}]},title:`${n[i].label} for countries with population > 20 million`})}function Yt(e){return e`<style>
.vega-embed-wrapper {overflow: hidden}

#vg-tooltip-element table  td {
    white-space: nowrap;
    font-size: 0.8rem;
    border-bottom: 0px;
}

#vg-tooltip-element table tr td.key {
    max-width:500px;
}

#vg-tooltip-element table   {
    margin-bottom: 0rem;
    line-height: 1rem;
    border-collapse: unset;
}

`}function Ht(e){return e`## Comparison to SEWHA

[Sustainable Energy Without the Hot Air](http://www.inference.org.uk/sustainable/book/tex/sewtha.pdf) contains charts of energy consumption of different countries.  See pages 231 and 105.  See page 381 for the conversion of barrels of oil to kwh.

This data is sourced from [UNDP Human Development Report, 2007](http://hdr.undp.org/sites/default/files/reports/268/hdr_20072008_en_complete.pdf), see table 23 page  306.  It is based on [Total primary
energy supply](https://en.wikipedia.org/wiki/Primary_energy)`}function Kt(e){return e`## Combine data`}function Xt(){return(function(t){return t[1].reduce((i,a)=>{let n="";debugger;return a.country.id.length==3&&(n=a.country.id),a.countryiso3code!=""&&(n=a.countryiso3code),n!=""&&(i[n]=a),i},{})})}function Zt(e,t){return e(t)}function Jt(e,t){return e(t)}function Qt(e,t){return e(t)}function ei(e,t){return e(t)}function ti(e){return e[1].reduce((t,i)=>(i.id!=""&&(t[i.id]=i),t),{})}function ii(e){return e[1].reduce((t,i)=>(i.id!=""&&(t[i.iso2Code]=i),t),{})}function ni(e){return e.reduce((t,i)=>(i.code!=""&&(t[i.code]=i),t),{})}function ai(){return(function(t){return t==null?null:t*11.63/365})}function oi(){return(function(t,i){return t==null||i==null||i==0?null:t*1e12/(i*36e5)/365.25})}function ri(){return(function(t,i,a="value",n=!0){if(i in t){let s=t[i];if(a in s){let p=s[a];return n?+p:p}else{debugger;return null}}else{debugger;return null}})}function li(e,t,i,a,n,s,p,f){return Object.keys(e).map(function(m){let o={},r="";if(m in t)r=t[m].id;else debugger;o.iso2code=m,o.country_name=e[m].name,o.country_id=e[m].id,o.primary_energy_per_capita_kg_oil_eq=i(a,r),o.total_final_energy_consumption_tj=i(n,r),o.population=i(s,r);let u=o.primary_energy_per_capita_kg_oil_eq;o.primary_energy_per_capita_kwh=p(u);let _=o.population,c=o.total_final_energy_consumption_tj;return o.final_energy_consumption_per_capita_kwh=f(c,_),o})}function ui(e){return e.reduce((t,i)=>(i.country_id!=""&&(t[i.country_id]=i),t),{})}function si(e){return e`## Get data from the API`}function di(e){return e.json("https://api.worldbank.org/v2/country?format=json&per_page=1000")}function ci(e){return e.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/1.1_TOTAL.FINAL.ENERGY.CONSUM?date=2014%3A2014%26format=json%26per_page=1000")}function fi(e){return e.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/TX.VAL.MRCH.CD.WT?date=2014%3A2014%26format=json%26per_page=1000")}function pi(e){return e.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/EG.USE.PCAP.KG.OE?date=2014%3A2014%26format=json%26per_page=1000")}function mi(e){return e.json("https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=https://api.worldbank.org/countries/all/indicators/SP.POP.TOTL?date=2014%3A2014%26format=json%26per_page=1000")}function _i(e){return e.json("https://raw.githubusercontent.com/alisle/world-110m-country-codes/master/world-110m-country-codes.json")}function hi(e){return e.json("https://api.worldbank.org/v2/indicator/1.1_TOTAL.FINAL.ENERGY.CONSUM?format=json")}function vi(e){return e.json("https://api.worldbank.org/v2/indicator/EG.USE.PCAP.KG.OE?format=json")}function wi(e){return e`## Geodata`}function bi(e){return e.json("https://vega.github.io/vega-datasets/data/world-110m.json")}function gi(e){return e`## External libraries`}function yi(e){return e("d3@5")}function ki(e){return e("vega-embed")}function xi(e){return e("@observablehq/vega-lite@0.2")}function ji(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],Lt),i.variable(t()).define(["md"],It),i.variable(t("intro")).define("intro",["md","pepc_dict","tfec_dict","pepc_def","tfec_def"],Bt),i.variable(t("metric_label_lookup")).define("metric_label_lookup",Ft),i.variable(t("viewof metric")).define("viewof metric",["select","metric_label_lookup"],Ut),i.variable(t("metric")).define("metric",["Generators","viewof metric"],(n,s)=>n.input(s)),i.variable(t("height")).define("height",["width"],Vt),i.variable(t("country_map")).define("country_map",["vega_embed","metric_label_lookup","metric","width","height","world","table_data_to_plot"],Wt),i.variable(t("bar_chart")).define("bar_chart",["vega_embed","table_data_to_plot","metric","width","metric_label_lookup"],Rt),i.variable(t("styles")).define("styles",["html"],Yt),i.variable(t("sewha_comparison")).define("sewha_comparison",["md"],Ht),i.variable(t()).define(["md"],Kt),i.variable(t("api_results_to_country_lookup_dict")).define("api_results_to_country_lookup_dict",Xt),i.variable(t("pepc_dict")).define("pepc_dict",["api_results_to_country_lookup_dict","primary_energy_use_pc_raw"],Zt),i.variable(t("tfec_dict")).define("tfec_dict",["api_results_to_country_lookup_dict","total_final_energy_consumption_raw"],Jt),i.variable(t("exp_dict")).define("exp_dict",["api_results_to_country_lookup_dict","merchandice_exports_raw"],Qt),i.variable(t("population_dict")).define("population_dict",["api_results_to_country_lookup_dict","population_raw"],ei),i.variable(t("countries_dict")).define("countries_dict",["countries_raw"],ti),i.variable(t("countries_dict_iso2")).define("countries_dict_iso2",["countries_raw"],ii),i.variable(t("countries_to_id_dict")).define("countries_to_id_dict",["id_to_country_raw"],ni),i.variable(t("convert_kg_oil_eq_to_kwh")).define("convert_kg_oil_eq_to_kwh",ai),i.variable(t("convert_tfec_to_kwh_per_capita")).define("convert_tfec_to_kwh_per_capita",oi),i.variable(t("get_value_if_exists")).define("get_value_if_exists",ri),i.variable(t("table_data_to_plot")).define("table_data_to_plot",["countries_to_id_dict","countries_dict_iso2","get_value_if_exists","pepc_dict","tfec_dict","population_dict","convert_kg_oil_eq_to_kwh","convert_tfec_to_kwh_per_capita"],li),i.variable(t("final_data_lookup")).define("final_data_lookup",["table_data_to_plot"],ui),i.variable(t()).define(["md"],si),i.variable(t("countries_raw")).define("countries_raw",["d3"],di),i.variable(t("total_final_energy_consumption_raw")).define("total_final_energy_consumption_raw",["d3"],ci),i.variable(t("merchandice_exports_raw")).define("merchandice_exports_raw",["d3"],fi),i.variable(t("primary_energy_use_pc_raw")).define("primary_energy_use_pc_raw",["d3"],pi),i.variable(t("population_raw")).define("population_raw",["d3"],mi),i.variable(t("id_to_country_raw")).define("id_to_country_raw",["d3"],_i),i.variable(t("tfec_def")).define("tfec_def",["d3"],hi),i.variable(t("pepc_def")).define("pepc_def",["d3"],vi),i.variable(t()).define(["md"],wi),i.variable(t("world")).define("world",["d3"],bi),i.variable(t()).define(["md"],gi),i.variable(t("d3")).define("d3",["require"],yi),i.variable(t("vega_embed")).define("vega_embed",["require"],ki),i.variable(t("vegalite")).define("vegalite",["require"],xi);const a=e.module(Ot);return i.import("select",a),i}export{ji as default};
