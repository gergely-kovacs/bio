!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(4)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1),n(2);function o(){}function r(t){return t()}function s(){return Object.create(null)}function c(t){t.forEach(r)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}function u(t){return t&&i(t.destroy)?t.destroy:o}new Set;function f(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let x;function w(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function _(t){k().$$.on_mount.push(t)}const C=[],E=[],A=[],O=[],P=Promise.resolve();let j=!1;function T(){j||(j=!0,P.then(S))}function L(t){A.push(t)}function S(){const t=new Set;do{for(;C.length;){const t=C.shift();w(t),q(t.$$)}for(;E.length;)E.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];t.has(n)||(n(),t.add(n))}A.length=0}while(C.length);for(;O.length;)O.pop()();j=!1}function q(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const M=new Set;let D;function N(){D={r:0,c:[],p:D}}function H(){D.r||c(D.c),D=D.p}function I(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),D.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let F;function R(t){t&&t.c()}function B(t,e,n){const{fragment:o,on_mount:s,on_destroy:a,after_update:l}=t.$$;o&&o.m(e,n),L(()=>{const e=s.map(r).filter(i);a?a.push(...e):c(e),t.$$.on_mount=[]}),l.forEach(L)}function G(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e,n,r,i,a,l=[-1]){const u=x;w(t);const f=e.props||{},d=t.$$={fragment:null,ctx:null,props:a,update:o,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l};let h=!1;var p;d.ctx=n?n(t,f,(e,n,o=n)=>(d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(d.bound[e]&&d.bound[e](o),h&&function(t,e){-1===t.$$.dirty[0]&&(C.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n)):[],d.update(),h=!0,c(d.before_update),d.fragment=!!r&&r(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l((p=e.target,Array.from(p.childNodes))):d.fragment&&d.fragment.c(),e.intro&&I(t.$$.fragment),B(t,e.target,e.anchor),S()),w(u)}"function"==typeof HTMLElement&&(F=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){G(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class K{$destroy(){G(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var W=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,c=[],i="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(c.push("wild"),i+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}};const X=[];function J(t,e){return{subscribe:Q(t,e).subscribe}}function Q(t,e=o){let n;const r=[];function s(e){if(a(t,e)&&(t=e,n)){const e=!X.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),X.push(n,t)}if(e){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,i=o){const a=[c,i];return r.push(a),1===r.length&&(n=e(s)||o),c(t),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}}}function U(t,e,n){const r=!Array.isArray(t),s=r?[t]:t,a=e.length<2;return J(n,t=>{let n=!1;const l=[];let u=0,f=o;const d=()=>{if(u)return;f();const n=e(r?l[0]:l,t);a?t(n):f=i(n)?n:o},h=s.map((t,e)=>t.subscribe(t=>{l[e]=t,u&=~(1<<e),n&&d()},()=>{u|=1<<e}));return n=!0,d(),function(){c(h),f()}})}function V(t){let e,n;var o=t[0];function r(t){return{props:{params:t[1]}}}if(o)var s=new o(r(t));return{c(){s&&R(s.$$.fragment),e=m("")},m(t,o){s&&B(s,t,o),d(t,e,o),n=!0},p(t,[n]){const c={};if(2&n&&(c.params=t[1]),o!==(o=t[0])){if(s){N();const t=s;Y(t.$$.fragment,1,0,()=>{G(t,1)}),H()}o?(R((s=new o(r(t))).$$.fragment),I(s.$$.fragment,1),B(s,e.parentNode,e)):s=null}else o&&s.$set(c)},i(t){n||(s&&I(s.$$.fragment,t),n=!0)},o(t){s&&Y(s.$$.fragment,t),n=!1},d(t){t&&h(e),s&&G(s,t)}}}function Z(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const tt=J(Z(),(function(t){const e=()=>{t(Z())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));U(tt,t=>t.location),U(tt,t=>t.querystring);function et(t,e,n){let r,s=o;!function(t,e,n){t.$$.on_destroy.push(l(e,n))}(t,tt,t=>n(4,r=t)),t.$$.on_destroy.push(()=>s());let{routes:c={}}=e,{prefix:i=""}=e;class a{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:n,keys:o}=W(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.route,this.conditions=e.conditions||[],this.userData=e.userData):(this.component=e,this.conditions=[],this.userData=void 0),this._pattern=n,this._keys=o}match(t){i&&t.startsWith(i)&&(t=t.substr(i.length)||"/");const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;)n[this._keys[o]]=e[++o]||null;return n}checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!this.conditions[e](t))return!1;return!0}}const u=c instanceof Map?c:Object.entries(c),f=[];for(const[t,e]of u)f.push(new a(t,e));let d=null,h={};const p=function(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=v(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}(),m=(t,e)=>{setTimeout(()=>{p(t,e)},0)};return t.$set=t=>{"routes"in t&&n(2,c=t.routes),"prefix"in t&&n(3,i=t.prefix)},t.$$.update=()=>{if(17&t.$$.dirty){n(0,d=null);let t=0;for(;!d&&t<f.length;){const e=f[t].match(r.location);if(e){const o={component:f[t].component,name:f[t].component.name,location:r.location,querystring:r.querystring,userData:f[t].userData};if(!f[t].checkConditions(o)){m("conditionsFailed",o);break}n(0,d=f[t].component),n(1,h=e),m("routeLoaded",o)}t++}}},[d,h,c,i]}var nt=class extends K{constructor(t){super(),z(this,t,et,V,a,{routes:2,prefix:3})}};const ot=[];let rt;function st(t){t.node.classList.remove(t.className),t.pattern.test(rt)&&t.node.classList.add(t.className)}function ct(t,e){if(!(e=e&&"string"==typeof e?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:n}=W(e.path),o={node:t,className:e.className,pattern:n};return ot.push(o),st(o),{destroy(){ot.splice(ot.indexOf(o),1)}}}tt.subscribe(t=>{rt=t.location+(t.querystring?"?"+t.querystring:""),ot.map(st)});n(3);function it(t){let e,n,r,s,i,a,l,m,$,v,x,w,k,_,C,E,A,O,P,j,T,L,S,q,M;return{c(){e=p("div"),n=p("nav"),r=p("a"),r.textContent="Intro",i=g(),a=p("a"),a.textContent="Movies",m=g(),$=p("a"),$.textContent="Music",x=g(),w=p("a"),w.textContent="Gaming",_=g(),C=p("a"),C.textContent="Hiking",A=g(),O=p("a"),O.textContent="Climbing",j=g(),T=p("label"),L=p("input"),S=g(),q=p("span"),y(r,"class","nav-link col text-center rounded-0"),y(r,"href","#/"),y(a,"class","nav-link col text-center rounded-0"),y(a,"href","#/movies"),y($,"class","nav-link col text-center rounded-0"),y($,"href","#/music"),y(w,"class","nav-link col text-center rounded-0"),y(w,"href","#/gaming"),y(C,"class","nav-link col text-center rounded-0"),y(C,"href","#/hiking"),y(O,"class","nav-link col text-center rounded-0"),y(O,"href","#/climbing"),y(n,"class","nav nav-pills w-75"),y(L,"type","checkbox"),y(L,"class","d-none"),L.checked=!0,y(q,"class","slider svelte-bdbq27"),y(T,"class","mb-0 switch d-flex align-items-center svelte-bdbq27"),y(e,"class","navbar px-0 pt-0"),M=[u(s=ct.call(null,r)),u(l=ct.call(null,a)),u(v=ct.call(null,$)),u(k=ct.call(null,w)),u(E=ct.call(null,C)),u(P=ct.call(null,O)),b(L,"change",t[0])]},m(t,o){d(t,e,o),f(e,n),f(n,r),f(n,i),f(n,a),f(n,m),f(n,$),f(n,x),f(n,w),f(n,_),f(n,C),f(n,A),f(n,O),f(e,j),f(e,T),f(T,L),f(T,S),f(T,q)},p:o,i:o,o:o,d(t){t&&h(e),c(M)}}}function at(t){const e=["bg-dark","text-light"],n=["bg-light","text-dark"];function o(t){const o=t.target.checked,r=o?e:n,s=o?n:e;document.querySelector("body").classList.add(...r),document.querySelector("body").classList.remove(...s)}return _(()=>o({target:{checked:!0}})),[o]}var lt=class extends K{constructor(t){super(),z(this,t,at,it,a,{})}};function ut(t){let e;return{c(){e=p("div"),e.textContent="Halo its me!"},m(t,n){d(t,e,n)},p:o,i:o,o:o,d(t){t&&h(e)}}}const ft=["?t=The+Sunset+Limited&y=2011","?t=K-PAX&y=2001","?t=American Beauty&y=1999","?t=Seven Pounds&y=2008","?t=Tangerines&y=2013"];function dt(t,e,n){const o=t.slice();return o[1]=e[n],o[3]=n,o}function ht(t){let e,n,o,r,s,c,i,a,l,u,b,v,x,w,k,_,C,E,A,O,P,j,T,L,S=t[3]+1+"",q=t[1].Title+"",M=t[1].Year+"",D=t[1].Director+"",N=t[1].Actors+"",H=t[1].Plot+"";return{c(){e=p("tr"),n=p("th"),o=m(S),r=g(),s=p("td"),c=p("img"),l=g(),u=p("td"),b=m(q),v=m(" ("),x=m(M),w=m(")"),k=g(),_=p("td"),C=m(D),E=g(),A=p("td"),O=m(N),P=g(),j=p("td"),T=m(H),L=g(),y(n,"scope","row"),c.src!==(i=t[1].Poster)&&y(c,"src",i),y(c,"alt",a=t[1].Title)},m(t,i){d(t,e,i),f(e,n),f(n,o),f(e,r),f(e,s),f(s,c),f(e,l),f(e,u),f(u,b),f(u,v),f(u,x),f(u,w),f(e,k),f(e,_),f(_,C),f(e,E),f(e,A),f(A,O),f(e,P),f(e,j),f(j,T),f(e,L)},p(t,e){1&e&&c.src!==(i=t[1].Poster)&&y(c,"src",i),1&e&&a!==(a=t[1].Title)&&y(c,"alt",a),1&e&&q!==(q=t[1].Title+"")&&$(b,q),1&e&&M!==(M=t[1].Year+"")&&$(x,M),1&e&&D!==(D=t[1].Director+"")&&$(C,D),1&e&&N!==(N=t[1].Actors+"")&&$(O,N),1&e&&H!==(H=t[1].Plot+"")&&$(T,H)},d(t){t&&h(e)}}}function pt(t){let e,n,r,s,c,i,a,l,u,b,$,v,x,w,k,_=t[0],C=[];for(let e=0;e<_.length;e+=1)C[e]=ht(dt(t,_,e));return{c(){e=p("div"),n=p("h4"),n.textContent="Genres",r=m("\n  My favorite genres in order are:\n  "),s=p("ol"),s.innerHTML="<li>Drama</li> \n    <li>Comedy</li> \n    <li>Documentary</li> \n    <li>Action</li>",c=g(),i=p("h4"),i.textContent="Films",a=m("\n  You can check out the complete list of my favorites\n  "),l=p("a"),l.textContent="here.",u=g(),b=p("br"),$=m("\n  Here's my top 5 as a preview:\n  "),v=p("table"),x=p("thead"),x.innerHTML='<tr><th scope="col">#</th> \n        <th scope="col">Poster</th> \n        <th scope="col">Title (Year)</th> \n        <th scope="col">Director</th> \n        <th scope="col">Actors</th> \n        <th scope="col">Plot</th></tr>',w=g(),k=p("tbody");for(let t=0;t<C.length;t+=1)C[t].c();y(n,"class","mt-4"),y(i,"class","mt-4"),y(l,"href","https://www.imdb.com/list/ls093225661/"),y(v,"class","table table-borderless table-dark"),y(e,"class","container")},m(t,o){d(t,e,o),f(e,n),f(e,r),f(e,s),f(e,c),f(e,i),f(e,a),f(e,l),f(e,u),f(e,b),f(e,$),f(e,v),f(v,x),f(v,w),f(v,k);for(let t=0;t<C.length;t+=1)C[t].m(k,null)},p(t,[e]){if(1&e){let n;for(_=t[0],n=0;n<_.length;n+=1){const o=dt(t,_,n);C[n]?C[n].p(o,e):(C[n]=ht(o),C[n].c(),C[n].m(k,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=_.length}},i:o,o:o,d(t){t&&h(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(C,t)}}}function mt(t,e,n){let o=[];return _(async()=>{const t=ft.map(t=>`https://www.omdbapi.com/${t}&apikey=6416b521`).map(t=>fetch(t)),e=(await Promise.all(t)).map(t=>t.json());n(0,o=await Promise.all(e))}),[o]}const gt={"/":class extends K{constructor(t){super(),z(this,t,null,ut,a,{})}},"/movies":class extends K{constructor(t){super(),z(this,t,mt,pt,a,{})}}};function bt(t){let e,n;const r=new lt({}),s=new nt({props:{routes:gt}});return{c(){R(r.$$.fragment),e=g(),R(s.$$.fragment)},m(t,o){B(r,t,o),d(t,e,o),B(s,t,o),n=!0},p:o,i(t){n||(I(r.$$.fragment,t),I(s.$$.fragment,t),n=!0)},o(t){Y(r.$$.fragment,t),Y(s.$$.fragment,t),n=!1},d(t){G(r,t),t&&h(e),G(s,t)}}}const yt=new class extends K{constructor(t){super(),z(this,t,null,bt,a,{})}}({target:document.body});window.app=yt;e.default=yt}]);