var Vif=function(t){"use strict";const e=(t,e,s,o)=>{const r=e.handler||(e.handler=new n);r[o]=s(t.t),e.addEventListener(o,r)};class n{handleEvent(t){this[t.type](t)}}let s={},o=null;const r=t=>{s[t]&&(s[t](),s[t]=!1)},c=document,l=t=>c.createElement(t),i=(t,e)=>t.cloneNode(e),f=t=>t.children,u=t=>t.content,a=t=>t.nextSibling,p=t=>t.o||t.children,h=(t,e)=>t.name.substring(e),d=t=>0===t.name.indexOf("x-"),x=t=>0===t.tagName.indexOf("X-"),m=t=>"TEMPLATE"===t.tagName,w=t=>!!nt[t.tagName]||m(t),y={l(t){let e=this;e.t||(e.t=t||{}),e.i||(e.i=new Set)},u(){this.p()},h(t,e,n){let s=this,r=e.length-1,c=n;for(;r>=0;){const l=e[r],i=t[l.m];if(l.v&&(i.$=l.S,(n||s.i).add(i),o&&o(i.tagName)),!n)for(const[t,e]of l.L){const n=e.M(s,i,e.V,t);n&&s.i.add(n)}if(l.S){(!l.v||(c=!w(i)&&(i.i=new Set)))&&s.h(p(i),l.S,c)}r--}},p(){for(const t of this.i)t.u&&t.u();this.i.clear()}};function E(t){this.l(t)}E.prototype=y;let v=null;const b=t=>{const e=t=>{if(void 0!==t){e.value=t;for(const t of e.j)t()}else v&&(e.j.add(v),v.k.add(e.j));return e.value};return e.value=t,e.C=!0,e.j=new Set,e},g=t=>{const e=v;return v=t,v.k=new Set,v.u=(t=>()=>{for(const e of t.k)e.delete(t)})(v),t(),v=e,t};let $=c.createComment(""),S=l("template"),L=c.createDocumentFragment();const M=t=>{let e=u(t).firstChild;for(;e;){const t=a(e);1!==e.nodeType&&e.remove(),e=t}},V=()=>{},j=(t,...e)=>t.reduce(((n,s,o)=>n+(s+(o===t.length-1?"":e[o]))),""),k=l("style"),C="css-x";let O=1;const R=(t,e)=>"$"+(e||O)+t,T=(t,...e)=>{if("string"==typeof t)return`${C}="${R(t,O)}"`;{const n=j(t,e);k.textContent+=n,k.parentElement||c.head.appendChild(k)}},H=(t,e,n)=>{const s=n,o=t.O;e.setAttribute(C,R(s,o))},U=(t,e,n)=>{const s=n,o=t.useRef(s);let r=!0;return g((()=>{const t=o();if(r){for(const n of t)n(e);r=!1}else t[t.length-1](e)}))},X=(t,e,n)=>{const s=e.style.display;return g((()=>{n(t.t)?s?e.style.display=s:e.style.removeProperty("display"):e.style.display="none"}))},A=(t,e,n)=>g((()=>e.textContent=n(t.t))),P=(t,e,n,s)=>g((()=>e.setAttribute(s,n(t.t)))),q=t=>"x-text"===t?A:"x-show"===t?X:"x-ref"===t?U:"x-css"===t?H:P,z=(t,e,n,s)=>{e.t||(e.t={});let o=null;const r={R:(t,e)=>o={T:t,H:e}},c=g((()=>{const o=e.t[s],c=n(t.t);o&&o.C?r.R(o,c):e.t[s]=c}));return o&&o.T(o.H),r.R=(t,e)=>t(e),c},B={},D=t=>{if(B[t])return B[t];let e=Object.getPrototypeOf((function(){})).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t;let s=(()=>{try{let s=new e(["scope"],`with(scope){return ${n}};`);return Object.defineProperty(s,"name",{value:`VifExp "${t}"`}),s}catch(e){return console.error("VifExp error : "+t,e),!1}})();return B[t]=s,s},F=(t,e,n)=>{_(e);let s=[];const o="item",r=e.getAttribute(o)||o;return g((()=>{const o=n(t.t);((t,e,n,s,o)=>{let r=0;const c=n.length,l=s.length;let i=l-c;for(;r<c&&r<l;)n[r]!==s[r]&&Y(e,r,s[r]),r++;for(;i>0;)W(e,t,r,o,s[r]),i--,r++;i<0&&Z(e,r,r-i)})(t.t,e,s,o,r),s=o.slice()}))},G=(t,e,n)=>{_(e);let s=!1;return g((()=>{const o=!!n(t.t);o!==s&&(s=o,o?W(e,t.t,0):Z(e,0))}))};let I=location;const J=()=>I.pathname+I.search,K=b(J());addEventListener("popstate",(()=>{I=location,K(J())}));const N=t=>{if("string"==typeof t){const e=new URL(t,I);if(I.href!==e.href)return I=e,history.pushState({},"",I),K(J())}else{t.preventDefault();const e=t.currentTarget.href;if(e)return N(e)}};N.route=K;const Q=(t,e,n)=>{_(e);const s=new RegExp(n||"."),o="params",r=e.getAttribute(o)||o;let c=null;return g((()=>{const n=K().match(s)||null;n!==c&&(n&&c?Y(e,0,n):n?W(e,t.t,0,r,n):Z(e,0)),c=n}))},W=(t,e,n,s,o)=>{const r=t.U;let c=r[n+1];const l=i(u(t),!0);c?c.T&&c.T(o):c=r[n+1]=((t,e,n,s)=>{const o=n&&b(s);return o&&(o.index=e),{X:new E(n?{...t,[n]:o}:t),T:o}})(e,n,s,o),c.A=l.lastChild,t.$&&c.X.h(f(l),t.$);const p=r[n].A;p.parentNode.insertBefore(l,a(p))},Y=(t,e,n)=>{t.U[e+1].T(n)},Z=(t,e,n)=>{const s=t.U,o=s[e].A;for(;e++<n;){let t=a(o);const n=s[e].A;for(;t!==n;){const e=a(t);t.remove(),t=e}t.remove(),s[e].X.u()}},_=t=>{M(t);const e=t.U=[{A:i($)}];u(t).append(i($)),t.u=()=>{for(let t=1;t<e.length;t++)e[t].X.u()},t.replaceWith(e[0].A)},tt=t=>{const n=[];for(let o=0;o<t.length;o++){let r=t[o];const c=m(r),l=!c&&x(r),i={m:o,S:!1,v:c||l,L:new Map};let f=r.attributes.length;for(;f--;){const t=r.attributes[f];if(d(t)){const n=0===t.name.indexOf("x-on:"),o=h(t,n?5:2),f={V:"ref"===o||"css"===o||"route"===o?t.value:D(t.value||""),M:l?z:c?"x-for"===(s=t.name)?F:"x-if"===s?G:"x-route"===s?Q:void 0:n?e:q(t.name)};i.L.set(o,f),!l&&r.removeAttribute(t.name)}}const a=p(r=c?u(r):r);a.length&&(i.S=tt(a)),(i.L.size||i.S||l)&&n.push(i)}var s;return n.length>0&&n};class et extends HTMLElement{constructor(){super(),this.l(),this.P={}}onMount(){}connectedCallback(){let t=this,e=t.t;for(const n of t.attributes)if(d(n)){const t=h(n,2);e[t]=b(e[t])}else e[n.name]=n.value||!0;t.onMount({props:e}),t.q()}onUnmount(){}u(){let t=this;t.onUnmount({props:t.t}),t.p()}q(){let t=this;const e=t.B;let n=e.D,s=e.S,o=e.O;const r=n?V:j,c=o?V:T,l=e.F,a={html:r,css:c,props:t.t},p=l.call(t,a);if("string"==typeof p?(n=e.D=(t=>{let e=i(S);return e.innerHTML=t,M(e),u(e)})(p),s=e.S=tt(f(n))):n||(n=p&&p!==t?(t=>{let e=i(L);return e.append(...t),e})(p):t,s=t.$||tt(t.o||f(n))),t.O=e.O=o||O++,e.D&&(n=i(n,!0)),s&&t.h(t.o||f(n),s),n!==t){const e=t.parentNode;e.o||(e.o=[].slice.call(f(e))),t.replaceWith(n)}}useEffect(t){this.i.add(g(t))}useRef(t,e,n){const s=this.P,o=s[t]||(s[t]=b([]));if(!e)return o;{const t=o.value;n?t[(t.length||1)-1]=e:t.push(e),o(t)}}}Object.assign(et.prototype,y);const nt={},st=b(localStorage.getItem("locale")||navigator.language),ot=(t,e)=>t[e]||t[t.default],rt=t=>{const e=b();let n=[];return e.onload=t=>{e()?t():n.push(t)},g((()=>{const[s,o]=st().split("-"),r=ot(ot(t,s),o);r&&r().then((t=>{e(t.default),n&&(n=n.forEach((t=>t())))}))})),e};return rt.locale=st,t.useDefine=(t,e)=>{const n="X-"+t.toUpperCase();return nt[n]=class extends et{constructor(){super()}},nt[n].F=e,nt[n].prototype.B=nt[n],customElements.define(`x-${t}`,nt[n]),nt[n]},t.useEffect=g,t.useI18n=rt,t.useNavigate=N,t.useObserve=t=>{s={...t,...s},o=r},t.useSignal=b,t}({});
