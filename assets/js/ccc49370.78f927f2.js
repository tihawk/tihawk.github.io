"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3249],{6486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(6540),l=n(53),o=n(1003),r=n(7559),i=n(7131),c=n(6669),s=n(2860),m=n(8168),d=n(1312),u=n(9022);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.A,(0,m.A)({},n,{subLabel:a.createElement(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.A,(0,m.A)({},t,{subLabel:a.createElement(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.e)(),{title:n,description:l,date:r,tags:c,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(o.be,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(6342);function p(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function h(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=h({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function b(e){const t=e.getBoundingClientRect();return t.top===t.bottom?b(e.parentNode):t}function E(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>b(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function L(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,v.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function H(e){const t=(0,a.useRef)(void 0),n=L();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=E(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function C(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(C,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const N=a.memo(C);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:i,...c}=e;const s=(0,v.p)(),d=r??s.tableOfContents.minHeadingLevel,u=i??s.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>h({toc:p(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return H((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u}}),[l,o,d,u])),a.createElement(N,(0,m.A)({toc:g,className:n,linkClassName:l},c))}const _={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},A="table-of-contents__link toc-highlight",k="table-of-contents__link--active";function y(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.A)(_.tableOfContents,"thin-scrollbar",t)},a.createElement(x,(0,m.A)({},n,{linkClassName:A,linkActiveClassName:k})))}function I(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:o}=(0,i.e)(),{nextItem:r,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:v}=d;return a.createElement(c.A,{sidebar:t,toc:!u&&o.length>0?a.createElement(y,{toc:o,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(s.A,null,n),(r||m)&&a.createElement(g,{nextItem:r,prevItem:m}))}function w(e){const t=e.content;return a.createElement(i.i,{content:e.content,isBlogPostPage:!0},a.createElement(o.e3,{className:(0,l.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage)},a.createElement(f,null),a.createElement(I,{sidebar:e.sidebar},a.createElement(t,null))))}}}]);