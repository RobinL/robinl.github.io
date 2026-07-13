function c(n,r=()=>document.createElement("div")){return function(...e){if(e.length!==1)return n(...e);const t=r();return Promise.resolve(n(t,e[0])).then(()=>t)}}export{c};
