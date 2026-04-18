function D(e){return e`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function T(e){return e`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function $(e){return e()}function M(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function A(e){return e({min:0,max:1,step:.01,format:t=>`${Math.round(100*t)} per cent`,description:"Zero to one, formatted with a custom function"})}function G(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function P(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function E(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function I(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function L(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function W(e){return(function(n={}){let{min:a=0,max:i=1,value:o=(i+a)/2,step:r="any",precision:s=2,title:u,description:d,getValue:l,format:f,display:p,submit:g}=typeof n=="number"?{value:n}:n;return s=Math.pow(10,s),l||(l=h=>Math.round(h.valueAsNumber*s)/s),e({type:"range",title:u,description:d,submit:g,format:f,display:p,attributes:{min:a,max:i,step:r,value:o},getValue:l})})}function q(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function H(e){return e()}function z(e){return!this}function N(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function O(e){return new Date(Date.now()).toUTCString()}function F(e){return(function(n={}){const{value:a="Ok",title:i,description:o,disabled:r}=typeof n=="string"?{value:n}:n,s=e({type:"button",title:i,description:o,attributes:{disabled:r,value:a}});return s.output.remove(),s})}function R(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function U(e){return e(["Spring","Summer","Fall","Winter"])}function B(e){return e}function Q(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function Y(e){return e}function V(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function J(e){return e}function X(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function Z(e){return e}function K(e,t){return(function(a={}){let{value:i,title:o,description:r,submit:s,multiple:u,size:d,options:l}=Array.isArray(a)?{options:a}:a;l=l.map(p=>typeof p=="object"?p:{value:p,label:p});const f=e({type:"select",title:o,description:r,submit:s,getValue:p=>{const g=Array.prototype.filter.call(p.options,h=>h.selected).map(h=>h.value);return u?g:g[0]},form:t`
      <form>
        <select name="input" ${u?`multiple size="${d||l.length}"`:""}>
          ${l.map(({value:p,label:g})=>Object.assign(t`<option>`,{value:p,selected:Array.isArray(i)?i.includes(p):i===p,textContent:g}))}
        </select>
      </form>
    `});return f.output.remove(),f})}function tt(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function et(e,t){return e({options:t.objects.states.geometries.map(n=>n.properties.name),placeholder:"Search for a US state . . ."})}function it(e){return e}function nt(e,t){return(function(a={}){const{value:i,title:o,description:r,autocomplete:s="off",placeholder:u,size:d,options:l,list:f="options"}=Array.isArray(a)?{options:a}:a,p=new Set(l),g=e({type:"text",title:o,description:r,action:h=>{h.value=h.input.value=i||"",h.onsubmit=m=>m.preventDefault(),h.input.oninput=function(m){m.stopPropagation(),h.value=h.input.value,p.has(h.input.value)&&h.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${u}" style="font-size: 1em;" list=${f}>
          <datalist id="${f}">
              ${l.map(h=>Object.assign(t`<option>`,{value:h}))}
          </datalist>
      </form>
      `});return g.output.remove(),g})}function at(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ot(e){return e()}function rt(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function st(e){return(function(n={}){const{value:a="#000000",title:i,description:o,submit:r,display:s}=typeof n=="string"?{value:n}:n,u=e({type:"color",title:i,description:o,submit:r,display:s,attributes:{value:a}});return(i||o)&&(u.input.style.margin="5px 0"),u})}function lt(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function ut(e){return e()}function dt(e){return e}function ft(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function pt(e){return e}function ct(e,t){return(function(a={}){const{value:i=[],title:o,description:r,submit:s}=Array.isArray(a)?{value:a}:a;let[u,d]=i;u=u??"",d=d??"";const l=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${u}" />`,f=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${d}" />`,p=t({type:"coordinates",title:o,description:r,submit:s,getValue:()=>{const g=l.valueAsNumber,h=f.valueAsNumber;return[isNaN(g)?null:g,isNaN(h)?null:h]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${l}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${f}
        </label>
      </form>
    `});return p.output.remove(),p})}function ht(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function mt(e){return e([-122.27,37.87])}function gt(e){return e}function vt(e,t,n,a,i,o,r){return(function(u={}){const{value:d=[],title:l,description:f,width:p=400}=Array.isArray(u)?{value:u}:u,g=Math.round(210/400*p);let[h,m]=d;h=h??null,m=m??null;const v=e`<form style="width: ${p}px;"></form>`,c=t.context2d(p,g),b=c.canvas;b.style.margin="10px 0 0";const w=n.geoNaturalEarth1().precision(.1).fitSize([p,g],{type:"Sphere"}),y=n.geoPath(w,c).pointRadius(2.5);v.append(b);function x(){if(c.fillStyle="#fff",c.fillRect(0,0,p,g),c.beginPath(),y(a),c.lineWidth=.35,c.strokeStyle="#ddd",c.stroke(),c.beginPath(),y(i),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),y(o),c.strokeStyle="#aaa",c.stroke(),h!=null&&m!=null){const _={type:"MultiPoint",coordinates:[[h,m]]};c.beginPath(),y(_),c.fillStyle="#f00",c.fill()}}return b.onclick=function(_){const{offsetX:j,offsetY:C}=_;var k=w.invert([j,C]);h=+k[0].toFixed(2),m=+k[1].toFixed(2),x(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),r({type:"worldMapCoordinates",title:l,description:f,display:_=>e`<div style="position: absolute; width: ${p}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${h??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${m??""} 
          </div>`,getValue:()=>[h??null,m??null],form:v})})}function bt(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function wt(e){return e([-122.27,37.87])}function yt(e){return e}function _t(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function xt(e){return e}function kt(e,t,n,a,i,o){return(function(s={}){const{value:u=[],title:d,description:l,width:f=400}=Array.isArray(s)?{value:s}:s,p=f/960,g=p*600;let[h,m]=u;h=h??null,m=m??null;const v=e`<form style="width: ${f}px;"></form>`,c=t.context2d(f,g),b=c.canvas;b.style.margin="5px 0 0";const w=n.geoAlbersUsa().scale(1280).translate([480,300]),y=n.geoPath().context(c).pointRadius(2.5/p);v.append(b);function x(){if(c.clearRect(0,0,f,g),c.save(),c.scale(p,p),c.lineWidth=.35/p,c.beginPath(),y(a),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),y(i),c.strokeStyle="#aaa",c.stroke(),h!=null&&m!=null){const _={type:"MultiPoint",coordinates:[w([h,m])]};c.beginPath(),y(_),c.fillStyle="#f00",c.fill()}c.restore()}return b.onclick=function(_){const{offsetX:j,offsetY:C}=_;var k=w.invert([j/p,C/p]);h=+k[0].toFixed(2),m=+k[1].toFixed(2),x(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),o({type:"worldMapCoordinates",title:d,description:l,display:_=>e`<div style="position: absolute; width: ${f}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${h??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${m??""} 
          </div>`,getValue:()=>[h??null,m??null],form:v})})}function St(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function jt(e){return e()}function Ct(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function Dt(e){return(function(n={}){const{min:a,max:i,value:o,title:r,description:s,display:u}=typeof n=="string"?{value:n}:n;return e({type:"date",title:r,description:s,display:u,attributes:{min:a,max:i,value:o}})})}function Tt(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function $t(e){return e()}function Mt(e){return e}function At(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function Gt(e){return e}function Pt(e){return(function(n={}){const{min:a,max:i,step:o,value:r,title:s,description:u,display:d}=typeof n=="string"?{value:n}:n,l=e({type:"time",title:s,description:u,display:d,getValue:f=>f.value?f.value:void 0,attributes:{min:a,max:i,step:o,value:r}});return l.output.remove(),l})}function Et(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function It(e){return e()}function Lt(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function Wt(e,t,n){const a=e`<div>`;for(var i=0;i<t.length;i++){t[i];let o=e`<img height="125px" style="margin: 2px;" />`;o.src=await n.url(t[i]),a.append(o)}return a}function qt(e){return(function(n={}){const{multiple:a,accept:i,title:o,description:r}=n,s=e({type:"file",title:o,description:r,attributes:{multiple:a,accept:i},action:u=>{u.input.onchange=()=>{u.value=a?u.input.files:u.input.files[0],u.dispatchEvent(new CustomEvent("input"))}}});return s.output.remove(),s.input.onchange(),s})}function Ht(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function zt(e){return e()}function Nt(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function Ot(e){return e}function Ft(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function Rt(e){return e}function Ut(e){return(function(n={}){const{value:a,title:i,description:o,autocomplete:r="off",maxlength:s,minlength:u,pattern:d,placeholder:l,size:f,submit:p}=typeof n=="string"?{value:n}:n,g=e({type:"text",title:i,description:o,submit:p,attributes:{value:a,autocomplete:r,maxlength:s,minlength:u,pattern:d,placeholder:l,size:f}});return g.output.remove(),g.input.style.fontSize="1em",g})}function Bt(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function Qt(e){return e()}function Yt(e){return e}function Vt(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Jt(e){return e}function Xt(e,t){return(function(a={}){const{value:i="",title:o,description:r,autocomplete:s,cols:u=45,rows:d=3,width:l,height:f,maxlength:p,placeholder:g,spellcheck:h,wrap:m,submit:v}=typeof a=="string"?{value:a}:a,c=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${i}</textarea></form>`,title:o,description:r,submit:v,attributes:{autocomplete:s,cols:u,rows:d,maxlength:p,placeholder:g,spellcheck:h,wrap:m}});return c.output.remove(),l!=null&&(c.input.style.width=l),f!=null&&(c.input.style.height=f),v&&(c.submit.style.margin="0"),(o||r)&&(c.input.style.margin="3px 0"),c})}function Zt(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Kt(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function te(e){return e}function ee(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function ie(e){return e}function ne(e,t){return(function(a={}){let{value:i,title:o,description:r,submit:s,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(l=>typeof l=="string"?{value:l,label:l}:l);const d=e({type:"radio",title:o,description:r,submit:s,getValue:l=>{if(l.checked)return l.value;const f=Array.prototype.find.call(l,p=>p.checked);return f?f.value:void 0},form:t`
      <form>
        ${u.map(({value:l,label:f})=>{const p=t`<input type=radio name=input ${l===i?"checked":""} style="vertical-align: baseline;" />`;return p.setAttribute("value",l),t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${p}
           ${f}
          </label>`})}
      </form>
    `});return d.output.remove(),d})}function ae(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function oe(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function re(e){return e}function se(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function le(e){return e}function ue(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function de(e){return e}function fe(e,t){return(function(a={}){let{value:i,title:o,description:r,submit:s,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(l=>typeof l=="string"?{value:l,label:l}:l);const d=e({type:"checkbox",title:o,description:r,submit:s,getValue:l=>l.length?Array.prototype.filter.call(l,f=>f.checked).map(f=>f.value):l.checked?l.value:!1,form:t`
      <form>
        ${u.map(({value:l,label:f})=>{const p=t`<input type=checkbox name=input ${(i||[]).indexOf(l)>-1?"checked":""} style="vertical-align: baseline;" />`;return p.setAttribute("value",l),t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${p}
           ${f}
          </label>`})}
      </form>
    `});return d.output.remove(),d})}function pe(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function ce(e){return e()}function he(e){return e}function me(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function ge(e){return e}function ve(e){return(function(n={}){const{value:a,title:i,description:o,placeholder:r,submit:s,step:u="any",min:d,max:l}=typeof n=="number"||typeof n=="string"?{value:+n}:n,f=e({type:"number",title:i,description:o,submit:s,attributes:{value:a,placeholder:r,step:u,min:d,max:l,autocomplete:"off"},getValue:p=>p.valueAsNumber});return f.output.remove(),f.input.style.width="auto",f.input.style.fontSize="1em",f})}function be(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function we(e){return e({value:"password"})}function ye(e){return e}function _e(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function xe(e){return e}function ke(e){return(function(n={}){const{value:a,title:i,description:o,autocomplete:r="off",maxlength:s,minlength:u,pattern:d,placeholder:l,size:f,submit:p}=typeof n=="string"?{value:n}:n,g=e({type:"password",title:i,description:o,submit:p,attributes:{value:a,autocomplete:r,maxlength:s,minlength:u,pattern:d,placeholder:l,size:f}});return g.output.remove(),g.input.style.fontSize="1em",g})}function Se(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function je(e,t){return(function(a){let{form:i,type:o="text",attributes:r={},action:s,getValue:u,title:d,description:l,format:f,display:p,submit:g,options:h}=a;const m=e`<div></div>`;if(i||(i=e`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(r).forEach(v=>{const c=r[v];c!=null&&i.input.setAttribute(v,c)}),g&&i.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof g=="string"?g:"Submit"}" />`),i.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),d&&i.prepend(e`<div style="font: 700 0.9rem sans-serif;">${d}</div>`),l&&i.append(e`<div style="font-size: 0.85rem; font-style: italic;">${l}</div>`),f&&(f=typeof f=="function"?f:t.format(f)),s)s(i);else{const v=g?"onsubmit":o=="button"?"onclick":o=="checkbox"||o=="radio"?"onchange":"oninput";i[v]=c=>{c&&c.preventDefault();const b=u?u(i.input):i.input.value;if(i.output){const w=p?p(b):f?f(b):b;if(w instanceof window.Element){for(;i.output.hasChildNodes();)i.output.removeChild(i.output.lastChild);i.output.append(w)}else i.output.value=w}i.value=b,v!=="oninput"&&i.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},v!=="oninput"&&(m.oninput=c=>c&&c.stopPropagation()&&c.preventDefault()),v!=="onsubmit"&&(i.onsubmit=c=>c&&c.preventDefault()),i[v]()}for(;i.childNodes.length;)m.appendChild(i.childNodes[0]);return i.append(m),i})}function Ce(e){return e("d3-geo@1")}function De(e){return e("d3-format@1")}function Te(e){return e("topojson-client@3")}async function $e(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function Me(e,t){return e.feature(t,t.objects.land)}function Ae(e,t){return e.feature(t,t.objects.countries)}async function Ge(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function Pe(e,t){return e.feature(t,t.objects.nation)}function Ee(e,t){return e.feature(t,t.objects.states)}function Ie(e){return e.geoGraticule10()}function Le(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function We(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function qe(e,t){const n=e.module();return n.variable(t()).define(["md"],D),n.variable(t("sliderDemo")).define("sliderDemo",["md"],T),n.variable(t("viewof a")).define("viewof a",["slider"],$),n.variable(t("a")).define("a",["Generators","viewof a"],(a,i)=>a.input(i)),n.variable(t("viewof a1")).define("viewof a1",["slider"],M),n.variable(t("a1")).define("a1",["Generators","viewof a1"],(a,i)=>a.input(i)),n.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],A),n.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,i)=>a.input(i)),n.variable(t("viewof a2")).define("viewof a2",["slider"],G),n.variable(t("a2")).define("a2",["Generators","viewof a2"],(a,i)=>a.input(i)),n.variable(t("viewof a3")).define("viewof a3",["slider"],P),n.variable(t("a3")).define("a3",["Generators","viewof a3"],(a,i)=>a.input(i)),n.variable(t("viewof a4")).define("viewof a4",["slider"],E),n.variable(t("a4")).define("a4",["Generators","viewof a4"],(a,i)=>a.input(i)),n.variable(t("viewof a5")).define("viewof a5",["slider"],I),n.variable(t("a5")).define("a5",["Generators","viewof a5"],(a,i)=>a.input(i)),n.variable(t()).define(["md"],L),n.variable(t("slider")).define("slider",["input"],W),n.variable(t("buttonDemo")).define("buttonDemo",["md"],q),n.variable(t("viewof b")).define("viewof b",["button"],H),n.variable(t("b")).define("b",["Generators","viewof b"],(a,i)=>a.input(i)),n.variable(t()).define(["b"],z),n.variable(t("viewof b1")).define("viewof b1",["button"],N),n.variable(t("b1")).define("b1",["Generators","viewof b1"],(a,i)=>a.input(i)),n.variable(t()).define(["b1"],O),n.variable(t("button")).define("button",["input"],F),n.variable(t("selectDemo")).define("selectDemo",["md"],R),n.variable(t("viewof dd")).define("viewof dd",["select"],U),n.variable(t("dd")).define("dd",["Generators","viewof dd"],(a,i)=>a.input(i)),n.variable(t()).define(["dd"],B),n.variable(t("viewof dd1")).define("viewof dd1",["select"],Q),n.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(a,i)=>a.input(i)),n.variable(t()).define(["dd1"],Y),n.variable(t("viewof dd2")).define("viewof dd2",["select"],V),n.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(a,i)=>a.input(i)),n.variable(t()).define(["dd2"],J),n.variable(t("viewof dd3")).define("viewof dd3",["select"],X),n.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(a,i)=>a.input(i)),n.variable(t()).define(["dd3"],Z),n.variable(t("select")).define("select",["input","html"],K),n.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],tt),n.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],et),n.variable(t("as")).define("as",["Generators","viewof as"],(a,i)=>a.input(i)),n.variable(t()).define(["as"],it),n.variable(t("autoSelect")).define("autoSelect",["input","html"],nt),n.variable(t("colorDemo")).define("colorDemo",["md"],at),n.variable(t("viewof c")).define("viewof c",["color"],ot),n.variable(t("c")).define("c",["Generators","viewof c"],(a,i)=>a.input(i)),n.variable(t("viewof c1")).define("viewof c1",["color"],rt),n.variable(t("c1")).define("c1",["Generators","viewof c1"],(a,i)=>a.input(i)),n.variable(t("color")).define("color",["input"],st),n.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],lt),n.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],ut),n.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(a,i)=>a.input(i)),n.variable(t()).define(["coords1"],dt),n.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ft),n.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(a,i)=>a.input(i)),n.variable(t()).define(["coords2"],pt),n.variable(t("coordinates")).define("coordinates",["html","input"],ct),n.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],ht),n.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],mt),n.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,i)=>a.input(i)),n.variable(t()).define(["worldMap1"],gt),n.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],vt),n.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],bt),n.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],wt),n.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,i)=>a.input(i)),n.variable(t()).define(["usaMap1"],yt),n.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],_t),n.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,i)=>a.input(i)),n.variable(t()).define(["usaMap2"],xt),n.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],kt),n.variable(t("dateDemo")).define("dateDemo",["md"],St),n.variable(t("viewof d")).define("viewof d",["date"],jt),n.variable(t("d")).define("d",["Generators","viewof d"],(a,i)=>a.input(i)),n.variable(t("viewof d1")).define("viewof d1",["date"],Ct),n.variable(t("d1")).define("d1",["Generators","viewof d1"],(a,i)=>a.input(i)),n.variable(t("date")).define("date",["input"],Dt),n.variable(t("timeDemo")).define("timeDemo",["md"],Tt),n.variable(t("viewof t")).define("viewof t",["time"],$t),n.variable(t("t")).define("t",["Generators","viewof t"],(a,i)=>a.input(i)),n.variable(t()).define(["t"],Mt),n.variable(t("viewof t1")).define("viewof t1",["time"],At),n.variable(t("t1")).define("t1",["Generators","viewof t1"],(a,i)=>a.input(i)),n.variable(t()).define(["t1"],Gt),n.variable(t("time")).define("time",["input"],Pt),n.variable(t("fileDemo")).define("fileDemo",["md"],Et),n.variable(t("viewof e")).define("viewof e",["file"],It),n.variable(t("e")).define("e",["Generators","viewof e"],(a,i)=>a.input(i)),n.variable(t("viewof e1")).define("viewof e1",["file"],Lt),n.variable(t("e1")).define("e1",["Generators","viewof e1"],(a,i)=>a.input(i)),n.variable(t()).define(["html","e1","Files"],Wt),n.variable(t("file")).define("file",["input"],qt),n.variable(t("textDemo")).define("textDemo",["md"],Ht),n.variable(t("viewof f")).define("viewof f",["text"],zt),n.variable(t("f")).define("f",["Generators","viewof f"],(a,i)=>a.input(i)),n.variable(t("viewof f1")).define("viewof f1",["text"],Nt),n.variable(t("f1")).define("f1",["Generators","viewof f1"],(a,i)=>a.input(i)),n.variable(t()).define(["f1"],Ot),n.variable(t("viewof f2")).define("viewof f2",["text"],Ft),n.variable(t("f2")).define("f2",["Generators","viewof f2"],(a,i)=>a.input(i)),n.variable(t()).define(["f2"],Rt),n.variable(t("text")).define("text",["input"],Ut),n.variable(t("textareaDemo")).define("textareaDemo",["md"],Bt),n.variable(t("viewof g")).define("viewof g",["textarea"],Qt),n.variable(t("g")).define("g",["Generators","viewof g"],(a,i)=>a.input(i)),n.variable(t()).define(["g"],Yt),n.variable(t("viewof g1")).define("viewof g1",["textarea"],Vt),n.variable(t("g1")).define("g1",["Generators","viewof g1"],(a,i)=>a.input(i)),n.variable(t()).define(["g1"],Jt),n.variable(t("textarea")).define("textarea",["input","html"],Xt),n.variable(t("radioDemo")).define("radioDemo",["md"],Zt),n.variable(t("viewof r")).define("viewof r",["radio"],Kt),n.variable(t("r")).define("r",["Generators","viewof r"],(a,i)=>a.input(i)),n.variable(t()).define(["r"],te),n.variable(t("viewof r1")).define("viewof r1",["radio"],ee),n.variable(t("r1")).define("r1",["Generators","viewof r1"],(a,i)=>a.input(i)),n.variable(t()).define(["r1"],ie),n.variable(t("radio")).define("radio",["input","html"],ne),n.variable(t("checkboxDemo")).define("checkboxDemo",["md"],ae),n.variable(t("viewof ch")).define("viewof ch",["checkbox"],oe),n.variable(t("ch")).define("ch",["Generators","viewof ch"],(a,i)=>a.input(i)),n.variable(t()).define(["ch"],re),n.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],se),n.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(a,i)=>a.input(i)),n.variable(t()).define(["ch1"],le),n.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],ue),n.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(a,i)=>a.input(i)),n.variable(t()).define(["ch3"],de),n.variable(t("checkbox")).define("checkbox",["input","html"],fe),n.variable(t("numberDemo")).define("numberDemo",["md"],pe),n.variable(t("viewof h")).define("viewof h",["number"],ce),n.variable(t("h")).define("h",["Generators","viewof h"],(a,i)=>a.input(i)),n.variable(t()).define(["h"],he),n.variable(t("viewof h1")).define("viewof h1",["number"],me),n.variable(t("h1")).define("h1",["Generators","viewof h1"],(a,i)=>a.input(i)),n.variable(t()).define(["h1"],ge),n.variable(t("number")).define("number",["input"],ve),n.variable(t("passwordDemo")).define("passwordDemo",["md"],be),n.variable(t("viewof i")).define("viewof i",["password"],we),n.variable(t("i")).define("i",["Generators","viewof i"],(a,i)=>a.input(i)),n.variable(t()).define(["i"],ye),n.variable(t("viewof i1")).define("viewof i1",["password"],_e),n.variable(t("i1")).define("i1",["Generators","viewof i1"],(a,i)=>a.input(i)),n.variable(t()).define(["i1"],xe),n.variable(t("password")).define("password",["input"],ke),n.variable(t()).define(["md"],Se),n.variable(t("input")).define("input",["html","d3format"],je),n.variable(t("d3geo")).define("d3geo",["require"],Ce),n.variable(t("d3format")).define("d3format",["require"],De),n.variable(t("topojson")).define("topojson",["require"],Te),n.variable(t("world")).define("world",$e),n.variable(t("land")).define("land",["topojson","world"],Me),n.variable(t("countries")).define("countries",["topojson","world"],Ae),n.variable(t("usa")).define("usa",Ge),n.variable(t("nation")).define("nation",["topojson","usa"],Pe),n.variable(t("states")).define("states",["topojson","usa"],Ee),n.variable(t("graticule")).define("graticule",["d3geo"],Ie),n.variable(t("viewof license")).define("viewof license",["md"],Le),n.variable(t("license")).define("license",["Generators","viewof license"],(a,i)=>a.input(i)),n.variable(t()).define(["md"],We),n}function He(e){return e`# Spark UI SQL customise annotations`}function ze(e){return e`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`}function Ne(e,t){return e({value:t,rows:6,width:"100%"})}function Oe(e,t,n){return e(t,n)}function Fe(){return{cluster_11:"hello",node_13:"Read in the data"}}function Re(e,t,n,a){return e`
  
  ## Glossary

  ${t.map(i=>n`<h3 class="title_case">${i}</h3><p>${e`${a[i].definition}`}</p>`)}
`}function Ue(e,t,n){let a=e.select(t`${n}`).select("#plan-viz-metadata");return a=a.node().outerHTML,t`${a}`}function Be(e,t){return(function(a){let i=e.select(t`${a}`).select("#plan-viz-metadata");return i=i.node().outerHTML,t`${i}`})}function Qe(e,t){return(function(n){let a=e.select(t`${n}`).select("#plan-viz-graph svg");return a=a.attr("class","sparkui"),a=a.node().outerHTML,a})}function Ye(e,t,n,a,i,o,r,s){return(function(d,l,f=!1){let p=e(d),g=t`${p}`,h=n.select(g);return h=h.attr("class","sparkui"),h.selectAll(".node").on("mouseover",function(){debugger;let m=[...this.classList].find(_=>_.includes("node_")),v=+m.match(/\d+/)[0],c="";m in l&&(c=a`${l[m]}`);let b=i(this),w;try{w=n.select("#plan-meta-data-"+v).text()}catch{w=""}let y=o(b+" "+w),x=r`${c} ${y} <p><strong>Original tooltip: </strong>${w}</p>`;f&&(x=r`${m} ${x}`);var S=n.select(this).node();s(S).tooltip({title:x,trigger:"manual",container:"body",placement:"right",html:!0}),s(S).tooltip("show")}).on("mouseout",function(m){var v=n.select(this).node();s(v).tooltip("destroy")}),h.selectAll(".cluster").on("mouseover",function(){let m=[...this.classList].find(y=>y.includes("cluster_"));+m.match(/\d+/)[0];let v="";m in l&&(v=a`${l[m]}`);let c=i(this),b=r`${v} ${o(c)}`;f&&(b=r`${m} ${b}`);var w=n.select(this).node();s(w).tooltip({title:b,trigger:"manual",container:"body",placement:"right",html:!0}),s(w).tooltip("show")}).on("mouseout",function(m){var v=n.select(this).node();s(v).tooltip("destroy")}),g})}function Ve(){return(function(t){let n="";function a(i){for(var o=0;o<i.childNodes.length;o++){var r=i.childNodes[o];a(r),r.firstChild||(n+=r.textContent+" ")}}return a(t),n})}function Je(e,t,n){return(function(i){let o=[];return e.forEach(s=>{(i.toLowerCase().includes(`${s} `)||i.toLowerCase().includes(`${s}(`))&&o.push(s)}),o.map(s=>{let u=t[s].short_definition,d=t[s].key;return n`<p><strong class="title_case">${d}</strong>: ${u}</p>`})})}function Xe(e){return e.json("https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json")}function Ze(e){return Object.keys(e)}function Ke(e){return e("d3")}function ti(e){return e.text("https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html")}function ei(e){return e("jquery")}function ii(e){return(function(t){var n=function(i,o){this.init("tooltip",i,o)};n.prototype={constructor:n,init:function(i,o,r){var s,u,d,l,f;for(this.type=i,this.$element=t(o),this.options=this.getOptions(r),this.enabled=!0,d=this.options.trigger.split(" "),f=d.length;f--;)l=d[f],l=="click"?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):l!="manual"&&(s=l=="hover"?"mouseenter":"focus",u=l=="hover"?"mouseleave":"blur",this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(i){return i=t.extend({},t.fn[this.type].defaults,this.$element.data(),i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i},enter:function(i){var o=t.fn[this.type].defaults,r={},s;if(this._options&&t.each(this._options,function(u,d){o[u]!=d&&(r[u]=d)},this),s=t(i.currentTarget)[this.type](r).data(this.type),!s.options.delay||!s.options.delay.show)return s.show();clearTimeout(this.timeout),s.hoverState="in",this.timeout=setTimeout(function(){s.hoverState=="in"&&s.show()},s.options.delay.show)},leave:function(i){var o=t(i.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!o.options.delay||!o.options.delay.hide)return o.hide();o.hoverState="out",this.timeout=setTimeout(function(){o.hoverState=="out"&&o.hide()},o.options.delay.hide)},show:function(){var i,o,r,s,u,d,l=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(l),l.isDefaultPrevented())return;switch(i=this.tip(),this.setContent(),this.options.animation&&i.addClass("fade"),u=typeof this.options.placement=="function"?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,i.detach().css({top:0,left:0,display:"block"}),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element),o=this.getPosition(),r=i[0].offsetWidth,s=i[0].offsetHeight,u){case"bottom":d={top:o.top+o.height,left:o.left+o.width/2-r/2};break;case"top":d={top:o.top-s,left:o.left+o.width/2-r/2};break;case"left":d={top:o.top+o.height/2-s/2,left:o.left-r};break;case"right":d={top:o.top+o.height/2-s/2,left:o.left+o.width};break}this.applyPlacement(d,u),this.$element.trigger("shown")}},applyPlacement:function(i,o){var r=this.tip(),s=r[0].offsetWidth,u=r[0].offsetHeight,d,l,f,p;r.offset(i).addClass(o).addClass("in"),d=r[0].offsetWidth,l=r[0].offsetHeight,o=="top"&&l!=u&&(i.top=i.top+u-l,p=!0),o=="bottom"||o=="top"?(f=0,i.left<0&&(f=i.left*-2,i.left=0,r.offset(i),d=r[0].offsetWidth,l=r[0].offsetHeight),this.replaceArrow(f-s+d,d,"left")):this.replaceArrow(l-u,l,"top"),p&&r.offset(i)},replaceArrow:function(i,o,r){this.arrow().css(r,i?50*(1-i/o)+"%":"")},setContent:function(){var i=this.tip(),o=this.getTitle();i.find(".tooltip-inner")[this.options.html?"html":"text"](o),i.removeClass("fade in top bottom left right")},hide:function(){var i=this.tip(),o=t.Event("hide");if(this.$element.trigger(o),o.isDefaultPrevented())return;i.removeClass("in");function r(){var s=setTimeout(function(){i.off(t.support.transition.end).detach()},500);i.one(t.support.transition.end,function(){clearTimeout(s),i.detach()})}return t.support.transition&&this.$tip.hasClass("fade")?r():i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var i=this.$element[0];return t.extend({},typeof i.getBoundingClientRect=="function"?i.getBoundingClientRect():{width:i.offsetWidth,height:i.offsetHeight},this.$element.offset())},getTitle:function(){var i,o=this.$element,r=this.options;return i=o.attr("data-original-title")||(typeof r.title=="function"?r.title.call(o[0]):r.title),i},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(i){var o=i?t(i.currentTarget)[this.type](this._options).data(this.type):this;o.tip().hasClass("in")?o.hide():o.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var a=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),r=o.data("tooltip"),s=typeof i=="object"&&i;r||o.data("tooltip",r=new n(this,s)),typeof i=="string"&&r[i]()})},t.fn.tooltip.Constructor=n,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=a,this}})(window.jQuery)}function ni(e){return e`<style> 
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



</style>`}function ai(e,t){const n=e.module();n.variable(t("title")).define("title",["md"],He),n.variable(t("md_1")).define("md_1",["md"],ze),n.variable(t("viewof raw_html")).define("viewof raw_html",["textarea","sample_html"],Ne),n.variable(t("raw_html")).define("raw_html",["Generators","viewof raw_html"],(i,o)=>i.input(o)),n.variable(t("output_svg")).define("output_svg",["plot_plan","raw_html","additional_annotations"],Oe),n.variable(t("additional_annotations")).define("additional_annotations",Fe),n.variable(t("md_glossary")).define("md_glossary",["md","glossary_keys","html","glossary"],Re),n.variable(t("metadata")).define("metadata",["d3","html","raw_html"],Ue),n.variable(t("get_metadata")).define("get_metadata",["d3","html"],Be),n.variable(t("get_svg")).define("get_svg",["d3","html"],Qe),n.variable(t("plot_plan")).define("plot_plan",["get_svg","svg","d3","md","get_text_content_spaces","get_definitions_from_text","html","$"],Ye),n.variable(t("get_text_content_spaces")).define("get_text_content_spaces",Ve),n.variable(t("get_definitions_from_text")).define("get_definitions_from_text",["glossary_keys","glossary","html"],Je),n.variable(t("glossary")).define("glossary",["d3"],Xe),n.variable(t("glossary_keys")).define("glossary_keys",["glossary"],Ze),n.variable(t("d3")).define("d3",["require"],Ke),n.variable(t("sample_html")).define("sample_html",["d3"],ti),n.variable(t("$")).define("$",["require"],ei),n.variable(t("bstt")).define("bstt",["$"],ii),n.variable(t("styles1")).define("styles1",["html"],ni);const a=e.module(qe);return n.import("slider",a),n.import("textarea",a),n}function oi(e){return e`# Understanding the Spark UI by example: the Left Join`}function ri(e){return e`

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



`}function si(e,t,n){return e(t,n,!1)}function li(){let e="Spark has seen the left join on `dest`.  In order to perform this join, data needs to be sorted by the `dest` column.  Spark uses a hash partition using the default 200 shuffle partitions (see original tooltip) to split the data between executors.  The data from both the `parquet` and the `csv` file will  be hashpartitioned on the `dest` field.   This means data from the same `dest` ends up on the same executor node (computer), meaning that this part of data can be joined without further shuffles.\n\nThis process will work well if the data is evenly distributed across `dest` values.  We can get an indication of whether this is the case from the timings - if the max timing is much greater than the median, we probably have a problem. \n";return{cluster_7:`Spark has generated optimised Java code that combines three operations:  read the data, filter it, and select the requested columns (project).  Since the incoming data is in multiple files, Spark will be able to perform these operations in parallel.
    
The timings are  \`28.9 s (302 ms, 1.2 s, 2.3 s)\`.  These numbers are total (min, median, max).  They give us basic information about how effectively parallelisation has worked.  A large disparity between median and max may be indicative of data skew (i.e. one part of the data taking a lot longer to process than others, and thereby holding up the whole operation)
    `,node_10:"Spark has used predicate pushdown on the `WHERE flights.origin = 'LAX` part of the query to optimise the file read.  This allows Spark to filter data out as it is read in.  In this case Spark is able to exploit  the metadata headers of the Parquet files that contain information about the data contents of the file.  This allows Spark to skip reading large parts of the Parquet files.  ",node_9:"In addition to filtering on the `WHERE` condition, Spark filters out any data which is NULL in the field which we are joining on.",cluster_14:"Note the timings are all the same.  This is a pretty big clue that Spark has not parallelised this step.  This is because there's a small csv file on disk, which is below Spark's size threshold for parallelisation.",node_6:e,node_13:e,node_3:"Where one 'side' of the join is small, like the `airports` table, Spark would usually use a broadcast hash join, whereby the whole of the airports table is broadcast to each compute node.  This avoids the need to shuffle the larger `flights` table.  To make this example more interesting, I forced it not to use the broadcast join by setting the config option `spark.sql.autoBroadcastJoinThreshold` to `0`.   The `SortMergeJoin` is the standard join that Spark 2.0+ uses when both sides of the join are large.   See https://stackoverflow.com/questions/50019457/why-does-spark-planner-prefer-sort-merge-join-over-shuffled-hash-join for more information."}}function ui(e){return e`## Parallelisation

We already know that Spark is able to execute much of its work in parallel, within the nodes of the DAG.  However, the speedup that parallelism gives us for these individual operations such as sorts or aggregates is often limited by the need to partition and shuffle data.  

The diagram helps us understand a higher level of parallelism that can happening between parts of the workflow, which often does not suffer from this 'speed limit', and which we should often seek to maximise.

In this case, the two leaf nodes at the top of the diagram show that the two input tables can be processed in parallel, right up until the join.  The data is read, filtered, and then sorted, and this can happen completely independently.  It's only at the 'SortMergeJoin' node that these two processes need to wait for each other to complete.


In more complex jobs, there may be 10s of these leaf nodes, and it may be possible to adjust your code to make them stay independent for longer.




`}function di(e){return e`## Other parts of the Spark UI

The SQL tab of the Spark UI provides the highest-level overview of the execution of your Spark program.  

The rest of the UI provides more details at different levesl.  

- A given Spark SQL query may be broken into one or more jobs.  Each job corresponds to a single RDD action.  For example, if your query contains a scalar subquery, your query will produce [multiple jobs](https://youtu.be/ywPuZ_WrHT0?t=416) because that subquery will be executed independently and the results will be sent across the cluster.

 The query in this example corresponds to a single job, because it corredponds to a single RDD action - the write back to the file system.

- Jobs are divided into "stages" based on the shuffle boundary. A stage is a collection of tasks that run the same code, each on a different subset of the data. 

- Each stage is further divided into tasks based on the number of partitions in the RDD. So tasks are the smallest units of work for Spark. Every task inside a stage does the exact same thing, only on a different segment of the data. 

To delve further into the functioning of this left join, I would usually do the following:

- Navigate to the jobs tab, to see more information about the stages of the job
- Click through to the stages of the job, to better understand the amount of parallelism being used (as represented by the number of tasks), and to get further information about data skew (e.g. by looking at the percentiles in the in 'stages' tab.

`}function fi(e){return e.json("https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/b98ceb36c7af3a6a78871f83221abd8cffa032f1/annotations.json")}function pi(e){return e`## Questions

Why does the flights dataset read in 20 partitions despite scanning 258 files on disk?

We can change this by setting e.g.\`conf.set("spark.sql.files.maxPartitionBytes", 1024*1024*10)\` but I don't understand why we don't get one partition per file. 
`}function ci(e,t){return e(t)}function hi(e){return e`## References and useful resources:

[Youtube: Apache Spark Core—Deep Dive—Proper Optimization Daniel Tomes](https://www.youtube.com/watch?v=daXEp4HmS-E&t=3868s)

[Youtube: A Deep Dive into Query Execution Engine of Spark SQL - Maryann Xue](https://www.youtube.com/watch?v=ywPuZ_WrHT0)

[Youtube: A Deep Dive into Query Execution Engine of Spark SQL - continued](https://www.youtube.com/watch?v=BqCW5OxMP4I&t=2s)

[Youtube: A Deep Dive into Spark SQL's Catalyst Optimizer with Yin Huai](https://www.youtube.com/watch?v=RmUn5vHlevc)


[Spark Shuffle and Spill Explained - Chendi Xue](https://xuechendi.github.io/2019/04/15/Spark-Shuffle-and-Spill-Explained)

[Visual API](https://training.databricks.com/visualapi.pdf)
`}function mi(e){return e}function gi(e){return e.text("https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/eb9fdc6fe0b850c3de162b85579c7e0c764c461d/SQL_tab.html")}function vi(e){return(function(t){var n=function(i,o){this.init("tooltip",i,o)};n.prototype={constructor:n,init:function(i,o,r){var s,u,d,l,f;for(this.type=i,this.$element=t(o),this.options=this.getOptions(r),this.enabled=!0,d=this.options.trigger.split(" "),f=d.length;f--;)l=d[f],l=="click"?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):l!="manual"&&(s=l=="hover"?"mouseenter":"focus",u=l=="hover"?"mouseleave":"blur",this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(i){return i=t.extend({},t.fn[this.type].defaults,this.$element.data(),i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i},enter:function(i){var o=t.fn[this.type].defaults,r={},s;if(this._options&&t.each(this._options,function(u,d){o[u]!=d&&(r[u]=d)},this),s=t(i.currentTarget)[this.type](r).data(this.type),!s.options.delay||!s.options.delay.show)return s.show();clearTimeout(this.timeout),s.hoverState="in",this.timeout=setTimeout(function(){s.hoverState=="in"&&s.show()},s.options.delay.show)},leave:function(i){var o=t(i.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!o.options.delay||!o.options.delay.hide)return o.hide();o.hoverState="out",this.timeout=setTimeout(function(){o.hoverState=="out"&&o.hide()},o.options.delay.hide)},show:function(){var i,o,r,s,u,d,l=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(l),l.isDefaultPrevented())return;switch(i=this.tip(),this.setContent(),this.options.animation&&i.addClass("fade"),u=typeof this.options.placement=="function"?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,i.detach().css({top:0,left:0,display:"block"}),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element),o=this.getPosition(),r=i[0].offsetWidth,s=i[0].offsetHeight,u){case"bottom":d={top:o.top+o.height,left:o.left+o.width/2-r/2};break;case"top":d={top:o.top-s,left:o.left+o.width/2-r/2};break;case"left":d={top:o.top+o.height/2-s/2,left:o.left-r};break;case"right":d={top:o.top+o.height/2-s/2,left:o.left+o.width};break}this.applyPlacement(d,u),this.$element.trigger("shown")}},applyPlacement:function(i,o){var r=this.tip(),s=r[0].offsetWidth,u=r[0].offsetHeight,d,l,f,p;r.offset(i).addClass(o).addClass("in"),d=r[0].offsetWidth,l=r[0].offsetHeight,o=="top"&&l!=u&&(i.top=i.top+u-l,p=!0),o=="bottom"||o=="top"?(f=0,i.left<0&&(f=i.left*-2,i.left=0,r.offset(i),d=r[0].offsetWidth,l=r[0].offsetHeight),this.replaceArrow(f-s+d,d,"left")):this.replaceArrow(l-u,l,"top"),p&&r.offset(i)},replaceArrow:function(i,o,r){this.arrow().css(r,i?50*(1-i/o)+"%":"")},setContent:function(){var i=this.tip(),o=this.getTitle();i.find(".tooltip-inner")[this.options.html?"html":"text"](o),i.removeClass("fade in top bottom left right")},hide:function(){var i=this.tip(),o=t.Event("hide");if(this.$element.trigger(o),o.isDefaultPrevented())return;i.removeClass("in");function r(){var s=setTimeout(function(){i.off(t.support.transition.end).detach()},500);i.one(t.support.transition.end,function(){clearTimeout(s),i.detach()})}return t.support.transition&&this.$tip.hasClass("fade")?r():i.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var i=this.$element[0];return t.extend({},typeof i.getBoundingClientRect=="function"?i.getBoundingClientRect():{width:i.offsetWidth,height:i.offsetHeight},this.$element.offset())},getTitle:function(){var i,o=this.$element,r=this.options;return i=o.attr("data-original-title")||(typeof r.title=="function"?r.title.call(o[0]):r.title),i},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(i){var o=i?t(i.currentTarget)[this.type](this._options).data(this.type):this;o.tip().hasClass("in")?o.hide():o.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var a=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),r=o.data("tooltip"),s=typeof i=="object"&&i;r||o.data("tooltip",r=new n(this,s)),typeof i=="string"&&r[i]()})},t.fn.tooltip.Constructor=n,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=a,this}})(window.jQuery)}function bi(e,t){const n=e.module();n.variable(t("title")).define("title",["md"],oi),n.variable(t("intro")).define("intro",["md"],ri),n.variable(t("plan")).define("plan",["plot_plan","raw_html","annotations"],si),n.variable(t("annotations")).define("annotations",li),n.variable(t("parallelisation")).define("parallelisation",["md"],ui),n.variable(t("other_parts")).define("other_parts",["md"],di),n.variable(t("annotations2")).define("annotations2",["d3"],fi),n.variable(t()).define(["md"],pi),n.variable(t("metadata")).define("metadata",["get_metadata","raw_html"],ci),n.variable(t("references")).define("references",["md"],hi);const a=e.module(ai);return n.import("plot_plan",a),n.import("styles1",a),n.import("$",a),n.import("get_svg",a),n.import("d3",a),n.import("get_metadata",a),n.variable(t("mystyles")).define("mystyles",["styles1"],mi),n.variable(t("raw_html")).define("raw_html",["d3"],gi),n.variable(t("bstt")).define("bstt",["$"],vi),n}export{bi as default};
