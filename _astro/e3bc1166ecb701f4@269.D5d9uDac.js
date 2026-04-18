function D(i){return i`| <h3>Friends & Family:</h3>  |   |
|---|---|
| **[@mbostock/form-input](/@mbostock/form-input)**  | Fully custom forms, combining inputs into a single reactive cell. |
| **[@zechasault/color-schemes-and-interpolators-picker](/@zechasault/color-schemes-and-interpolators-picker)**  | Color scheme and interoplation pickers. |
| **[@mootari/range-slider](https://observablehq.com/@mootari/range-slider)**  |  True range sliders, setting both a minimum and maximum value. |
| **[@bumbeishvili/data-driven-range-sliders](/@bumbeishvili/data-driven-range-sliders)** | Data-driven range sliders, displaying a distribution histogram of the underlying data. |
| **[@trebor/snapping-histogram-slider](/@trebor/snapping-histogram-slider)** | Another data-driven range slider option. |
| **[@mootari’s 2D Slider](https://observablehq.com/d/98bbb19bf9e859ee)** | Two dimensional sliders, exploring discrete points on a plane. |
| **[@yurivish/ternary-slider](/@yurivish/ternary-slider)** | Nifty ternary plot inputs, describing the percentages of a whole composed of exactly three things. |


<br>*If you have any improvements for the bazaar, [please make your change in a fork and send it to me as a suggestion.](https://observablehq.com/@observablehq/suggestions-and-comments)*`}function $(i){return i`---
## Sliders

~~~js
import {slider} from "@jashkenas/inputs"
~~~`}function M(i){return i()}function T(i){return i({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function A(i){return i({min:0,max:1,step:.01,format:t=>`${Math.round(100*t)} per cent`,description:"Zero to one, formatted with a custom function"})}function G(i){return i({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function P(i){return i({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function E(i){return i({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function L(i){return i({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function z(i){return i`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function H(i){return(function(n={}){let{min:a=0,max:e=1,value:o=(e+a)/2,step:r="any",precision:l=2,title:u,description:d,getValue:s,format:f,display:p,submit:v}=typeof n=="number"?{value:n}:n;return l=Math.pow(10,l),s||(s=h=>Math.round(h.valueAsNumber*l)/l),i({type:"range",title:u,description:d,submit:v,format:f,display:p,attributes:{min:a,max:e,step:r,value:o},getValue:s})})}function N(i){return i`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function W(i){return i()}function I(i){return!this}function O(i){return i({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function F(i){return new Date(Date.now()).toUTCString()}function R(i){return(function(n={}){const{value:a="Ok",title:e,description:o,disabled:r}=typeof n=="string"?{value:n}:n,l=i({type:"button",title:e,description:o,attributes:{disabled:r,value:a}});return l.output.remove(),l})}function q(i){return i`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function U(i){return i(["Spring","Summer","Fall","Winter"])}function B(i){return i}function V(i){return i({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function Y(i){return i}function Q(i){return i({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function Z(i){return i}function J(i){const t=i({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function X(i){return i}function K(i,t){return(function(a={}){let{value:e,title:o,description:r,submit:l,multiple:u,size:d,options:s}=Array.isArray(a)?{options:a}:a;s=s.map(p=>typeof p=="object"?p:{value:p,label:p});const f=i({type:"select",title:o,description:r,submit:l,getValue:p=>{const v=Array.prototype.filter.call(p.options,h=>h.selected).map(h=>h.value);return u?v:v[0]},form:t`
      <form>
        <select name="input" ${u?`multiple size="${d||s.length}"`:""}>
          ${s.map(({value:p,label:v})=>Object.assign(t`<option>`,{value:p,selected:Array.isArray(e)?e.includes(p):e===p,textContent:v}))}
        </select>
      </form>
    `});return f.output.remove(),f})}function tt(i){return i`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function et(i,t){return i({options:t.objects.states.geometries.map(n=>n.properties.name),placeholder:"Search for a US state . . ."})}function it(i){return i}function nt(i,t){return(function(a={}){const{value:e,title:o,description:r,autocomplete:l="off",placeholder:u,size:d,options:s,list:f="options"}=Array.isArray(a)?{options:a}:a,p=new Set(s),v=i({type:"text",title:o,description:r,action:h=>{h.value=h.input.value=e||"",h.onsubmit=m=>m.preventDefault(),h.input.oninput=function(m){m.stopPropagation(),h.value=h.input.value,p.has(h.input.value)&&h.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${u}" style="font-size: 1em;" list=${f}>
          <datalist id="${f}">
              ${s.map(h=>Object.assign(t`<option>`,{value:h}))}
          </datalist>
      </form>
      `});return v.output.remove(),v})}function at(i){return i`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function ot(i){return i()}function rt(i){return i({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function lt(i){return(function(n={}){const{value:a="#000000",title:e,description:o,submit:r,display:l}=typeof n=="string"?{value:n}:n,u=i({type:"color",title:e,description:o,submit:r,display:l,attributes:{value:a}});return(e||o)&&(u.input.style.margin="5px 0"),u})}function st(i){return i` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function ut(i){return i()}function dt(i){return i}function ft(i){return i({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function pt(i){return i}function ct(i,t){return(function(a={}){const{value:e=[],title:o,description:r,submit:l}=Array.isArray(a)?{value:a}:a;let[u,d]=e;u=u??"",d=d??"";const s=i`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${u}" />`,f=i`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${d}" />`,p=t({type:"coordinates",title:o,description:r,submit:l,getValue:()=>{const v=s.valueAsNumber,h=f.valueAsNumber;return[isNaN(v)?null:v,isNaN(h)?null:h]},form:i`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${s}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${f}
        </label>
      </form>
    `});return p.output.remove(),p})}function ht(i){return i` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function mt(i){return i([-122.27,37.87])}function vt(i){return i}function gt(i,t,n,a,e,o,r){return(function(u={}){const{value:d=[],title:s,description:f,width:p=400}=Array.isArray(u)?{value:u}:u,v=Math.round(210/400*p);let[h,m]=d;h=h??null,m=m??null;const g=i`<form style="width: ${p}px;"></form>`,c=t.context2d(p,v),b=c.canvas;b.style.margin="10px 0 0";const w=n.geoNaturalEarth1().precision(.1).fitSize([p,v],{type:"Sphere"}),y=n.geoPath(w,c).pointRadius(2.5);g.append(b);function x(){if(c.fillStyle="#fff",c.fillRect(0,0,p,v),c.beginPath(),y(a),c.lineWidth=.35,c.strokeStyle="#ddd",c.stroke(),c.beginPath(),y(e),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),y(o),c.strokeStyle="#aaa",c.stroke(),h!=null&&m!=null){const _={type:"MultiPoint",coordinates:[[h,m]]};c.beginPath(),y(_),c.fillStyle="#f00",c.fill()}}return b.onclick=function(_){const{offsetX:S,offsetY:j}=_;var k=w.invert([S,j]);h=+k[0].toFixed(2),m=+k[1].toFixed(2),x(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),r({type:"worldMapCoordinates",title:s,description:f,display:_=>i`<div style="position: absolute; width: ${p}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${h??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${m??""} 
          </div>`,getValue:()=>[h??null,m??null],form:g})})}function bt(i){return i` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function wt(i){return i([-122.27,37.87])}function yt(i){return i}function _t(i){return i({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function xt(i){return i}function kt(i,t,n,a,e,o){return(function(l={}){const{value:u=[],title:d,description:s,width:f=400}=Array.isArray(l)?{value:l}:l,p=f/960,v=p*600;let[h,m]=u;h=h??null,m=m??null;const g=i`<form style="width: ${f}px;"></form>`,c=t.context2d(f,v),b=c.canvas;b.style.margin="5px 0 0";const w=n.geoAlbersUsa().scale(1280).translate([480,300]),y=n.geoPath().context(c).pointRadius(2.5/p);g.append(b);function x(){if(c.clearRect(0,0,f,v),c.save(),c.scale(p,p),c.lineWidth=.35/p,c.beginPath(),y(a),c.fillStyle="#f4f4f4",c.fill(),c.beginPath(),y(e),c.strokeStyle="#aaa",c.stroke(),h!=null&&m!=null){const _={type:"MultiPoint",coordinates:[w([h,m])]};c.beginPath(),y(_),c.fillStyle="#f00",c.fill()}c.restore()}return b.onclick=function(_){const{offsetX:S,offsetY:j}=_;var k=w.invert([S/p,j/p]);h=+k[0].toFixed(2),m=+k[1].toFixed(2),x(),b.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),o({type:"worldMapCoordinates",title:d,description:s,display:_=>i`<div style="position: absolute; width: ${f}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${h??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${m??""} 
          </div>`,getValue:()=>[h??null,m??null],form:g})})}function Ct(i){return i` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function St(i){return i()}function jt(i){return i({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function Dt(i){return(function(n={}){const{min:a,max:e,value:o,title:r,description:l,display:u}=typeof n=="string"?{value:n}:n;return i({type:"date",title:r,description:l,display:u,attributes:{min:a,max:e,value:o}})})}function $t(i){return i` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function Mt(i){return i()}function Tt(i){return i}function At(i){return i({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function Gt(i){return i}function Pt(i){return(function(n={}){const{min:a,max:e,step:o,value:r,title:l,description:u,display:d}=typeof n=="string"?{value:n}:n,s=i({type:"time",title:l,description:u,display:d,getValue:f=>f.value?f.value:void 0,attributes:{min:a,max:e,step:o,value:r}});return s.output.remove(),s})}function Et(i){return i`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function Lt(i){return i()}function zt(i){return i({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function Ht(i,t,n){const a=i`<div>`;for(var e=0;e<t.length;e++){t[e];let o=i`<img height="125px" style="margin: 2px;" />`;o.src=await n.url(t[e]),a.append(o)}return a}function Nt(i){return(function(n={}){const{multiple:a,accept:e,title:o,description:r}=n,l=i({type:"file",title:o,description:r,attributes:{multiple:a,accept:e},action:u=>{u.input.onchange=()=>{u.value=a?u.input.files:u.input.files[0],u.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l})}function Wt(i){return i`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function It(i){return i()}function Ot(i){return i({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function Ft(i){return i}function Rt(i){return i({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function qt(i){return i}function Ut(i){return(function(n={}){const{value:a,title:e,description:o,autocomplete:r="off",maxlength:l,minlength:u,pattern:d,placeholder:s,size:f,submit:p}=typeof n=="string"?{value:n}:n,v=i({type:"text",title:e,description:o,submit:p,attributes:{value:a,autocomplete:r,maxlength:l,minlength:u,pattern:d,placeholder:s,size:f}});return v.output.remove(),v.input.style.fontSize="1em",v})}function Bt(i){return i`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function Vt(i){return i()}function Yt(i){return i}function Qt(i){return i({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function Zt(i){return i}function Jt(i,t){return(function(a={}){const{value:e="",title:o,description:r,autocomplete:l,cols:u=45,rows:d=3,width:s,height:f,maxlength:p,placeholder:v,spellcheck:h,wrap:m,submit:g}=typeof a=="string"?{value:a}:a,c=i({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${e}</textarea></form>`,title:o,description:r,submit:g,attributes:{autocomplete:l,cols:u,rows:d,maxlength:p,placeholder:v,spellcheck:h,wrap:m}});return c.output.remove(),s!=null&&(c.input.style.width=s),f!=null&&(c.input.style.height=f),g&&(c.submit.style.margin="0"),(o||r)&&(c.input.style.margin="3px 0"),c})}function Xt(i){return i`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function Kt(i){return i(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function te(i){return i}function ee(i){return i({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function ie(i){return i}function ne(i,t){return(function(a={}){let{value:e,title:o,description:r,submit:l,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(s=>typeof s=="string"?{value:s,label:s}:s);const d=i({type:"radio",title:o,description:r,submit:l,getValue:s=>{if(s.checked)return s.value;const f=Array.prototype.find.call(s,p=>p.checked);return f?f.value:void 0},form:t`
      <form>
        ${u.map(({value:s,label:f})=>{const p=t`<input type=radio name=input ${s===e?"checked":""} style="vertical-align: baseline;" />`;return p.setAttribute("value",s),t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${p}
           ${f}
          </label>`})}
      </form>
    `});return d.output.remove(),d})}function ae(i){return i`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function oe(i){return i(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function re(i){return i}function le(i){return i({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function se(i){return i}function ue(i){return i({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function de(i){return i}function fe(i,t){return(function(a={}){let{value:e,title:o,description:r,submit:l,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(s=>typeof s=="string"?{value:s,label:s}:s);const d=i({type:"checkbox",title:o,description:r,submit:l,getValue:s=>s.length?Array.prototype.filter.call(s,f=>f.checked).map(f=>f.value):s.checked?s.value:!1,form:t`
      <form>
        ${u.map(({value:s,label:f})=>{const p=t`<input type=checkbox name=input ${(e||[]).indexOf(s)>-1?"checked":""} style="vertical-align: baseline;" />`;return p.setAttribute("value",s),t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${p}
           ${f}
          </label>`})}
      </form>
    `});return d.output.remove(),d})}function pe(i){return i`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function ce(i){return i()}function he(i){return i}function me(i){return i({placeholder:"13+",title:"Your Age",submit:!0})}function ve(i){return i}function ge(i){return(function(n={}){const{value:a,title:e,description:o,placeholder:r,submit:l,step:u="any",min:d,max:s}=typeof n=="number"||typeof n=="string"?{value:+n}:n,f=i({type:"number",title:e,description:o,submit:l,attributes:{value:a,placeholder:r,step:u,min:d,max:s,autocomplete:"off"},getValue:p=>p.valueAsNumber});return f.output.remove(),f.input.style.width="auto",f.input.style.fontSize="1em",f})}function be(i){return i`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function we(i){return i({value:"password"})}function ye(i){return i}function _e(i){return i({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function xe(i){return i}function ke(i){return(function(n={}){const{value:a,title:e,description:o,autocomplete:r="off",maxlength:l,minlength:u,pattern:d,placeholder:s,size:f,submit:p}=typeof n=="string"?{value:n}:n,v=i({type:"password",title:e,description:o,submit:p,attributes:{value:a,autocomplete:r,maxlength:l,minlength:u,pattern:d,placeholder:s,size:f}});return v.output.remove(),v.input.style.fontSize="1em",v})}function Ce(i){return i`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function Se(i,t){return(function(a){let{form:e,type:o="text",attributes:r={},action:l,getValue:u,title:d,description:s,format:f,display:p,submit:v,options:h}=a;const m=i`<div></div>`;if(e||(e=i`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(r).forEach(g=>{const c=r[g];c!=null&&e.input.setAttribute(g,c)}),v&&e.append(i`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof v=="string"?v:"Submit"}" />`),e.append(i`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),d&&e.prepend(i`<div style="font: 700 0.9rem sans-serif;">${d}</div>`),s&&e.append(i`<div style="font-size: 0.85rem; font-style: italic;">${s}</div>`),f&&(f=typeof f=="function"?f:t.format(f)),l)l(e);else{const g=v?"onsubmit":o=="button"?"onclick":o=="checkbox"||o=="radio"?"onchange":"oninput";e[g]=c=>{c&&c.preventDefault();const b=u?u(e.input):e.input.value;if(e.output){const w=p?p(b):f?f(b):b;if(w instanceof window.Element){for(;e.output.hasChildNodes();)e.output.removeChild(e.output.lastChild);e.output.append(w)}else e.output.value=w}e.value=b,g!=="oninput"&&e.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},g!=="oninput"&&(m.oninput=c=>c&&c.stopPropagation()&&c.preventDefault()),g!=="onsubmit"&&(e.onsubmit=c=>c&&c.preventDefault()),e[g]()}for(;e.childNodes.length;)m.appendChild(e.childNodes[0]);return e.append(m),e})}function je(i){return i("d3-geo@1")}function De(i){return i("d3-format@1")}function $e(i){return i("topojson-client@3")}async function Me(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function Te(i,t){return i.feature(t,t.objects.land)}function Ae(i,t){return i.feature(t,t.objects.countries)}async function Ge(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function Pe(i,t){return i.feature(t,t.objects.nation)}function Ee(i,t){return i.feature(t,t.objects.states)}function Le(i){return i.geoGraticule10()}function ze(i){const t=i`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function He(i){return i`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function Ne(i,t){const n=i.module();return n.variable(t()).define(["md"],D),n.variable(t("sliderDemo")).define("sliderDemo",["md"],$),n.variable(t("viewof a")).define("viewof a",["slider"],M),n.variable(t("a")).define("a",["Generators","viewof a"],(a,e)=>a.input(e)),n.variable(t("viewof a1")).define("viewof a1",["slider"],T),n.variable(t("a1")).define("a1",["Generators","viewof a1"],(a,e)=>a.input(e)),n.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],A),n.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,e)=>a.input(e)),n.variable(t("viewof a2")).define("viewof a2",["slider"],G),n.variable(t("a2")).define("a2",["Generators","viewof a2"],(a,e)=>a.input(e)),n.variable(t("viewof a3")).define("viewof a3",["slider"],P),n.variable(t("a3")).define("a3",["Generators","viewof a3"],(a,e)=>a.input(e)),n.variable(t("viewof a4")).define("viewof a4",["slider"],E),n.variable(t("a4")).define("a4",["Generators","viewof a4"],(a,e)=>a.input(e)),n.variable(t("viewof a5")).define("viewof a5",["slider"],L),n.variable(t("a5")).define("a5",["Generators","viewof a5"],(a,e)=>a.input(e)),n.variable(t()).define(["md"],z),n.variable(t("slider")).define("slider",["input"],H),n.variable(t("buttonDemo")).define("buttonDemo",["md"],N),n.variable(t("viewof b")).define("viewof b",["button"],W),n.variable(t("b")).define("b",["Generators","viewof b"],(a,e)=>a.input(e)),n.variable(t()).define(["b"],I),n.variable(t("viewof b1")).define("viewof b1",["button"],O),n.variable(t("b1")).define("b1",["Generators","viewof b1"],(a,e)=>a.input(e)),n.variable(t()).define(["b1"],F),n.variable(t("button")).define("button",["input"],R),n.variable(t("selectDemo")).define("selectDemo",["md"],q),n.variable(t("viewof dd")).define("viewof dd",["select"],U),n.variable(t("dd")).define("dd",["Generators","viewof dd"],(a,e)=>a.input(e)),n.variable(t()).define(["dd"],B),n.variable(t("viewof dd1")).define("viewof dd1",["select"],V),n.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(a,e)=>a.input(e)),n.variable(t()).define(["dd1"],Y),n.variable(t("viewof dd2")).define("viewof dd2",["select"],Q),n.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(a,e)=>a.input(e)),n.variable(t()).define(["dd2"],Z),n.variable(t("viewof dd3")).define("viewof dd3",["select"],J),n.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(a,e)=>a.input(e)),n.variable(t()).define(["dd3"],X),n.variable(t("select")).define("select",["input","html"],K),n.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],tt),n.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],et),n.variable(t("as")).define("as",["Generators","viewof as"],(a,e)=>a.input(e)),n.variable(t()).define(["as"],it),n.variable(t("autoSelect")).define("autoSelect",["input","html"],nt),n.variable(t("colorDemo")).define("colorDemo",["md"],at),n.variable(t("viewof c")).define("viewof c",["color"],ot),n.variable(t("c")).define("c",["Generators","viewof c"],(a,e)=>a.input(e)),n.variable(t("viewof c1")).define("viewof c1",["color"],rt),n.variable(t("c1")).define("c1",["Generators","viewof c1"],(a,e)=>a.input(e)),n.variable(t("color")).define("color",["input"],lt),n.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],st),n.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],ut),n.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(a,e)=>a.input(e)),n.variable(t()).define(["coords1"],dt),n.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],ft),n.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(a,e)=>a.input(e)),n.variable(t()).define(["coords2"],pt),n.variable(t("coordinates")).define("coordinates",["html","input"],ct),n.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],ht),n.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],mt),n.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,e)=>a.input(e)),n.variable(t()).define(["worldMap1"],vt),n.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],gt),n.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],bt),n.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],wt),n.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,e)=>a.input(e)),n.variable(t()).define(["usaMap1"],yt),n.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],_t),n.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,e)=>a.input(e)),n.variable(t()).define(["usaMap2"],xt),n.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],kt),n.variable(t("dateDemo")).define("dateDemo",["md"],Ct),n.variable(t("viewof d")).define("viewof d",["date"],St),n.variable(t("d")).define("d",["Generators","viewof d"],(a,e)=>a.input(e)),n.variable(t("viewof d1")).define("viewof d1",["date"],jt),n.variable(t("d1")).define("d1",["Generators","viewof d1"],(a,e)=>a.input(e)),n.variable(t("date")).define("date",["input"],Dt),n.variable(t("timeDemo")).define("timeDemo",["md"],$t),n.variable(t("viewof t")).define("viewof t",["time"],Mt),n.variable(t("t")).define("t",["Generators","viewof t"],(a,e)=>a.input(e)),n.variable(t()).define(["t"],Tt),n.variable(t("viewof t1")).define("viewof t1",["time"],At),n.variable(t("t1")).define("t1",["Generators","viewof t1"],(a,e)=>a.input(e)),n.variable(t()).define(["t1"],Gt),n.variable(t("time")).define("time",["input"],Pt),n.variable(t("fileDemo")).define("fileDemo",["md"],Et),n.variable(t("viewof e")).define("viewof e",["file"],Lt),n.variable(t("e")).define("e",["Generators","viewof e"],(a,e)=>a.input(e)),n.variable(t("viewof e1")).define("viewof e1",["file"],zt),n.variable(t("e1")).define("e1",["Generators","viewof e1"],(a,e)=>a.input(e)),n.variable(t()).define(["html","e1","Files"],Ht),n.variable(t("file")).define("file",["input"],Nt),n.variable(t("textDemo")).define("textDemo",["md"],Wt),n.variable(t("viewof f")).define("viewof f",["text"],It),n.variable(t("f")).define("f",["Generators","viewof f"],(a,e)=>a.input(e)),n.variable(t("viewof f1")).define("viewof f1",["text"],Ot),n.variable(t("f1")).define("f1",["Generators","viewof f1"],(a,e)=>a.input(e)),n.variable(t()).define(["f1"],Ft),n.variable(t("viewof f2")).define("viewof f2",["text"],Rt),n.variable(t("f2")).define("f2",["Generators","viewof f2"],(a,e)=>a.input(e)),n.variable(t()).define(["f2"],qt),n.variable(t("text")).define("text",["input"],Ut),n.variable(t("textareaDemo")).define("textareaDemo",["md"],Bt),n.variable(t("viewof g")).define("viewof g",["textarea"],Vt),n.variable(t("g")).define("g",["Generators","viewof g"],(a,e)=>a.input(e)),n.variable(t()).define(["g"],Yt),n.variable(t("viewof g1")).define("viewof g1",["textarea"],Qt),n.variable(t("g1")).define("g1",["Generators","viewof g1"],(a,e)=>a.input(e)),n.variable(t()).define(["g1"],Zt),n.variable(t("textarea")).define("textarea",["input","html"],Jt),n.variable(t("radioDemo")).define("radioDemo",["md"],Xt),n.variable(t("viewof r")).define("viewof r",["radio"],Kt),n.variable(t("r")).define("r",["Generators","viewof r"],(a,e)=>a.input(e)),n.variable(t()).define(["r"],te),n.variable(t("viewof r1")).define("viewof r1",["radio"],ee),n.variable(t("r1")).define("r1",["Generators","viewof r1"],(a,e)=>a.input(e)),n.variable(t()).define(["r1"],ie),n.variable(t("radio")).define("radio",["input","html"],ne),n.variable(t("checkboxDemo")).define("checkboxDemo",["md"],ae),n.variable(t("viewof ch")).define("viewof ch",["checkbox"],oe),n.variable(t("ch")).define("ch",["Generators","viewof ch"],(a,e)=>a.input(e)),n.variable(t()).define(["ch"],re),n.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],le),n.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(a,e)=>a.input(e)),n.variable(t()).define(["ch1"],se),n.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],ue),n.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(a,e)=>a.input(e)),n.variable(t()).define(["ch3"],de),n.variable(t("checkbox")).define("checkbox",["input","html"],fe),n.variable(t("numberDemo")).define("numberDemo",["md"],pe),n.variable(t("viewof h")).define("viewof h",["number"],ce),n.variable(t("h")).define("h",["Generators","viewof h"],(a,e)=>a.input(e)),n.variable(t()).define(["h"],he),n.variable(t("viewof h1")).define("viewof h1",["number"],me),n.variable(t("h1")).define("h1",["Generators","viewof h1"],(a,e)=>a.input(e)),n.variable(t()).define(["h1"],ve),n.variable(t("number")).define("number",["input"],ge),n.variable(t("passwordDemo")).define("passwordDemo",["md"],be),n.variable(t("viewof i")).define("viewof i",["password"],we),n.variable(t("i")).define("i",["Generators","viewof i"],(a,e)=>a.input(e)),n.variable(t()).define(["i"],ye),n.variable(t("viewof i1")).define("viewof i1",["password"],_e),n.variable(t("i1")).define("i1",["Generators","viewof i1"],(a,e)=>a.input(e)),n.variable(t()).define(["i1"],xe),n.variable(t("password")).define("password",["input"],ke),n.variable(t()).define(["md"],Ce),n.variable(t("input")).define("input",["html","d3format"],Se),n.variable(t("d3geo")).define("d3geo",["require"],je),n.variable(t("d3format")).define("d3format",["require"],De),n.variable(t("topojson")).define("topojson",["require"],$e),n.variable(t("world")).define("world",Me),n.variable(t("land")).define("land",["topojson","world"],Te),n.variable(t("countries")).define("countries",["topojson","world"],Ae),n.variable(t("usa")).define("usa",Ge),n.variable(t("nation")).define("nation",["topojson","usa"],Pe),n.variable(t("states")).define("states",["topojson","usa"],Ee),n.variable(t("graticule")).define("graticule",["d3geo"],Le),n.variable(t("viewof license")).define("viewof license",["md"],ze),n.variable(t("license")).define("license",["Generators","viewof license"],(a,e)=>a.input(e)),n.variable(t()).define(["md"],He),n}function We(i){return i`# Spark UI SQL customise annotations`}function Ie(i){return i`Paste the whole of the html page from the Spark SQL tab of the spark UI here (an example is provided)`}function Oe(i,t){return i({value:t,rows:6,width:"100%"})}function Fe(i,t,n){return i(t,n)}function Re(){return{cluster_11:"hello",node_13:"Read in the data"}}function qe(i,t,n,a){return i`
  
  ## Glossary

  ${t.map(e=>n`<h3 class="title_case">${e}</h3><p>${i`${a[e].definition}`}</p>`)}
`}function Ue(i,t,n){let a=i.select(t`${n}`).select("#plan-viz-metadata");return a=a.node().outerHTML,t`${a}`}function Be(i,t){return(function(a){let e=i.select(t`${a}`).select("#plan-viz-metadata");return e=e.node().outerHTML,t`${e}`})}function Ve(i,t){return(function(n){let a=i.select(t`${n}`).select("#plan-viz-graph svg");return a=a.attr("class","sparkui"),a=a.node().outerHTML,a})}function Ye(i,t,n,a,e,o,r,l){return(function(d,s,f=!1){let p=i(d),v=t`${p}`,h=n.select(v);return h=h.attr("class","sparkui"),h.selectAll(".node").on("mouseover",function(){debugger;let m=[...this.classList].find(_=>_.includes("node_")),g=+m.match(/\d+/)[0],c="";m in s&&(c=a`${s[m]}`);let b=e(this),w;try{w=n.select("#plan-meta-data-"+g).text()}catch{w=""}let y=o(b+" "+w),x=r`${c} ${y} <p><strong>Original tooltip: </strong>${w}</p>`;f&&(x=r`${m} ${x}`);var C=n.select(this).node();l(C).tooltip({title:x,trigger:"manual",container:"body",placement:"right",html:!0}),l(C).tooltip("show")}).on("mouseout",function(m){var g=n.select(this).node();l(g).tooltip("destroy")}),h.selectAll(".cluster").on("mouseover",function(){let m=[...this.classList].find(y=>y.includes("cluster_"));+m.match(/\d+/)[0];let g="";m in s&&(g=a`${s[m]}`);let c=e(this),b=r`${g} ${o(c)}`;f&&(b=r`${m} ${b}`);var w=n.select(this).node();l(w).tooltip({title:b,trigger:"manual",container:"body",placement:"right",html:!0}),l(w).tooltip("show")}).on("mouseout",function(m){var g=n.select(this).node();l(g).tooltip("destroy")}),v})}function Qe(){return(function(t){let n="";function a(e){for(var o=0;o<e.childNodes.length;o++){var r=e.childNodes[o];a(r),r.firstChild||(n+=r.textContent+" ")}}return a(t),n})}function Ze(i,t,n){return(function(e){let o=[];return i.forEach(l=>{(e.toLowerCase().includes(`${l} `)||e.toLowerCase().includes(`${l}(`))&&o.push(l)}),o.map(l=>{let u=t[l].short_definition,d=t[l].key;return n`<p><strong class="title_case">${d}</strong>: ${u}</p>`})})}function Je(i){return i.json("https://raw.githubusercontent.com/RobinL/spark_glossary/master/glossary.json")}function Xe(i){return Object.keys(i)}function Ke(i){return i("d3")}function ti(i){return i.text("https://gist.githubusercontent.com/RobinL/439154b37f6806ebf4197a90a04e0923/raw/2ac69e42a88c0364f86094e96789548adbef389d/spark_ui_html.html")}function ei(i){return i("jquery")}function ii(i){return(function(t){var n=function(e,o){this.init("tooltip",e,o)};n.prototype={constructor:n,init:function(e,o,r){var l,u,d,s,f;for(this.type=e,this.$element=t(o),this.options=this.getOptions(r),this.enabled=!0,d=this.options.trigger.split(" "),f=d.length;f--;)s=d[f],s=="click"?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):s!="manual"&&(l=s=="hover"?"mouseenter":"focus",u=s=="hover"?"mouseleave":"blur",this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var o=t.fn[this.type].defaults,r={},l;if(this._options&&t.each(this._options,function(u,d){o[u]!=d&&(r[u]=d)},this),l=t(e.currentTarget)[this.type](r).data(this.type),!l.options.delay||!l.options.delay.show)return l.show();clearTimeout(this.timeout),l.hoverState="in",this.timeout=setTimeout(function(){l.hoverState=="in"&&l.show()},l.options.delay.show)},leave:function(e){var o=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!o.options.delay||!o.options.delay.hide)return o.hide();o.hoverState="out",this.timeout=setTimeout(function(){o.hoverState=="out"&&o.hide()},o.options.delay.hide)},show:function(){var e,o,r,l,u,d,s=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),u=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),o=this.getPosition(),r=e[0].offsetWidth,l=e[0].offsetHeight,u){case"bottom":d={top:o.top+o.height,left:o.left+o.width/2-r/2};break;case"top":d={top:o.top-l,left:o.left+o.width/2-r/2};break;case"left":d={top:o.top+o.height/2-l/2,left:o.left-r};break;case"right":d={top:o.top+o.height/2-l/2,left:o.left+o.width};break}this.applyPlacement(d,u),this.$element.trigger("shown")}},applyPlacement:function(e,o){var r=this.tip(),l=r[0].offsetWidth,u=r[0].offsetHeight,d,s,f,p;r.offset(e).addClass(o).addClass("in"),d=r[0].offsetWidth,s=r[0].offsetHeight,o=="top"&&s!=u&&(e.top=e.top+u-s,p=!0),o=="bottom"||o=="top"?(f=0,e.left<0&&(f=e.left*-2,e.left=0,r.offset(e),d=r[0].offsetWidth,s=r[0].offsetHeight),this.replaceArrow(f-l+d,d,"left")):this.replaceArrow(s-u,s,"top"),p&&r.offset(e)},replaceArrow:function(e,o,r){this.arrow().css(r,e?50*(1-e/o)+"%":"")},setContent:function(){var e=this.tip(),o=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](o),e.removeClass("fade in top bottom left right")},hide:function(){var e=this.tip(),o=t.Event("hide");if(this.$element.trigger(o),o.isDefaultPrevented())return;e.removeClass("in");function r(){var l=setTimeout(function(){e.off(t.support.transition.end).detach()},500);e.one(t.support.transition.end,function(){clearTimeout(l),e.detach()})}return t.support.transition&&this.$tip.hasClass("fade")?r():e.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},typeof e.getBoundingClientRect=="function"?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var e,o=this.$element,r=this.options;return e=o.attr("data-original-title")||(typeof r.title=="function"?r.title.call(o[0]):r.title),e},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var o=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;o.tip().hasClass("in")?o.hide():o.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var a=t.fn.tooltip;t.fn.tooltip=function(e){return this.each(function(){var o=t(this),r=o.data("tooltip"),l=typeof e=="object"&&e;r||o.data("tooltip",r=new n(this,l)),typeof e=="string"&&r[e]()})},t.fn.tooltip.Constructor=n,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=a,this}})(window.jQuery)}function ni(i){return i`<style> 
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



</style>`}function ai(i,t){const n=i.module();n.variable(t("title")).define("title",["md"],We),n.variable(t("md_1")).define("md_1",["md"],Ie),n.variable(t("viewof raw_html")).define("viewof raw_html",["textarea","sample_html"],Oe),n.variable(t("raw_html")).define("raw_html",["Generators","viewof raw_html"],(e,o)=>e.input(o)),n.variable(t("output_svg")).define("output_svg",["plot_plan","raw_html","additional_annotations"],Fe),n.variable(t("additional_annotations")).define("additional_annotations",Re),n.variable(t("md_glossary")).define("md_glossary",["md","glossary_keys","html","glossary"],qe),n.variable(t("metadata")).define("metadata",["d3","html","raw_html"],Ue),n.variable(t("get_metadata")).define("get_metadata",["d3","html"],Be),n.variable(t("get_svg")).define("get_svg",["d3","html"],Ve),n.variable(t("plot_plan")).define("plot_plan",["get_svg","svg","d3","md","get_text_content_spaces","get_definitions_from_text","html","$"],Ye),n.variable(t("get_text_content_spaces")).define("get_text_content_spaces",Qe),n.variable(t("get_definitions_from_text")).define("get_definitions_from_text",["glossary_keys","glossary","html"],Ze),n.variable(t("glossary")).define("glossary",["d3"],Je),n.variable(t("glossary_keys")).define("glossary_keys",["glossary"],Xe),n.variable(t("d3")).define("d3",["require"],Ke),n.variable(t("sample_html")).define("sample_html",["d3"],ti),n.variable(t("$")).define("$",["require"],ei),n.variable(t("bstt")).define("bstt",["$"],ii),n.variable(t("styles1")).define("styles1",["html"],ni);const a=i.module(Ne);return n.import("slider",a),n.import("textarea",a),n}function oi(i){return i`# Understanding the Spark UI by example: sorting data`}function ri(i){return i`

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



`}function li(i,t,n){let e=i.select(t`${n}`).select(".unstyled").node().outerHTML;return t`${e}`}function si(i,t,n){return i(t,n,!1)}function ui(){return{node_3:`Shuffle the data using rangepartitioning.  To sort a large dataset in parallel across \`n\` worker nodes, it wouldn't be particularly useful to randomly assign data to different worker nodes.   Instead, we need a strategy where each worker node can sort the data, and this results in a globally sorted dataset. This is what a range partitioner does: it tries to partition your dataset into \`spark.sql.shuffle.partition\` partitions of roughly equal ranges.

Each partition will have a min and max row, relative to the given ordering. All rows that are in between min and max in this ordering will reside in the partition. 

This explains why two scans of data are needed, and this SQL plan consists of two jobs (remember each job corresponds to an RDD action).  The first scan is needed to determine the min and max of each partition.  Spark samples (using reservoir sampling, see [here](https://github.com/eBay/Spark/blob/master/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)) the whole dataset to determine min and max values for each partition that should roughly equally split the data.  In the second job, these values are used to shuffle the data.

The actual number of partitions created by the RangePartitioner might not be the same as the partitions parameter, in the case where the number of sampled records is less than the value of partitions.
`,node_6:"Read in the original data.  Note that the 'number of output rows' is 247m, twice the input data size of 123.5m rows.  This gives us a clue that the data has been scanned twice. See the tooltip for the 'exchange' node for more details. "}}function di(i){return i`## Observations

The most interesting performance-related clues we see from the UI are:

- There are two jobs, despite the job appearing to correspond to a single action.  See the notes on the 'exchange' node to see why there are in fact two actions, and therefore two jobs.
- We can see from the 'scan parquet' node that the data is scanned twice.  See the notes on the 'exchange' node for an explanation.
`}function fi(i){return i.json("https://gist.githubusercontent.com/RobinL/a82aaa19b13b1da6c60cb28c169c505d/raw/b98ceb36c7af3a6a78871f83221abd8cffa032f1/annotations.json")}function pi(i,t){return i(t)}function ci(i){return i`## References and useful resources:

[Stackoverflow: How does Spark achieve sort order](https://stackoverflow.com/questions/32887595/how-does-spark-achieve-sort-order/32888236#32888236)

[Stackoverflow: Number of dataframe partitions after sorting?](https://stackoverflow.com/questions/53786188/number-of-dataframe-partitions-after-sorting)

[The determineBounds method that the range partitioner uses](https://github.com/apache/spark/blob/3da71f2da192276af041024b73e85e0acaac66a4/core/src/main/scala/org/apache/spark/Partitioner.scala#L322)

[The sampling method that the range partitioner uses](https://github.com/apache/spark/blob/16f1b23d75c0b44aac61111bfb2ae9bb0f3fab68/core/src/main/scala/org/apache/spark/util/random/SamplingUtils.scala#L33)

`}function hi(i){return i}function mi(i){return i.text("https://gist.githubusercontent.com/RobinL/866932e428eb0d7edafdf44263f738d5/raw/dcecbc0bbbc5a28b06e4eb9f28c866550b6c7241/sql_tab.html")}function vi(i){return(function(t){var n=function(e,o){this.init("tooltip",e,o)};n.prototype={constructor:n,init:function(e,o,r){var l,u,d,s,f;for(this.type=e,this.$element=t(o),this.options=this.getOptions(r),this.enabled=!0,d=this.options.trigger.split(" "),f=d.length;f--;)s=d[f],s=="click"?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):s!="manual"&&(l=s=="hover"?"mouseenter":"focus",u=s=="hover"?"mouseleave":"blur",this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(u+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var o=t.fn[this.type].defaults,r={},l;if(this._options&&t.each(this._options,function(u,d){o[u]!=d&&(r[u]=d)},this),l=t(e.currentTarget)[this.type](r).data(this.type),!l.options.delay||!l.options.delay.show)return l.show();clearTimeout(this.timeout),l.hoverState="in",this.timeout=setTimeout(function(){l.hoverState=="in"&&l.show()},l.options.delay.show)},leave:function(e){var o=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!o.options.delay||!o.options.delay.hide)return o.hide();o.hoverState="out",this.timeout=setTimeout(function(){o.hoverState=="out"&&o.hide()},o.options.delay.hide)},show:function(){var e,o,r,l,u,d,s=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(s),s.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),u=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),o=this.getPosition(),r=e[0].offsetWidth,l=e[0].offsetHeight,u){case"bottom":d={top:o.top+o.height,left:o.left+o.width/2-r/2};break;case"top":d={top:o.top-l,left:o.left+o.width/2-r/2};break;case"left":d={top:o.top+o.height/2-l/2,left:o.left-r};break;case"right":d={top:o.top+o.height/2-l/2,left:o.left+o.width};break}this.applyPlacement(d,u),this.$element.trigger("shown")}},applyPlacement:function(e,o){var r=this.tip(),l=r[0].offsetWidth,u=r[0].offsetHeight,d,s,f,p;r.offset(e).addClass(o).addClass("in"),d=r[0].offsetWidth,s=r[0].offsetHeight,o=="top"&&s!=u&&(e.top=e.top+u-s,p=!0),o=="bottom"||o=="top"?(f=0,e.left<0&&(f=e.left*-2,e.left=0,r.offset(e),d=r[0].offsetWidth,s=r[0].offsetHeight),this.replaceArrow(f-l+d,d,"left")):this.replaceArrow(s-u,s,"top"),p&&r.offset(e)},replaceArrow:function(e,o,r){this.arrow().css(r,e?50*(1-e/o)+"%":"")},setContent:function(){var e=this.tip(),o=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](o),e.removeClass("fade in top bottom left right")},hide:function(){var e=this.tip(),o=t.Event("hide");if(this.$element.trigger(o),o.isDefaultPrevented())return;e.removeClass("in");function r(){var l=setTimeout(function(){e.off(t.support.transition.end).detach()},500);e.one(t.support.transition.end,function(){clearTimeout(l),e.detach()})}return t.support.transition&&this.$tip.hasClass("fade")?r():e.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},typeof e.getBoundingClientRect=="function"?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var e,o=this.$element,r=this.options;return e=o.attr("data-original-title")||(typeof r.title=="function"?r.title.call(o[0]):r.title),e},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var o=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;o.tip().hasClass("in")?o.hide():o.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var a=t.fn.tooltip;t.fn.tooltip=function(e){return this.each(function(){var o=t(this),r=o.data("tooltip"),l=typeof e=="object"&&e;r||o.data("tooltip",r=new n(this,l)),typeof e=="string"&&r[e]()})},t.fn.tooltip.Constructor=n,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=a,this}})(window.jQuery)}function gi(i,t){const n=i.module();n.variable(t("title")).define("title",["md"],oi),n.variable(t("intro")).define("intro",["md"],ri),n.variable(t("jobs")).define("jobs",["d3","html","raw_html"],li),n.variable(t("plan")).define("plan",["plot_plan","raw_html","annotations"],si),n.variable(t("annotations")).define("annotations",ui),n.variable(t("observations")).define("observations",["md"],di),n.variable(t("annotations2")).define("annotations2",["d3"],fi),n.variable(t("metadata")).define("metadata",["get_metadata","raw_html"],pi),n.variable(t("references")).define("references",["md"],ci);const a=i.module(ai);return n.import("plot_plan",a),n.import("styles1",a),n.import("$",a),n.import("get_svg",a),n.import("d3",a),n.import("get_metadata",a),n.variable(t("mystyles")).define("mystyles",["styles1"],hi),n.variable(t("raw_html")).define("raw_html",["d3"],mi),n.variable(t("bstt")).define("bstt",["$"],vi),n}export{gi as default};
