import{S as D,i as H,s as J,l as A,g as v,e as E,t as u,k as I,c as j,a as S,h as m,d as h,m as q,b as d,J as _,j as W,M as K,x as M,K as P,y as R,z as V,r as B,p as F,C as G}from"../chunks/index-613948cd.js";import L from"./Header.svelte-0e37a812.js";import"./Menu.svelte-449b402f.js";function C(a,n,l){const s=a.slice();return s[2]=n[l],s}function N(a){let n,l=a[0],s=[];for(let t=0;t<l.length;t+=1)s[t]=z(C(a,l,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();n=A()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);n=A()},m(t,r){for(let e=0;e<s.length;e+=1)s[e].m(t,r);v(t,n,r)},p(t,r){if(r&1){l=t[0];let e;for(e=0;e<l.length;e+=1){const i=C(t,l,e);s[e]?s[e].p(i,r):(s[e]=z(i),s[e].c(),s[e].m(n.parentNode,n))}for(;e<s.length;e+=1)s[e].d(1);s.length=l.length}},d(t){K(s,t),t&&h(n)}}}function z(a){let n,l=a[2].author+"",s,t,r,e,i=a[2].title+"",c,g,k,p=a[2].year+"",w,b,y;return{c(){n=E("a"),s=u(l),t=u(". "),r=E("span"),e=u('"'),c=u(i),g=u('."'),k=I(),w=u(p),b=u("."),this.h()},l(f){n=j(f,"A",{class:!0,target:!0,href:!0});var o=S(n);s=m(o,l),t=m(o,". "),r=j(o,"SPAN",{id:!0,class:!0});var $=S(r);e=m($,'"'),c=m($,i),g=m($,'."'),$.forEach(h),k=q(o),w=m(o,p),b=m(o,"."),o.forEach(h),this.h()},h(){d(r,"id","title-style"),d(r,"class","svelte-1t455io"),d(n,"class","section-content svelte-1t455io"),d(n,"target","_blank"),d(n,"href",y=a[2].link)},m(f,o){v(f,n,o),_(n,s),_(n,t),_(n,r),_(r,e),_(r,c),_(r,g),_(n,k),_(n,w),_(n,b)},p(f,o){o&1&&l!==(l=f[2].author+"")&&W(s,l),o&1&&i!==(i=f[2].title+"")&&W(c,i),o&1&&p!==(p=f[2].year+"")&&W(w,p),o&1&&y!==(y=f[2].link)&&d(n,"href",y)},d(f){f&&h(n)}}}function O(a){let n,l,s,t,r;l=new L({props:{page:"writings"}});let e=a[0].length>0&&N(a);return{c(){n=I(),M(l.$$.fragment),s=I(),t=E("div"),e&&e.c(),this.h()},l(i){P('[data-svelte="svelte-1f24tyi"]',document.head).forEach(h),n=q(i),R(l.$$.fragment,i),s=q(i),t=j(i,"DIV",{class:!0});var g=S(t);e&&e.l(g),g.forEach(h),this.h()},h(){document.title="Writings",d(t,"class","writings-container svelte-1t455io")},m(i,c){v(i,n,c),V(l,i,c),v(i,s,c),v(i,t,c),e&&e.m(t,null),r=!0},p(i,[c]){i[0].length>0?e?e.p(i,c):(e=N(i),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i(i){r||(B(l.$$.fragment,i),r=!0)},o(i){F(l.$$.fragment,i),r=!1},d(i){i&&h(n),G(l,i),i&&h(s),i&&h(t),e&&e.d()}}}async function Y({fetch:a}){const l=await(await a("/todos/writing")).json();return l.writingItems.length==0&&(l.writingItems=[]),{props:{writings:l.writingItems}}}function Q(a,n,l){let{writings:t}=n;return console.log(t),a.$$set=r=>{"writings"in r&&l(0,t=r.writings)},[t,!0]}class Z extends D{constructor(n){super(),H(this,n,Q,O,J,{prerender:1,writings:0})}get prerender(){return this.$$.ctx[1]}}export{Z as default,Y as load};
