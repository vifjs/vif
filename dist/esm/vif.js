const t=(t,n,s,o)=>{const r=n.handler||(n.handler=new e);r[o]=s(t.t),n.addEventListener(o,r)};class e{handleEvent(t){this[t.type](t)}}let n={},s=null;const o=t=>{n[t]&&(n[t](),n[t]=!1)},r=t=>{n={...t,...n},s=o},c=document,l=t=>c.createElement(t),i=(t,e)=>t.cloneNode(e),u=t=>t.children,f=t=>t.content,a=t=>t.o||t.children,p=(t,e)=>t.name.substring(e),h=t=>0===t.name.indexOf("x-"),x=t=>0===t.tagName.indexOf("X-"),d=t=>!!t.content,m=t=>!!et[t.tagName]||d(t),w={l(t){let e=this;e.t||(e.t=t||{}),e.i||(e.i=new Set)},u(){this.p()},h(t,e,n){let o=this,r=e.length-1,c=n;for(;r>=0;){const l=e[r],i=t[l.m];if(l.v&&(i.S=l.$,(n||o.i).add(i),s&&s(i.tagName)),!n)for(const[t,e]of l.O){const n=e.j(o,i,e.k,t);n&&o.i.add(n)}if(l.$){(!l.v||(c=!m(i)&&(i.i=new Set)))&&o.h(a(i),l.$,c)}r--}},p(){for(const t of this.i)t.u&&t.u();this.i.clear()}};function v(t){this.l(t)}v.prototype=w;let y=null;const g=t=>{const e=t=>{if(void 0!==t){e.value=t;for(const t of e.C)t()}else y&&(e.C.add(y),y.L.add(e.C));return e.value};return e.value=t,e.M=!0,e.C=new Set,e},E=t=>{const e=y;return y=t,y.L=new Set,y.u=(t=>()=>{for(const e of t.L)e.delete(t)})(y),t(),y=e,t};let b=c.createComment(""),S=l("template"),$=c.createDocumentFragment();const O=t=>{let e=f(t).firstChild;for(;e;){const t=e.nextSibling;1!==e.nodeType&&e.remove(),e=t}},j=()=>{},k=(t,...e)=>t.reduce(((n,s,o)=>n+(s+(o===t.length-1?"":e[o]))),""),C=l("style"),L="css-x";let M=1;const R=(t,e)=>"$"+(e||M)+t,V=(t,...e)=>{if("string"==typeof t)return`${L}="${R(t,M)}"`;{const n=k(t,e);C.textContent+=n,C.parentElement||c.head.appendChild(C)}},H=(t,e,n)=>{const s=n,o=t.R;e.setAttribute(L,R(s,o))},U=(t,e,n)=>{const s=n,o=t.useRef(s);let r=!0;return E((()=>{const t=o();if(r){for(const n of t)n(e);r=!1}else t[t.length-1](e)}))},X=(t,e,n)=>{const s=e.style.display;return E((()=>{n(t.t)?s?e.style.display=s:e.style.removeProperty("display"):e.style.display="none"}))},D=(t,e,n)=>E((()=>e.textContent=n(t.t))),I=(t,e,n,s)=>E((()=>e.setAttribute(s,n(t.t)))),N=t=>"x-text"===t?D:"x-show"===t?X:"x-ref"===t?U:"x-css"===t?H:I,T=(t,e,n,s)=>{e.t||(e.t={});let o=null;const r={V:(t,e)=>o={H:t,U:e}},c=E((()=>{const o=e.t[s],c=n(t.t);o&&o.M?r.V(o,c):e.t[s]=c}));return o&&o.H(o.U),r.V=(t,e)=>t(e),c},q={},z=t=>{if(q[t])return q[t];let e=Object.getPrototypeOf((function(){})).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t;let s=(()=>{try{let s=new e(["scope"],`with(scope){return ${n}};`);return Object.defineProperty(s,"name",{value:`VifExp "${t}"`}),s}catch(e){return console.error("VifExp error : "+t,e),!1}})();return q[t]=s,s},A=(t,e,n)=>{Z(e);let s=[];const o="item",r=e.getAttribute(o)||o;return E((()=>{const o=n(t.t);((t,e,n,s,o)=>{let r=0;const c=n.length,l=s.length;let i=l-c;for(;r<c&&r<l;)n[r]!==s[r]&&W(e,r,s[r]),r++;for(;i>0;)Q(e,t,r,o,s[r]),i--,r++;i<0&&Y(e,r)})(t.t,e,s,o,r),s=o.slice()}))},B=(t,e,n)=>{Z(e);let s=!1;return E((()=>{const o=!!n(t.t);o!==s&&(s=o,o?Q(e,t.t,0):Y(e,0))}))};let F=location;const G=()=>F.pathname+F.search,J=g(G());addEventListener("popstate",(()=>{F=location,J(G())}));const K=t=>{if("string"==typeof t){const e=new URL(t,F);if(F.href!==e.href)return F=e,history.pushState({},"",F),J(G())}else{t.preventDefault();const e=t.currentTarget.href;if(e)return K(e)}};K.route=J;const P=(t,e,n)=>{Z(e);const s=new RegExp(n||"."),o="params",r=e.getAttribute(o)||o;let c=null;return E((()=>{const n=J().match(s)||null;n!==c&&(n&&c?W(e,0,n):n?Q(e,t.t,0,r,n):Y(e,0)),c=n}))},Q=(t,e,n,s,o)=>{const r=t.X;let c=r[n+1];const l=i(f(t),!0);c?c.H&&c.H(o):c=r[n+1]=((t,e,n,s)=>{const o=n&&g(s);return o&&(o.index=e),{D:new v(n?{...t,[n]:o}:t),H:o}})(e,n,s,o),c.I=l.lastChild,t.S&&c.D.h(u(l),t.S);const a=r[n].I;a.parentNode.insertBefore(l,a.nextSibling)},W=(t,e,n)=>{t.X[e+1].H(n)},Y=(t,e)=>{const n=t.X,s=n[e].I;for(;e++<n.length-1;){let t=s.nextSibling;const o=n[e].I;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}t.remove(),n[e].D.u()}},Z=t=>{O(t);const e=t.X=[{I:i(b)}];f(t).append(i(b)),t.u=()=>{for(let t=1;t<e.length;t++)e[t].D.u()},t.replaceWith(e[0].I)},_=e=>{const n=[];for(let o=0;o<e.length;o++){let r=e[o];const c=d(r),l=!c&&x(r),i={m:o,$:!1,v:c||l,O:new Map};let u=r.attributes.length;for(;u--;){const e=r.attributes[u];if(h(e)){const n=0===e.name.indexOf("x-on:"),o=p(e,n?5:2),u={k:"ref"===o||"css"===o||"route"===o?e.value:z(e.value||""),j:l?T:c?"x-for"===(s=e.name)?A:"x-if"===s?B:"x-route"===s?P:void 0:n?t:N(e.name)};i.O.set(o,u),!l&&r.removeAttribute(e.name)}}const m=a(r=f(r)||r);m.length&&(i.$=_(m)),(i.O.size||i.$||l)&&n.push(i)}var s;return n.length>0&&n};class tt extends HTMLElement{constructor(){super(),this.l(),this.N={}}onMount(){}connectedCallback(){let t=this,e=t.t;for(const n of t.attributes)if(h(n)){const t=p(n,2);e[t]=g(e[t])}else e[n.name]=n.value||!0;t.onMount({props:e}),t.T()}onUnmount(){}u(){let t=this;t.onUnmount({props:t.t}),t.p()}T(){let t=this;const e=t.q;let n=e.A,s=e.$,o=e.R;const r=n?j:k,c=o?j:V,l=e.B,a={html:r,css:c,props:t.t},p=l.call(t,a);if("string"==typeof p?(n=e.A=(t=>{let e=i(S);return e.innerHTML=t,O(e),f(e)})(p),s=e.$=_(u(n))):n||(n=p&&p!==t?(t=>{let e=i($);return e.append(...t),e})(p):t,s=t.S||_(t.o||u(n))),t.R=e.R=o||M++,e.A&&(n=i(n,!0)),s&&t.h(t.o||u(n),s),n!==t){const e=t.parentNode;e.o||(e.o=[].slice.call(u(e))),t.replaceWith(n)}}useEffect(t){this.i.add(E(t))}useRef(t,e,n){const s=this.N,o=s[t]||(s[t]=g([]));if(!e)return o;{const t=o.value;n?t[(t.length||1)-1]=e:t.push(e),o(t)}}}Object.assign(tt.prototype,w);const et={},nt=(t,e)=>{const n="X-"+t.toUpperCase();return et[n]=class extends tt{constructor(){super()}},et[n].B=e,et[n].prototype.q=et[n],customElements.define(`x-${t}`,et[n]),et[n]},st=g(localStorage.getItem("locale")||navigator.language),ot=(t,e)=>t[e]||t[t.default],rt=t=>{const e=g();let n=[];return e.onload=t=>{e()?t():n.push(t)},E((()=>{const[s,o]=st().split("-"),r=ot(ot(t,s),o);r&&r().then((t=>{e(t.default),n&&(n=n.forEach((t=>t())))}))})),e};rt.locale=st;export{nt as useDefine,E as useEffect,rt as useI18n,K as useNavigate,r as useObserve,g as useSignal};
