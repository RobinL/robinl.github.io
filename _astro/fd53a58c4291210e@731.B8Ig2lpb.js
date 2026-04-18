function C(t){return t`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function j(t){return t`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function A(t){return t()}function G(t){return t({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function S(t){return t({min:0,max:1,step:.01,format:i=>`${Math.round(100*i)} per cent`,description:"Zero to one, formatted with a custom function"})}function z(t){return t({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function P(t){return t({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function E(t){return t({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function T(t){return t({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function I(t){return t`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function R(t){return(function(e={}){let{min:a=0,max:n=1,value:r=(n+a)/2,step:o="any",precision:l=2,title:c,description:_,getValue:u,format:s,display:d,submit:p}=typeof e=="number"?{value:e}:e;return l=Math.pow(10,l),u||(u=m=>Math.round(m.valueAsNumber*l)/l),t({type:"range",title:c,description:_,submit:p,format:s,display:d,attributes:{min:a,max:n,step:o,value:r},getValue:u})})}function N(t){return t`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function L(t){return t()}function B(t){return!this}function U(t){return t({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function O(t){return new Date(Date.now()).toUTCString()}function V(t){return(function(e={}){const{value:a="Ok",title:n,description:r,disabled:o}=typeof e=="string"?{value:e}:e,l=t({type:"button",title:n,description:r,attributes:{disabled:o,value:a}});return l.output.remove(),l})}function Y(t){return t`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function F(t){return t(["Spring","Summer","Fall","Winter"])}function W(t){return t}function H(t){return t({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function K(t){return t}function Q(t){return t({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function Z(t){return t}function J(t){const i=t({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return i.input.style.fontSize="30px",i.input.style.marginTop="8px",i}function X(t){return t}function ee(t,i){return(function(a={}){let{value:n,title:r,description:o,submit:l,multiple:c,size:_,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(d=>typeof d=="object"?d:{value:d,label:d});const s=t({type:"select",title:r,description:o,submit:l,getValue:d=>{const p=Array.prototype.filter.call(d.options,m=>m.selected).map(m=>m.value);return c?p:p[0]},form:i`
      <form>
        <select name="input" ${c?`multiple size="${_||u.length}"`:""}>
          ${u.map(({value:d,label:p})=>Object.assign(i`<option>`,{value:d,selected:Array.isArray(n)?n.includes(d):n===d,textContent:p}))}
        </select>
      </form>
    `});return s.output.remove(),s})}function te(t){return t`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function ie(t,i){return t({options:i.objects.states.geometries.map(e=>e.properties.name),placeholder:"Search for a US state . . ."})}function ne(t){return t}function ae(t,i){return(function(a={}){const{value:n,title:r,description:o,autocomplete:l="off",placeholder:c,size:_,options:u,list:s="options"}=Array.isArray(a)?{options:a}:a,d=new Set(u),p=t({type:"text",title:r,description:o,action:m=>{m.value=m.input.value=n||"",m.onsubmit=h=>h.preventDefault(),m.input.oninput=function(h){h.stopPropagation(),m.value=m.input.value,d.has(m.input.value)&&m.dispatchEvent(new CustomEvent("input"))}},form:i`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${c}" style="font-size: 1em;" list=${s}>
          <datalist id="${s}">
              ${u.map(m=>Object.assign(i`<option>`,{value:m}))}
          </datalist>
      </form>
      `});return p.output.remove(),p})}function oe(t){return t`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function re(t){return t()}function le(t){return t({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function ue(t){return(function(e={}){const{value:a="#000000",title:n,description:r,submit:o,display:l}=typeof e=="string"?{value:e}:e,c=t({type:"color",title:n,description:r,submit:o,display:l,attributes:{value:a}});return(n||r)&&(c.input.style.margin="5px 0"),c})}function se(t){return t` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function de(t){return t()}function ce(t){return t}function fe(t){return t({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function pe(t){return t}function me(t,i){return(function(a={}){const{value:n=[],title:r,description:o,submit:l}=Array.isArray(a)?{value:a}:a;let[c,_]=n;c=c??"",_=_??"";const u=t`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${c}" />`,s=t`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${_}" />`,d=i({type:"coordinates",title:r,description:o,submit:l,getValue:()=>{const p=u.valueAsNumber,m=s.valueAsNumber;return[isNaN(p)?null:p,isNaN(m)?null:m]},form:t`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${u}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${s}
        </label>
      </form>
    `});return d.output.remove(),d})}function _e(t){return t` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function he(t){return t([-122.27,37.87])}function ve(t){return t}function be(t,i,e,a,n,r,o){return(function(c={}){const{value:_=[],title:u,description:s,width:d=400}=Array.isArray(c)?{value:c}:c,p=Math.round(210/400*d);let[m,h]=_;m=m??null,h=h??null;const v=t`<form style="width: ${d}px;"></form>`,f=i.context2d(d,p),b=f.canvas;b.style.margin="10px 0 0";const g=e.geoNaturalEarth1().precision(.1).fitSize([d,p],{type:"Sphere"}),x=e.geoPath(g,f).pointRadius(2.5);v.append(b);function $(){if(f.fillStyle="#fff",f.fillRect(0,0,d,p),f.beginPath(),x(a),f.lineWidth=.35,f.strokeStyle="#ddd",f.stroke(),f.beginPath(),x(n),f.fillStyle="#f4f4f4",f.fill(),f.beginPath(),x(r),f.strokeStyle="#aaa",f.stroke(),m!=null&&h!=null){const y={type:"MultiPoint",coordinates:[[m,h]]};f.beginPath(),x(y),f.fillStyle="#f00",f.fill()}}return b.onclick=function(y){const{offsetX:M,offsetY:w}=y;var k=g.invert([M,w]);m=+k[0].toFixed(2),h=+k[1].toFixed(2),$(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},$(),o({type:"worldMapCoordinates",title:u,description:s,display:y=>t`<div style="position: absolute; width: ${d}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${m??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[m??null,h??null],form:v})})}function ge(t){return t` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function ye(t){return t([-122.27,37.87])}function we(t){return t}function xe(t){return t({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function ke(t){return t}function $e(t,i,e,a,n,r){return(function(l={}){const{value:c=[],title:_,description:u,width:s=400}=Array.isArray(l)?{value:l}:l,d=s/960,p=d*600;let[m,h]=c;m=m??null,h=h??null;const v=t`<form style="width: ${s}px;"></form>`,f=i.context2d(s,p),b=f.canvas;b.style.margin="5px 0 0";const g=e.geoAlbersUsa().scale(1280).translate([480,300]),x=e.geoPath().context(f).pointRadius(2.5/d);v.append(b);function $(){if(f.clearRect(0,0,s,p),f.save(),f.scale(d,d),f.lineWidth=.35/d,f.beginPath(),x(a),f.fillStyle="#f4f4f4",f.fill(),f.beginPath(),x(n),f.strokeStyle="#aaa",f.stroke(),m!=null&&h!=null){const y={type:"MultiPoint",coordinates:[g([m,h])]};f.beginPath(),x(y),f.fillStyle="#f00",f.fill()}f.restore()}return b.onclick=function(y){const{offsetX:M,offsetY:w}=y;var k=g.invert([M/d,w/d]);m=+k[0].toFixed(2),h=+k[1].toFixed(2),$(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},$(),r({type:"worldMapCoordinates",title:_,description:u,display:y=>t`<div style="position: absolute; width: ${s}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${m??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[m??null,h??null],form:v})})}function Me(t){return t` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function De(t){return t()}function qe(t){return t({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function Ce(t){return(function(e={}){const{min:a,max:n,value:r,title:o,description:l,display:c}=typeof e=="string"?{value:e}:e;return t({type:"date",title:o,description:l,display:c,attributes:{min:a,max:n,value:r}})})}function je(t){return t` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function Ae(t){return t()}function Ge(t){return t}function Se(t){return t({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function ze(t){return t}function Pe(t){return(function(e={}){const{min:a,max:n,step:r,value:o,title:l,description:c,display:_}=typeof e=="string"?{value:e}:e,u=t({type:"time",title:l,description:c,display:_,getValue:s=>s.value?s.value:void 0,attributes:{min:a,max:n,step:r,value:o}});return u.output.remove(),u})}function Ee(t){return t`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function Te(t){return t()}function Ie(t){return t({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function Re(t,i,e){const a=t`<div>`;for(var n=0;n<i.length;n++){i[n];let r=t`<img height="125px" style="margin: 2px;" />`;r.src=await e.url(i[n]),a.append(r)}return a}function Ne(t){return(function(e={}){const{multiple:a,accept:n,title:r,description:o}=e,l=t({type:"file",title:r,description:o,attributes:{multiple:a,accept:n},action:c=>{c.input.onchange=()=>{c.value=a?c.input.files:c.input.files[0],c.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l})}function Le(t){return t`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function Be(t){return t()}function Ue(t){return t({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function Oe(t){return t}function Ve(t){return t({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function Ye(t){return t}function Fe(t){return(function(e={}){const{value:a,title:n,description:r,autocomplete:o="off",maxlength:l,minlength:c,pattern:_,placeholder:u,size:s,submit:d}=typeof e=="string"?{value:e}:e,p=t({type:"text",title:n,description:r,submit:d,attributes:{value:a,autocomplete:o,maxlength:l,minlength:c,pattern:_,placeholder:u,size:s}});return p.output.remove(),p.input.style.fontSize="1em",p})}function We(t){return t`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function He(t){return t()}function Ke(t){return t}function Qe(t){return t({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Ze(t){return t}function Je(t,i){return(function(a={}){const{value:n="",title:r,description:o,autocomplete:l,cols:c=45,rows:_=3,width:u,height:s,maxlength:d,placeholder:p,spellcheck:m,wrap:h,submit:v}=typeof a=="string"?{value:a}:a,f=t({form:i`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:r,description:o,submit:v,attributes:{autocomplete:l,cols:c,rows:_,maxlength:d,placeholder:p,spellcheck:m,wrap:h}});return f.output.remove(),u!=null&&(f.input.style.width=u),s!=null&&(f.input.style.height=s),v&&(f.submit.style.margin="0"),(r||o)&&(f.input.style.margin="3px 0"),f})}function Xe(t){return t`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function et(t){return t(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function tt(t){return t}function it(t){return t({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function nt(t){return t}function at(t,i){return(function(a={}){let{value:n,title:r,description:o,submit:l,options:c}=Array.isArray(a)?{options:a}:a;c=c.map(u=>typeof u=="string"?{value:u,label:u}:u);const _=t({type:"radio",title:r,description:o,submit:l,getValue:u=>{if(u.checked)return u.value;const s=Array.prototype.find.call(u,d=>d.checked);return s?s.value:void 0},form:i`
      <form>
        ${c.map(({value:u,label:s})=>{const d=i`<input type=radio name=input ${u===n?"checked":""} style="vertical-align: baseline;" />`;return d.setAttribute("value",u),i`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${d}
           ${s}
          </label>`})}
      </form>
    `});return _.output.remove(),_})}function ot(t){return t`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function rt(t){return t(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function lt(t){return t}function ut(t){return t({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function st(t){return t}function dt(t){return t({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function ct(t){return t}function ft(t,i){return(function(a={}){let{value:n,title:r,description:o,submit:l,options:c}=Array.isArray(a)?{options:a}:a;c=c.map(u=>typeof u=="string"?{value:u,label:u}:u);const _=t({type:"checkbox",title:r,description:o,submit:l,getValue:u=>u.length?Array.prototype.filter.call(u,s=>s.checked).map(s=>s.value):u.checked?u.value:!1,form:i`
      <form>
        ${c.map(({value:u,label:s})=>{const d=i`<input type=checkbox name=input ${(n||[]).indexOf(u)>-1?"checked":""} style="vertical-align: baseline;" />`;return d.setAttribute("value",u),i`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${d}
           ${s}
          </label>`})}
      </form>
    `});return _.output.remove(),_})}function pt(t){return t`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function mt(t){return t()}function _t(t){return t}function ht(t){return t({placeholder:"13+",title:"Your Age",submit:!0})}function vt(t){return t}function bt(t){return(function(e={}){const{value:a,title:n,description:r,placeholder:o,submit:l,step:c="any",min:_,max:u}=typeof e=="number"||typeof e=="string"?{value:+e}:e,s=t({type:"number",title:n,description:r,submit:l,attributes:{value:a,placeholder:o,step:c,min:_,max:u,autocomplete:"off"},getValue:d=>d.valueAsNumber});return s.output.remove(),s.input.style.width="auto",s.input.style.fontSize="1em",s})}function gt(t){return t`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function yt(t){return t({value:"password"})}function wt(t){return t}function xt(t){return t({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function kt(t){return t}function $t(t){return(function(e={}){const{value:a,title:n,description:r,autocomplete:o="off",maxlength:l,minlength:c,pattern:_,placeholder:u,size:s,submit:d}=typeof e=="string"?{value:e}:e,p=t({type:"password",title:n,description:r,submit:d,attributes:{value:a,autocomplete:o,maxlength:l,minlength:c,pattern:_,placeholder:u,size:s}});return p.output.remove(),p.input.style.fontSize="1em",p})}function Mt(t){return t`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function Dt(t,i){return(function(a){let{form:n,type:r="text",attributes:o={},action:l,getValue:c,title:_,description:u,format:s,display:d,submit:p,options:m}=a;const h=t`<div></div>`;if(n||(n=t`<form>
	<input name=input type=${r} />
  </form>`),Object.keys(o).forEach(v=>{const f=o[v];f!=null&&n.input.setAttribute(v,f)}),p&&n.append(t`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof p=="string"?p:"Submit"}" />`),n.append(t`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),_&&n.prepend(t`<div style="font: 700 0.9rem sans-serif;">${_}</div>`),u&&n.append(t`<div style="font-size: 0.85rem; font-style: italic;">${u}</div>`),s&&(s=typeof s=="function"?s:i.format(s)),l)l(n);else{const v=p?"onsubmit":r=="button"?"onclick":r=="checkbox"||r=="radio"?"onchange":"oninput";n[v]=f=>{f&&f.preventDefault();const b=c?c(n.input):n.input.value;if(n.output){const g=d?d(b):s?s(b):b;if(g instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(g)}else n.output.value=g}n.value=b,v!=="oninput"&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},v!=="oninput"&&(h.oninput=f=>f&&f.stopPropagation()&&f.preventDefault()),v!=="onsubmit"&&(n.onsubmit=f=>f&&f.preventDefault()),n[v]()}for(;n.childNodes.length;)h.appendChild(n.childNodes[0]);return n.append(h),n})}function qt(t){return t("d3-geo@1")}function Ct(t){return t("d3-format@1")}function jt(t){return t("topojson-client@3")}async function At(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function Gt(t,i){return t.feature(i,i.objects.land)}function St(t,i){return t.feature(i,i.objects.countries)}async function zt(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function Pt(t,i){return t.feature(i,i.objects.nation)}function Et(t,i){return t.feature(i,i.objects.states)}function Tt(t){return t.geoGraticule10()}function It(t){const i=t`License: [MIT](https://opensource.org/licenses/MIT)`;return i.value="MIT",i}function Rt(t){return t`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function Nt(t,i){const e=t.module();return e.variable(i()).define(["md"],C),e.variable(i("sliderDemo")).define("sliderDemo",["md"],j),e.variable(i("viewof a")).define("viewof a",["slider"],A),e.variable(i("a")).define("a",["Generators","viewof a"],(a,n)=>a.input(n)),e.variable(i("viewof a1")).define("viewof a1",["slider"],G),e.variable(i("a1")).define("a1",["Generators","viewof a1"],(a,n)=>a.input(n)),e.variable(i("viewof a1_1")).define("viewof a1_1",["slider"],S),e.variable(i("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,n)=>a.input(n)),e.variable(i("viewof a2")).define("viewof a2",["slider"],z),e.variable(i("a2")).define("a2",["Generators","viewof a2"],(a,n)=>a.input(n)),e.variable(i("viewof a3")).define("viewof a3",["slider"],P),e.variable(i("a3")).define("a3",["Generators","viewof a3"],(a,n)=>a.input(n)),e.variable(i("viewof a4")).define("viewof a4",["slider"],E),e.variable(i("a4")).define("a4",["Generators","viewof a4"],(a,n)=>a.input(n)),e.variable(i("viewof a5")).define("viewof a5",["slider"],T),e.variable(i("a5")).define("a5",["Generators","viewof a5"],(a,n)=>a.input(n)),e.variable(i()).define(["md"],I),e.variable(i("slider")).define("slider",["input"],R),e.variable(i("buttonDemo")).define("buttonDemo",["md"],N),e.variable(i("viewof b")).define("viewof b",["button"],L),e.variable(i("b")).define("b",["Generators","viewof b"],(a,n)=>a.input(n)),e.variable(i()).define(["b"],B),e.variable(i("viewof b1")).define("viewof b1",["button"],U),e.variable(i("b1")).define("b1",["Generators","viewof b1"],(a,n)=>a.input(n)),e.variable(i()).define(["b1"],O),e.variable(i("button")).define("button",["input"],V),e.variable(i("selectDemo")).define("selectDemo",["md"],Y),e.variable(i("viewof dd")).define("viewof dd",["select"],F),e.variable(i("dd")).define("dd",["Generators","viewof dd"],(a,n)=>a.input(n)),e.variable(i()).define(["dd"],W),e.variable(i("viewof dd1")).define("viewof dd1",["select"],H),e.variable(i("dd1")).define("dd1",["Generators","viewof dd1"],(a,n)=>a.input(n)),e.variable(i()).define(["dd1"],K),e.variable(i("viewof dd2")).define("viewof dd2",["select"],Q),e.variable(i("dd2")).define("dd2",["Generators","viewof dd2"],(a,n)=>a.input(n)),e.variable(i()).define(["dd2"],Z),e.variable(i("viewof dd3")).define("viewof dd3",["select"],J),e.variable(i("dd3")).define("dd3",["Generators","viewof dd3"],(a,n)=>a.input(n)),e.variable(i()).define(["dd3"],X),e.variable(i("select")).define("select",["input","html"],ee),e.variable(i("autoSelectDemo")).define("autoSelectDemo",["md"],te),e.variable(i("viewof as")).define("viewof as",["autoSelect","usa"],ie),e.variable(i("as")).define("as",["Generators","viewof as"],(a,n)=>a.input(n)),e.variable(i()).define(["as"],ne),e.variable(i("autoSelect")).define("autoSelect",["input","html"],ae),e.variable(i("colorDemo")).define("colorDemo",["md"],oe),e.variable(i("viewof c")).define("viewof c",["color"],re),e.variable(i("c")).define("c",["Generators","viewof c"],(a,n)=>a.input(n)),e.variable(i("viewof c1")).define("viewof c1",["color"],le),e.variable(i("c1")).define("c1",["Generators","viewof c1"],(a,n)=>a.input(n)),e.variable(i("color")).define("color",["input"],ue),e.variable(i("coordinatesDemo")).define("coordinatesDemo",["md"],se),e.variable(i("viewof coords1")).define("viewof coords1",["coordinates"],de),e.variable(i("coords1")).define("coords1",["Generators","viewof coords1"],(a,n)=>a.input(n)),e.variable(i()).define(["coords1"],ce),e.variable(i("viewof coords2")).define("viewof coords2",["coordinates"],fe),e.variable(i("coords2")).define("coords2",["Generators","viewof coords2"],(a,n)=>a.input(n)),e.variable(i()).define(["coords2"],pe),e.variable(i("coordinates")).define("coordinates",["html","input"],me),e.variable(i("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],_e),e.variable(i("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],he),e.variable(i("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,n)=>a.input(n)),e.variable(i()).define(["worldMap1"],ve),e.variable(i("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],be),e.variable(i("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],ge),e.variable(i("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],ye),e.variable(i("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,n)=>a.input(n)),e.variable(i()).define(["usaMap1"],we),e.variable(i("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],xe),e.variable(i("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,n)=>a.input(n)),e.variable(i()).define(["usaMap2"],ke),e.variable(i("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],$e),e.variable(i("dateDemo")).define("dateDemo",["md"],Me),e.variable(i("viewof d")).define("viewof d",["date"],De),e.variable(i("d")).define("d",["Generators","viewof d"],(a,n)=>a.input(n)),e.variable(i("viewof d1")).define("viewof d1",["date"],qe),e.variable(i("d1")).define("d1",["Generators","viewof d1"],(a,n)=>a.input(n)),e.variable(i("date")).define("date",["input"],Ce),e.variable(i("timeDemo")).define("timeDemo",["md"],je),e.variable(i("viewof t")).define("viewof t",["time"],Ae),e.variable(i("t")).define("t",["Generators","viewof t"],(a,n)=>a.input(n)),e.variable(i()).define(["t"],Ge),e.variable(i("viewof t1")).define("viewof t1",["time"],Se),e.variable(i("t1")).define("t1",["Generators","viewof t1"],(a,n)=>a.input(n)),e.variable(i()).define(["t1"],ze),e.variable(i("time")).define("time",["input"],Pe),e.variable(i("fileDemo")).define("fileDemo",["md"],Ee),e.variable(i("viewof e")).define("viewof e",["file"],Te),e.variable(i("e")).define("e",["Generators","viewof e"],(a,n)=>a.input(n)),e.variable(i("viewof e1")).define("viewof e1",["file"],Ie),e.variable(i("e1")).define("e1",["Generators","viewof e1"],(a,n)=>a.input(n)),e.variable(i()).define(["html","e1","Files"],Re),e.variable(i("file")).define("file",["input"],Ne),e.variable(i("textDemo")).define("textDemo",["md"],Le),e.variable(i("viewof f")).define("viewof f",["text"],Be),e.variable(i("f")).define("f",["Generators","viewof f"],(a,n)=>a.input(n)),e.variable(i("viewof f1")).define("viewof f1",["text"],Ue),e.variable(i("f1")).define("f1",["Generators","viewof f1"],(a,n)=>a.input(n)),e.variable(i()).define(["f1"],Oe),e.variable(i("viewof f2")).define("viewof f2",["text"],Ve),e.variable(i("f2")).define("f2",["Generators","viewof f2"],(a,n)=>a.input(n)),e.variable(i()).define(["f2"],Ye),e.variable(i("text")).define("text",["input"],Fe),e.variable(i("textareaDemo")).define("textareaDemo",["md"],We),e.variable(i("viewof g")).define("viewof g",["textarea"],He),e.variable(i("g")).define("g",["Generators","viewof g"],(a,n)=>a.input(n)),e.variable(i()).define(["g"],Ke),e.variable(i("viewof g1")).define("viewof g1",["textarea"],Qe),e.variable(i("g1")).define("g1",["Generators","viewof g1"],(a,n)=>a.input(n)),e.variable(i()).define(["g1"],Ze),e.variable(i("textarea")).define("textarea",["input","html"],Je),e.variable(i("radioDemo")).define("radioDemo",["md"],Xe),e.variable(i("viewof r")).define("viewof r",["radio"],et),e.variable(i("r")).define("r",["Generators","viewof r"],(a,n)=>a.input(n)),e.variable(i()).define(["r"],tt),e.variable(i("viewof r1")).define("viewof r1",["radio"],it),e.variable(i("r1")).define("r1",["Generators","viewof r1"],(a,n)=>a.input(n)),e.variable(i()).define(["r1"],nt),e.variable(i("radio")).define("radio",["input","html"],at),e.variable(i("checkboxDemo")).define("checkboxDemo",["md"],ot),e.variable(i("viewof ch")).define("viewof ch",["checkbox"],rt),e.variable(i("ch")).define("ch",["Generators","viewof ch"],(a,n)=>a.input(n)),e.variable(i()).define(["ch"],lt),e.variable(i("viewof ch1")).define("viewof ch1",["checkbox"],ut),e.variable(i("ch1")).define("ch1",["Generators","viewof ch1"],(a,n)=>a.input(n)),e.variable(i()).define(["ch1"],st),e.variable(i("viewof ch3")).define("viewof ch3",["checkbox"],dt),e.variable(i("ch3")).define("ch3",["Generators","viewof ch3"],(a,n)=>a.input(n)),e.variable(i()).define(["ch3"],ct),e.variable(i("checkbox")).define("checkbox",["input","html"],ft),e.variable(i("numberDemo")).define("numberDemo",["md"],pt),e.variable(i("viewof h")).define("viewof h",["number"],mt),e.variable(i("h")).define("h",["Generators","viewof h"],(a,n)=>a.input(n)),e.variable(i()).define(["h"],_t),e.variable(i("viewof h1")).define("viewof h1",["number"],ht),e.variable(i("h1")).define("h1",["Generators","viewof h1"],(a,n)=>a.input(n)),e.variable(i()).define(["h1"],vt),e.variable(i("number")).define("number",["input"],bt),e.variable(i("passwordDemo")).define("passwordDemo",["md"],gt),e.variable(i("viewof i")).define("viewof i",["password"],yt),e.variable(i("i")).define("i",["Generators","viewof i"],(a,n)=>a.input(n)),e.variable(i()).define(["i"],wt),e.variable(i("viewof i1")).define("viewof i1",["password"],xt),e.variable(i("i1")).define("i1",["Generators","viewof i1"],(a,n)=>a.input(n)),e.variable(i()).define(["i1"],kt),e.variable(i("password")).define("password",["input"],$t),e.variable(i()).define(["md"],Mt),e.variable(i("input")).define("input",["html","d3format"],Dt),e.variable(i("d3geo")).define("d3geo",["require"],qt),e.variable(i("d3format")).define("d3format",["require"],Ct),e.variable(i("topojson")).define("topojson",["require"],jt),e.variable(i("world")).define("world",At),e.variable(i("land")).define("land",["topojson","world"],Gt),e.variable(i("countries")).define("countries",["topojson","world"],St),e.variable(i("usa")).define("usa",zt),e.variable(i("nation")).define("nation",["topojson","usa"],Pt),e.variable(i("states")).define("states",["topojson","usa"],Et),e.variable(i("graticule")).define("graticule",["d3geo"],Tt),e.variable(i("viewof license")).define("viewof license",["md"],It),e.variable(i("license")).define("license",["Generators","viewof license"],(a,n)=>a.input(n)),e.variable(i()).define(["md"],Rt),e}function Lt(t){return t`# iNaturalist utils`}function Bt(){return(function(i="",e=null){let a="https://api.inaturalist.org/v1/observations",n={photos:!0,verifiable:!0,order_by:"votes",lat:53.807321,lng:-1.387255,radius:1400};return e!==null?n.taxon_id=e:n.taxon_name=i,n=Object.entries(n).map(([r,o])=>`${encodeURIComponent(r)}=${encodeURIComponent(o)}`).join("&"),a+"?"+n})}function Ut(t){return(function*(e){if(yield[],e.raw=="")yield[];else{let a;"inaturalist_id"in e?a=t(e.raw,e.inaturalist_id):a=t(e.raw),yield fetch(a).then(n=>n.json()).then(n=>{n.results.forEach(o=>o.photos.forEach(l=>{l.url_medium=l.url.replace("square","medium"),l.url_large=l.url.replace("square","original")}));let r=n.results;return r.sort((o,l)=>{o.faves_count-l.faves_count}),r})}})}function Ot(){return(function(i,e){return i=Math.ceil(i),e=Math.floor(e),Math.floor(Math.random()*(e-i+1))+i})}function Vt(t){return(function(e){let a=e.results.length;if(a==0)return;let n=t(0,a);return e.results[n]})}function Yt(t){return t`## Presentational functions`}function Ft(t,i){return(function(a){if(a.length==0)return t`Please wait, loading pictures...`;let n=a,r=n[0].taxon.default_photo.medium_url,o=r.replace("medium","original");return t`
<style> 
.collection {width: ${i}px}
.collection .species { display: inline-block; }
.collection img { display: block; width: 12em; height: 12em; object-fit: cover}

</style>

<h2>

<div class="collection">
<div class="species">
 <a href="${o}"  target="_blank"><img src="${r}"></div>


${n.map(l=>`<div class="species">
  <a href="${l.photos[0].url_large}"  target="_blank"><img src="${l.photos[0].url_medium}"></div>
`)}
</div>
`})}function Wt(t){return t`## Demo of functions`}function Ht(t){return t({raw:"Lagopus lagopus scotica",inaturalist_id:362643})}function Kt(t){return t({raw:"Lagopus lagopus"})}function Qt(t,i){return t(i)}function Zt(t){return t`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)`}function Jt(t,i){const e=t.module();return e.variable(i()).define(["md"],Lt),e.variable(i("call_api")).define("call_api",Bt),e.variable(i("inaturalist_query")).define("inaturalist_query",["call_api"],Ut),e.variable(i("getRandomInt")).define("getRandomInt",Ot),e.variable(i("get_random_inat_from_results")).define("get_random_inat_from_results",["getRandomInt"],Vt),e.variable(i()).define(["md"],Yt),e.variable(i("picture_gallery")).define("picture_gallery",["html","width"],Ft),e.variable(i()).define(["md"],Wt),e.variable(i("results2")).define("results2",["inaturalist_query"],Ht),e.variable(i("results")).define("results",["inaturalist_query"],Kt),e.variable(i()).define(["picture_gallery","results2"],Qt),e.variable(i()).define(["md"],Zt),e}function Xt(t){return t`# xeno-canto utils`}function ei(){return"https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl="}function ti(t,i,e){return(function(n="",r="",o="",l=""){let c=t+i+"query=",_=[];_.push(n),r!=""&&_.push(`type:"${r}"`),o!=""&&_.push(`q:"${o}"`),l!=""&&_.push(`cnt:"${e(l)}"`);let u=_.join(" ");return u=encodeURIComponent(u),c+u})}function ii(){return"https://xeno-canto.org/api/2/recordings?"}function ni(){return(function(t){return fetch(t).then(i=>i.json()).catch(i=>({recordings:[],status:"query_failed",message:"Query failed"}))})}function ai(t,i){return(async function*(a="",n="",r="",o="",l=3){if(yield{recordings:[],status:"query_incomplete",message:"Please wait, querying recordings..."},a=="")yield{recordings:[],status:"no_query",message:"No search terms entered"};else{let c=t(a,n,r,o),_=t(a,"","",""),u=await i(c);u.status="query_successful",u.message="Query Successful",u.recordings.length<l&&(console.log(`Fewer than ${l} found, using backup query`),u=await i(_),u.status="backup_query_successful",u.message="Query Successful, but only using backup URL"),yield u}})}function oi(){return(function(i){let e=i.file;return e=e.split("/"),e=e.filter(a=>a!=""),e=e.filter(a=>a!="http:"),e=e.filter(a=>a!="https:"),"https://"+e.join("/")})}function ri(t,i,e){return t`<audio controls><source src='${i(e.recordings[0])}' type='audio/mpeg'></audio>`}function li(){return(function(i){return i.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})})}function ui(t){return(function(e){let a=e.recordings.length;if(a==0)return;let n=t(0,a);return e.recordings[n]})}function si(){return(function(i,e){return i=Math.ceil(i),e=Math.floor(e),Math.floor(Math.random()*(e-i+1))+i})}function di(){return(function(i,e,a=!0){var n=new Array(e),r=i.length,o=new Array(r);if(e>r)if(a)e=r;else throw new RangeError("getRandom: more elements taken than available");for(;e--;){var l=Math.floor(Math.random()*r);n[e]=i[l in o?o[l]:l],o[l]=--r in o?o[r]:r}return n})}function ci(t){return t`## Presentational functions`}function fi(t){return t("troglodytes troglodytes","song","A","United Kingdom")}function pi(t){return t`## Demos of functions`}function mi(t){return t("htl@0.2")}function _i(t){return t.html}function hi(t,i){return t(i.recordings,3)}function vi(t,i){return(function(a,n){let r=`player_${a.id}`,o;n==null?o="player_null":o=`player_${n.id}`;function l(){let u=document.getElementsByClassName("birdaudio");for(var s of u)if(s.id!=r&&!s.paused){s.pause(),console.log("paused");let m=document.getElementsByClassName(`${s.id}_play_button`)[0];m.innerText="Paused"}let d=document.getElementsByClassName(`${r}_play_button`)[0],p=document.getElementById(`${r}`);p.paused?(p.play(),d.innerText="Pause",d.setAttribute("play_status","playing")):(p.pause(),d.innerText="Paused",d.setAttribute("play_status","paused"))}function c(){let u=document.getElementsByClassName(`${r}_play_button`)[0];u.innerText="Played",u.setAttribute("play_status","played"),document.getElementById(`${o}`).play();let d=document.getElementsByClassName(`${o}_play_button`)[0];d.setAttribute("play_status","playing"),d.innerText="Playing"}return t`<div>
 <audio id='${r}' 
        class = 'birdaudio'
        src="${i(a)}"
        onended=${()=>c()}>
 </audio>
 <div> 
  <button class="audioplayer ${r}_play_button" 
          onclick=${()=>l()}
          play_status = "unplayed"
          >Play</button> 

  
`})}function bi(t,i,e){return(function(n,r=20,o=!0){if(n.length==0)return t`Please wait, fetching audio recordings...`;let l=n.length,c=Math.min(r,l),_;return o?_=i(n,c):_=n.slice(0,c),t`<table><tr>
<th>Species</th>
<th>Type</th>
<th>Length</th>
<th>Audio</th>

</tr>

${_.map((s,d)=>{let p=_.slice(d+1,d+2);return p.length==0?p=null:p=p[0],t`<tr>

<td>${s.en} (<i>${s.gen} ${s.sp})

<td>${s.type}
<td>${s.length}
<td>${e(s,p)}`})}

</table>
 `})}function gi(t,i){return t(i.recordings)}function yi(t){return t`## Notes urls etc

[Docs for inaturalist api](https://api.inaturalist.org/v1/docs/#!/Observations/get_observations)

[Docs for xeno-canto api](https://www.xeno-canto.org/article/153)

[Docs for quering xeno-canto](https://www.xeno-canto.org/help/search)
`}function wi(t,i){const e=t.module();return e.variable(i()).define(["md"],Xt),e.variable(i("cors_anywhere")).define("cors_anywhere",ei),e.variable(i("generate_get_request_url")).define("generate_get_request_url",["cors_anywhere","xeno_endpoint","toTitleCase"],ti),e.variable(i("xeno_endpoint")).define("xeno_endpoint",ii),e.variable(i("get_results_async")).define("get_results_async",ni),e.variable(i("xeno_canto_query")).define("xeno_canto_query",["generate_get_request_url","get_results_async"],ai),e.variable(i("recording_to_mp3_url")).define("recording_to_mp3_url",oi),e.variable(i("player")).define("player",["html","recording_to_mp3_url","results"],ri),e.variable(i("toTitleCase")).define("toTitleCase",li),e.variable(i("get_random_recording_from_results")).define("get_random_recording_from_results",["getRandomInt"],ui),e.variable(i("getRandomInt")).define("getRandomInt",si),e.variable(i("get_n_from_array_at_random")).define("get_n_from_array_at_random",di),e.variable(i()).define(["md"],ci),e.variable(i("results")).define("results",["xeno_canto_query"],fi),e.variable(i()).define(["md"],pi),e.variable(i("htl")).define("htl",["require"],mi),e.variable(i("html")).define("html",["htl"],_i),e.variable(i("rec")).define("rec",["get_n_from_array_at_random","results"],hi),e.variable(i("audio_player_and_buttons")).define("audio_player_and_buttons",["html","recording_to_mp3_url"],vi),e.variable(i("table_of_audio")).define("table_of_audio",["html","get_n_from_array_at_random","audio_player_and_buttons"],bi),e.variable(i()).define(["table_of_audio","results"],gi),e.variable(i()).define(["md"],yi),e}function xi(t){return t`# UK Birdsong quiz`}function ki(t){return t`Are you able to identify common UK birds from their song?`}function $i(t){return t`**Settings:** 

Please select which birds you'd like to include in your quiz:`}function Mi(t,i){let e=t`<input id='select-quiz' 
                     type='text'
                     autocomplete='off'
                     inputmode='' 
                     value='20 most common birds'    
                     placeholder="Select which birds to include in quiz..." 
                     style="font-size: 1em; width: 320px" 
                     list=options2>

          <datalist id="options2">
              ${i.map(l=>Object.assign(t`<option>`,{value:l.name}))}
          </datalist>`,a=t`<input name="file_input" class="inputfile" type="file">`,n=t`<br><span>or upload custom bird list .csv created <a href='https://observablehq.com/@robinl/birdsong-quiz-list-creator'>here:`,r=t`<style>
    .inputfile {padding-left: 10px}`,o=t`${e}${n}${r}${a}`;return o.value=e.children[0].value,e.onchange=()=>{a.value=null,o.value=e.children[0].value,o.dispatchEvent(new CustomEvent("input"))},e.children[0].onfocus=function(){e.children[0].value=""},e.children[0].onclick=function(){e.children[0].value=""},a.onchange=()=>{let c=a.files[0].text();o.value=c,e.children[0].value="Custom upload...",o.dispatchEvent(new CustomEvent("input"))},o}function Di(t){return t`**Quiz**`}function qi(t,i,e,a,n,r,o,l,c,_,u,s,d,p,m,h,v){let f=t`
  Play the audio clips below, enter your answer and hit submit.
  `,b=i(),g=e`<input id='birdinputbox' 
                     name="dep" 
                     type="text"  
                     inputmode='' 
                     value=''    
                     placeholder="Choose your answer from this list..." 
                     style="font-size: 1em; width:${a}px" 
                     list=options>

          <datalist id="options">
              ${n.map(w=>Object.assign(e`<option>`,{label:w.common_name,value:w.scientific_name}))}
          </datalist>`,x=e`<input type="button" value="Display clue">`,$=r(),D=e`<input type="button" value="Submit answer">`,y="",M="";if(x.onclick=()=>{document.getElementById("bird_gallery").style.display="inline-block"},g.onchange=()=>{document.getElementById("birdinputbox").setAttribute("inputmode","none")},D.onclick=()=>{o.value+=1;let w=g.children[0].value,k=l.scientific_name,q=w==k;c.value=w,_.value=k,q&&(u.value+=1),s.value+=1,document.getElementById("birdinputbox").setAttribute("inputmode",""),document.getElementById("bird_gallery").style.display="none"},d!=""){let w="👎";d==p&&(w="✔"),y=t`${w} The answer to the previous question was ${m[d].common_name} (*${d.toLowerCase()}*).  You chose ${m[p].common_name}  (*${p.toLowerCase()}*).`}return M=t`You currently have ${h} points out of ${v}`,e`${f}
             ${b}
             ${$}
             ${g}
             ${D}
             ${x}
              ${y}
             ${M}`}function Ci(t){return t`You can find a more comprehensive list of audio recordings for each bird, and photos of them [here](https://robinlinacre.com/birdsong/).`}function ji(t,i,e,a,n,r){return(function(){return t.recordings.length==0?i`Please wait, loading recordings`:e`<style>
  .audio_container {display: inline-block;}
  .audio_container div {display: block;  text-align: center}
  </style>
<div>
  ${a.map(o=>e`<div class='audio_container'><div><a href='${o.url}'>${n(o.type)}<div><audio controls><source src='${r(o)}' type='audio/mpeg'>   </audio>`)}`})}function Ai(t,i,e,a){return(function(){let n=t(i,6);return e`<style> 
.collection {width: ${a}px; }
.collection .species { display: inline-block }
.collection img { display: inline-block; width: 6; height: 6em; object-fit: cover}

</style>

<h2>

<div class="collection" id="bird_gallery" style="display: none" >

${n.map(r=>`<div class="species">
  <img src="${r.photos[0].url_medium}">
`)}
</div>
`})}function Gi(t,i){let e={raw:t.scientific_name};return i(e)}function Si(){return 0}function zi(){return 0}function Pi(){return 0}function Ei(){return""}function Ti(){return""}function Ii(){return!1}function Ri(t){return t`
- Present user with sound clips from a random bird
- Use can see whether song or call
- User can select how common
`}function Ni(t,i){return t.csv("https://raw.githubusercontent.com/RobinL/birds_list/master/the_british_list.csv",t.autoType).then(e=>e.sort(i))}function Li(t){let i={};return t.forEach(e=>i[e.scientific_name]=e),i}function Bi(t,i,e){if(t in i){let a=i[t].url;return e.csv(a)}else return e.csvParse(t)}function Ui(){return(function(t,i){return t.common_name>i.common_name?1:-1})}function Oi(t){return t("d3")}function Vi(t,i){return t(i.scientific_name,"","A","United Kingdom")}function Yi(t,i){let e=t.recordings.length;if(e==0)return[];let a=Math.min(e,6);return i(t.recordings,a)}function Fi(t,i,e){return i(e,1)[0]}function Wi(){return[{name:"10 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_10.csv"},{name:"20 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_20.csv"},{name:"30 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_30.csv"},{name:"40 most common birds",url:"https://raw.githubusercontent.com/RobinL/birds_list/master/quiz_lists/top_40.csv"}]}function Hi(t){let i={};return t.forEach(e=>i[e.name]=e),i}function Ki(t,i){const e=t.module();e.variable(i("title")).define("title",["md"],xi),e.variable(i("tag")).define("tag",["md"],ki),e.variable(i("settings")).define("settings",["md"],$i),e.variable(i("viewof select_your_quiz")).define("viewof select_your_quiz",["html","quiz_list_urls"],Mi),e.variable(i("select_your_quiz")).define("select_your_quiz",["Generators","viewof select_your_quiz"],(o,l)=>o.input(l)),e.variable(i("quiz")).define("quiz",["md"],Di),e.variable(i("my_interface")).define("my_interface",["md","get_audio_controls","html","width","quiz_birds","get_inaturalist_photos","mutable total","random_bird","mutable previous_selection","mutable previous_answer","mutable score","mutable trigger","previous_answer","previous_selection","scientific_name_lookup","score","total"],qi),e.variable(i("other_link")).define("other_link",["md"],Ci);const a=t.module(Nt);e.import("file",a),e.variable(i("get_audio_controls")).define("get_audio_controls",["results","md","html","random_recordings","toTitleCase","recording_to_mp3_url"],ji),e.variable(i("get_inaturalist_photos")).define("get_inaturalist_photos",["get_n_from_array_at_random","inaturalist_pics","html","width"],Ai);const n=t.module(Jt);e.import("inaturalist_query",n),e.variable(i("inaturalist_pics")).define("inaturalist_pics",["random_bird","inaturalist_query"],Gi),e.define("initial trigger",Si),e.variable(i("mutable trigger")).define("mutable trigger",["Mutable","initial trigger"],(o,l)=>new o(l)),e.variable(i("trigger")).define("trigger",["mutable trigger"],o=>o.generator),e.define("initial score",zi),e.variable(i("mutable score")).define("mutable score",["Mutable","initial score"],(o,l)=>new o(l)),e.variable(i("score")).define("score",["mutable score"],o=>o.generator),e.define("initial total",Pi),e.variable(i("mutable total")).define("mutable total",["Mutable","initial total"],(o,l)=>new o(l)),e.variable(i("total")).define("total",["mutable total"],o=>o.generator),e.define("initial previous_answer",Ei),e.variable(i("mutable previous_answer")).define("mutable previous_answer",["Mutable","initial previous_answer"],(o,l)=>new o(l)),e.variable(i("previous_answer")).define("previous_answer",["mutable previous_answer"],o=>o.generator),e.define("initial previous_selection",Ti),e.variable(i("mutable previous_selection")).define("mutable previous_selection",["Mutable","initial previous_selection"],(o,l)=>new o(l)),e.variable(i("previous_selection")).define("previous_selection",["mutable previous_selection"],o=>o.generator),e.define("initial pictures_visibile",Ii),e.variable(i("mutable pictures_visibile")).define("mutable pictures_visibile",["Mutable","initial pictures_visibile"],(o,l)=>new o(l)),e.variable(i("pictures_visibile")).define("pictures_visibile",["mutable pictures_visibile"],o=>o.generator),e.variable(i()).define(["md"],Ri),e.variable(i("bird_list")).define("bird_list",["d3","compare_birds_sort"],Ni),e.variable(i("scientific_name_lookup")).define("scientific_name_lookup",["bird_list"],Li),e.variable(i("quiz_birds")).define("quiz_birds",["select_your_quiz","quiz_name_to_url_lookup","d3"],Bi),e.variable(i("compare_birds_sort")).define("compare_birds_sort",Ui),e.variable(i("d3")).define("d3",["require"],Oi);const r=t.module(wi);return e.import("xeno_canto_query",r),e.import("get_n_from_array_at_random",r),e.import("recording_to_mp3_url",r),e.import("toTitleCase",r),e.variable(i("results")).define("results",["xeno_canto_query","random_bird"],Vi),e.variable(i("random_recordings")).define("random_recordings",["results","get_n_from_array_at_random"],Yi),e.variable(i("random_bird")).define("random_bird",["trigger","get_n_from_array_at_random","quiz_birds"],Fi),e.variable(i("quiz_list_urls")).define("quiz_list_urls",Wi),e.variable(i("quiz_name_to_url_lookup")).define("quiz_name_to_url_lookup",["quiz_list_urls"],Hi),e}export{Ki as default};
