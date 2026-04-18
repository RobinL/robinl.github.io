var D=Object.freeze,G=Object.defineProperty;var M=(e,t)=>D(G(e,"raw",{value:D(t||e.slice())}));function S(e){return e`| <h3>Friends & Family:</h3>  |   |
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
~~~`}function P(e){return e()}function E(e){return e({min:0,max:1,step:.01,format:".0%",description:"Zero to one, formatted as a percentage"})}function L(e){return e({min:0,max:1,step:.01,format:t=>`${Math.round(100*t)} per cent`,description:"Zero to one, formatted with a custom function"})}function z(e){return e({min:0,max:1e9,step:1e3,value:325e4,format:",",description:"Zero to one billion, in steps of one thousand, formatted as a (US) number"})}function N(e){return e({min:0,max:100,step:1,value:10,title:"Integers",description:"Integers from zero through 100"})}function I(e){return e({min:.9,max:1.1,precision:3,description:"A high precision slider example"})}function O(e){return e({min:.9,max:1.1,precision:3,submit:!0,description:"The same as a4, but only changes value on submit"})}function V(e){return e`More [fancy slider techniques](https://beta.observablehq.com/@mootari/prime-numbers-slider).`}function q(e){return(function(i={}){let{min:a=0,max:n=1,value:o=(n+a)/2,step:r="any",precision:l=2,title:u,description:p,getValue:s,format:c,display:f,submit:_}=typeof i=="number"?{value:i}:i;return l=Math.pow(10,l),s||(s=m=>Math.round(m.valueAsNumber*l)/l),e({type:"range",title:u,description:p,submit:_,format:c,display:f,attributes:{min:a,max:n,step:r,value:o},getValue:s})})}function B(e){return e`---
## Buttons

~~~js
import {button} from "@jashkenas/inputs"
~~~`}function W(e){return e()}function F(e){return!this}function R(e){return e({value:"Click me",description:"We use a reference to the button below to record the time you pressed it."})}function U(e){return new Date(Date.now()).toUTCString()}function Y(e){return(function(i={}){const{value:a="Ok",title:n,description:o,disabled:r}=typeof i=="string"?{value:i}:i,l=e({type:"button",title:n,description:o,attributes:{disabled:r,value:a}});return l.output.remove(),l})}function H(e){return e`---
## Dropdown Menus and Multiselects

~~~js
import {select} from "@jashkenas/inputs"
~~~`}function Q(e){return e(["Spring","Summer","Fall","Winter"])}function J(e){return e}function Z(e){return e({title:"Stooges",description:"Please pick your favorite stooge.",options:["Curly","Larry","Moe","Shemp"],value:"Moe"})}function K(e){return e}function X(e){return e({description:"As a child, which vegetables did you refuse to eat?",options:["Spinach","Broccoli","Brussels Sprouts","Cauliflower","Kale","Turnips","Green Beans","Asparagus"],multiple:!0})}function ee(e){return e}function te(e){const t=e({title:"How are you feeling today?",options:[{label:"🤷",value:"shrug"},{label:"😂",value:"tears-of-joy"},{label:"😍",value:"loving-it"},{label:"🤔",value:"hmmm"},{label:"😱",value:"yikes"},{label:"😈",value:"mischievous"},{label:"💩",value:"poo"}],value:"hmmm"});return t.input.style.fontSize="30px",t.input.style.marginTop="8px",t}function ie(e){return e}function ae(e,t){return(function(a={}){let{value:n,title:o,description:r,submit:l,multiple:u,size:p,options:s}=Array.isArray(a)?{options:a}:a;s=s.map(f=>typeof f=="object"?f:{value:f,label:f});const c=e({type:"select",title:o,description:r,submit:l,getValue:f=>{const _=Array.prototype.filter.call(f.options,m=>m.selected).map(m=>m.value);return u?_:_[0]},form:t`
      <form>
        <select name="input" ${u?`multiple size="${p||s.length}"`:""}>
          ${s.map(({value:f,label:_})=>Object.assign(t`<option>`,{value:f,selected:Array.isArray(n)?n.includes(f):n===f,textContent:_}))}
        </select>
      </form>
    `});return c.output.remove(),c})}function ne(e){return e`---
## Autoselects
*A variant of an option menu, using an autocompleting text input, via HTML’s datalist element.* 

~~~js
import {autoSelect} from "@jashkenas/inputs"
~~~`}function oe(e,t){return e({options:t.objects.states.geometries.map(i=>i.properties.name),placeholder:"Search for a US state . . ."})}function re(e){return e}function le(e,t){return(function(a={}){const{value:n,title:o,description:r,autocomplete:l="off",placeholder:u,size:p,options:s,list:c="options"}=Array.isArray(a)?{options:a}:a,f=new Set(s),_=e({type:"text",title:o,description:r,action:m=>{m.value=m.input.value=n||"",m.onsubmit=h=>h.preventDefault(),m.input.oninput=function(h){h.stopPropagation(),m.value=m.input.value,f.has(m.input.value)&&m.dispatchEvent(new CustomEvent("input"))}},form:t`
      <form>
         <input name="input" type="text" autocomplete="off" 
          placeholder="${u}" style="font-size: 1em;" list=${c}>
          <datalist id="${c}">
              ${s.map(m=>Object.assign(t`<option>`,{value:m}))}
          </datalist>
      </form>
      `});return _.output.remove(),_})}function ue(e){return e`---
## Color Pickers

*value: a hexadecimal string, e.g. * \`"#bada55"\` 

~~~js
import {color} from "@jashkenas/inputs"
~~~`}function se(e){return e()}function de(e){return e({value:"#0000ff",title:"Background Color",description:"This color picker starts out blue"})}function ce(e){return(function(i={}){const{value:a="#000000",title:n,description:o,submit:r,display:l}=typeof i=="string"?{value:i}:i,u=e({type:"color",title:n,description:o,submit:r,display:l,attributes:{value:a}});return(n||o)&&(u.input.style.margin="5px 0"),u})}function fe(e){return e` ---
## Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {coordinates} from "@jashkenas/inputs"
~~~`}function me(e){return e()}function pe(e){return e}function _e(e){return e({title:"Hometown",description:"Enter the coordinates of where you were born",value:[-122.27,37.87],submit:!0})}function he(e){return e}function be(e,t){return(function(a={}){const{value:n=[],title:o,description:r,submit:l}=Array.isArray(a)?{value:a}:a;let[u,p]=n;u=u??"",p=p??"";const s=e`<input name="input" type="number" autocomplete="off" min="-180" max="180" style="width: 80px;" step="any" value="${u}" />`,c=e`<input name="input" type="number" autocomplete="off" min="-90" max="90" style="width: 80px;" step="any" value="${p}" />`,f=t({type:"coordinates",title:o,description:r,submit:l,getValue:()=>{const _=s.valueAsNumber,m=c.valueAsNumber;return[isNaN(_)?null:_,isNaN(m)?null:m]},form:e`
      <form>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 6px 0 0;">
          <span style="display: inline-block; width: 70px;">Longitude:</span>
          ${s}
        </label>
        <br>
        <label style="display: inline-block; font: 600 0.8rem sans-serif; margin: 0 0 6px;">
          <span style="display: inline-block; width: 70px;">Latitude:</span>
          ${c}
        </label>
      </form>
    `});return f.output.remove(),f})}function ve(e){return e` ---
## World Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {worldMapCoordinates} from "@jashkenas/inputs"
~~~`}function ge(e){return e([-122.27,37.87])}function we(e){return e}function ye(e,t,i,a,n,o,r){return(function(u={}){const{value:p=[],title:s,description:c,width:f=400}=Array.isArray(u)?{value:u}:u,_=Math.round(210/400*f);let[m,h]=p;m=m??null,h=h??null;const b=e`<form style="width: ${f}px;"></form>`,d=t.context2d(f,_),v=d.canvas;v.style.margin="10px 0 0";const g=i.geoNaturalEarth1().precision(.1).fitSize([f,_],{type:"Sphere"}),y=i.geoPath(g,d).pointRadius(2.5);b.append(v);function x(){if(d.fillStyle="#fff",d.fillRect(0,0,f,_),d.beginPath(),y(a),d.lineWidth=.35,d.strokeStyle="#ddd",d.stroke(),d.beginPath(),y(n),d.fillStyle="#f4f4f4",d.fill(),d.beginPath(),y(o),d.strokeStyle="#aaa",d.stroke(),m!=null&&h!=null){const w={type:"MultiPoint",coordinates:[[m,h]]};d.beginPath(),y(w),d.fillStyle="#f00",d.fill()}}return v.onclick=function(w){const{offsetX:j,offsetY:$}=w;var k=g.invert([j,$]);m=+k[0].toFixed(2),h=+k[1].toFixed(2),x(),v.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),r({type:"worldMapCoordinates",title:s,description:c,display:w=>e`<div style="position: absolute; width: ${f}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${m??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[m??null,h??null],form:b})})}function xe(e){return e` ---
## U.S.A. Map Coordinates

*value: an array pair of \`[longitude, latitude]\`, e.g. * \`[-122.27, 37.87]\` 

~~~js
import {usaMapCoordinates} from "@jashkenas/inputs"
~~~`}function ke(e){return e([-122.27,37.87])}function je(e){return e}function $e(e){return e({title:"A Mini Map",description:"Defaults to New York City",width:200,value:[-74,40.71]})}function De(e){return e}function Me(e,t,i,a,n,o){return(function(l={}){const{value:u=[],title:p,description:s,width:c=400}=Array.isArray(l)?{value:l}:l,f=c/960,_=f*600;let[m,h]=u;m=m??null,h=h??null;const b=e`<form style="width: ${c}px;"></form>`,d=t.context2d(c,_),v=d.canvas;v.style.margin="5px 0 0";const g=i.geoAlbersUsa().scale(1280).translate([480,300]),y=i.geoPath().context(d).pointRadius(2.5/f);b.append(v);function x(){if(d.clearRect(0,0,c,_),d.save(),d.scale(f,f),d.lineWidth=.35/f,d.beginPath(),y(a),d.fillStyle="#f4f4f4",d.fill(),d.beginPath(),y(n),d.strokeStyle="#aaa",d.stroke(),m!=null&&h!=null){const w={type:"MultiPoint",coordinates:[g([m,h])]};d.beginPath(),y(w),d.fillStyle="#f00",d.fill()}d.restore()}return v.onclick=function(w){const{offsetX:j,offsetY:$}=w;var k=g.invert([j/f,$/f]);m=+k[0].toFixed(2),h=+k[1].toFixed(2),x(),v.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},x(),o({type:"worldMapCoordinates",title:p,description:s,display:w=>e`<div style="position: absolute; width: ${c}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-top: -18px;">
            <span style="color: #777;">Longitude:</span> ${m??""}
            &nbsp; &nbsp; 
            <span style="color: #777;">Latitude:</span> ${h??""} 
          </div>`,getValue:()=>[m??null,h??null],form:b})})}function Ae(e){return e` ---
## Dates

*value: a YYYY-MM-DD formatted string: * \`"2016-11-08"\` 

~~~js
import {date} from "@jashkenas/inputs"
~~~`}function Ce(e){return e()}function Ge(e){return e({title:"2017",min:"2017-01-01",max:"2017-12-31",value:"2017-01-01",description:"Only dates within the 2017 calendar year are allowed"})}function Se(e){return(function(i={}){const{min:a,max:n,value:o,title:r,description:l,display:u}=typeof i=="string"?{value:i}:i;return e({type:"date",title:r,description:l,display:u,attributes:{min:a,max:n,value:o}})})}function Te(e){return e` ---
## Times

*value: a HH:MM:SS formatted string: * \`"09:30:45"\`
<br>*(Time values are always in 24-hour format)*

~~~js
import {time} from "@jashkenas/inputs"
~~~`}function Pe(e){return e()}function Ee(e){return e}function Le(e){return e({title:"Afternoon",min:"12:00:00",max:"23:59:59",value:"13:00:00",step:1,description:"Only times after noon are allowed, and seconds are included"})}function ze(e){return e}function Ne(e){return(function(i={}){const{min:a,max:n,step:o,value:r,title:l,description:u,display:p}=typeof i=="string"?{value:i}:i,s=e({type:"time",title:l,description:u,display:p,getValue:c=>c.value?c.value:void 0,attributes:{min:a,max:n,step:o,value:r}});return s.output.remove(),s})}function Ie(e){return e`---
## File Upload
*Use the JavaScript [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) to work with uploaded file contents.*

\`import {file} from "@jashkenas/inputs"\``}function Oe(e){return e()}function Ve(e){return e({title:"Photographs",description:"Only .jpg files are allowed in this example. Choose some images, and they’ll appear in the cell below.",accept:".jpg",multiple:!0})}async function qe(e,t,i){const a=e`<div>`;for(var n=0;n<t.length;n++){t[n];let o=e`<img height="125px" style="margin: 2px;" />`;o.src=await i.url(t[n]),a.append(o)}return a}function Be(e){return(function(i={}){const{multiple:a,accept:n,title:o,description:r}=i,l=e({type:"file",title:o,description:r,attributes:{multiple:a,accept:n},action:u=>{u.input.onchange=()=>{u.value=a?u.input.files:u.input.files[0],u.dispatchEvent(new CustomEvent("input"))}}});return l.output.remove(),l.input.onchange(),l})}function We(e){return e`---
## Text Inputs

~~~js
import {text} from "@jashkenas/inputs"
~~~`}function Fe(e){return e()}function Re(e){return e({title:"A Text Input",placeholder:"Placeholder text",description:"Note that text inputs don’t show output on the right"})}function Ue(e){return e}function Ye(e){return e({placeholder:"Placeholder text",description:"This input only changes value on submit",submit:"Go"})}function He(e){return e}function Qe(e){return(function(i={}){const{value:a,title:n,description:o,autocomplete:r="off",maxlength:l,minlength:u,pattern:p,placeholder:s,size:c,submit:f}=typeof i=="string"?{value:i}:i,_=e({type:"text",title:n,description:o,submit:f,attributes:{value:a,autocomplete:r,maxlength:l,minlength:u,pattern:p,placeholder:s,size:c}});return _.output.remove(),_.input.style.fontSize="1em",_})}function Je(e){return e`---
## Textareas

~~~js
import {textarea} from "@jashkenas/inputs"
~~~`}function Ze(e){return e()}function Ke(e){return e}function Xe(e){return e({title:"Your Great American Novel",placeholder:"Insert story here...",spellcheck:!0,width:"100%",rows:10,submit:"Publish"})}function et(e){return e}function tt(e,t){return(function(a={}){const{value:n="",title:o,description:r,autocomplete:l,cols:u=45,rows:p=3,width:s,height:c,maxlength:f,placeholder:_,spellcheck:m,wrap:h,submit:b}=typeof a=="string"?{value:a}:a,d=e({form:t`<form><textarea style="display: block; font-size: 0.8em;" name=input>${n}</textarea></form>`,title:o,description:r,submit:b,attributes:{autocomplete:l,cols:u,rows:p,maxlength:f,placeholder:_,spellcheck:m,wrap:h}});return d.output.remove(),s!=null&&(d.input.style.width=s),c!=null&&(d.input.style.height=c),b&&(d.submit.style.margin="0"),(o||r)&&(d.input.style.margin="3px 0"),d})}function it(e){return e`---
## Radio Buttons

~~~js
import {radio} from "@jashkenas/inputs"
~~~`}function at(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function nt(e){return e}function ot(e){return e({title:"Contact Us",description:"Please select your preferred contact method",options:[{label:"By Email",value:"email"},{label:"By Phone",value:"phone"},{label:"By Pager",value:"pager"}],value:"pager"})}function rt(e){return e}function lt(e,t){return(function(a={}){let{value:n,title:o,description:r,submit:l,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(s=>typeof s=="string"?{value:s,label:s}:s);const p=e({type:"radio",title:o,description:r,submit:l,getValue:s=>{if(s.checked)return s.value;const c=Array.prototype.find.call(s,f=>f.checked);return c?c.value:void 0},form:t`
      <form>
        ${u.map(({value:s,label:c})=>{const f=t`<input type=radio name=input ${s===n?"checked":""} style="vertical-align: baseline;" />`;return f.setAttribute("value",s),t`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${f}
           ${c}
          </label>`})}
      </form>
    `});return p.output.remove(),p})}function ut(e){return e`---
## Checkboxes

~~~js
import {checkbox} from "@jashkenas/inputs"
~~~`}function st(e){return e(["Lust","Gluttony","Greed","Sloth","Wrath","Envy","Pride"])}function dt(e){return e}function ct(e){return e({title:"Colors",description:"Please select your favorite colors",options:[{value:"r",label:"Red"},{value:"o",label:"Orange"},{value:"y",label:"Yellow"},{value:"g",label:"Green"},{value:"b",label:"Blue"},{value:"i",label:"Indigo"},{value:"v",label:"Violet"}],value:["r","g","b"],submit:!0})}function ft(e){return e}function mt(e){return e({description:"Just a single checkbox to toggle",options:[{value:"toggle",label:"On"}],value:"toggle"})}function pt(e){return e}function _t(e,t){return(function(a={}){let{value:n,title:o,description:r,submit:l,options:u}=Array.isArray(a)?{options:a}:a;u=u.map(s=>typeof s=="string"?{value:s,label:s}:s);const p=e({type:"checkbox",title:o,description:r,submit:l,getValue:s=>s.length?Array.prototype.filter.call(s,c=>c.checked).map(c=>c.value):s.checked?s.value:!1,form:t`
      <form>
        ${u.map(({value:s,label:c})=>{const f=t`<input type=checkbox name=input ${(n||[]).indexOf(s)>-1?"checked":""} style="vertical-align: baseline;" />`;return f.setAttribute("value",s),t`<label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${f}
           ${c}
          </label>`})}
      </form>
    `});return p.output.remove(),p})}function ht(e){return e`---
## Numbers

~~~js
import {number} from "@jashkenas/inputs"
~~~`}function bt(e){return e()}function vt(e){return e}function gt(e){return e({placeholder:"13+",title:"Your Age",submit:!0})}function wt(e){return e}function yt(e){return(function(i={}){const{value:a,title:n,description:o,placeholder:r,submit:l,step:u="any",min:p,max:s}=typeof i=="number"||typeof i=="string"?{value:+i}:i,c=e({type:"number",title:n,description:o,submit:l,attributes:{value:a,placeholder:r,step:u,min:p,max:s,autocomplete:"off"},getValue:f=>f.valueAsNumber});return c.output.remove(),c.input.style.width="auto",c.input.style.fontSize="1em",c})}function xt(e){return e`---
## Passwords

~~~js
import {password} from "@jashkenas/inputs"
~~~`}function kt(e){return e({value:"password"})}function jt(e){return e}function $t(e){return e({title:"Your super secret password",description:"Less than 12 characters, please.",minlength:6,maxlength:12})}function Dt(e){return e}function Mt(e){return(function(i={}){const{value:a,title:n,description:o,autocomplete:r="off",maxlength:l,minlength:u,pattern:p,placeholder:s,size:c,submit:f}=typeof i=="string"?{value:i}:i,_=e({type:"password",title:n,description:o,submit:f,attributes:{value:a,autocomplete:r,maxlength:l,minlength:u,pattern:p,placeholder:s,size:c}});return _.output.remove(),_.input.style.fontSize="1em",_})}function At(e){return e`---
## Wishlist (Send suggestions, please!)

* 2D coordinate input (using an &lt;svg>)
* 3D coordinate input (for say, positioning a camera in a WebGL sketch)
* Geocoder search with location autocomplete that returns longitude and latitude.
* Degrees or radians input, for circular things, or angles.
* A dimensions input, or a box-model input, with margin (and optionally, padding).
* A map-projection-picker input, rendering little thumbnails of all the d3-geo-projections.
* Other useful formatting options.

---`}function Ct(e,t){return(function(a){let{form:n,type:o="text",attributes:r={},action:l,getValue:u,title:p,description:s,format:c,display:f,submit:_,options:m}=a;const h=e`<div></div>`;if(n||(n=e`<form>
	<input name=input type=${o} />
  </form>`),Object.keys(r).forEach(b=>{const d=r[b];d!=null&&n.input.setAttribute(b,d)}),_&&n.append(e`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof _=="string"?_:"Submit"}" />`),n.append(e`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`),p&&n.prepend(e`<div style="font: 700 0.9rem sans-serif;">${p}</div>`),s&&n.append(e`<div style="font-size: 0.85rem; font-style: italic;">${s}</div>`),c&&(c=typeof c=="function"?c:t.format(c)),l)l(n);else{const b=_?"onsubmit":o=="button"?"onclick":o=="checkbox"||o=="radio"?"onchange":"oninput";n[b]=d=>{d&&d.preventDefault();const v=u?u(n.input):n.input.value;if(n.output){const g=f?f(v):c?c(v):v;if(g instanceof window.Element){for(;n.output.hasChildNodes();)n.output.removeChild(n.output.lastChild);n.output.append(g)}else n.output.value=g}n.value=v,b!=="oninput"&&n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))},b!=="oninput"&&(h.oninput=d=>d&&d.stopPropagation()&&d.preventDefault()),b!=="onsubmit"&&(n.onsubmit=d=>d&&d.preventDefault()),n[b]()}for(;n.childNodes.length;)h.appendChild(n.childNodes[0]);return n.append(h),n})}function Gt(e){return e("d3-geo@1")}function St(e){return e("d3-format@1")}function Tt(e){return e("topojson-client@3")}async function Pt(){return(await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()}function Et(e,t){return e.feature(t,t.objects.land)}function Lt(e,t){return e.feature(t,t.objects.countries)}async function zt(){return(await fetch("https://cdn.jsdelivr.net/npm/us-atlas@^2.1/us/states-10m.json")).json()}function Nt(e,t){return e.feature(t,t.objects.nation)}function It(e,t){return e.feature(t,t.objects.states)}function Ot(e){return e.geoGraticule10()}function Vt(e){const t=e`License: [MIT](https://opensource.org/licenses/MIT)`;return t.value="MIT",t}function qt(e){return e`*Clip art courtesy [ClipArt ETC](https://etc.usf.edu/clipart/), radio buttons and checkboxes courtesy [Amit Sch](https://beta.observablehq.com/@meetamit/multiple-choice-inputs).*`}function Bt(e,t){const i=e.module();return i.variable(t()).define(["md"],S),i.variable(t("sliderDemo")).define("sliderDemo",["md"],T),i.variable(t("viewof a")).define("viewof a",["slider"],P),i.variable(t("a")).define("a",["Generators","viewof a"],(a,n)=>a.input(n)),i.variable(t("viewof a1")).define("viewof a1",["slider"],E),i.variable(t("a1")).define("a1",["Generators","viewof a1"],(a,n)=>a.input(n)),i.variable(t("viewof a1_1")).define("viewof a1_1",["slider"],L),i.variable(t("a1_1")).define("a1_1",["Generators","viewof a1_1"],(a,n)=>a.input(n)),i.variable(t("viewof a2")).define("viewof a2",["slider"],z),i.variable(t("a2")).define("a2",["Generators","viewof a2"],(a,n)=>a.input(n)),i.variable(t("viewof a3")).define("viewof a3",["slider"],N),i.variable(t("a3")).define("a3",["Generators","viewof a3"],(a,n)=>a.input(n)),i.variable(t("viewof a4")).define("viewof a4",["slider"],I),i.variable(t("a4")).define("a4",["Generators","viewof a4"],(a,n)=>a.input(n)),i.variable(t("viewof a5")).define("viewof a5",["slider"],O),i.variable(t("a5")).define("a5",["Generators","viewof a5"],(a,n)=>a.input(n)),i.variable(t()).define(["md"],V),i.variable(t("slider")).define("slider",["input"],q),i.variable(t("buttonDemo")).define("buttonDemo",["md"],B),i.variable(t("viewof b")).define("viewof b",["button"],W),i.variable(t("b")).define("b",["Generators","viewof b"],(a,n)=>a.input(n)),i.variable(t()).define(["b"],F),i.variable(t("viewof b1")).define("viewof b1",["button"],R),i.variable(t("b1")).define("b1",["Generators","viewof b1"],(a,n)=>a.input(n)),i.variable(t()).define(["b1"],U),i.variable(t("button")).define("button",["input"],Y),i.variable(t("selectDemo")).define("selectDemo",["md"],H),i.variable(t("viewof dd")).define("viewof dd",["select"],Q),i.variable(t("dd")).define("dd",["Generators","viewof dd"],(a,n)=>a.input(n)),i.variable(t()).define(["dd"],J),i.variable(t("viewof dd1")).define("viewof dd1",["select"],Z),i.variable(t("dd1")).define("dd1",["Generators","viewof dd1"],(a,n)=>a.input(n)),i.variable(t()).define(["dd1"],K),i.variable(t("viewof dd2")).define("viewof dd2",["select"],X),i.variable(t("dd2")).define("dd2",["Generators","viewof dd2"],(a,n)=>a.input(n)),i.variable(t()).define(["dd2"],ee),i.variable(t("viewof dd3")).define("viewof dd3",["select"],te),i.variable(t("dd3")).define("dd3",["Generators","viewof dd3"],(a,n)=>a.input(n)),i.variable(t()).define(["dd3"],ie),i.variable(t("select")).define("select",["input","html"],ae),i.variable(t("autoSelectDemo")).define("autoSelectDemo",["md"],ne),i.variable(t("viewof as")).define("viewof as",["autoSelect","usa"],oe),i.variable(t("as")).define("as",["Generators","viewof as"],(a,n)=>a.input(n)),i.variable(t()).define(["as"],re),i.variable(t("autoSelect")).define("autoSelect",["input","html"],le),i.variable(t("colorDemo")).define("colorDemo",["md"],ue),i.variable(t("viewof c")).define("viewof c",["color"],se),i.variable(t("c")).define("c",["Generators","viewof c"],(a,n)=>a.input(n)),i.variable(t("viewof c1")).define("viewof c1",["color"],de),i.variable(t("c1")).define("c1",["Generators","viewof c1"],(a,n)=>a.input(n)),i.variable(t("color")).define("color",["input"],ce),i.variable(t("coordinatesDemo")).define("coordinatesDemo",["md"],fe),i.variable(t("viewof coords1")).define("viewof coords1",["coordinates"],me),i.variable(t("coords1")).define("coords1",["Generators","viewof coords1"],(a,n)=>a.input(n)),i.variable(t()).define(["coords1"],pe),i.variable(t("viewof coords2")).define("viewof coords2",["coordinates"],_e),i.variable(t("coords2")).define("coords2",["Generators","viewof coords2"],(a,n)=>a.input(n)),i.variable(t()).define(["coords2"],he),i.variable(t("coordinates")).define("coordinates",["html","input"],be),i.variable(t("worldMapCoordinatesDemo")).define("worldMapCoordinatesDemo",["md"],ve),i.variable(t("viewof worldMap1")).define("viewof worldMap1",["worldMapCoordinates"],ge),i.variable(t("worldMap1")).define("worldMap1",["Generators","viewof worldMap1"],(a,n)=>a.input(n)),i.variable(t()).define(["worldMap1"],we),i.variable(t("worldMapCoordinates")).define("worldMapCoordinates",["html","DOM","d3geo","graticule","land","countries","input"],ye),i.variable(t("usaMapCoordinatesDemo")).define("usaMapCoordinatesDemo",["md"],xe),i.variable(t("viewof usaMap1")).define("viewof usaMap1",["usaMapCoordinates"],ke),i.variable(t("usaMap1")).define("usaMap1",["Generators","viewof usaMap1"],(a,n)=>a.input(n)),i.variable(t()).define(["usaMap1"],je),i.variable(t("viewof usaMap2")).define("viewof usaMap2",["usaMapCoordinates"],$e),i.variable(t("usaMap2")).define("usaMap2",["Generators","viewof usaMap2"],(a,n)=>a.input(n)),i.variable(t()).define(["usaMap2"],De),i.variable(t("usaMapCoordinates")).define("usaMapCoordinates",["html","DOM","d3geo","nation","states","input"],Me),i.variable(t("dateDemo")).define("dateDemo",["md"],Ae),i.variable(t("viewof d")).define("viewof d",["date"],Ce),i.variable(t("d")).define("d",["Generators","viewof d"],(a,n)=>a.input(n)),i.variable(t("viewof d1")).define("viewof d1",["date"],Ge),i.variable(t("d1")).define("d1",["Generators","viewof d1"],(a,n)=>a.input(n)),i.variable(t("date")).define("date",["input"],Se),i.variable(t("timeDemo")).define("timeDemo",["md"],Te),i.variable(t("viewof t")).define("viewof t",["time"],Pe),i.variable(t("t")).define("t",["Generators","viewof t"],(a,n)=>a.input(n)),i.variable(t()).define(["t"],Ee),i.variable(t("viewof t1")).define("viewof t1",["time"],Le),i.variable(t("t1")).define("t1",["Generators","viewof t1"],(a,n)=>a.input(n)),i.variable(t()).define(["t1"],ze),i.variable(t("time")).define("time",["input"],Ne),i.variable(t("fileDemo")).define("fileDemo",["md"],Ie),i.variable(t("viewof e")).define("viewof e",["file"],Oe),i.variable(t("e")).define("e",["Generators","viewof e"],(a,n)=>a.input(n)),i.variable(t("viewof e1")).define("viewof e1",["file"],Ve),i.variable(t("e1")).define("e1",["Generators","viewof e1"],(a,n)=>a.input(n)),i.variable(t()).define(["html","e1","Files"],qe),i.variable(t("file")).define("file",["input"],Be),i.variable(t("textDemo")).define("textDemo",["md"],We),i.variable(t("viewof f")).define("viewof f",["text"],Fe),i.variable(t("f")).define("f",["Generators","viewof f"],(a,n)=>a.input(n)),i.variable(t("viewof f1")).define("viewof f1",["text"],Re),i.variable(t("f1")).define("f1",["Generators","viewof f1"],(a,n)=>a.input(n)),i.variable(t()).define(["f1"],Ue),i.variable(t("viewof f2")).define("viewof f2",["text"],Ye),i.variable(t("f2")).define("f2",["Generators","viewof f2"],(a,n)=>a.input(n)),i.variable(t()).define(["f2"],He),i.variable(t("text")).define("text",["input"],Qe),i.variable(t("textareaDemo")).define("textareaDemo",["md"],Je),i.variable(t("viewof g")).define("viewof g",["textarea"],Ze),i.variable(t("g")).define("g",["Generators","viewof g"],(a,n)=>a.input(n)),i.variable(t()).define(["g"],Ke),i.variable(t("viewof g1")).define("viewof g1",["textarea"],Xe),i.variable(t("g1")).define("g1",["Generators","viewof g1"],(a,n)=>a.input(n)),i.variable(t()).define(["g1"],et),i.variable(t("textarea")).define("textarea",["input","html"],tt),i.variable(t("radioDemo")).define("radioDemo",["md"],it),i.variable(t("viewof r")).define("viewof r",["radio"],at),i.variable(t("r")).define("r",["Generators","viewof r"],(a,n)=>a.input(n)),i.variable(t()).define(["r"],nt),i.variable(t("viewof r1")).define("viewof r1",["radio"],ot),i.variable(t("r1")).define("r1",["Generators","viewof r1"],(a,n)=>a.input(n)),i.variable(t()).define(["r1"],rt),i.variable(t("radio")).define("radio",["input","html"],lt),i.variable(t("checkboxDemo")).define("checkboxDemo",["md"],ut),i.variable(t("viewof ch")).define("viewof ch",["checkbox"],st),i.variable(t("ch")).define("ch",["Generators","viewof ch"],(a,n)=>a.input(n)),i.variable(t()).define(["ch"],dt),i.variable(t("viewof ch1")).define("viewof ch1",["checkbox"],ct),i.variable(t("ch1")).define("ch1",["Generators","viewof ch1"],(a,n)=>a.input(n)),i.variable(t()).define(["ch1"],ft),i.variable(t("viewof ch3")).define("viewof ch3",["checkbox"],mt),i.variable(t("ch3")).define("ch3",["Generators","viewof ch3"],(a,n)=>a.input(n)),i.variable(t()).define(["ch3"],pt),i.variable(t("checkbox")).define("checkbox",["input","html"],_t),i.variable(t("numberDemo")).define("numberDemo",["md"],ht),i.variable(t("viewof h")).define("viewof h",["number"],bt),i.variable(t("h")).define("h",["Generators","viewof h"],(a,n)=>a.input(n)),i.variable(t()).define(["h"],vt),i.variable(t("viewof h1")).define("viewof h1",["number"],gt),i.variable(t("h1")).define("h1",["Generators","viewof h1"],(a,n)=>a.input(n)),i.variable(t()).define(["h1"],wt),i.variable(t("number")).define("number",["input"],yt),i.variable(t("passwordDemo")).define("passwordDemo",["md"],xt),i.variable(t("viewof i")).define("viewof i",["password"],kt),i.variable(t("i")).define("i",["Generators","viewof i"],(a,n)=>a.input(n)),i.variable(t()).define(["i"],jt),i.variable(t("viewof i1")).define("viewof i1",["password"],$t),i.variable(t("i1")).define("i1",["Generators","viewof i1"],(a,n)=>a.input(n)),i.variable(t()).define(["i1"],Dt),i.variable(t("password")).define("password",["input"],Mt),i.variable(t()).define(["md"],At),i.variable(t("input")).define("input",["html","d3format"],Ct),i.variable(t("d3geo")).define("d3geo",["require"],Gt),i.variable(t("d3format")).define("d3format",["require"],St),i.variable(t("topojson")).define("topojson",["require"],Tt),i.variable(t("world")).define("world",Pt),i.variable(t("land")).define("land",["topojson","world"],Et),i.variable(t("countries")).define("countries",["topojson","world"],Lt),i.variable(t("usa")).define("usa",zt),i.variable(t("nation")).define("nation",["topojson","usa"],Nt),i.variable(t("states")).define("states",["topojson","usa"],It),i.variable(t("graticule")).define("graticule",["d3geo"],Ot),i.variable(t("viewof license")).define("viewof license",["md"],Vt),i.variable(t("license")).define("license",["Generators","viewof license"],(a,n)=>a.input(n)),i.variable(t()).define(["md"],qt),i}function Wt(e){return e`# Vega-Lite API v4`}function Ft(e){return e`The [Vega-Lite JavaScript API](https://github.com/vega/vega-lite-api/) provides a convenient way to write [Vega-Lite](https://vega.github.io/vega-lite) specifications in a programmatic fashion. Scroll down for some usage examples, or browse the [Vega-Lite API example collection](https://observablehq.com/collection/@vega/vega-lite-api)!

This notebook uses **version 4** of Vega-Lite and the corresponding Vega-Lite API 4.0. _To use the more recent Vega-Lite version 5, see the [Vega-Lite API v5 notebook](https://observablehq.com/@vega/vega-lite-api-v5) instead._

Want to learn more about data visualization and how to use the Vega-Lite API? Read the [introduction to Vega-Lite](https://observablehq.com/@uwdata/introduction-to-vega-lite) and the [data visualization curriculum](https://observablehq.com/@uwdata/data-visualization-curriculum?collection=@uwdata/visualization-curriculum).`}function Rt(e){return e`
The cell below imports the Vega-Lite API and registers the desired versions of Vega and Vega-Lite, along with default [Vega View options](https://vega.github.io/vega/docs/api/view/#view) and [Vega-Lite configuration](https://vega.github.io/vega-lite/docs/config.html):
`}async function Ut(e){const[t,i,a,n]=await Promise.all(["vega@5.23.0","vega-lite@4.17.0","vega-lite-api@4.0.0","vega-tooltip@0.25.1"].map(r=>e(r))),o={config:{config:{view:{continuousWidth:400,continuousHeight:300},mark:{tooltip:null}}},init:r=>{r.tooltip(new n.Handler().call),r.container()&&(r.container().style["overflow-x"]="auto")},view:{loader:t.loader({baseURL:"https://cdn.jsdelivr.net/npm/vega-datasets@2/"}),renderer:"canvas"}};return a.register(t,i,o)}function Yt(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import {vl} from '@vega/vega-lite-api'
~~~
To use the API outside of Observable, see the [stand-alone usage instructions](#standalone_use) below.
`}function Ht(e){return e`## Zip Codes

A dot for each zip code in the United States, colored by the first digit.
`}function Qt(e,t){return e.markSquare({size:2,opacity:1}).data("data/zipcodes.csv").transform(e.calculate("substring(datum.zip_code, 0, 1)").as("digit")).project(e.projection("albersUsa")).encode(e.longitude().fieldQ("longitude"),e.latitude().fieldQ("latitude"),e.color().fieldN("digit")).width(t).height(Math.floor(t/1.75)).autosize({type:"fit-x",contains:"padding"}).config({view:{stroke:null}}).render()}function Jt(e){return e`## Interactive Seattle Weather 2012-2015

A scatter plot and summary histogram with linked \`selections\` between plots to perform cross-filtering and configure conditional color encodings.
`}function Zt(e,t){const i=e.selectInterval().encodings("x"),a=e.selectMulti().encodings("color"),n={domain:["sun","fog","drizzle","rain","snow"],range:["#e7ba52","#a7a7a7","#aec7e8","#1f77b4","#9467bd"]},o=e.markPoint({filled:!0}).encode(e.color().value("lightgray").if(i,e.color().fieldN("weather").scale(n).title("Weather")),e.size().fieldQ("precipitation").scale({domain:[-1,50],range:[10,500]}).title("Precipitation"),e.order().fieldQ("precipitation").sort("descending"),e.x().timeMD("date").axis({title:"Date",format:"%b"}),e.y().fieldQ("temp_max").scale({domain:[-5,40]}).axis({title:"Maximum Daily Temperature (°C)"})).width(t).height(300).select(i).transform(e.filter(a)),r=e.markBar().encode(e.color().value("lightgray").if(a,e.color().fieldN("weather").scale(n).title("Weather")),e.x().count(),e.y().fieldN("weather").scale({domain:n.domain}).title("Weather")).width(t).select(a).transform(e.filter(i));return e.vconcat(o,r).data("data/seattle-weather.csv").autosize({type:"fit-x",contains:"padding"}).render()}function Kt(e){return e`## Parallel Coordinates

A [parallel coordinates plot](https://en.wikipedia.org/wiki/Parallel_coordinates) that uses \`window\` and \`fold\` transforms to convert the four dimensions of penguin measurements into normalized coordinates that can be visualized as \`line\` marks. The graphic includes an additional layer with custom \`text\` mark labels for the parallel axis grid lines. We render the plot as SVG by passing \`{renderer:'svg'}\` to the \`render\` method.
`}function Xt(e,t){const i=["Beak Length (mm)","Beak Depth (mm)","Flipper Length (mm)","Body Mass (g)"],a={type:"point",padding:0},n={domain:!1,ticks:!1,title:!1,grid:!0,gridColor:"#888",labelAngle:0,labelPadding:8,labelFontWeight:"bold"},o=e.markLine({strokeWidth:1.5,opacity:.5}).encode(e.color().fieldN("Species").sort("descending"),e.detail().fieldN("index"),e.x().fieldO("key").scale(a).axis(n),e.y().fieldQ("fraction").axis(null)),r=e.markText({dx:-2,align:"right",baseline:"middle"}).transform(e.groupby("key").aggregate(e.min("value").as("min"),e.max("value").as("max")),e.fold("min","max").as("op","value"),e.groupby("key").window(e.percent_rank("value").as("fraction"))).encode(e.x().fieldN("key"),e.y().fieldQ("fraction").axis(null),e.text().field("value").format(","));return e.layer(o,r).data("data/penguins.json").transform(e.filter('datum["Beak Length (mm)"] != null'),e.window(e.row_number().as("index")),e.fold(i).as("key","value"),e.groupby("key").join(e.min("value").as("min"),e.max("value").as("max")),e.calculate("(datum.value - datum.min) / (datum.max - datum.min)").as("fraction")).width(t).height(300).autosize({type:"fit-x",contains:"padding"}).render({renderer:"svg"})}var A;function ei(e){return e(A||(A=M([`<hr/>
## Stand-Alone Usage in a Web Browser

To use the Vega-Lite API in the browser outside of Observable, you need to include all the dependencies, set the default configuration, and then register the Vega libraries. Here is some starting code to build from:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/vega@5"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite-api@4"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/vega-tooltip"><\/script>
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
    <\/script>
  </body>
</html>

~~~`])))}function ti(e,t){const i=e.module();return i.variable(t()).define(["md"],Wt),i.variable(t()).define(["md"],Ft),i.variable(t()).define(["md"],Rt),i.variable(t("vl")).define("vl",["require"],Ut),i.variable(t()).define(["md"],Yt),i.variable(t("zip_codes")).define("zip_codes",["md"],Ht),i.variable(t()).define(["vl","width"],Qt),i.variable(t("interactive_weather")).define("interactive_weather",["md"],Jt),i.variable(t()).define(["vl","width"],Zt),i.variable(t("parallel_coordinats")).define("parallel_coordinats",["md"],Kt),i.variable(t()).define(["vl","width"],Xt),i.variable(t("standalone_use")).define("standalone_use",["md"],ei),i}function ii(e){return e`# Unsupervised probabalistic data matching using the Expectation Maximisation algorithm`}function ai(e){return e`This notebook is an interactive implementation of the Fellegi-Sunter model of record linkage, with record linkage probabilities estimated using the Expectation Maximisation (EM) algorithm.  

This is an unsupervised approach to finding matching records, which seems like magic to me - so hopefully this notebook helps demystify how this is possible.
`}function ni(e){return e`## Input data

Consider two tables, which we are trying to match to one another.   \`mob\` stands for month of birth.
**Note**: You can edit this data so long as you keep the column names the same.

`}function oi(e){return e`**Left table:**`}function ri(e,t){return e({value:t,rows:6,width:"100%"})}function li(e,t,i){return e`${t(i)}`}function ui(e){return e`**Right table:**`}function si(e,t){return e({value:t,rows:6,width:"100%"})}function di(e,t,i){return e`

${t(i)}


`}function ci(e){return e`**Real matches**

These are the records which match in reality. You only need to include records which match, i.e. where label = 1.  These are the unknowns the model is trying to estimate 
`}function fi(e,t){return e({value:t,rows:6,width:"100%"})}function mi(e,t,i,a,n){return e`${t`<br>`}

${i(a)}



Finally, here are all the possible record comparisons:

${i(n)}`}function pi(e,t,i,a){return e`To set this up as a maximum likelihood estimation problem, we need to make some assumptions about the structure of the problem, and choose some parameters to estimate.

First, we will designate λ the proportion of comparisons which are matches.  This is an unknown parameter to be estimated.  In the case of this data, the true λ is ${t(i)}.

Next, we will create the concept of a _comparison vector_, which is a way of encoding record comparisons into a vector.  

In this simple example our comparison vector, ${a`\gamma`} will be of length ${a`k=2`} , i.e. ${a`\gamma = [\gamma_1, \gamma_2]`} and will encode the following two rules:

- If \`mob\` matches,  ${a`\gamma_1 = 1`} else ${a`\gamma_1 = 0`}
- If \`surname\` matches exactly  ${a`\gamma_2 = 1`}. If it is similar ${a`\gamma_2 = 0.5`}.  Otherwise ${a`\gamma_2 = 0`}


We will then assume that element ${a`i`} of the comparison vector is a draw from one of two discrete distributions:

${a`\pi_{i,m=1}`}, the discrete distribution of ${a`\gamma_i`} when the records match

and 


${a`\pi_{i,m=0}`}, the discrete distribution of ${a`\gamma_i`} when the records do not match

`}function _i(e,t,i){return e` Here are the comparison vectors for this data:

${t(i)}

Each row represents the comparison vector, which has two elements [𝛾1, 𝛾2].  

`}function hi(e,t){return e`These assumptions are all we need to define the equation for the likelihood.  The equation looks quite complicated (see page 356 [here](https://imai.fas.harvard.edu/research/files/linkage.pdf)):

${t`\prod_{i=1}^{N_{\mathcal{A}}} \prod_{j=1}^{N_{\mathcal{B}}}\left\{\sum_{m=0}^{1} \lambda^{m}(1-\lambda)^{1-m} \prod_{k=1}^{K}\left(\prod_{\ell=0}^{L_{k}-1} \pi_{k m \ell}^{1\left\{\gamma_{k}(i, j)=\ell\right\}}\right)^{1-\delta_{k}(i, j)}\right\}`}

But expressed in words it's quite simple - approximately:

- For each element of the comparison vector, the probability of the observed outcome is ${t`\lambda (\pi_{i,m=1}|\gamma_i)  + (1-\lambda) (\pi_{i,m=0}|\gamma_i)`}
- Compute this probability for each of the ${t`k`} elements of the comparison vector in the row, and multiply together.  This represents the likelihood of the row
- Compute this for each row, and multiply together

`}function bi(e,t){return e`To estimate which record comparisons are matches, we need to estimate the unknown parameters, which are ${t`\lambda`} and the parameters of the four discrete distributions ${t`\pi_{i,m}`}.

There's an algorithm called the Expectation Maximisation algorithm which can solve this problem iteratively.

In this notebook, rather than implement this algorithm, we will simply let you choose the parameters to try and maximise the log likelihood manually.  

## Estimating matches`}function vi(e){return e({title:"Choose λ, the proportion of combinations which are matches",min:0,max:1,step:.01,value:.5})}function gi(e){return e({title:"Month of birth comparison, probability month of birth matches given m=1",min:0,max:1,step:.01,value:.5})}function wi(e){return e({title:"Month of birth comparison, probability month of birth matches given records DO NOT match",min:0,max:1,step:.01,value:.5})}function yi(e){return e({title:"Surname comparison, probability field exactly matches given records match",min:0,max:1,step:.01,value:.3})}function xi(e){return e({title:"Surname comparison, probability fields similar given records match",min:0,max:1,step:.01,value:.3})}function ki(e){return e({title:"Surname comparison, probability field exactly matches given records DO NOT match",min:0,max:1,step:.01,value:.3})}function ji(e){return e({title:"Surname comparison, probability fields similar given records DO NOT match",min:0,max:1,step:.01,value:.3})}function $i(e,t,i){return e`The log likelihood given these parameters is ${t(i)}`}function Di(e){return e`Here's a history of the values of log likelihood as you've been adjusting the sliders:`}function Mi(e,t,i){let a=t.map((n,o)=>({log_likelihood:n.log_likelihood,i:o}));return a=a.filter(n=>n.log_likelihood>-1e6),i.markLine().data(a).encode(i.y().field("log_likelihood").type("quantitative").scale({zero:!1}),i.x().field("i").type("quantitative")).height(200).render()}function Ai(e,t){return e`This chart shows ${t`\pi_{1,m=0}`} and ${t`\pi_{1,m=1}`}, the discrete distributions that you've chosen for ${t`\gamma_1`}, the \`mob\` comparison vector.`}function Ci(e,t,i){let a=[{"𝛾_val":"1",probability:e,m:1,rule:"mob"},{"𝛾_val":"0",probability:1-e,m:1,rule:"mob"},{"𝛾_val":"1",probability:t,m:0,rule:"mob"},{"𝛾_val":"0",probability:1-t,m:0,rule:"mob"}];return i.markBar().data(a).encode(i.y().field("𝛾_val").type("nominal"),i.x().field("probability").type("quantitative"),i.column().fieldN("m").title(null),i.color().fieldN("m")).height(30).width(100).render()}function Gi(e,t){return e`This chart shows ${t`\pi_{2,m=0}`} and ${t`\pi_{2,m=1}`}, the discrete distributions you've chosen for ${t`\gamma_2`}, the \`surname\` comparison vector.`}function Si(e,t,i,a,n){let o=[{"𝛾_val":"1",probability:e,m:1,rule:"surname"},{"𝛾_val":"0.5",probability:t,m:1,rule:"surname"},{"𝛾_val":"0",probability:1-e-t,m:1,rule:"surname"},{"𝛾_val":"1",probability:i,m:0,rule:"surname"},{"𝛾_val":"0.5",probability:a,m:0,rule:"surname"},{"𝛾_val":"0",probability:1-i-a,m:0,rule:"surname"}];return n.markBar().data(o).encode(n.y().field("𝛾_val").type("nominal"),n.x().field("probability").type("quantitative"),n.column().fieldN("m").title(null),n.color().fieldN("m")).height(30).width(100).render()}function Ti(e,t,i){return e`Given the parameter values you've selected, we can now compute the probability that we have a match for each record comparison, ${t`P(m)`}.

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
`}function Pi(e,t,i,a,n,o){let r=e.map(function(l){let u=t(l);return l=i(l),l["𝛾1"]=u["𝛾1"],l["𝛾2"]=u["𝛾2"],l.prob_match=a(n(l)),l});return r.columns=Object.keys(r[0]),o(r)}function Ei(e){return e`## Annex: Code

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

`}function Li(){return`row_id_l,mob_l,surname_l
1,10,Linacre
2,7,Smith
`}function zi(){return`row_id_r,mob_r,surname_r
1,10,Linacer
2,8,Jones
3,7,Smith
`}function Ni(e,t,i){return e.value=[],t.csvParse(i)}function Ii(e,t,i){return e.value=[],t.csvParse(i)}function Oi(){return`row_id_l,row_id_r,label
1,1,1
2,3,1
`}function Vi(e,t,i){return e.value=[],t.csvParse(i)}function qi(e,t,i){t("DROP TABLE if exists combinations");let a=t(`select * from df_l
  cross join df_r
  left join matches as m
  on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r
  `);return a=a.map(function(n){return n.label||(n.label="0"),n}),t("CREATE TABLE combinations"),t.tables.combinations.data=a,i(`
  select * from combinations

`)}function Bi(e){return e`### Annex 2:  Computation of comparison vectors`}function Wi(e,t){return(function(a){return{"𝛾1":e(a),"𝛾2":t(a)}})}function Fi(){return(function(t){return+(t.mob_l==t.mob_r)})}function Ri(e){return(function(i){return i.surname_l==i.surname_r?1:e.get(i.surname_l,i.surname_r)<3?.5:0})}function Ui(e,t){let i=e.map(a=>t(a));return i.columns=Object.keys(i[0]),i}function Yi(e,t){return t(`

select df_l.row_id_l, df_r.row_id_r 
from df_l
  cross join df_r
  left join matches as m
on df_l.row_id_l = m.row_id_l and df_r.row_id_r = m.row_id_r
where m.label = '1'

`)}function Hi(e){return e.filter(t=>t.match==1).map(t=>(delete t.match,t))}function Qi(e){return e`### Annex 3:  Likelihood and probability calculations`}function Ji(e,t){let i=t(`
 select count(*) as count_match
from combinations
 where label = '1' 
`),a=t(`
select count(*) from combinations
`);return i/a}function Zi(e,t,i,a){let n={1:e,"0.5":t,0:1-e-t},o={1:i,"0.5":a,0:1-i-a};return{1:n,0:o}}function Ki(e,t){let i={1:e,0:1-e},a={1:t,0:1-t};return{1:i,0:a}}function Xi(e,t,i){return(function(a){let n=a["𝛾1"];a["𝛾2"];let o=e*t[1][n],r=(1-e)*t[0][n],l=e*i[1][n],u=(1-e)*i[0][n];return o*l/(o*l+r*u)})}function ea(e,t,i,a){function n(l,u){let p=e*u[1][l]+(1-e)*u[0][l];return Math.log(p)}function o(l){let u=l["𝛾1"],p=n(u,t);u=l["𝛾2"];let s=n(u,i);return p+s}return a.map(l=>o(l)).reduce((l,u)=>l+u)}function ta(e){return e`### Annex 4: Other functions`}function ia(){return[]}function aa(e,t){e.push({log_likelihood:t})}function na(e,t,i,a){let n=e("DROP TABLE if exists df_l");return e("CREATE TABLE df_l"),e("DROP TABLE if exists df_r"),e("CREATE TABLE df_r"),e("DROP TABLE if exists matches"),e("CREATE TABLE matches"),e.tables.df_l.data=t,e.tables.df_r.data=i,e.tables.matches.data=a,n}function oa(e){return e`### Generic utility libraries and functions`}function ra(e){return(function(t){let i=e(t);return i.columns=Object.keys(i[0]),i})}function la(e){return(function(i){return e`
<table>
<thead>
<tr>
${i.columns.map(a=>e`<th>${a}`)}
<tbody>
${i.map(a=>e`<tr>
  ${Object.keys(a).map(n=>e`<td>${a[n]}`)}
`)}
`})}function ua(e){return e("alasql")}function sa(e){return(function(t){let i=e(t);return i=i[0],i[Object.keys(i)[0]]})}function da(e){return e("d3")}function ca(e){return e.format(",.3f")}function fa(e){return e("fast-levenshtein@2.0.6")}function ma(e){return e("@observablehq/vega-lite@0.2")}function pa(){return(function(e){return JSON.parse(JSON.stringify(e))})}function ha(e,t){const i=e.module();i.variable(t("title")).define("title",["md"],ii),i.variable(t("out_1")).define("out_1",["md"],ai),i.variable(t("out_2")).define("out_2",["md"],ni),i.variable(t("out_3")).define("out_3",["md"],oi),i.variable(t("viewof left_table_csv")).define("viewof left_table_csv",["textarea","data_left_template"],ri),i.variable(t("left_table_csv")).define("left_table_csv",["Generators","viewof left_table_csv"],(o,r)=>o.input(r)),i.variable(t("out_4")).define("out_4",["md","table","data_left"],li),i.variable(t("out_5")).define("out_5",["md"],ui),i.variable(t("viewof right_table_csv")).define("viewof right_table_csv",["textarea","data_right_template"],si),i.variable(t("right_table_csv")).define("right_table_csv",["Generators","viewof right_table_csv"],(o,r)=>o.input(r)),i.variable(t("out_6")).define("out_6",["md","table","data_right"],di),i.variable(t("out_7")).define("out_7",["md"],ci),i.variable(t("viewof match_pairs_csv")).define("viewof match_pairs_csv",["textarea","match_pairs_template"],fi),i.variable(t("match_pairs_csv")).define("match_pairs_csv",["Generators","viewof match_pairs_csv"],(o,r)=>o.input(r)),i.variable(t("out_8")).define("out_8",["md","html","table","match_pairs","combinations"],mi),i.variable(t("out_9")).define("out_9",["md","num_fmt","true_lambda","tex"],pi),i.variable(t("out_10")).define("out_10",["md","table","comparison_vectors"],_i),i.variable(t("out_11")).define("out_11",["md","tex"],hi),i.variable(t("out_12")).define("out_12",["md","tex"],bi),i.variable(t("viewof lambda")).define("viewof lambda",["slider"],vi),i.variable(t("lambda")).define("lambda",["Generators","viewof lambda"],(o,r)=>o.input(r)),i.variable(t("viewof pi1_1_m1")).define("viewof pi1_1_m1",["slider"],gi),i.variable(t("pi1_1_m1")).define("pi1_1_m1",["Generators","viewof pi1_1_m1"],(o,r)=>o.input(r)),i.variable(t("viewof pi1_1_m0")).define("viewof pi1_1_m0",["slider"],wi),i.variable(t("pi1_1_m0")).define("pi1_1_m0",["Generators","viewof pi1_1_m0"],(o,r)=>o.input(r)),i.variable(t("viewof pi2_1_m1")).define("viewof pi2_1_m1",["slider"],yi),i.variable(t("pi2_1_m1")).define("pi2_1_m1",["Generators","viewof pi2_1_m1"],(o,r)=>o.input(r)),i.variable(t("viewof pi2_05_m1")).define("viewof pi2_05_m1",["slider"],xi),i.variable(t("pi2_05_m1")).define("pi2_05_m1",["Generators","viewof pi2_05_m1"],(o,r)=>o.input(r)),i.variable(t("viewof pi2_1_m0")).define("viewof pi2_1_m0",["slider"],ki),i.variable(t("pi2_1_m0")).define("pi2_1_m0",["Generators","viewof pi2_1_m0"],(o,r)=>o.input(r)),i.variable(t("viewof pi2_05_m0")).define("viewof pi2_05_m0",["slider"],ji),i.variable(t("pi2_05_m0")).define("pi2_05_m0",["Generators","viewof pi2_05_m0"],(o,r)=>o.input(r)),i.variable(t("out_13")).define("out_13",["md","num_fmt","log_likelihood"],$i),i.variable(t("out_14")).define("out_14",["md"],Di),i.variable(t("ll_chart")).define("ll_chart",["log_likelihood","history_ll","vl"],Mi),i.variable(t("out_15")).define("out_15",["md","tex"],Ai),i.variable(t("pi_chart_1")).define("pi_chart_1",["pi1_1_m1","pi1_1_m0","vl"],Ci),i.variable(t("out_16")).define("out_16",["md","tex"],Gi),i.variable(t("pi_chart_2")).define("pi_chart_2",["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0","vl"],Si),i.variable(t("out_17")).define("out_17",["md","tex","html"],Ti),i.variable(t("out_18")).define("out_18",["combinations","get_comparison_vector","deepcopy","num_fmt","get_estimated_match_probability","table"],Pi),i.variable(t("out_19")).define("out_19",["md"],Ei),i.variable(t("data_left_template")).define("data_left_template",Li),i.variable(t("data_right_template")).define("data_right_template",zi),i.variable(t("data_left")).define("data_left",["mutable history_ll","d3","left_table_csv"],Ni),i.variable(t("data_right")).define("data_right",["mutable history_ll","d3","right_table_csv"],Ii),i.variable(t("match_pairs_template")).define("match_pairs_template",Oi),i.variable(t("matches")).define("matches",["mutable history_ll","d3","match_pairs_csv"],Vi),i.variable(t("combinations")).define("combinations",["db","alasql","sql_with_cols"],qi),i.variable(t()).define(["md"],Bi),i.variable(t("get_comparison_vector")).define("get_comparison_vector",["month_of_birth","surname"],Wi),i.variable(t("month_of_birth")).define("month_of_birth",Fi),i.variable(t("surname")).define("surname",["levenshtein"],Ri),i.variable(t("comparison_vectors")).define("comparison_vectors",["combinations","get_comparison_vector"],Ui),i.variable(t("match_pairs")).define("match_pairs",["db","sql_with_cols"],Yi),i.variable(t("real_matches")).define("real_matches",["matches"],Hi),i.variable(t()).define(["md"],Qi),i.variable(t("true_lambda")).define("true_lambda",["combinations","sql_return_scalar"],Ji),i.variable(t("pi_surname")).define("pi_surname",["pi2_1_m1","pi2_05_m1","pi2_1_m0","pi2_05_m0"],Zi),i.variable(t("pi_mob")).define("pi_mob",["pi1_1_m1","pi1_1_m0"],Ki),i.variable(t("get_estimated_match_probability")).define("get_estimated_match_probability",["lambda","pi_mob","pi_surname"],Xi),i.variable(t("log_likelihood")).define("log_likelihood",["lambda","pi_mob","pi_surname","comparison_vectors"],ea),i.variable(t()).define(["md"],ta),i.define("initial history_ll",ia),i.variable(t("mutable history_ll")).define("mutable history_ll",["Mutable","initial history_ll"],(o,r)=>new o(r)),i.variable(t("history_ll")).define("history_ll",["mutable history_ll"],o=>o.generator),i.variable(t()).define(["history_ll","log_likelihood"],aa),i.variable(t("db")).define("db",["alasql","data_left","data_right","matches"],na),i.variable(t()).define(["md"],oa),i.variable(t("sql_with_cols")).define("sql_with_cols",["alasql"],ra),i.variable(t("table")).define("table",["html"],la),i.variable(t("alasql")).define("alasql",["require"],ua),i.variable(t("sql_return_scalar")).define("sql_return_scalar",["alasql"],sa),i.variable(t("d3")).define("d3",["require"],da),i.variable(t("num_fmt")).define("num_fmt",["d3"],ca),i.variable(t("levenshtein")).define("levenshtein",["require"],fa);const a=e.module(Bt);i.import("slider",a),i.import("textarea",a);const n=e.module(ti);return i.import("vl",n),i.variable(t("vegalite")).define("vegalite",["require"],ma),i.variable(t("deepcopy")).define("deepcopy",pa),i}export{ha as default};
