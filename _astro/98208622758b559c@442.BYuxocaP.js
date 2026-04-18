function j(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function C(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function A(e){return e()}function G(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function S(e){return e({min:0,max:1,step:.01,format:t=>`${Math.round(100*t)} per cent`,description:"Zero to one, formatted with a custom function"})}function P(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function q(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function E(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function I(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function T(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function N(e){return(function(n={}){let{min:a=0,max:i=1,value:r=(i+a)/2,step:d="any",precision:l=2,title:f,description:p,getValue:o,format:s,display:u,submit:m}=typeof n=="number"?{value:n}:n;return l=Math.pow(10,l),o||(o=_=>Math.round(_.valueAsNumber*l)/l),e({type:"range",title:f,description:p,submit:m,format:s,display:u,attributes:{min:a,max:i,step:d,value:r},getValue:o})})}function R(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function z(e){return e()}function L(e){return!this}function B(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function O(e){return new Date(Date.now()).toUTCString()}function U(e){return(function(n={}){const{value:a="Ok",title:i,description:r,disabled:d}=typeof n=="string"?{value:n}:n,l=e({type:"button",title:i,description:r,attributes:{disabled:d,value:a}});return l.output.remove(),l})}function V(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function F(e){return e(["Spring","Summer","Fall","Winter"])}function Y(e){return e}function W(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function H(e){return e}function K(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function Q(e){return e}function Z(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function J(e){return e}function X(e,t){return(function(a={}){let{value:i,title:r,description:d,submit:l,multiple:f,size:p,options:o}=Array.isArray(a)?{options:a}:a;o=o.map(u=>typeof u=="object"?u:{value:u,label:u});const s=e({type:"select",title:r,description:d,submit:l,getValue:u=>{const m=Array.prototype.filter.call(u.options,_=>_.selected).map(_=>_.value);return f?m:m[0]},form:t`
      <form>
        <select name="input" ${f?`multiple size="${p||o.length}"`:""}>
          ${o.map(({value:u,label:m})=>Object.assign(t`<option>`,{value:u,selected:Array.isArray(i)?i.includes(u):i===u,textContent:m}))}
        </select>
      </form>
    `});return s.output.remove(),s})}function ee(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function te(e,t){return e({options:t.objects.states.geometries.map(n=>n.properties.name),placeholder:"Search for a US state . . ."})}function ne(e){return e}function ie(e,t){return(function(a={}){const{value:i,title:r,description:d,autocomplete:l="off",placeholder:f,size:p,options:o,list:s="options"}=Array.isArray(a)?{options:a}:a,u=new Set(o),m=e({type:"text",title:r,description:d,action:_=>{_.value=_.input.value=i||"",_.onsubmit=h=>h.preventDefault(),_.input.oninput=function(h){h.stopPropagation(),_.value=_.input.value,u.has(_.input.value)&&_.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${f}" style="font-size: 1em;" list=${s}>
          <datalist id="${s}">
              ${o.map(_=>Object.assign(t`<option>`,{value:_}))}
          </datalist>
      </form>
      `});return m.output.remove(),m})}function ae(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function oe(e){return e()}function re(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function le(e){return(function(n={}){const{value:a="#000000",title:i,description:r,submit:d,display:l}=typeof n=="string"?{value:n}:n,f=e({type:"color",title:i,description:r,submit:d,display:l,attributes:{value:a}});return(i||r)&&(f.input.style.margin="5px 0"),f})}function ue(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function se(e){return e()}function de(e){return e}function fe(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function ce(e){return e}function pe(e,t){return(function(a={}){const{value:i=[],title:r,description:d,submit:l}=Array.isArray(a)?{value:a}:a;let[f,p]=i;f=f??"",p=p??"";const o=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${f}" />`,s=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${p}" />`,u=t({type:"coordinates",title:r,description:d,submit:l,getValue:()=>{const m=o.valueAsNumber,_=s.valueAsNumber;return[isNaN(m)?null:m,isNaN(_)?null:_]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${o}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${s}
        </label>
      </form>
    `});return u.output.remove(),u})}function me(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function _e(e){return e([-122.27,37.87])}function he(e){return e}function ve(e,t,n,a,i,r,d){return(function(f={}){const{value:p=[],title:o,description:s,width:u=400}=Array.isArray(f)?{value:f}:f,m=Math.round(210/400*u);let[_,h]=p;_=_??null,h=h??null;const v=e`<form style="width: ${u}px;"></form>`,c=t.context2d(u,m),b=c.canvas;b.style.margin="10px 0 0";const g=n.geoNaturalEarth1().precision(.1).fitSize([u,m],{type:"Sphere"}),w=n.geoPath(g,c).pointRadius(2.5);v.append(b);function x(){if(c.fillStyle="#fff",c.fillRect(0,0,u,m),c.beginPath(),w(a),c.lineWidth=.35,c.strokeStyle="#ddd",c.stroke(),c.beginPath(),w(i),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),w(r),c.strokeStyle="#aaa",c.stroke(),_!=null&&h!=null){const y={type:"MultiPoint",coordinates:[[_,h]]};c.beginPath(),w(y),c.fillStyle="#f00",c.fill()}}return b.onclick=function(y){const{offsetX:$,offsetY:M}=y;var k=g.invert([$,M]);_=+k[0].toFixed(2),h=+k[1].toFixed(2),x(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),d({type:"worldMapCoordinates",title:o,description:s,display:y=>e`<div style="position: absolute; width: ${u}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${_??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[_??null,h??null],form:v})})}function be(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function ge(e){return e([-122.27,37.87])}function ye(e){return e}function we(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function xe(e){return e}function ke(e,t,n,a,i,r){return(function(l={}){const{value:f=[],title:p,description:o,width:s=400}=Array.isArray(l)?{value:l}:l,u=s/960,m=u*600;let[_,h]=f;_=_??null,h=h??null;const v=e`<form style="width: ${s}px;"></form>`,c=t.context2d(s,m),b=c.canvas;b.style.margin="5px 0 0";const g=n.geoAlbersUsa().scale(1280).translate([480,300]),w=n.geoPath().context(c).pointRadius(2.5/u);v.append(b);function x(){if(c.clearRect(0,0,s,m),c.save(),c.scale(u,u),c.lineWidth=.35/u,c.beginPath(),w(a),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),w(i),c.strokeStyle="#aaa",c.stroke(),_!=null&&h!=null){const y={type:"MultiPoint",coordinates:[g([_,h])]};c.beginPath(),w(y),c.fillStyle="#f00",c.fill()}c.restore()}return b.onclick=function(y){const{offsetX:$,offsetY:M}=y;var k=g.invert([$/u,M/u]);_=+k[0].toFixed(2),h=+k[1].toFixed(2),x(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),r({type:"worldMapCoordinates",title:p,description:o,display:y=>e`<div style="position: absolute; width: ${s}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${_??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[_??null,h??null],form:v})})}function $e(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function Me(e){return e()}function De(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function je(e){return(function(n={}){const{min:a,max:i,value:r,title:d,description:l,display:f}=typeof n=="string"?{value:n}:n;return e({type:"date",title:d,description:l,display:f,attributes:{min:a,max:i,value:r}})})}function Ce(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function Ae(e){return e()}function Ge(e){return e}function Se(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function Pe(e){return e}function qe(e){return(function(n={}){const{min:a,max:i,step:r,value:d,title:l,description:f,display:p}=typeof n=="string"?{value:n}:n,o=e({type:"time",title:l,description:f,display:p,getValue:s=>s.value?s.value:void 0,attributes:{min:a,max:i,step:r,value:d}});return o.output.remove(),o})}function Ee(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function Ie(e){return e()}function Te(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function Ne(e,t,n){const a=e`<div>`;for(var i=0;i<t.length;i++){t[i];let r=e`<img height="125px" style="margin: 2px;" />`;r.src=await n.url(t[i]),a.append(r)}return a}function Re(e){return(function(n={}){const{multiple:a,accept:i,title:r,description:d}=n,l=e({type:"file",title:r,description:d,attributes:{multiple:a,accept:i},action:f=>{f.input.onchange=()=>{f.value=a?f.input.files:f.input.files[0],f.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l})}function ze(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function Le(e){return e()}function Be(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function Oe(e){return e}function Ue(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function Ve(e){return e}function Fe(e){return(function(n={}){const{value:a,title:i,description:r,autocomplete:d="off",maxlength:l,minlength:f,pattern:p,placeholder:o,size:s,submit:u}=typeof n=="string"?{value:n}:n,m=e({type:"text",title:i,description:r,submit:u,attributes:{value:a,autocomplete:d,maxlength:l,minlength:f,pattern:p,placeholder:o,size:s}});return m.output.remove(),m.input.style.fontSize="1em",m})}function Ye(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function We(e){return e()}function He(e){return e}function Ke(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Qe(e){return e}function Ze(e,t){return(function(a={}){const{value:i="",title:r,description:d,autocomplete:l,cols:f=45,rows:p=3,width:o,height:s,maxlength:u,placeholder:m,spellcheck:_,wrap:h,submit:v}=typeof a=="string"?{value:a}:a,c=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${i}</textarea></form>`,title:r,description:d,submit:v,attributes:{autocomplete:l,cols:f,rows:p,maxlength:u,placeholder:m,spellcheck:_,wrap:h}});return c.output.remove(),o!=null&&(c.input.style.width=o),s!=null&&(c.input.style.height=s),v&&(c.submit.style.margin="0"),(r||d)&&(c.input.style.margin="3px 0"),c})}function Je(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Xe(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function et(e){return e}function tt(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function nt(e){return e}function it(e,t){return(function(a={}){let{value:i,title:r,description:d,submit:l,options:f}=Array.isArray(a)?{options:a}:a;f=f.map(o=>typeof o=="string"?{value:o,label:o}:o);const p=e({type:"radio",title:r,description:d,submit:l,getValue:o=>{if(o.checked)return o.value;const s=Array.prototype.find.call(o,u=>u.checked);return s?s.value:void 0},form:t`
      <form>
        ${f.map(({value:o,label:s})=>{const u=t`<input type=radio name=input ${o===i?"checked":""} style="vertical-align: baseline;" />`;return u.setAttribute("value",o),t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${u}
           ${s}
          </label>`})}
      </form>
    `});return p.output.remove(),p})}function at(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function ot(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function rt(e){return e}function lt(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function ut(e){return e}function st(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function dt(e){return e}function ft(e,t){return(function(a={}){let{value:i,title:r,description:d,submit:l,options:f}=Array.isArray(a)?{options:a}:a;f=f.map(o=>typeof o=="string"?{value:o,label:o}:o);const p=e({type:"checkbox",title:r,description:d,submit:l,getValue:o=>o.length?Array.prototype.filter.call(o,s=>s.checked).map(s=>s.value):o.checked?o.value:!1,form:t`
      <form>
        ${f.map(({value:o,label:s})=>{const u=t`<input type=checkbox name=input ${(i||[]).indexOf(o)>-1?"checked":""} style="vertical-align: baseline;" />`;return u.setAttribute("value",o),t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${u}
           ${s}
          </label>`})}
      </form>
    `});return p.output.remove(),p})}function ct(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function pt(e){return e()}function mt(e){return e}function _t(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function ht(e){return e}function vt(e){return(function(n={}){const{value:a,title:i,description:r,placeholder:d,submit:l,step:f="any",min:p,max:o}=typeof n=="number"||typeof n=="string"?{value:+n}:n,s=e({type:"number",title:i,description:r,submit:l,attributes:{value:a,placeholder:d,step:f,min:p,max:o,autocomplete:"off"},getValue:u=>u.valueAsNumber});return s.output.remove(),s.input.style.width="auto",s.input.style.fontSize="1em",s})}function bt(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function gt(e){return e({value:"password"})}function yt(e){return e}function wt(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function xt(e){return e}function kt(e){return(function(n={}){const{value:a,title:i,description:r,autocomplete:d="off",maxlength:l,minlength:f,pattern:p,placeholder:o,size:s,submit:u}=typeof n=="string"?{value:n}:n,m=e({type:"password",title:i,description:r,submit:u,attributes:{value:a,autocomplete:d,maxlength:l,minlength:f,pattern:p,placeholder:o,size:s}});return m.output.remove(),m.input.style.fontSize="1em",m})}function $t(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function Mt(e,t){return(function(a){let{form:i,type:r="text",attributes:d={},action:l,getValue:f,title:p,description:o,format:s,display:u,submit:m,options:_}=a;const h=e`<div></div>`;if(i||(i=e`<form>
	<input name=input type=${r} />
  </form>`),Object.keys(d).forEach(v=>{const c=d[v];c!=null&&i.input.setAttribute(v,c)}),m&&i.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof m=="string"?m:"Submit"}" />`),i.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),p&&i.prepend(e`<div style="font: 700 0.9rem sans-serif;">${p}</div>`),o&&i.append(e`<div style="font-size: 0.85rem; font-style: italic;">${o}</div>`),s&&(s=typeof s=="function"?s:t.format(s)),l)l(i);else{const v=m?"onsubmit":r=="button"?"onclick":r=="checkbox"||r=="radio"?"onchange":"oninput";i[v]=c=>{c&&c.preventDefault();const b=f?f(i.input):i.input.value;if(i.output){const g=u?u(b):s?s(b):b;if(g instanceof window.Element){for(;i.output.hasChildNodes();)i.output.removeChild(i.output.lastChild);i.output.append(g)}else i.output.value=g}i.value=b,v!=="oninput"&&i.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},v!=="oninput"&&(h.oninput=c=>c&&c.stopPropagation()&&c.preventDefault()),v!=="onsubmit"&&(i.onsubmit=c=>c&&c.preventDefault()),i[v]()}for(;i.childNodes.length;)h.appendChild(i.childNodes[0]);return i.append(h),i})}function Dt(e){return e("d3-geo@1")}function jt(e){return e("d3-format@1")}function Ct(e){return e("topojson-client@3")}async function At(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function Gt(e,t){return e.feature(t,t.objects.land)}function St(e,t){return e.feature(t,t.objects.countries)}async function Pt(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function qt(e,t){return e.feature(t,t.objects.nation)}function Et(e,t){return e.feature(t,t.objects.states)}function It(e){return e.geoGraticule10()}function Tt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function Nt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function Rt(e,t){const n=e.module();return n.variable(t()).define(["md"],j),n.variable(t("sliderDemo")).define("sliderDemo",["md"],C),n.variable(t("viewof a")).define("viewof a",["slider"],A),n.variable(t("a")).define("a",["Generators","viewof a"],(a,i)=>a.input(i)),n.variable(t("viewof a1")).define("viewof a1",["slider"],G),n.variable(t("a1")).define("a1",["Generators","viewof a1"],(a,i)=>a.input(i)),n.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],S),n.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,i)=>a.input(i)),n.variable(t("viewof a2")).define("viewof a2",["slider"],P),n.variable(t("a2")).define("a2",["Generators","viewof a2"],(a,i)=>a.input(i)),n.variable(t("viewof a3")).define("viewof a3",["slider"],q),n.variable(t("a3")).define("a3",["Generators","viewof a3"],(a,i)=>a.input(i)),n.variable(t("viewof a4")).define("viewof a4",["slider"],E),n.variable(t("a4")).define("a4",["Generators","viewof a4"],(a,i)=>a.input(i)),n.variable(t("viewof a5")).define("viewof a5",["slider"],I),n.variable(t("a5")).define("a5",["Generators","viewof a5"],(a,i)=>a.input(i)),n.variable(t()).define(["md"],T),n.variable(t("slider")).define("slider",["input"],N),n.variable(t("buttonDemo")).define("buttonDemo",["md"],R),n.variable(t("viewof b")).define("viewof b",["button"],z),n.variable(t("b")).define("b",["Generators","viewof b"],(a,i)=>a.input(i)),n.variable(t()).define(["b"],L),n.variable(t("viewof b1")).define("viewof b1",["button"],B),n.variable(t("b1")).define("b1",["Generators","viewof b1"],(a,i)=>a.input(i)),n.variable(t()).define(["b1"],O),n.variable(t("button")).define("button",["input"],U),n.variable(t("selectDemo")).define("selectDemo",["md"],V),n.variable(t("viewof dd")).define("viewof dd",["select"],F),n.variable(t("dd")).define("dd",["Generators","viewof dd"],(a,i)=>a.input(i)),n.variable(t()).define(["dd"],Y),n.variable(t("viewof dd1")).define("viewof dd1",["select"],W),n.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(a,i)=>a.input(i)),n.variable(t()).define(["dd1"],H),n.variable(t("viewof dd2")).define("viewof dd2",["select"],K),n.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(a,i)=>a.input(i)),n.variable(t()).define(["dd2"],Q),n.variable(t("viewof dd3")).define("viewof dd3",["select"],Z),n.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(a,i)=>a.input(i)),n.variable(t()).define(["dd3"],J),n.variable(t("select")).define("select",["input","html"],X),n.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],ee),n.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],te),n.variable(t("as")).define("as",["Generators","viewof as"],(a,i)=>a.input(i)),n.variable(t()).define(["as"],ne),n.variable(t("autoSelect")).define("autoSelect",["input","html"],ie),n.variable(t("colorDemo")).define("colorDemo",["md"],ae),n.variable(t("viewof c")).define("viewof c",["color"],oe),n.variable(t("c")).define("c",["Generators","viewof c"],(a,i)=>a.input(i)),n.variable(t("viewof c1")).define("viewof c1",["color"],re),n.variable(t("c1")).define("c1",["Generators","viewof c1"],(a,i)=>a.input(i)),n.variable(t("color")).define("color",["input"],le),n.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],ue),n.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],se),n.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(a,i)=>a.input(i)),n.variable(t()).define(["coords1"],de),n.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],fe),n.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(a,i)=>a.input(i)),n.variable(t()).define(["coords2"],ce),n.variable(t("coordinates")).define("coordinates",["html","input"],pe),n.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],me),n.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],_e),n.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,i)=>a.input(i)),n.variable(t()).define(["worldMap1"],he),n.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],ve),n.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],be),n.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],ge),n.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,i)=>a.input(i)),n.variable(t()).define(["usaMap1"],ye),n.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],we),n.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,i)=>a.input(i)),n.variable(t()).define(["usaMap2"],xe),n.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],ke),n.variable(t("dateDemo")).define("dateDemo",["md"],$e),n.variable(t("viewof d")).define("viewof d",["date"],Me),n.variable(t("d")).define("d",["Generators","viewof d"],(a,i)=>a.input(i)),n.variable(t("viewof d1")).define("viewof d1",["date"],De),n.variable(t("d1")).define("d1",["Generators","viewof d1"],(a,i)=>a.input(i)),n.variable(t("date")).define("date",["input"],je),n.variable(t("timeDemo")).define("timeDemo",["md"],Ce),n.variable(t("viewof t")).define("viewof t",["time"],Ae),n.variable(t("t")).define("t",["Generators","viewof t"],(a,i)=>a.input(i)),n.variable(t()).define(["t"],Ge),n.variable(t("viewof t1")).define("viewof t1",["time"],Se),n.variable(t("t1")).define("t1",["Generators","viewof t1"],(a,i)=>a.input(i)),n.variable(t()).define(["t1"],Pe),n.variable(t("time")).define("time",["input"],qe),n.variable(t("fileDemo")).define("fileDemo",["md"],Ee),n.variable(t("viewof e")).define("viewof e",["file"],Ie),n.variable(t("e")).define("e",["Generators","viewof e"],(a,i)=>a.input(i)),n.variable(t("viewof e1")).define("viewof e1",["file"],Te),n.variable(t("e1")).define("e1",["Generators","viewof e1"],(a,i)=>a.input(i)),n.variable(t()).define(["html","e1","Files"],Ne),n.variable(t("file")).define("file",["input"],Re),n.variable(t("textDemo")).define("textDemo",["md"],ze),n.variable(t("viewof f")).define("viewof f",["text"],Le),n.variable(t("f")).define("f",["Generators","viewof f"],(a,i)=>a.input(i)),n.variable(t("viewof f1")).define("viewof f1",["text"],Be),n.variable(t("f1")).define("f1",["Generators","viewof f1"],(a,i)=>a.input(i)),n.variable(t()).define(["f1"],Oe),n.variable(t("viewof f2")).define("viewof f2",["text"],Ue),n.variable(t("f2")).define("f2",["Generators","viewof f2"],(a,i)=>a.input(i)),n.variable(t()).define(["f2"],Ve),n.variable(t("text")).define("text",["input"],Fe),n.variable(t("textareaDemo")).define("textareaDemo",["md"],Ye),n.variable(t("viewof g")).define("viewof g",["textarea"],We),n.variable(t("g")).define("g",["Generators","viewof g"],(a,i)=>a.input(i)),n.variable(t()).define(["g"],He),n.variable(t("viewof g1")).define("viewof g1",["textarea"],Ke),n.variable(t("g1")).define("g1",["Generators","viewof g1"],(a,i)=>a.input(i)),n.variable(t()).define(["g1"],Qe),n.variable(t("textarea")).define("textarea",["input","html"],Ze),n.variable(t("radioDemo")).define("radioDemo",["md"],Je),n.variable(t("viewof r")).define("viewof r",["radio"],Xe),n.variable(t("r")).define("r",["Generators","viewof r"],(a,i)=>a.input(i)),n.variable(t()).define(["r"],et),n.variable(t("viewof r1")).define("viewof r1",["radio"],tt),n.variable(t("r1")).define("r1",["Generators","viewof r1"],(a,i)=>a.input(i)),n.variable(t()).define(["r1"],nt),n.variable(t("radio")).define("radio",["input","html"],it),n.variable(t("checkboxDemo")).define("checkboxDemo",["md"],at),n.variable(t("viewof ch")).define("viewof ch",["checkbox"],ot),n.variable(t("ch")).define("ch",["Generators","viewof ch"],(a,i)=>a.input(i)),n.variable(t()).define(["ch"],rt),n.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],lt),n.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(a,i)=>a.input(i)),n.variable(t()).define(["ch1"],ut),n.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],st),n.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(a,i)=>a.input(i)),n.variable(t()).define(["ch3"],dt),n.variable(t("checkbox")).define("checkbox",["input","html"],ft),n.variable(t("numberDemo")).define("numberDemo",["md"],ct),n.variable(t("viewof h")).define("viewof h",["number"],pt),n.variable(t("h")).define("h",["Generators","viewof h"],(a,i)=>a.input(i)),n.variable(t()).define(["h"],mt),n.variable(t("viewof h1")).define("viewof h1",["number"],_t),n.variable(t("h1")).define("h1",["Generators","viewof h1"],(a,i)=>a.input(i)),n.variable(t()).define(["h1"],ht),n.variable(t("number")).define("number",["input"],vt),n.variable(t("passwordDemo")).define("passwordDemo",["md"],bt),n.variable(t("viewof i")).define("viewof i",["password"],gt),n.variable(t("i")).define("i",["Generators","viewof i"],(a,i)=>a.input(i)),n.variable(t()).define(["i"],yt),n.variable(t("viewof i1")).define("viewof i1",["password"],wt),n.variable(t("i1")).define("i1",["Generators","viewof i1"],(a,i)=>a.input(i)),n.variable(t()).define(["i1"],xt),n.variable(t("password")).define("password",["input"],kt),n.variable(t()).define(["md"],$t),n.variable(t("input")).define("input",["html","d3format"],Mt),n.variable(t("d3geo")).define("d3geo",["require"],Dt),n.variable(t("d3format")).define("d3format",["require"],jt),n.variable(t("topojson")).define("topojson",["require"],Ct),n.variable(t("world")).define("world",At),n.variable(t("land")).define("land",["topojson","world"],Gt),n.variable(t("countries")).define("countries",["topojson","world"],St),n.variable(t("usa")).define("usa",Pt),n.variable(t("nation")).define("nation",["topojson","usa"],qt),n.variable(t("states")).define("states",["topojson","usa"],Et),n.variable(t("graticule")).define("graticule",["d3geo"],It),n.variable(t("viewof license")).define("viewof license",["md"],Tt),n.variable(t("license")).define("license",["Generators","viewof license"],(a,i)=>a.input(i)),n.variable(t()).define(["md"],Nt),n}function zt(e){return e`# Interface`}function Lt(e,t,n,a,i){return(function(d){let l;d?l=e:l=e.filter(o=>o.roughly_how_common>1e5);let f=t`<input  id='birdinputbox' name="dep" type="text" autocomplete="off" onfocus="blur();" inputmode='none' value='' placeholder="Type or select a bird to begin" style="font-size: 1em; width:${n}px" list=options>
          <datalist id="options">
              ${l.map(o=>Object.assign(t`<option>`,{label:o.common_name,value:o.scientific_name}))}
          </datalist>`,p=t`<div>${f}`;return p.value={},f.children[0].onfocus=function(){document.getElementById("birdinputbox").setAttribute("inputmode",""),f.children[0].value=""},f.oninput=o=>{o.stopPropagation()},f.onchange=()=>{let o=f.children[0].value,s=a(o);document.getElementById("birdinputbox").setAttribute("inputmode","none");let u={};s in i?(u.free_text=!1,u.scientific_name=o,u.common_name=i[s].common_name,u.inaturalist_id=i[s].inaturalist_id,u.raw=o):(u.free_text=!0,u.raw=o),p.value=u,p.dispatchEvent(new CustomEvent("input"))},p})}function Bt(e){return e()}function Ot(e){return e}function Ut(e){return(function(){return e({options:[{value:"toggle",label:"Include rare birds? (causes lag on selection box)"}],value:""})})}function Vt(e){return e}function Ft(e){return e("d3-dsv","d3-fetch")}function Yt(e){return e.csv("https://gist.githubusercontent.com/RobinL/bb510e6e7a0ee6e51c8746adcf21cd57/raw/205b23451ed36b1c4ace91293d235dd4cb2e8a44/birds_to_learn.csv")}function Wt(e,t){return e.csv("https://raw.githubusercontent.com/RobinL/birds_list/master/birds_list_with_inaturalist_id.csv",e.autoType).then(n=>n.sort(t))}function Ht(){return(function(e,t){return e.common_name>t.common_name?1:-1})}function Kt(e,t){let n={};return e.forEach(a=>{let i=a.scientific_name;i=t(i),n[i]=a}),n}function Qt(){return(function(t){return t.toLowerCase().trim().replace(" ","")})}function Zt(e,t){const n=e.module();n.variable(t()).define(["md"],zt),n.variable(t("bird_interface")).define("bird_interface",["bird_list","html","width","clean_scientific_name","scientific_lookup"],Lt),n.variable(t("viewof bird")).define("viewof bird",["bird_interface"],Bt),n.variable(t("bird")).define("bird",["Generators","viewof bird"],(i,r)=>i.input(r)),n.variable(t()).define(["bird"],Ot),n.variable(t("include_rare_checkbox")).define("include_rare_checkbox",["checkbox"],Ut),n.variable(t()).define(["bird"],Vt),n.variable(t("d3")).define("d3",["require"],Ft),n.variable(t("bird_list_old")).define("bird_list_old",["d3"],Yt),n.variable(t("bird_list")).define("bird_list",["d3","compare_birds_sort"],Wt),n.variable(t("compare_birds_sort")).define("compare_birds_sort",Ht),n.variable(t("scientific_lookup")).define("scientific_lookup",["bird_list","clean_scientific_name"],Kt),n.variable(t("clean_scientific_name")).define("clean_scientific_name",Qt);const a=e.module(Rt);return n.import("checkbox",a),n}function Jt(e){return e`# iNaturalist utils`}function Xt(){return(function(t="",n=null){let a="https://api.inaturalist.org/v1/observations",i={photos:!0,verifiable:!0,order_by:"votes",lat:53.807321,lng:-1.387255,radius:1400};return n!==null?i.taxon_id=n:i.taxon_name=t,i=Object.entries(i).map(([r,d])=>`${encodeURIComponent(r)}=${encodeURIComponent(d)}`).join("&"),a+"?"+i})}function en(e){return(function*(n){if(yield[],n.raw=="")yield[];else{let a;"inaturalist_id"in n?a=e(n.raw,n.inaturalist_id):a=e(n.raw),yield fetch(a).then(i=>i.json()).then(i=>{i.results.forEach(d=>d.photos.forEach(l=>{l.url_medium=l.url.replace("square","medium"),l.url_large=l.url.replace("square","original")}));let r=i.results;return r.sort((d,l)=>{d.faves_count-l.faves_count}),r})}})}function tn(){return(function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t})}function nn(e){return(function(n){let a=n.results.length;if(a==0)return;let i=e(0,a);return n.results[i]})}function an(e){return e`## Presentational functions`}function on(e,t){return(function(a){if(a.length==0)return e`Please wait, loading pictures...`;let i=a,r=i[0].taxon.default_photo.medium_url,d=r.replace("medium","original");return e`
<style> 
.collection {width: ${t}px}
.collection .species { display: inline-block; }
.collection img { display: block; width: 12em; height: 12em; object-fit: cover}

</style>

<h2>

<div class="collection">
<div class="species">
 <a href="${d}"  target="_blank"><img src="${r}"></div>


${i.map(l=>`<div class="species">
  <a href="${l.photos[0].url_large}"  target="_blank"><img src="${l.photos[0].url_medium}"></div>
`)}
</div>
`})}function rn(e){return e`## Demo of functions`}function ln(e){return e({raw:"Lagopus lagopus scotica",inaturalist_id:362643})}function un(e){return e({raw:"Lagopus lagopus"})}function sn(e,t){return e(t)}function dn(e){return e`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)`}function fn(e,t){const n=e.module();return n.variable(t()).define(["md"],Jt),n.variable(t("call_api")).define("call_api",Xt),n.variable(t("inaturalist_query")).define("inaturalist_query",["call_api"],en),n.variable(t("getRandomInt")).define("getRandomInt",tn),n.variable(t("get_random_inat_from_results")).define("get_random_inat_from_results",["getRandomInt"],nn),n.variable(t()).define(["md"],an),n.variable(t("picture_gallery")).define("picture_gallery",["html","width"],on),n.variable(t()).define(["md"],rn),n.variable(t("results2")).define("results2",["inaturalist_query"],ln),n.variable(t("results")).define("results",["inaturalist_query"],un),n.variable(t()).define(["picture_gallery","results2"],sn),n.variable(t()).define(["md"],dn),n}function cn(e){return e`# xeno-canto utils`}function pn(){return"https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl="}function mn(e,t,n){return(function(i="",r="",d="",l=""){let f=e+t+"query=",p=[];p.push(i),r!=""&&p.push(`type:"${r}"`),d!=""&&p.push(`q:"${d}"`),l!=""&&p.push(`cnt:"${n(l)}"`);let o=p.join(" ");return o=encodeURIComponent(o),f+o})}function _n(){return"https://xeno-canto.org/api/2/recordings?"}function hn(){return(function(e){return fetch(e).then(t=>t.json()).catch(t=>({recordings:[],status:"query_failed",message:"Query failed"}))})}function vn(e,t){return(async function*(a="",i="",r="",d="",l=3){if(yield{recordings:[],status:"query_incomplete",message:"Please wait, querying recordings..."},a=="")yield{recordings:[],status:"no_query",message:"No search terms entered"};else{let f=e(a,i,r,d),p=e(a,"","",""),o=await t(f);o.status="query_successful",o.message="Query Successful",o.recordings.length<l&&(console.log(`Fewer than ${l} found, using backup query`),o=await t(p),o.status="backup_query_successful",o.message="Query Successful, but only using backup URL"),yield o}})}function bn(){return(function(t){let n=t.file;return n=n.split("/"),n=n.filter(a=>a!=""),n=n.filter(a=>a!="http:"),n=n.filter(a=>a!="https:"),"https://"+n.join("/")})}function gn(e,t,n){return e`<audio controls><source src='${t(n.recordings[0])}' type='audio/mpeg'></audio>`}function yn(){return(function(t){return t.replace(/\w\S*/g,function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()})})}function wn(e){return(function(n){let a=n.recordings.length;if(a==0)return;let i=e(0,a);return n.recordings[i]})}function xn(){return(function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t})}function kn(){return(function(t,n,a=!0){var i=new Array(n),r=t.length,d=new Array(r);if(n>r)if(a)n=r;else throw new RangeError("getRandom: more elements taken than available");for(;n--;){var l=Math.floor(Math.random()*r);i[n]=t[l in d?d[l]:l],d[l]=--r in d?d[r]:r}return i})}function $n(e){return e`## Presentational functions`}function Mn(e){return e("troglodytes troglodytes","song","A","United Kingdom")}function Dn(e){return e`## Demos of functions`}function jn(e){return e("htl@0.2")}function Cn(e){return e.html}function An(e,t){return e(t.recordings,3)}function Gn(e,t){return(function(a,i){let r=`player_${a.id}`,d;i==null?d="player_null":d=`player_${i.id}`;function l(){let o=document.getElementsByClassName("birdaudio");for(var s of o)if(s.id!=r&&!s.paused){s.pause(),console.log("paused");let _=document.getElementsByClassName(`${s.id}_play_button`)[0];_.innerText="Paused"}let u=document.getElementsByClassName(`${r}_play_button`)[0],m=document.getElementById(`${r}`);m.paused?(m.play(),u.innerText="Pause",u.setAttribute("play_status","playing")):(m.pause(),u.innerText="Paused",u.setAttribute("play_status","paused"))}function f(){let o=document.getElementsByClassName(`${r}_play_button`)[0];o.innerText="Played",o.setAttribute("play_status","played"),document.getElementById(`${d}`).play();let u=document.getElementsByClassName(`${d}_play_button`)[0];u.setAttribute("play_status","playing"),u.innerText="Playing"}return e`<div>
 <audio id='${r}' 
        class = 'birdaudio'
        src="${t(a)}"
        onended=${()=>f()}>
 </audio>
 <div> 
  <button class="audioplayer ${r}_play_button" 
          onclick=${()=>l()}
          play_status = "unplayed"
          >Play</button> 

  
`})}function Sn(e,t,n){return(function(i,r=20,d=!0){if(i.length==0)return e`Please wait, fetching audio recordings...`;let l=i.length,f=Math.min(r,l),p;return d?p=t(i,f):p=i.slice(0,f),e`<table><tr>
<th>Species</th>
<th>Type</th>
<th>Length</th>
<th>Audio</th>

</tr>

${p.map((s,u)=>{let m=p.slice(u+1,u+2);return m.length==0?m=null:m=m[0],e`<tr>

<td>${s.en} (<i>${s.gen} ${s.sp})

<td>${s.type}
<td>${s.length}
<td>${n(s,m)}`})}

</table>
 `})}function Pn(e,t){return e(t.recordings)}function qn(e){return e`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)

[Docs for xeno-canto api](https://www.xeno-canto.org/article/153)

[Docs for quering xeno-canto](https://www.xeno-canto.org/help/search)
`}function En(e,t){const n=e.module();return n.variable(t()).define(["md"],cn),n.variable(t("cors_anywhere")).define("cors_anywhere",pn),n.variable(t("generate_get_request_url")).define("generate_get_request_url",["cors_anywhere","xeno_endpoint","toTitleCase"],mn),n.variable(t("xeno_endpoint")).define("xeno_endpoint",_n),n.variable(t("get_results_async")).define("get_results_async",hn),n.variable(t("xeno_canto_query")).define("xeno_canto_query",["generate_get_request_url","get_results_async"],vn),n.variable(t("recording_to_mp3_url")).define("recording_to_mp3_url",bn),n.variable(t("player")).define("player",["html","recording_to_mp3_url","results"],gn),n.variable(t("toTitleCase")).define("toTitleCase",yn),n.variable(t("get_random_recording_from_results")).define("get_random_recording_from_results",["getRandomInt"],wn),n.variable(t("getRandomInt")).define("getRandomInt",xn),n.variable(t("get_n_from_array_at_random")).define("get_n_from_array_at_random",kn),n.variable(t()).define(["md"],$n),n.variable(t("results")).define("results",["xeno_canto_query"],Mn),n.variable(t()).define(["md"],Dn),n.variable(t("htl")).define("htl",["require"],jn),n.variable(t("html")).define("html",["htl"],Cn),n.variable(t("rec")).define("rec",["get_n_from_array_at_random","results"],An),n.variable(t("audio_player_and_buttons")).define("audio_player_and_buttons",["html","recording_to_mp3_url"],Gn),n.variable(t("table_of_audio")).define("table_of_audio",["html","get_n_from_array_at_random","audio_player_and_buttons"],Sn),n.variable(t()).define(["table_of_audio","results"],Pn),n.variable(t()).define(["md"],qn),n}function In(e){return e`# UK birdsong recordings
Select a bird from the list below or type a scientific name for best results.

Source of recordings:  [xeno-canto](https://www.xeno-canto.org/)`}function Tn(e,t){return e(t)}function Nn(e,t){return e(t)}function Rn(e){return e}function zn(e){return e()}function Ln(e,t){return e(t.recordings)}function Bn(e){return e`## Photos from iNaturalist
Click on photo for full size
`}function On(e,t){return e(t)}function Un(e,t){return Object.keys(e).length>0?t(e):[]}function Vn(e){return e==""?"":e.free_text?e.raw:e.scientific_name}function Fn(e){return e`## Imports`}function Yn(e,t){const n=e.module();n.variable(t("title")).define("title",["md"],In),n.variable(t("xeno_results")).define("xeno_results",["xeno_canto_query","search_string"],Tn),n.variable(t("viewof bird")).define("viewof bird",["bird_interface","include_rare"],Nn),n.variable(t("bird")).define("bird",["Generators","viewof bird"],(d,l)=>d.input(l)),n.variable(t()).define(["bird"],Rn),n.variable(t("viewof include_rare")).define("viewof include_rare",["include_rare_checkbox"],zn),n.variable(t("include_rare")).define("include_rare",["Generators","viewof include_rare"],(d,l)=>d.input(l)),n.variable(t("audio_table")).define("audio_table",["table_of_audio","xeno_results"],Ln),n.variable(t("photos_title")).define("photos_title",["md"],Bn),n.variable(t("gallery")).define("gallery",["picture_gallery","inat_results"],On),n.variable(t("inat_results")).define("inat_results",["bird","inaturalist_query"],Un);const a=e.module(Zt);n.import("bird_interface",a),n.import("include_rare_checkbox",a),n.variable(t("search_string")).define("search_string",["bird"],Vn),n.variable(t()).define(["md"],Fn);const i=e.module(fn);n.import("inaturalist_query",i),n.import("picture_gallery",i);const r=e.module(En);return n.import("xeno_canto_query",r),n.import("table_of_audio",r),n}export{Yn as default};
