function j(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function S(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function A(e){return e()}function G(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function $(e){return e({min:0,max:1,step:.01,format:t=>`${Math.round(100*t)} per cent`,description:"Zero to one, formatted with a custom function"})}function P(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function T(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function E(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function z(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function N(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function L(e){return(function(i={}){let{min:a=0,max:n=1,value:o=(n+a)/2,step:l="any",precision:s=2,title:u,description:p,getValue:r,format:d,display:f,submit:h}=typeof i=="number"?{value:i}:i;return s=Math.pow(10,s),r||(r=m=>Math.round(m.valueAsNumber*s)/s),e({type:"range",title:u,description:p,submit:h,format:d,display:f,attributes:{min:a,max:n,step:l,value:o},getValue:r})})}function F(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function H(e){return e()}function O(e){return!this}function W(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function I(e){return new Date(Date.now()).toUTCString()}function B(e){return(function(i={}){const{value:a="Ok",title:n,description:o,disabled:l}=typeof i=="string"?{value:i}:i,s=e({type:"button",title:n,description:o,attributes:{disabled:l,value:a}});return s.output.remove(),s})}function V(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function q(e){return e(["Spring","Summer","Fall","Winter"])}function U(e){return e}function Y(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function R(e){return e}function Q(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function Z(e){return e}function J(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function X(e){return e}function K(e,t){return(function(a={}){let{value:n,title:o,description:l,submit:s,multiple:u,size:p,options:r}=Array.isArray(a)?{options:a}:a;r=r.map(f=>typeof f=="object"?f:{value:f,label:f});const d=e({type:"select",title:o,description:l,submit:s,getValue:f=>{const h=Array.prototype.filter.call(f.options,m=>m.selected).map(m=>m.value);return u?h:h[0]},form:t`
      <form>
        <select name="input" ${u?`multiple size="${p||r.length}"`:""}>
          ${r.map(({value:f,label:h})=>Object.assign(t`<option>`,{value:f,selected:Array.isArray(n)?n.includes(f):n===f,textContent:h}))}
        </select>
      </form>
    `});return d.output.remove(),d})}function tt(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function et(e,t){return e({options:t.objects.states.geometries.map(i=>i.properties.name),placeholder:"Search for a US state . . ."})}function it(e){return e}function nt(e,t){return(function(a={}){const{value:n,title:o,description:l,autocomplete:s="off",placeholder:u,size:p,options:r,list:d="options"}=Array.isArray(a)?{options:a}:a,f=new Set(r),h=e({type:"text",title:o,description:l,action:m=>{m.value=m.input.value=n||"",m.onsubmit=v=>v.preventDefault(),m.input.oninput=function(v){v.stopPropagation(),m.value=m.input.value,f.has(m.input.value)&&m.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${u}" style="font-size: 1em;" list=${d}>
          <datalist id="${d}">
              ${r.map(m=>Object.assign(t`<option>`,{value:m}))}
          </datalist>
      </form>
      `});return h.output.remove(),h})}function at(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ot(e){return e()}function rt(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function lt(e){return(function(i={}){const{value:a="#000000",title:n,description:o,submit:l,display:s}=typeof i=="string"?{value:i}:i,u=e({type:"color",title:n,description:o,submit:l,display:s,attributes:{value:a}});return(n||o)&&(u.input.style.margin="5px 0"),u})}function st(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function ut(e){return e()}function dt(e){return e}function ft(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function pt(e){return e}function ct(e,t){return(function(a={}){const{value:n=[],title:o,description:l,submit:s}=Array.isArray(a)?{value:a}:a;let[u,p]=n;u=u??"",p=p??"";const r=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${u}" />`,d=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${p}" />`,f=t({type:"coordinates",title:o,description:l,submit:s,getValue:()=>{const h=r.valueAsNumber,m=d.valueAsNumber;return[isNaN(h)?null:h,isNaN(m)?null:m]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${r}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${d}
        </label>
      </form>
    `});return f.output.remove(),f})}function mt(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function ht(e){return e([-122.27,37.87])}function vt(e){return e}function gt(e,t,i,a,n,o,l){return(function(u={}){const{value:p=[],title:r,description:d,width:f=400}=Array.isArray(u)?{value:u}:u,h=Math.round(210/400*f);let[m,v]=p;m=m??null,v=v??null;const g=e`<form style="width: ${f}px;"></form>`,c=t.context2d(f,h),w=c.canvas;w.style.margin="10px 0 0";const b=i.geoNaturalEarth1().precision(.1).fitSize([f,h],{type:"Sphere"}),_=i.geoPath(b,c).pointRadius(2.5);g.append(w);function x(){if(c.fillStyle="#fff",c.fillRect(0,0,f,h),c.beginPath(),_(a),c.lineWidth=.35,c.strokeStyle="#ddd",c.stroke(),c.beginPath(),_(n),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),_(o),c.strokeStyle="#aaa",c.stroke(),m!=null&&v!=null){const y={type:"MultiPoint",coordinates:[[m,v]]};c.beginPath(),_(y),c.fillStyle="#f00",c.fill()}}return w.onclick=function(y){const{offsetX:D,offsetY:C}=y;var k=b.invert([D,C]);m=+k[0].toFixed(2),v=+k[1].toFixed(2),x(),w.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),l({type:"worldMapCoordinates",title:r,description:d,display:y=>e`<div style="position: absolute; width: ${f}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${m??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${v??""} 
          </div>`,getValue:()=>[m??null,v??null],form:g})})}function wt(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function bt(e){return e([-122.27,37.87])}function yt(e){return e}function _t(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function xt(e){return e}function kt(e,t,i,a,n,o){return(function(s={}){const{value:u=[],title:p,description:r,width:d=400}=Array.isArray(s)?{value:s}:s,f=d/960,h=f*600;let[m,v]=u;m=m??null,v=v??null;const g=e`<form style="width: ${d}px;"></form>`,c=t.context2d(d,h),w=c.canvas;w.style.margin="5px 0 0";const b=i.geoAlbersUsa().scale(1280).translate([480,300]),_=i.geoPath().context(c).pointRadius(2.5/f);g.append(w);function x(){if(c.clearRect(0,0,d,h),c.save(),c.scale(f,f),c.lineWidth=.35/f,c.beginPath(),_(a),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),_(n),c.strokeStyle="#aaa",c.stroke(),m!=null&&v!=null){const y={type:"MultiPoint",coordinates:[b([m,v])]};c.beginPath(),_(y),c.fillStyle="#f00",c.fill()}c.restore()}return w.onclick=function(y){const{offsetX:D,offsetY:C}=y;var k=b.invert([D/f,C/f]);m=+k[0].toFixed(2),v=+k[1].toFixed(2),x(),w.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),o({type:"worldMapCoordinates",title:p,description:r,display:y=>e`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${m??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${v??""} 
          </div>`,getValue:()=>[m??null,v??null],form:g})})}function Dt(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function Ct(e){return e()}function Mt(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function jt(e){return(function(i={}){const{min:a,max:n,value:o,title:l,description:s,display:u}=typeof i=="string"?{value:i}:i;return e({type:"date",title:l,description:s,display:u,attributes:{min:a,max:n,value:o}})})}function St(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function At(e){return e()}function Gt(e){return e}function $t(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function Pt(e){return e}function Tt(e){return(function(i={}){const{min:a,max:n,step:o,value:l,title:s,description:u,display:p}=typeof i=="string"?{value:i}:i,r=e({type:"time",title:s,description:u,display:p,getValue:d=>d.value?d.value:void 0,attributes:{min:a,max:n,step:o,value:l}});return r.output.remove(),r})}function Et(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function zt(e){return e()}function Nt(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function Lt(e,t,i){const a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let o=e`<img height="125px" style="margin: 2px;" />`;o.src=await i.url(t[n]),a.append(o)}return a}function Ft(e){return(function(i={}){const{multiple:a,accept:n,title:o,description:l}=i,s=e({type:"file",title:o,description:l,attributes:{multiple:a,accept:n},action:u=>{u.input.onchange=()=>{u.value=a?u.input.files:u.input.files[0],u.dispatchEvent(new CustomEvent("input"))}}});return s.output.remove(),s.input.onchange(),s})}function Ht(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function Ot(e){return e()}function Wt(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function It(e){return e}function Bt(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function Vt(e){return e}function qt(e){return(function(i={}){const{value:a,title:n,description:o,autocomplete:l="off",maxlength:s,minlength:u,pattern:p,placeholder:r,size:d,submit:f}=typeof i=="string"?{value:i}:i,h=e({type:"text",title:n,description:o,submit:f,attributes:{value:a,autocomplete:l,maxlength:s,minlength:u,pattern:p,placeholder:r,size:d}});return h.output.remove(),h.input.style.fontSize="1em",h})}function Ut(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function Yt(e){return e()}function Rt(e){return e}function Qt(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Zt(e){return e}function Jt(e,t){return(function(a={}){const{value:n="",title:o,description:l,autocomplete:s,cols:u=45,rows:p=3,width:r,height:d,maxlength:f,placeholder:h,spellcheck:m,wrap:v,submit:g}=typeof a=="string"?{value:a}:a,c=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:o,description:l,submit:g,attributes:{autocomplete:s,cols:u,rows:p,maxlength:f,placeholder:h,spellcheck:m,wrap:v}});return c.output.remove(),r!=null&&(c.input.style.width=r),d!=null&&(c.input.style.height=d),g&&(c.submit.style.margin="0"),(o||l)&&(c.input.style.margin="3px 0"),c})}function Xt(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Kt(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function te(e){return e}function ee(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function ie(e){return e}function ne(e,t){return(function(a={}){let{value:n,title:o,description:l,submit:s,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(r=>typeof r=="string"?{value:r,label:r}:r);const p=e({type:"radio",title:o,description:l,submit:s,getValue:r=>{if(r.checked)return r.value;const d=Array.prototype.find.call(r,f=>f.checked);return d?d.value:void 0},form:t`
      <form>
        ${u.map(({value:r,label:d})=>{const f=t`<input type=radio name=input ${r===n?"checked":""} style="vertical-align: baseline;" />`;return f.setAttribute("value",r),t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${f}
           ${d}
          </label>`})}
      </form>
    `});return p.output.remove(),p})}function ae(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function oe(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function re(e){return e}function le(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function se(e){return e}function ue(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function de(e){return e}function fe(e,t){return(function(a={}){let{value:n,title:o,description:l,submit:s,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(r=>typeof r=="string"?{value:r,label:r}:r);const p=e({type:"checkbox",title:o,description:l,submit:s,getValue:r=>r.length?Array.prototype.filter.call(r,d=>d.checked).map(d=>d.value):r.checked?r.value:!1,form:t`
      <form>
        ${u.map(({value:r,label:d})=>{const f=t`<input type=checkbox name=input ${(n||[]).indexOf(r)>-1?"checked":""} style="vertical-align: baseline;" />`;return f.setAttribute("value",r),t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${f}
           ${d}
          </label>`})}
      </form>
    `});return p.output.remove(),p})}function pe(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function ce(e){return e()}function me(e){return e}function he(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function ve(e){return e}function ge(e){return(function(i={}){const{value:a,title:n,description:o,placeholder:l,submit:s,step:u="any",min:p,max:r}=typeof i=="number"||typeof i=="string"?{value:+i}:i,d=e({type:"number",title:n,description:o,submit:s,attributes:{value:a,placeholder:l,step:u,min:p,max:r,autocomplete:"off"},getValue:f=>f.valueAsNumber});return d.output.remove(),d.input.style.width="auto",d.input.style.fontSize="1em",d})}function we(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function be(e){return e({value:"password"})}function ye(e){return e}function _e(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function xe(e){return e}function ke(e){return(function(i={}){const{value:a,title:n,description:o,autocomplete:l="off",maxlength:s,minlength:u,pattern:p,placeholder:r,size:d,submit:f}=typeof i=="string"?{value:i}:i,h=e({type:"password",title:n,description:o,submit:f,attributes:{value:a,autocomplete:l,maxlength:s,minlength:u,pattern:p,placeholder:r,size:d}});return h.output.remove(),h.input.style.fontSize="1em",h})}function De(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function Ce(e,t){return(function(a){let{form:n,type:o="text",attributes:l={},action:s,getValue:u,title:p,description:r,format:d,display:f,submit:h,options:m}=a;const v=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(l).forEach(g=>{const c=l[g];c!=null&&n.input.setAttribute(g,c)}),h&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof h=="string"?h:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),p&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${p}</div>`),r&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${r}</div>`),d&&(d=typeof d=="function"?d:t.format(d)),s)s(n);else{const g=h?"onsubmit":o=="button"?"onclick":o=="checkbox"||o=="radio"?"onchange":"oninput";n[g]=c=>{c&&c.preventDefault();const w=u?u(n.input):n.input.value;if(n.output){const b=f?f(w):d?d(w):w;if(b instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(b)}else n.output.value=b}n.value=w,g!=="oninput"&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},g!=="oninput"&&(v.oninput=c=>c&&c.stopPropagation()&&c.preventDefault()),g!=="onsubmit"&&(n.onsubmit=c=>c&&c.preventDefault()),n[g]()}for(;n.childNodes.length;)v.appendChild(n.childNodes[0]);return n.append(v),n})}function Me(e){return e("d3-geo@1")}function je(e){return e("d3-format@1")}function Se(e){return e("topojson-client@3")}async function Ae(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function Ge(e,t){return e.feature(t,t.objects.land)}function $e(e,t){return e.feature(t,t.objects.countries)}async function Pe(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function Te(e,t){return e.feature(t,t.objects.nation)}function Ee(e,t){return e.feature(t,t.objects.states)}function ze(e){return e.geoGraticule10()}function Ne(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function Le(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function Fe(e,t){const i=e.module();return i.variable(t()).define(["md"],j),i.variable(t("sliderDemo")).define("sliderDemo",["md"],S),i.variable(t("viewof a")).define("viewof a",["slider"],A),i.variable(t("a")).define("a",["Generators","viewof a"],(a,n)=>a.input(n)),i.variable(t("viewof a1")).define("viewof a1",["slider"],G),i.variable(t("a1")).define("a1",["Generators","viewof a1"],(a,n)=>a.input(n)),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],$),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,n)=>a.input(n)),i.variable(t("viewof a2")).define("viewof a2",["slider"],P),i.variable(t("a2")).define("a2",["Generators","viewof a2"],(a,n)=>a.input(n)),i.variable(t("viewof a3")).define("viewof a3",["slider"],T),i.variable(t("a3")).define("a3",["Generators","viewof a3"],(a,n)=>a.input(n)),i.variable(t("viewof a4")).define("viewof a4",["slider"],E),i.variable(t("a4")).define("a4",["Generators","viewof a4"],(a,n)=>a.input(n)),i.variable(t("viewof a5")).define("viewof a5",["slider"],z),i.variable(t("a5")).define("a5",["Generators","viewof a5"],(a,n)=>a.input(n)),i.variable(t()).define(["md"],N),i.variable(t("slider")).define("slider",["input"],L),i.variable(t("buttonDemo")).define("buttonDemo",["md"],F),i.variable(t("viewof b")).define("viewof b",["button"],H),i.variable(t("b")).define("b",["Generators","viewof b"],(a,n)=>a.input(n)),i.variable(t()).define(["b"],O),i.variable(t("viewof b1")).define("viewof b1",["button"],W),i.variable(t("b1")).define("b1",["Generators","viewof b1"],(a,n)=>a.input(n)),i.variable(t()).define(["b1"],I),i.variable(t("button")).define("button",["input"],B),i.variable(t("selectDemo")).define("selectDemo",["md"],V),i.variable(t("viewof dd")).define("viewof dd",["select"],q),i.variable(t("dd")).define("dd",["Generators","viewof dd"],(a,n)=>a.input(n)),i.variable(t()).define(["dd"],U),i.variable(t("viewof dd1")).define("viewof dd1",["select"],Y),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(a,n)=>a.input(n)),i.variable(t()).define(["dd1"],R),i.variable(t("viewof dd2")).define("viewof dd2",["select"],Q),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(a,n)=>a.input(n)),i.variable(t()).define(["dd2"],Z),i.variable(t("viewof dd3")).define("viewof dd3",["select"],J),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(a,n)=>a.input(n)),i.variable(t()).define(["dd3"],X),i.variable(t("select")).define("select",["input","html"],K),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],tt),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],et),i.variable(t("as")).define("as",["Generators","viewof as"],(a,n)=>a.input(n)),i.variable(t()).define(["as"],it),i.variable(t("autoSelect")).define("autoSelect",["input","html"],nt),i.variable(t("colorDemo")).define("colorDemo",["md"],at),i.variable(t("viewof c")).define("viewof c",["color"],ot),i.variable(t("c")).define("c",["Generators","viewof c"],(a,n)=>a.input(n)),i.variable(t("viewof c1")).define("viewof c1",["color"],rt),i.variable(t("c1")).define("c1",["Generators","viewof c1"],(a,n)=>a.input(n)),i.variable(t("color")).define("color",["input"],lt),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],st),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],ut),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(a,n)=>a.input(n)),i.variable(t()).define(["coords1"],dt),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ft),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(a,n)=>a.input(n)),i.variable(t()).define(["coords2"],pt),i.variable(t("coordinates")).define("coordinates",["html","input"],ct),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],mt),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],ht),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,n)=>a.input(n)),i.variable(t()).define(["worldMap1"],vt),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],gt),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],wt),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],bt),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,n)=>a.input(n)),i.variable(t()).define(["usaMap1"],yt),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],_t),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,n)=>a.input(n)),i.variable(t()).define(["usaMap2"],xt),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],kt),i.variable(t("dateDemo")).define("dateDemo",["md"],Dt),i.variable(t("viewof d")).define("viewof d",["date"],Ct),i.variable(t("d")).define("d",["Generators","viewof d"],(a,n)=>a.input(n)),i.variable(t("viewof d1")).define("viewof d1",["date"],Mt),i.variable(t("d1")).define("d1",["Generators","viewof d1"],(a,n)=>a.input(n)),i.variable(t("date")).define("date",["input"],jt),i.variable(t("timeDemo")).define("timeDemo",["md"],St),i.variable(t("viewof t")).define("viewof t",["time"],At),i.variable(t("t")).define("t",["Generators","viewof t"],(a,n)=>a.input(n)),i.variable(t()).define(["t"],Gt),i.variable(t("viewof t1")).define("viewof t1",["time"],$t),i.variable(t("t1")).define("t1",["Generators","viewof t1"],(a,n)=>a.input(n)),i.variable(t()).define(["t1"],Pt),i.variable(t("time")).define("time",["input"],Tt),i.variable(t("fileDemo")).define("fileDemo",["md"],Et),i.variable(t("viewof e")).define("viewof e",["file"],zt),i.variable(t("e")).define("e",["Generators","viewof e"],(a,n)=>a.input(n)),i.variable(t("viewof e1")).define("viewof e1",["file"],Nt),i.variable(t("e1")).define("e1",["Generators","viewof e1"],(a,n)=>a.input(n)),i.variable(t()).define(["html","e1","Files"],Lt),i.variable(t("file")).define("file",["input"],Ft),i.variable(t("textDemo")).define("textDemo",["md"],Ht),i.variable(t("viewof f")).define("viewof f",["text"],Ot),i.variable(t("f")).define("f",["Generators","viewof f"],(a,n)=>a.input(n)),i.variable(t("viewof f1")).define("viewof f1",["text"],Wt),i.variable(t("f1")).define("f1",["Generators","viewof f1"],(a,n)=>a.input(n)),i.variable(t()).define(["f1"],It),i.variable(t("viewof f2")).define("viewof f2",["text"],Bt),i.variable(t("f2")).define("f2",["Generators","viewof f2"],(a,n)=>a.input(n)),i.variable(t()).define(["f2"],Vt),i.variable(t("text")).define("text",["input"],qt),i.variable(t("textareaDemo")).define("textareaDemo",["md"],Ut),i.variable(t("viewof g")).define("viewof g",["textarea"],Yt),i.variable(t("g")).define("g",["Generators","viewof g"],(a,n)=>a.input(n)),i.variable(t()).define(["g"],Rt),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Qt),i.variable(t("g1")).define("g1",["Generators","viewof g1"],(a,n)=>a.input(n)),i.variable(t()).define(["g1"],Zt),i.variable(t("textarea")).define("textarea",["input","html"],Jt),i.variable(t("radioDemo")).define("radioDemo",["md"],Xt),i.variable(t("viewof r")).define("viewof r",["radio"],Kt),i.variable(t("r")).define("r",["Generators","viewof r"],(a,n)=>a.input(n)),i.variable(t()).define(["r"],te),i.variable(t("viewof r1")).define("viewof r1",["radio"],ee),i.variable(t("r1")).define("r1",["Generators","viewof r1"],(a,n)=>a.input(n)),i.variable(t()).define(["r1"],ie),i.variable(t("radio")).define("radio",["input","html"],ne),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],ae),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],oe),i.variable(t("ch")).define("ch",["Generators","viewof ch"],(a,n)=>a.input(n)),i.variable(t()).define(["ch"],re),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],le),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(a,n)=>a.input(n)),i.variable(t()).define(["ch1"],se),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],ue),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(a,n)=>a.input(n)),i.variable(t()).define(["ch3"],de),i.variable(t("checkbox")).define("checkbox",["input","html"],fe),i.variable(t("numberDemo")).define("numberDemo",["md"],pe),i.variable(t("viewof h")).define("viewof h",["number"],ce),i.variable(t("h")).define("h",["Generators","viewof h"],(a,n)=>a.input(n)),i.variable(t()).define(["h"],me),i.variable(t("viewof h1")).define("viewof h1",["number"],he),i.variable(t("h1")).define("h1",["Generators","viewof h1"],(a,n)=>a.input(n)),i.variable(t()).define(["h1"],ve),i.variable(t("number")).define("number",["input"],ge),i.variable(t("passwordDemo")).define("passwordDemo",["md"],we),i.variable(t("viewof i")).define("viewof i",["password"],be),i.variable(t("i")).define("i",["Generators","viewof i"],(a,n)=>a.input(n)),i.variable(t()).define(["i"],ye),i.variable(t("viewof i1")).define("viewof i1",["password"],_e),i.variable(t("i1")).define("i1",["Generators","viewof i1"],(a,n)=>a.input(n)),i.variable(t()).define(["i1"],xe),i.variable(t("password")).define("password",["input"],ke),i.variable(t()).define(["md"],De),i.variable(t("input")).define("input",["html","d3format"],Ce),i.variable(t("d3geo")).define("d3geo",["require"],Me),i.variable(t("d3format")).define("d3format",["require"],je),i.variable(t("topojson")).define("topojson",["require"],Se),i.variable(t("world")).define("world",Ae),i.variable(t("land")).define("land",["topojson","world"],Ge),i.variable(t("countries")).define("countries",["topojson","world"],$e),i.variable(t("usa")).define("usa",Pe),i.variable(t("nation")).define("nation",["topojson","usa"],Te),i.variable(t("states")).define("states",["topojson","usa"],Ee),i.variable(t("graticule")).define("graticule",["d3geo"],ze),i.variable(t("viewof license")).define("viewof license",["md"],Ne),i.variable(t("license")).define("license",["Generators","viewof license"],(a,n)=>a.input(n)),i.variable(t()).define(["md"],Le),i}function He(e){return e`# Spark UI SQL detailed annotator`}function Oe(e){return e`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`}function We(e,t){return e({value:t,rows:6,width:"100%"})}function Ie(e,t){return e(t)}function Be(e,t,i,a){return e`
  
  ## Glossary

  ${t.map(n=>i`<h3 class="title_case">${n}</h3><p>${e`${a[n].definition}`}</p>`)}
`}function Ve(e,t,i){let a=e.select(t`${i}`).select("#plan-viz-metadata");return a=a.node().outerHTML,t`${a}`}function qe(e,t,i){let a=e.select(t`${i}`).select("#plan-viz-graph svg");return a=a.attr("class","sparkui"),a=a.node().outerHTML,a}function Ue(e,t,i,a,n,o){return(function(s){let u=e`${s}`,p=t.select(u);return p=p.attr("class","sparkui"),p.selectAll(".node").on("mouseover",function(){let d=+[...this.classList].find(c=>c.includes("node_")).match(/\d+/)[0],f=i(this),h;try{h=t.select("#plan-meta-data-"+d).text()}catch{h=""}let m=a(f+" "+h),v=n` ${m} <p><strong>Original tooltip: </strong>${h}</p>`;var g=t.select(this).node();o(g).tooltip({title:v,trigger:"manual",container:"body",placement:"right",html:!0}),o(g).tooltip("show")}).on("mouseout",function(r){var d=t.select(this).node();o(d).tooltip("destroy")}),p.selectAll(".cluster").on("mouseover",function(){+[...this.classList].find(m=>m.includes("cluster_")).match(/\d+/)[0];let d=i(this),f=n`${a(d)}`;var h=t.select(this).node();o(h).tooltip({title:f,trigger:"manual",container:"body",placement:"right",html:!0}),o(h).tooltip("show")}).on("mouseout",function(r){var d=t.select(this).node();o(d).tooltip("destroy")}),u})}function Ye(){return(function(t){let i="";function a(n){for(var o=0;o<n.childNodes.length;o++){var l=n.childNodes[o];a(l),l.firstChild||(i+=l.textContent+" ")}}return a(t),i})}function Re(e,t,i){return(function(n){let o=[];return e.forEach(s=>{(n.toLowerCase().includes(`${s} `)||n.toLowerCase().includes(`${s}(`))&&o.push(s)}),o.map(s=>{let u=t[s].short_definition,p=t[s].key;return i`<p><strong class="title_case">${p}</strong>: ${u}</p>`})})}function Qe(e){return e.json("https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json")}function Ze(e){return Object.keys(e)}function Je(e){return e("d3")}function Xe(e){return e.text("https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html")}function Ke(e){return e("jquery")}function ti(e){return(function(t){var i=function(n,o){this.init("tooltip",n,o)};i.prototype={constructor:i,init:function(n,o,l){var s,u,p,r,d;for(this.type=n,this.$element=t(o),this.options=this.getOptions(l),this.enabled=!0,p=this.options.trigger.split(" "),d=p.length;d--;)r=p[d],r=="click"?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):r!="manual"&&(s=r=="hover"?"mouseenter":"focus",u=r=="hover"?"mouseleave":"blur",this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(n){return n=t.extend({},t.fn[this.type].defaults,this.$element.data(),n),n.delay&&typeof n.delay=="number"&&(n.delay={show:n.delay,hide:n.delay}),n},enter:function(n){var o=t.fn[this.type].defaults,l={},s;if(this._options&&t.each(this._options,function(u,p){o[u]!=p&&(l[u]=p)},this),s=t(n.currentTarget)[this.type](l).data(this.type),!s.options.delay||!s.options.delay.show)return s.show();clearTimeout(this.timeout),s.hoverState="in",this.timeout=setTimeout(function(){s.hoverState=="in"&&s.show()},s.options.delay.show)},leave:function(n){var o=t(n.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!o.options.delay||!o.options.delay.hide)return o.hide();o.hoverState="out",this.timeout=setTimeout(function(){o.hoverState=="out"&&o.hide()},o.options.delay.hide)},show:function(){var n,o,l,s,u,p,r=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(r),r.isDefaultPrevented())return;switch(n=this.tip(),this.setContent(),this.options.animation&&n.addClass("fade"),u=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,n.detach().css({top:0,left:0,display:"block"}),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element),o=this.getPosition(),l=n[0].offsetWidth,s=n[0].offsetHeight,u){case"bottom":p={top:o.top+o.height,left:o.left+o.width/2-l/2};break;case"top":p={top:o.top-s,left:o.left+o.width/2-l/2};break;case"left":p={top:o.top+o.height/2-s/2,left:o.left-l};break;case"right":p={top:o.top+o.height/2-s/2,left:o.left+o.width};break}this.applyPlacement(p,u),this.$element.trigger("shown")}},applyPlacement:function(n,o){var l=this.tip(),s=l[0].offsetWidth,u=l[0].offsetHeight,p,r,d,f;l.offset(n).addClass(o).addClass("in"),p=l[0].offsetWidth,r=l[0].offsetHeight,o=="top"&&r!=u&&(n.top=n.top+u-r,f=!0),o=="bottom"||o=="top"?(d=0,n.left<0&&(d=n.left*-2,n.left=0,l.offset(n),p=l[0].offsetWidth,r=l[0].offsetHeight),this.replaceArrow(d-s+p,p,"left")):this.replaceArrow(r-u,r,"top"),f&&l.offset(n)},replaceArrow:function(n,o,l){this.arrow().css(l,n?50*(1-n/o)+"%":"")},setContent:function(){var n=this.tip(),o=this.getTitle();n.find(".tooltip-inner")[this.options.html?"html":"text"](o),n.removeClass("fade in top bottom left right")},hide:function(){var n=this.tip(),o=t.Event("hide");if(this.$element.trigger(o),o.isDefaultPrevented())return;n.removeClass("in");function l(){var s=setTimeout(function(){n.off(t.support.transition.end).detach()},500);n.one(t.support.transition.end,function(){clearTimeout(s),n.detach()})}return t.support.transition&&this.$tip.hasClass("fade")?l():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var n=this.$element;(n.attr("title")||typeof n.attr("data-original-title")!="string")&&n.attr("data-original-title",n.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var n=this.$element[0];return t.extend({},typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():{width:n.offsetWidth,height:n.offsetHeight},this.$element.offset())},getTitle:function(){var n,o=this.$element,l=this.options;return n=o.attr("data-original-title")||(typeof l.title=="function"?l.title.call(o[0]):l.title),n},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(n){var o=n?t(n.currentTarget)[this.type](this._options).data(this.type):this;o.tip().hasClass("in")?o.hide():o.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var a=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var o=t(this),l=o.data("tooltip"),s=typeof n=="object"&&n;l||o.data("tooltip",l=new i(this,s)),typeof n=="string"&&l[n]()})},t.fn.tooltip.Constructor=i,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=a,this}})(window.jQuery)}function ei(e){return e`<style> 
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
} </style>`}function ii(e){return e`<style>
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


`}function ni(e){return e`<style>
.title_case {
text-transform: capitalize
}`}function ai(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],He),i.variable(t("md_1")).define("md_1",["md"],Oe),i.variable(t("viewof raw_html")).define("viewof raw_html",["textarea","sample_html"],We),i.variable(t("raw_html")).define("raw_html",["Generators","viewof raw_html"],(n,o)=>n.input(o)),i.variable(t("output_svg")).define("output_svg",["plot_plan","raw_svg"],Ie),i.variable(t("md_glossary")).define("md_glossary",["md","glossary_keys","html","glossary"],Be),i.variable(t("metadata")).define("metadata",["d3","html","raw_html"],Ve),i.variable(t("raw_svg")).define("raw_svg",["d3","html","raw_html"],qe),i.variable(t("plot_plan")).define("plot_plan",["svg","d3","get_text_content_spaces","get_definitions_from_text","html","$"],Ue),i.variable(t("get_text_content_spaces")).define("get_text_content_spaces",Ye),i.variable(t("get_definitions_from_text")).define("get_definitions_from_text",["glossary_keys","glossary","html"],Re),i.variable(t("glossary")).define("glossary",["d3"],Qe),i.variable(t("glossary_keys")).define("glossary_keys",["glossary"],Ze),i.variable(t("d3")).define("d3",["require"],Je),i.variable(t("sample_html")).define("sample_html",["d3"],Xe),i.variable(t("$")).define("$",["require"],Ke),i.variable(t("bstt")).define("bstt",["$"],ti),i.variable(t("styles1")).define("styles1",["html"],ei),i.variable(t("styles2")).define("styles2",["html"],ii),i.variable(t()).define(["html"],ni);const a=e.module(Fe);return i.import("slider",a),i.import("textarea",a),i}export{ai as default};
