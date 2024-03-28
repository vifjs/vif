!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).t={})}(this,(function(t){"use strict";const e=(t,e,o,s)=>{const r=e.handler||(e.handler=new n);r[s]=o(t.o),e.addEventListener(s,r)};class n{handleEvent(t){this[t.type](t)}}let o={},s=null;const r=t=>{o[t]&&(o[t](),o[t]=!1)},c=document,l=t=>c.createElement(t),i=(t,e)=>t.cloneNode(e),f=t=>t.children,u=t=>t.content,a=t=>t.l||t.children,p=(t,e)=>t.name.substring(e),d=t=>0===t.name.indexOf("x-"),h=t=>0===t.tagName.indexOf("X-"),x=t=>!!t.content,y=t=>!!et[t.tagName]||x(t),m={i(t){let e=this;e.o||(e.o=t||{}),e.u||(e.u=new Set)},p(){this.h()},m(t,e,n){let o=this,r=e.length-1,c=n;for(;r>=0;){const l=e[r],i=t[l.v];if(l.$&&(i.S=l.j,(n||o.u).add(i),s&&s(i.tagName)),!n)for(const[t,e]of l.k){const n=e.C(o,i,e.L,t);n&&o.u.add(n)}if(l.j){(!l.$||(c=!y(i)&&(i.u=new Set)))&&o.m(a(i),l.j,c)}r--}},h(){for(const t of this.u)t.p&&t.p();this.u.clear()}};function w(t){this.i(t)}w.prototype=m;let b=null;const g=t=>{const e=t=>{if(void 0!==t){e.value=t;for(const t of e.M)t()}else b&&(e.M.add(b),b.O.add(e.M));return e.value};return e.value=t,e.R=!0,e.M=new Set,e},v=t=>{const e=b;return b=t,b.O=new Set,b.p=(t=>()=>{for(const e of t.O)e.delete(t)})(b),t(),b=e,t};let E=c.createComment(""),$=l("template"),S=c.createDocumentFragment();const j=t=>{let e=u(t).firstChild;for(;e;){const t=e.nextSibling;1!==e.nodeType&&e.remove(),e=t}},k=()=>{},C=(t,...e)=>t.reduce(((n,o,s)=>n+(o+(s===t.length-1?"":e[s]))),""),L=l("style"),M="css-x";let O=1;const R=(t,e)=>"$"+(e||O)+t,T=(t,...e)=>{if("string"==typeof t)return`${M}="${R(t,O)}"`;{const n=C(t,e);L.textContent+=n,L.parentElement||c.head.appendChild(L)}},V=(t,e,n)=>{const o=n,s=t.T;e.setAttribute(M,R(o,s))},H=(t,e,n)=>{const o=n,s=t.useRef(o);let r=!0;return v((()=>{const t=s();if(r){for(const n of t)n(e);r=!1}else t[t.length-1](e)}))},U=(t,e,n)=>{const o=e.style.display;return v((()=>{n(t.o)?o?e.style.display=o:e.style.removeProperty("display"):e.style.display="none"}))},X=(t,e,n)=>v((()=>e.textContent=n(t.o))),q=(t,e,n,o)=>v((()=>e.setAttribute(o,n(t.o)))),z=t=>"x-text"===t?X:"x-show"===t?U:"x-ref"===t?H:"x-css"===t?V:q,A=(t,e,n,o)=>{e.o||(e.o={});let s=null;const r={V:(t,e)=>s={H:t,U:e}},c=v((()=>{const s=e.o[o],c=n(t.o);s&&s.R?r.V(s,c):e.o[o]=c}));return s&&s.H(s.U),r.V=(t,e)=>t(e),c},B={},D=t=>{if(B[t])return B[t];let e=Object.getPrototypeOf((function(){})).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t;let o=(()=>{try{let o=new e(["scope"],`with(scope){return ${n}};`);return Object.defineProperty(o,"name",{value:`VifExp "${t}"`}),o}catch(e){return console.error("VifExp error : "+t,e),!1}})();return B[t]=o,o},F=(t,e,n)=>{Z(e);let o=[];const s="item",r=e.getAttribute(s)||s;return v((()=>{const s=n(t.o);((t,e,n,o,s)=>{let r=0;const c=n.length,l=o.length;let i=l-c;for(;r<c&&r<l;)n[r]!==o[r]&&W(e,r,o[r]),r++;for(;i>0;)Q(e,t,r,s,o[r]),i--,r++;i<0&&Y(e,r)})(t.o,e,o,s,r),o=s.slice()}))},G=(t,e,n)=>{Z(e);let o=!1;return v((()=>{const s=!!n(t.o);s!==o&&(o=s,s?Q(e,t.o,0):Y(e,0))}))};let I=location;const J=()=>I.pathname+I.search,K=g(J());addEventListener("popstate",(()=>{I=location,K(J())}));const N=t=>{if("string"==typeof t){const e=new URL(t,I);if(I.href!==e.href)return I=e,history.pushState({},"",I),K(J())}else{t.preventDefault();const e=t.currentTarget.href;if(e)return N(e)}};N.route=K;const P=(t,e,n)=>{Z(e);const o=new RegExp(n||"."),s="params",r=e.getAttribute(s)||s;let c=null;return v((()=>{const n=K().match(o)||null;n!==c&&(n&&c?W(e,0,n):n?Q(e,t.o,0,r,n):Y(e,0)),c=n}))},Q=(t,e,n,o,s)=>{const r=t.X;let c=r[n+1];const l=i(u(t),!0);c?c.H&&c.H(s):c=r[n+1]=((t,e,n,o)=>{const s=n&&g(o);return s&&(s.index=e),{q:new w(n?{...t,[n]:s}:t),H:s}})(e,n,o,s),c.A=l.lastChild,t.S&&c.q.m(f(l),t.S);const a=r[n].A;a.parentNode.insertBefore(l,a.nextSibling)},W=(t,e,n)=>{t.X[e+1].H(n)},Y=(t,e)=>{const n=t.X,o=n[e].A;for(;e++<n.length-1;){let t=o.nextSibling;const s=n[e].A;for(;t!==s;){const e=t.nextSibling;t.remove(),t=e}t.remove(),n[e].q.p()}},Z=t=>{j(t);const e=t.X=[{A:i(E)}];u(t).append(i(E)),t.p=()=>{for(let t=1;t<e.length;t++)e[t].q.p()},t.replaceWith(e[0].A)},_=t=>{const n=[];for(let s=0;s<t.length;s++){let r=t[s];const c=x(r),l=!c&&h(r),i={v:s,j:!1,$:c||l,k:new Map};let f=r.attributes.length;for(;f--;){const t=r.attributes[f];if(d(t)){const n=0===t.name.indexOf("x-on:"),s=p(t,n?5:2),f={L:"ref"===s||"css"===s||"route"===s?t.value:D(t.value||""),C:l?A:c?"x-for"===(o=t.name)?F:"x-if"===o?G:"x-route"===o?P:void 0:n?e:z(t.name)};i.k.set(s,f),!l&&r.removeAttribute(t.name)}}const y=a(r=u(r)||r);y.length&&(i.j=_(y)),(i.k.size||i.j||l)&&n.push(i)}var o;return n.length>0&&n};class tt extends HTMLElement{constructor(){super(),this.i(),this.B={}}onMount(){}connectedCallback(){let t=this,e=t.o;for(const n of t.attributes)if(d(n)){const t=p(n,2);e[t]=g(e[t])}else e[n.name]=n.value||!0;t.onMount({props:e}),t.D()}onUnmount(){}p(){let t=this;t.onUnmount({props:t.o}),t.h()}D(){let t=this;const e=t.F;let n=e.G,o=e.j,s=e.T;const r=n?k:C,c=s?k:T,l=e.I,a={html:r,css:c,props:t.o},p=l.call(t,a);if("string"==typeof p?(n=e.G=(t=>{let e=i($);return e.innerHTML=t,j(e),u(e)})(p),o=e.j=_(f(n))):n||(n=p&&p!==t?(t=>{let e=i(S);return e.append(...t),e})(p):t,o=t.S||_(t.l||f(n))),t.T=e.T=s||O++,e.G&&(n=i(n,!0)),o&&t.m(t.l||f(n),o),n!==t){const e=t.parentNode;e.l||(e.l=[].slice.call(f(e))),t.replaceWith(n)}}useEffect(t){this.u.add(v(t))}useRef(t,e,n){const o=this.B,s=o[t]||(o[t]=g([]));if(!e)return s;{const t=s.value;n?t[(t.length||1)-1]=e:t.push(e),s(t)}}}Object.assign(tt.prototype,m);const et={},nt=g(localStorage.getItem("locale")||navigator.language),ot=(t,e)=>t[e]||t[t.default],st=t=>{const e=g();let n=[];return e.onload=t=>{e()?t():n.push(t)},v((()=>{const[o,s]=nt().split("-"),r=ot(ot(t,o),s);r&&r().then((t=>{e(t.default),n&&(n=n.forEach((t=>t())))}))})),e};st.locale=nt,t.useDefine=(t,e)=>{const n="X-"+t.toUpperCase();return et[n]=class extends tt{constructor(){super()}},et[n].I=e,et[n].prototype.F=et[n],customElements.define(`x-${t}`,et[n]),et[n]},t.useEffect=v,t.useI18n=st,t.useNavigate=N,t.useObserve=t=>{o={...t,...o},s=r},t.useSignal=g}));
