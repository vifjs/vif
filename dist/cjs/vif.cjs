"use strict";const t=(t,n,s,o)=>{const r=n.handler||(n.handler=new e);r[o]=s(t.t),n.addEventListener(o,r)};class e{handleEvent(t){this[t.type](t)}}let n={},s=null;const o=t=>{n[t]&&(n[t](),n[t]=!1)},r=document,c=t=>r.createElement(t),l=(t,e)=>t.cloneNode(e),i=t=>t.children,f=t=>t.content,u=t=>t.nextSibling,a=t=>t.o||t.children,p=(t,e)=>t.name.substring(e),x=t=>0===t.name.indexOf("x-"),h=t=>0===t.tagName.indexOf("X-"),d=t=>"TEMPLATE"===t.tagName,m=t=>!!et[t.tagName]||d(t),w={l(t){let e=this;e.t||(e.t=t||{}),e.i||(e.i=new Set)},u(){this.p()},h(t,e,n){let o=this,r=e.length-1,c=n;for(;r>=0;){const l=e[r],i=t[l.m];if(l.v&&(i.$=l.S,(n||o.i).add(i),s&&s(i.tagName)),!n)for(const[t,e]of l.L){const n=e.M(o,i,e.j,t);n&&o.i.add(n)}if(l.S){(!l.v||(c=!m(i)&&(i.i=new Set)))&&o.h(a(i),l.S,c)}r--}},p(){for(const t of this.i)t.u&&t.u();this.i.clear()}};function y(t){this.l(t)}y.prototype=w;let E=null;const v=t=>{const e=t=>{if(void 0!==t){e.value=t;for(const t of e.k)t()}else E&&(e.k.add(E),E.C.add(e.k));return e.value};return e.value=t,e.O=!0,e.k=new Set,e},b=t=>{const e=E;return E=t,E.C=new Set,E.u=(t=>()=>{for(const e of t.C)e.delete(t)})(E),t(),E=e,t};let g=r.createComment(""),$=c("template"),S=r.createDocumentFragment();const L=t=>{let e=f(t).firstChild;for(;e;){const t=u(e);1!==e.nodeType&&e.remove(),e=t}},M=()=>{},j=(t,...e)=>t.reduce(((n,s,o)=>n+(s+(o===t.length-1?"":e[o]))),""),k=c("style"),C="css-x";let O=1;const R=(t,e)=>"$"+(e||O)+t,T=(t,...e)=>{if("string"==typeof t)return`${C}="${R(t,O)}"`;{const n=j(t,e);k.textContent+=n,k.parentElement||r.head.appendChild(k)}},V=(t,e,n)=>{const s=n,o=t.R;e.setAttribute(C,R(s,o))},H=(t,e,n)=>{const s=n,o=t.useRef(s);let r=!0;return b((()=>{const t=o();if(r){for(const n of t)n(e);r=!1}else t[t.length-1](e)}))},U=(t,e,n)=>{const s=e.style.display;return b((()=>{n(t.t)?s?e.style.display=s:e.style.removeProperty("display"):e.style.display="none"}))},X=(t,e,n)=>b((()=>e.textContent=n(t.t))),A=(t,e,n,s)=>b((()=>e.setAttribute(s,n(t.t)))),P=t=>"x-text"===t?X:"x-show"===t?U:"x-ref"===t?H:"x-css"===t?V:A,q=(t,e,n,s)=>{e.t||(e.t={});let o=null;const r={T:(t,e)=>o={V:t,H:e}},c=b((()=>{const o=e.t[s],c=n(t.t);o&&o.O?r.T(o,c):e.t[s]=c}));return o&&o.V(o.H),r.T=(t,e)=>t(e),c},z={},B=t=>{if(z[t])return z[t];let e=Object.getPrototypeOf((function(){})).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t;let s=(()=>{try{let s=new e(["scope"],`with(scope){return ${n}};`);return Object.defineProperty(s,"name",{value:`VifExp "${t}"`}),s}catch(e){return console.error("VifExp error : "+t,e),!1}})();return z[t]=s,s},D=(t,e,n)=>{Z(e);let s=[];const o="item",r=e.getAttribute(o)||o;return b((()=>{const o=n(t.t);((t,e,n,s,o)=>{let r=0;const c=n.length,l=s.length;let i=l-c;for(;r<c&&r<l;)n[r]!==s[r]&&W(e,r,s[r]),r++;for(;i>0;)Q(e,t,r,o,s[r]),i--,r++;i<0&&Y(e,r)})(t.t,e,s,o,r),s=o.slice()}))},F=(t,e,n)=>{Z(e);let s=!1;return b((()=>{const o=!!n(t.t);o!==s&&(s=o,o?Q(e,t.t,0):Y(e,0))}))};let G=location;const I=()=>G.pathname+G.search,J=v(I());addEventListener("popstate",(()=>{G=location,J(I())}));const K=t=>{if("string"==typeof t){const e=new URL(t,G);if(G.href!==e.href)return G=e,history.pushState({},"",G),J(I())}else{t.preventDefault();const e=t.currentTarget.href;if(e)return K(e)}};K.route=J;const N=(t,e,n)=>{Z(e);const s=new RegExp(n||"."),o="params",r=e.getAttribute(o)||o;let c=null;return b((()=>{const n=J().match(s)||null;n!==c&&(n&&c?W(e,0,n):n?Q(e,t.t,0,r,n):Y(e,0)),c=n}))},Q=(t,e,n,s,o)=>{const r=t.U;let c=r[n+1];const a=l(f(t),!0);c?c.V&&c.V(o):c=r[n+1]=((t,e,n,s)=>{const o=n&&v(s);return o&&(o.index=e),{X:new y(n?{...t,[n]:o}:t),V:o}})(e,n,s,o),c.A=a.lastChild,t.$&&c.X.h(i(a),t.$);const p=r[n].A;p.parentNode.insertBefore(a,u(p))},W=(t,e,n)=>{t.U[e+1].V(n)},Y=(t,e)=>{const n=t.U,s=n[e].A;for(;e++<n.length-1;){let t=u(s);const o=n[e].A;for(;t!==o;){const e=u(t);t.remove(),t=e}t.remove(),n[e].X.u()}},Z=t=>{L(t);const e=t.U=[{A:l(g)}];f(t).append(l(g)),t.u=()=>{for(let t=1;t<e.length;t++)e[t].X.u()},t.replaceWith(e[0].A)},_=e=>{const n=[];for(let o=0;o<e.length;o++){let r=e[o];const c=d(r),l=!c&&h(r),i={m:o,S:!1,v:c||l,L:new Map};let u=r.attributes.length;for(;u--;){const e=r.attributes[u];if(x(e)){const n=0===e.name.indexOf("x-on:"),o=p(e,n?5:2),f={j:"ref"===o||"css"===o||"route"===o?e.value:B(e.value||""),M:l?q:c?"x-for"===(s=e.name)?D:"x-if"===s?F:"x-route"===s?N:void 0:n?t:P(e.name)};i.L.set(o,f),!l&&r.removeAttribute(e.name)}}const m=a(r=c?f(r):r);m.length&&(i.S=_(m)),(i.L.size||i.S||l)&&n.push(i)}var s;return n.length>0&&n};class tt extends HTMLElement{constructor(){super(),this.l(),this.P={}}onMount(){}connectedCallback(){let t=this,e=t.t;for(const n of t.attributes)if(x(n)){const t=p(n,2);e[t]=v(e[t])}else e[n.name]=n.value||!0;t.onMount({props:e}),t.q()}onUnmount(){}u(){let t=this;t.onUnmount({props:t.t}),t.p()}q(){let t=this;const e=t.B;let n=e.D,s=e.S,o=e.R;const r=n?M:j,c=o?M:T,u=e.F,a={html:r,css:c,props:t.t},p=u.call(t,a);if("string"==typeof p?(n=e.D=(t=>{let e=l($);return e.innerHTML=t,L(e),f(e)})(p),s=e.S=_(i(n))):n||(n=p&&p!==t?(t=>{let e=l(S);return e.append(...t),e})(p):t,s=t.$||_(t.o||i(n))),t.R=e.R=o||O++,e.D&&(n=l(n,!0)),s&&t.h(t.o||i(n),s),n!==t){const e=t.parentNode;e.o||(e.o=[].slice.call(i(e))),t.replaceWith(n)}}useEffect(t){this.i.add(b(t))}useRef(t,e,n){const s=this.P,o=s[t]||(s[t]=v([]));if(!e)return o;{const t=o.value;n?t[(t.length||1)-1]=e:t.push(e),o(t)}}}Object.assign(tt.prototype,w);const et={},nt=v(localStorage.getItem("locale")||navigator.language),st=(t,e)=>t[e]||t[t.default],ot=t=>{const e=v();let n=[];return e.onload=t=>{e()?t():n.push(t)},b((()=>{const[s,o]=nt().split("-"),r=st(st(t,s),o);r&&r().then((t=>{e(t.default),n&&(n=n.forEach((t=>t())))}))})),e};ot.locale=nt,exports.useDefine=(t,e)=>{const n="X-"+t.toUpperCase();return et[n]=class extends tt{constructor(){super()}},et[n].F=e,et[n].prototype.B=et[n],customElements.define(`x-${t}`,et[n]),et[n]},exports.useEffect=b,exports.useI18n=ot,exports.useNavigate=K,exports.useObserve=t=>{n={...t,...n},s=o},exports.useSignal=v;
