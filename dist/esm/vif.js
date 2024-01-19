const t=(t,n,o,s)=>{const r=n.handler||(n.handler=new e);r[s]=o(t),n.addEventListener(s,r)};class e{t(t){this[t.type](t)}}let n={},o=null;const s=t=>{n[t]&&(n[t](),n[t]=!1)},r=document,c=t=>r.createElement(t),l=(t,e)=>t.cloneNode(e),i=t=>t.children,f=t=>t.o||t.children,u=(t,e)=>t.name.substring(e),a=t=>0===t.name.indexOf("x-"),p=t=>0===t.tagName.indexOf("X-"),d=t=>!!t.content,h=t=>!!_[t.tagName]||d(t),x={l(t){let e=this;e.i||(e.i=t||{}),e.u||(e.u=new Set)},p(){this.h()},m(t,e,n){let s=this,r=e.length-1,c=n;for(;r>=0;){const l=e[r],i=t[l.v];if(l.$&&(i.S=l.j,(n||s.u).add(i),o&&o(i.tagName)),!n)for(const[t,e]of l.k){const n=e.C(s.i,i,e.L,t);n&&s.u.add(n)}if(l.j){(!l.$||(c=!h(i)&&(i.u=new Set)))&&s.m(f(i),l.j,c)}r--}},h(){for(const t of this.u)t.p&&t.p();this.u.clear()}};function g(t){this.l(t)}g.prototype=x;let m=null;const w=t=>{const e=t=>{if(void 0!==t){e.data=t;for(const t of e.M)t()}else m&&(e.M.add(m),m.O.add(e.M));return e.data};return e.data=t,e.V=!0,e.M=new Set,e.effect=e.M,e},y=t=>{const e=m;return m=t,m.O=new Set,m.p=(t=>()=>{for(const e of t.O)e.delete(t)})(m),t(),m=e,t};let v=r.createComment(""),b=c("template"),E=r.createDocumentFragment();const $=()=>{},S=(t,...e)=>t.reduce(((n,o,s)=>n+(o+(s===t.length-1?"":e[s]))),""),j=c("style"),k="css-x";let C=1;const L=(t,e)=>"$"+(e||C)+t,M=(t,...e)=>{if("string"==typeof t)return`${k}="${L(t,C)}"`;{const n=S(t,e);j.textContent+=n,j.parentElement||r.head.appendChild(j)}},O=(t,e,n)=>{const o=n,s=t.component.H;e.setAttribute(k,L(o,s))},V=(t,e,n)=>{const o=n,s=t.ref(o);let r=!0;return y((()=>{const t=s.R();if(r){for(const n of t)n(e);r=!1}else t[t.length-1](e)}))},H=(t,e,n)=>{const o=e.style.display;return y((()=>{n(t)?o?e.style.display=o:e.style.removeProperty("display"):e.style.display="none"}))},R=(t,e,n)=>y((()=>e.textContent=n(t))),U=(t,e,n,o)=>y((()=>e.setAttribute(o,n(t)))),X=t=>"x-text"===t?R:"x-show"===t?H:"x-ref"===t?V:"x-css"===t?O:U,T=(t,e,n,o)=>{e.i||(e.i={});let s=null;const r={U:(t,e)=>s={X:t,T:e}},c=y((()=>{const s=e.i[o],c=n(t);s&&s.V?r.U(s,c):e.i[o]=c}));return s&&s.X(s.T),r.U=(t,e)=>t(e),c},q={},z=t=>{if(q[t])return q[t];let e=Object.getPrototypeOf((function(){})).constructor,n=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t;let o=(()=>{try{let o=new e(["scope"],`with(scope){return ${n}};`);return Object.defineProperty(o,"name",{value:`VifExp "${t}"`}),o}catch(e){return console.error("VifExp error : "+t,e),!1}})();return q[t]=o,o},A=(t,e,n)=>{W(e);let o=[];const s="item",r=e.getAttribute(s)||s;return y((()=>{const s=n(t);((t,e,n,o,s)=>{let r=0;const c=n.length,l=o.length;let i=l-c;for(;r<c&&r<l;)n[r]!==o[r]&&P(e,r,o[r]),r++;for(;i>0;)N(e,t,r,s,o[r]),i--,r++;for(;i<0;)Q(e,r),i++,r++})(t,e,o,s,r),o=s}))},B=(t,e,n)=>{W(e);let o=!1;return y((()=>{const s=!!n(t);s!==o&&(o=s,s?N(e,t,0):Q(e,0))}))};let D=location;const F=()=>D.pathname+D.search,G=w(F());addEventListener("popstate",(()=>{D=location,G(F())}));const I=t=>{if("string"==typeof t){const e=new URL(t,D);if(D.href!==e.href)return D=e,history.pushState({},"",D),G(F())}else{t.preventDefault();const e=t.currentTarget.href;if(e)return I(e)}},J=(t,e,n)=>{W(e);const o=new RegExp(n||"."),s="params",r=e.getAttribute(s)||s;let c=null;return y((()=>{const n=G().match(o)||null;n!==c&&(n&&c?P(e,0,n):n?N(e,t,0,r,n):Q(e,0)),c=n}))},K=()=>l(v),N=(t,e,n,o,s)=>{const r=t.q;let c=r[n+1];const f=l(t.content,!0);c?c.X&&c.X(s):c=r[n+1]=((t,e,n,o)=>{const s=K(),r=n&&w(o);return r&&(r.index=e),{A:s,B:new g(n?{...t,[n]:r}:t),X:r}})(e,n,o,s),t.S&&c.B.m(i(f),t.S),r[n].A.replaceWith(r[n].A,f,c.A)},P=(t,e,n)=>{t.q[e+1].X(n)},Q=(t,e)=>{const n=t.q;let o=n[e].A.nextSibling;const s=n[e+1].A;for(n[e+1].B.p();o!==s;){const t=o;o=o.nextSibling,t.remove()}},W=t=>{t.q=[{A:K()}],t.p=()=>{for(let e=1;e<t.q.length;e++)t.q[e].B.p()},t.replaceWith(t.q[0].A)},Y=e=>{const n=[];for(let s=0;s<e.length;s++){let r=e[s];const c=d(r),l=!c&&p(r),i={v:s,j:!1,$:c||l,k:new Map};let h=r.attributes.length;for(;h--;){const e=r.attributes[h];if(a(e)){const n=0===e.name.indexOf("x-on:"),s=u(e,n?5:2),f={L:"ref"===s||"css"===s||"route"===s?e.value:z(e.value||""),C:l?T:c?"x-for"===(o=e.name)?A:"x-if"===o?B:"x-route"===o?J:void 0:n?t:X(e.name)};i.k.set(s,f),!l&&r.removeAttribute(e.name)}}const x=f(r=r.content||r);x.length&&(i.j=Y(x)),(i.k.size||i.j||l)&&n.push(i)}var o;return n.length>0&&n};class Z extends HTMLElement{constructor(){super(),this.l(),this.D={}}onMount(){}connectedCallback(){let t=this,e=t.i;for(const n of t.attributes)if(a(n)){const t=u(n,2);e[t]=w(e[t])}else e[n.name]=n.value||!0;e.component=t,e.ref=t.F,t.onMount.call(e),t.G()}onUnmount(){}p(){let t=this;t.onUnmount.call(t.i),t.h()}G(){let t=this;const e=t.I;let n=e.J,o=e.j,s=e.H;const r=n?$:S,c=s?$:M,f=e.K.call(t.i,w,r,c);if(f&&("string"==typeof f?(n=e.J=(t=>{let e=l(b);return e.innerHTML=t,e.content})(f),o=e.j=Y(i(n))):(n=f===t?t:(t=>{let e=l(E);return e.append(...t),e})(f),o=t.S||Y(t.o||i(n)))),t.H=e.H=s||C++,e.J&&(n=l(n,!0)),o&&t.m(t.o||i(n),o),n!==t){const e=t.parentNode;e.o||(e.o=[].slice.call(i(e))),t.replaceWith(n)}}F(t,e){const n=this.component.D,o=n[t]||(n[t]=(()=>{const t=[];return t.R=w([]),t})());if(!e)return o;o.push(e),o.R(o)}}Object.assign(Z.prototype,x);const _={};let tt=[];const et=w(localStorage.getItem("locale")||navigator.language),nt=w(),ot=t=>"string"==typeof t?et(t):t?(t=>{const e=(t,e)=>t[e]||t[t.default];y((()=>{const[n,o]=et().split("-"),s=e(e(t,n),o);s&&s().then((t=>{nt(t.default),tt&&(tt=tt.forEach((t=>t())))}))}))})(t):nt();ot.onload=t=>{nt()?t():tt.push(t)};const st={define:(t,e)=>{const n="X-"+t.toUpperCase();return _[n]=class extends Z{constructor(){super()}},_[n].K=e,_[n].prototype.I=_[n],customElements.define(`x-${t}`,_[n]),_[n]},signal:w,observe:t=>{n={...t,...n},o=s},navigate:I,route:G,i18n:ot};export{st as default};
