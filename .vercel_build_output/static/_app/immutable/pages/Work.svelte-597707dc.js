import{S as O,i as P,s as Q,e as E,x as W,k as I,c as D,a as V,y as j,m as C,d,b as g,f as q,g as v,z as B,J as F,r as h,p,C as M,K as T,q as S,M as z,o as H}from"../chunks/index-613948cd.js";import U from"./Header.svelte-64e06afe.js";import G from"./WorkItem.svelte-ea0cf982.js";import X from"./WorkMenu.svelte-6e6b5979.js";import"./Menu.svelte-68177f87.js";function J(c,l,o){const m=c.slice();return m[4]=l[o],m}function K(c,l,o){const m=c.slice();return m[7]=l[o],m}function R(c){let l,o,m,u,f;return o=new G({props:{item:c[7]}}),{c(){l=E("div"),W(o.$$.fragment),m=I(),this.h()},l(r){l=D(r,"DIV",{class:!0,id:!0,style:!0});var n=V(l);j(o.$$.fragment,n),m=C(n),n.forEach(d),this.h()},h(){g(l,"class","work svelte-c5kli"),g(l,"id",u=c[7]._id),q(l,"background-color",c[7].backgroundColor)},m(r,n){v(r,l,n),B(o,l,null),F(l,m),f=!0},p(r,n){const _={};n&1&&(_.item=r[7]),o.$set(_),(!f||n&1&&u!==(u=r[7]._id))&&g(l,"id",u),(!f||n&1)&&q(l,"background-color",r[7].backgroundColor)},i(r){f||(h(o.$$.fragment,r),f=!0)},o(r){p(o.$$.fragment,r),f=!1},d(r){r&&d(l),M(o)}}}function A(c){let l,o,m,u,f;return o=new G({props:{item:c[4]}}),{c(){l=E("div"),W(o.$$.fragment),m=I(),this.h()},l(r){l=D(r,"DIV",{class:!0,id:!0,style:!0});var n=V(l);j(o.$$.fragment,n),m=C(n),n.forEach(d),this.h()},h(){g(l,"class","work svelte-c5kli"),g(l,"id",u=c[4]._id),q(l,"background-color",c[4].backgroundColor)},m(r,n){v(r,l,n),B(o,l,null),F(l,m),f=!0},p(r,n){const _={};n&2&&(_.item=r[4]),o.$set(_),(!f||n&2&&u!==(u=r[4]._id))&&g(l,"id",u),(!f||n&2)&&q(l,"background-color",r[4].backgroundColor)},i(r){f||(h(o.$$.fragment,r),f=!0)},o(r){p(o.$$.fragment,r),f=!1},d(r){r&&d(l),M(o)}}}function Y(c){let l,o,m,u,f,r,n,_,y;o=new U({props:{page:"work"}}),u=new X({});let w=c[0],s=[];for(let e=0;e<w.length;e+=1)s[e]=R(K(c,w,e));const L=e=>p(s[e],1,1,()=>{s[e]=null});let b=c[1],a=[];for(let e=0;e<b.length;e+=1)a[e]=A(J(c,b,e));const N=e=>p(a[e],1,1,()=>{a[e]=null});return{c(){l=I(),W(o.$$.fragment),m=I(),W(u.$$.fragment),f=I(),r=E("div");for(let e=0;e<s.length;e+=1)s[e].c();n=I(),_=E("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){T('[data-svelte="svelte-1m8hdvu"]',document.head).forEach(d),l=C(e),j(o.$$.fragment,e),m=C(e),j(u.$$.fragment,e),f=C(e),r=D(e,"DIV",{class:!0,id:!0});var t=V(r);for(let $=0;$<s.length;$+=1)s[$].l(t);t.forEach(d),n=C(e),_=D(e,"DIV",{class:!0,id:!0});var k=V(_);for(let $=0;$<a.length;$+=1)a[$].l(k);k.forEach(d),this.h()},h(){document.title="Work",g(r,"class","work-container svelte-c5kli"),g(r,"id","web"),g(_,"class","work-container svelte-c5kli"),g(_,"id","ios")},m(e,i){v(e,l,i),B(o,e,i),v(e,m,i),B(u,e,i),v(e,f,i),v(e,r,i);for(let t=0;t<s.length;t+=1)s[t].m(r,null);v(e,n,i),v(e,_,i);for(let t=0;t<a.length;t+=1)a[t].m(_,null);y=!0},p(e,[i]){if(i&1){w=e[0];let t;for(t=0;t<w.length;t+=1){const k=K(e,w,t);s[t]?(s[t].p(k,i),h(s[t],1)):(s[t]=R(k),s[t].c(),h(s[t],1),s[t].m(r,null))}for(H(),t=w.length;t<s.length;t+=1)L(t);S()}if(i&2){b=e[1];let t;for(t=0;t<b.length;t+=1){const k=J(e,b,t);a[t]?(a[t].p(k,i),h(a[t],1)):(a[t]=A(k),a[t].c(),h(a[t],1),a[t].m(_,null))}for(H(),t=b.length;t<a.length;t+=1)N(t);S()}},i(e){if(!y){h(o.$$.fragment,e),h(u.$$.fragment,e);for(let i=0;i<w.length;i+=1)h(s[i]);for(let i=0;i<b.length;i+=1)h(a[i]);y=!0}},o(e){p(o.$$.fragment,e),p(u.$$.fragment,e),s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)p(s[i]);a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)p(a[i]);y=!1},d(e){e&&d(l),M(o,e),e&&d(m),M(u,e),e&&d(f),e&&d(r),z(s,e),e&&d(n),e&&d(_),z(a,e)}}}async function oe({fetch:c}){const o=await(await c("/todos/project")).json();return{props:{web:o.webItems,ios:o.iosItems}}}function Z(c,l,o){let{web:u}=l,{ios:f}=l,{element:r}=l;return console.log(r),c.$$set=n=>{"web"in n&&o(0,u=n.web),"ios"in n&&o(1,f=n.ios),"element"in n&&o(3,r=n.element)},[u,f,!0,r]}class ne extends O{constructor(l){super(),P(this,l,Z,Y,Q,{prerender:2,web:0,ios:1,element:3})}get prerender(){return this.$$.ctx[2]}}export{ne as default,oe as load};