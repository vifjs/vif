"use strict";const t=(t,n,s,o)=>{const r=n.handler||(n.handler=new e);r[o]=s(t.t),n.addEventListener(o,r)};class e{handleEvent(t){this[t.type](t)}}let n={},s=null;const o=t=>{n[t]&&(n[t](),n[t]=!1)},r=document,c=t=>r.createElement(t),l=(t,e)=>t.cloneNode(e),i=t=>t.children,f=t=>t.o||t.children,u=(t,e)=>t.name.substring(e),a=t=>0===t.name.indexOf("x-"),p=t=>0===t.tagName.indexOf("X-"),x=t=>!!t.content,h=t=>!!_[t.tagName]||x(t),d={l(t){let e=this;e.t||(e.t=t||{}),e.i||(e.i=new Set)},u(){this.p()},h(t,e,n){let o=this,r=e.length-1,c=n;for(;r>=0;){const l=e[r],i=t[l.m];if(l.v&&(i.$=l.S,(n||o.i).add(i),s&&s(i.tagName)),!n)for(const[t,e]of l.j){const n=e.k(o,i,e.C,t);n&&o.i.add(n)}if(l.S){(!l.v||(c=!h(i)&&(i.i=new Set)))&&o.h(f(i),l.S,c)}r--}},p(){for(const t of this.i)t.u&&t.u();this.i.clear()}};function m(t){this.l(t)}m.prototype=d;let w=null;const y=t=>{const e=t=>{if(void 0!==t){e.value=t;for(const t of e.L)t()}else w&&(e.L.add(w),w.M.add(e.L));return e.value};return e.value=t,e.O=!0,e.L=new Set,e},v=t=>{const e=w;return w=t,w.M=new Set,w.u=(t=>()=>{for(const e of t.M)e.delete(t)})(w),t(),w=e,t};let g=r.createComment(""),E=c("template"),b=r.createDocumentFragment();const $=()=>{},S=(t,...e)=>t.reduce(((n,s,o)=>n+(s+(o===t.length-1?"":e[o]))),""),j=c("style"),k="css-x";let C=1;const L=(t,e)=>"$"+(e||C)+t,M=(t,...e)=>{if("string"==typeof t)return`${k}="${L(t,C)}"`;{const n=S(t,e);j.textContent+=n,j.parentElement||r.head.appendChild(j)}},O=(t,e,n)=>{const s=n,o=t.R;e.setAttribute(k,L(s,o))},R=(t,e,n)=>{const s=n,o=t.useRef(s);let r=!0;return v((()=>{const t=o();if(r){for(const n of t)n(e);r=!1}else t[t.length-1](e)}))},V=(t,e,n)=>{const s=e.style.display;return v((()=>{n(t.t)?s?e.style.display=s:e.style.removeProperty("display"):e.style.display="none"}))},H=(t,e,n)=>v((()=>e.textContent=n(t.t))),U=(t,e,n,s)=>v((()=>e.setAttribute(s,n(t.t)))),X=t=>"x-text"===t?H:"x-show"===t?V:"x-ref"===t?R:"x-css"===t?O:U,T=(t,e,n,s)=>{e.t||(e.t={});let o=null;const r={V:(t,e)=>o={H:t,U:e}},c=v((()=>{const o=e.t[s],c=n(t.t);o&&o.O?r.V(o,c):e.t[s]=c}));return o&&o.H(o.U),r.V=(t,e)=>t(e),c},q={},z=t=>{if(q[t])return q[t];let e=Object.getPrototypeOf((function(){})).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t;let s=(()=>{try{let s=new e(["scope"],`with(scope){return ${n}};`);return Object.defineProperty(s,"name",{value:`VifExp "${t}"`}),s}catch(e){return console.error("VifExp error : "+t,e),!1}})();return q[t]=s,s},A=(t,e,n)=>{W(e);let s=[];const o="item",r=e.getAttribute(o)||o;return v((()=>{const o=n(t.t);((t,e,n,s,o)=>{let r=0;const c=n.length,l=s.length;let i=l-c;for(;r<c&&r<l;)n[r]!==s[r]&&P(e,r,s[r]),r++;for(;i>0;)N(e,t,r,o,s[r]),i--,r++;for(;i<0;)Q(e,r),i++,r++})(t.t,e,s,o,r),s=o.slice()}))},B=(t,e,n)=>{W(e);let s=!1;return v((()=>{const o=!!n(t.t);o!==s&&(s=o,o?N(e,t.t,0):Q(e,0))}))};let D=location;const F=()=>D.pathname+D.search,G=y(F());addEventListener("popstate",(()=>{D=location,G(F())}));const I=t=>{if("string"==typeof t){const e=new URL(t,D);if(D.href!==e.href)return D=e,history.pushState({},"",D),G(F())}else{t.preventDefault();const e=t.currentTarget.href;if(e)return I(e)}};I.route=G;const J=(t,e,n)=>{W(e);const s=new RegExp(n||"."),o="params",r=e.getAttribute(o)||o;let c=null;return v((()=>{const n=G().match(s)||null;n!==c&&(n&&c?P(e,0,n):n?N(e,t.t,0,r,n):Q(e,0)),c=n}))},K=()=>l(g),N=(t,e,n,s,o)=>{const r=t.X;let c=r[n+1];const f=l(t.content,!0);c?c.H&&c.H(o):c=r[n+1]=((t,e,n,s)=>{const o=K(),r=n&&y(s);return r&&(r.index=e),{T:o,q:new m(n?{...t,[n]:r}:t),H:r}})(e,n,s,o),t.$&&c.q.h(i(f),t.$),r[n].T.replaceWith(r[n].T,f,c.T)},P=(t,e,n)=>{t.X[e+1].H(n)},Q=(t,e)=>{const n=t.X;let s=n[e].T.nextSibling;const o=n[e+1].T;for(n[e+1].q.u();s!==o;){const t=s;s=s.nextSibling,t.remove()}},W=t=>{t.X=[{T:K()}],t.u=()=>{for(let e=1;e<t.X.length;e++)t.X[e].q.u()},t.replaceWith(t.X[0].T)},Y=e=>{const n=[];for(let o=0;o<e.length;o++){let r=e[o];const c=x(r),l=!c&&p(r),i={m:o,S:!1,v:c||l,j:new Map};let h=r.attributes.length;for(;h--;){const e=r.attributes[h];if(a(e)){const n=0===e.name.indexOf("x-on:"),o=u(e,n?5:2),f={C:"ref"===o||"css"===o||"route"===o?e.value:z(e.value||""),k:l?T:c?"x-for"===(s=e.name)?A:"x-if"===s?B:"x-route"===s?J:void 0:n?t:X(e.name)};i.j.set(o,f),!l&&r.removeAttribute(e.name)}}const d=f(r=r.content||r);d.length&&(i.S=Y(d)),(i.j.size||i.S||l)&&n.push(i)}var s;return n.length>0&&n};class Z extends HTMLElement{constructor(){super(),this.l(),this.A={}}onMount(){}connectedCallback(){let t=this,e=t.t;for(const n of t.attributes)if(a(n)){const t=u(n,2);e[t]=y(e[t])}else e[n.name]=n.value||!0;t.onMount({props:e}),t.B()}onUnmount(){}u(){let t=this;t.onUnmount({props:t.t}),t.p()}B(){let t=this;const e=t.D;let n=e.F,s=e.S,o=e.R;const r=n?$:S,c=o?$:M,f=e.G,u={html:r,css:c,props:t.t},a=f.call(t,u);if("string"==typeof a?(n=e.F=(t=>{let e=l(E);return e.innerHTML=t,e.content})(a),s=e.S=Y(i(n))):n||(n=a&&a!==t?(t=>{let e=l(b);return e.append(...t),e})(a):t,s=t.$||Y(t.o||i(n))),t.R=e.R=o||C++,e.F&&(n=l(n,!0)),s&&t.h(t.o||i(n),s),n!==t){const e=t.parentNode;e.o||(e.o=[].slice.call(i(e))),t.replaceWith(n)}}useEffect(t){this.i.add(v(t))}useRef(t,e,n){const s=this.A,o=s[t]||(s[t]=y([]));if(!e)return o;{const t=o.value;n?t[(t.length||1)-1]=e:t.push(e),o(t)}}}Object.assign(Z.prototype,d);const _={};let tt,et,nt=[];const st=y(),ot=y(),rt=(t,e)=>t[e]||t[t.default],ct=t=>t?(tt=t,st(st.value||localStorage.getItem("locale")||navigator.language),void(et||(et=v((()=>{const[t,e]=st().split("-"),n=rt(rt(tt,t),e);n&&n().then((t=>{ot(t.default),nt&&(nt=nt.forEach((t=>t())))}))}))))):ot();ct.locale=st,ct.onload=t=>{ot()?t():nt.push(t)},exports.useDefine=(t,e)=>{const n="X-"+t.toUpperCase();return _[n]=class extends Z{constructor(){super()}},_[n].G=e,_[n].prototype.D=_[n],customElements.define(`x-${t}`,_[n]),_[n]},exports.useEffect=v,exports.useI18n=ct,exports.useNavigate=I,exports.useObserve=t=>{n={...t,...n},s=o},exports.useSignal=y;
