function k(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function B(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(B)}function H(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(K(e,n))}function ht(t,e,n,r){if(t){const c=O(t,e,n,r);return t[0](c)}}function O(t,e,n,r){return t[1]&&r?G(n.ctx.slice(),t[1](r(e))):n.ctx}function mt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],i=Math.max(e.dirty.length,c.length);for(let o=0;o<i;o+=1)s[o]=e.dirty[o]|c[o];return s}return e.dirty|c}return e.dirty}function pt(t,e,n,r,c,s){if(c){const i=O(e,n,r,s);t.p(i,c)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let w=!1;function R(){w=!0}function W(){w=!1}function Q(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(c>0&&e[n[c]].claim_order<=u?c+1:Q(1,c,_=>e[n[_]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,c=Math.max(a,c)}const s=[],i=[];let o=e.length-1;for(let l=n[c]+1;l!=0;l=r[l-1]){for(s.push(e[l-1]);o>=l;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);s.reverse(),i.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<i.length;l++){for(;u<s.length&&i[l].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(i[l],f)}}function V(t,e){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){w&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function gt(){return A(" ")}function xt(){return A("")}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,r,c=!1){tt(t);const s=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,c||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const l=n(o);return l===void 0?t.splice(i,1):t[i]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function et(t,e,n,r){return P(t,c=>c.nodeName===e,c=>{const s=[];for(let i=0;i<c.attributes.length;i++){const o=c.attributes[i];n[o.name]||s.push(o.name)}s.forEach(i=>c.removeAttribute(i))},()=>r(e))}function kt(t,e,n){return et(t,e,n,Y)}function nt(t,e){return P(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>A(e),!0)}function wt(t){return nt(t," ")}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Nt(t,e){const n=[];let r=0;for(const c of e.childNodes)if(c.nodeType===8){const s=c.textContent.trim();s===`HEAD_${t}_END`?(r-=1,n.push(c)):s===`HEAD_${t}_START`&&(r+=1,n.push(c))}else r>0&&n.push(c);return n}function At(t,e){return new t(e)}let b;function d(t){b=t}function S(){if(!b)throw new Error("Function called outside component initialization");return b}function St(t){S().$$.on_mount.push(t)}function jt(t){S().$$.after_update.push(t)}const p=[],D=[];let y=[];const q=[],z=Promise.resolve();let v=!1;function F(){v||(v=!0,z.then(j))}function Ct(){return F(),z}function N(t){y.push(t)}const E=new Set;let m=0;function j(){if(m!==0)return;const t=b;do{try{for(;m<p.length;){const e=p[m];m++,d(e),rt(e.$$)}}catch(e){throw p.length=0,m=0,e}for(d(null),p.length=0,m=0;D.length;)D.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];E.has(n)||(E.add(n),n())}y.length=0}while(p.length);for(;q.length;)q.pop()();v=!1,E.clear(),d(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function ct(t){const e=[],n=[];y.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),y=e}const $=new Set;let h;function it(){h={r:0,c:[],p:h}}function lt(){h.r||g(h.c),h=h.p}function L(t,e){t&&t.i&&($.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Mt(t,e){const n=e.token={};function r(c,s,i,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;i!==void 0&&(l=l.slice(),l[i]=o);const u=c&&(e.current=c)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==s&&a&&(it(),ut(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),lt())}):e.block.d(1),u.c(),L(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[s]=u),f&&j()}if(I(t)){const c=S();if(t.then(s=>{d(c),r(e.then,1,e.value,s),d(null)},s=>{if(d(c),r(e.catch,2,e.error,s),d(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Tt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Dt(t){t&&t.c()}function qt(t,e){t&&t.l(e)}function st(t,e,n,r){const{fragment:c,after_update:s}=t.$$;c&&c.m(e,n),r||N(()=>{const i=t.$$.on_mount.map(B).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...i):g(i),t.$$.on_mount=[]}),s.forEach(N)}function ot(t,e){const n=t.$$;n.fragment!==null&&(ct(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(p.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,r,c,s,i,o=[-1]){const l=b;d(t);const u=t.$$={fragment:null,ctx:[],props:s,update:k,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...C)=>{const M=C.length?C[0]:_;return u.ctx&&c(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&at(t,a)),_}):[],u.update(),f=!0,g(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){R();const a=Z(e.target);u.fragment&&u.fragment.l(a),a.forEach(X)}else u.fragment&&u.fragment.c();e.intro&&L(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),W(),j()}d(l)}class Ht{$destroy(){ot(this,1),this.$destroy=k}$on(e,n){if(!H(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as A,ot as B,ht as C,V as D,pt as E,yt as F,mt as G,k as H,_t as I,Nt as J,dt as K,Mt as L,Tt as M,Ht as S,gt as a,bt as b,wt as c,ut as d,xt as e,lt as f,L as g,X as h,Bt as i,jt as j,Y as k,kt as l,Z as m,$t as n,St as o,vt as p,A as q,nt as r,ft as s,Ct as t,Et as u,it as v,D as w,At as x,Dt as y,qt as z};
